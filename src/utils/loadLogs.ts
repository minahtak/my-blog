import matter from 'gray-matter';
import type { LogEntry } from '../types';

// Astro/Vite에서 텍스트 파일 가져오기
const logFiles = import.meta.glob('../content/logs/*.md', { 
  query: '?raw', 
  import: 'default', 
  eager: true 
});

export function loadLogs(): LogEntry[] {
    const logs: LogEntry[] = [];

    Object.entries(logFiles).forEach(([path, fileContent]) => {
        const contentStr = fileContent as string;

        try {
            // 1. 프론트매터(맨 위 정보)와 본문 분리
            const { data, content: markdown } = matter(contentStr);

            // [핵심 수정] 본문 나누기 로직 강화 🛠️
            // 기존에는 \n---\n 만 찾았지만, 이제는 앞뒤 공백이나 줄바꿈이 좀 달라도
            // '---' 가 있는 줄을 기가 막히게 찾아서 나눕니다.
            const parts = markdown.split(/\n\s*-{3,}\s*\n/);
            
            // 빈 칸이 생길 수 있으므로 내용이 있는 것만 추려냅니다.
            const cleanParts = parts.filter(p => p.trim().length > 0);

            // 첫 번째 덩어리는 한국어, 두 번째 덩어리는 영어로 지정
            let koRaw = cleanParts[0] || '';
            let enRaw = cleanParts[1] || '';

            // [추가 수정] '# 한국어' 또는 '# English' 같은 제목이 본문에 남아있지 않게 삭제
            const koContent = koRaw.replace(/^#\s*한국어\s*/i, '').trim() || data.excerpt_ko || '';
            const enContent = enRaw.replace(/^#\s*English\s*/i, '').trim() || data.excerpt_en || '';

            logs.push({
                id: data.id,
                title: { KO: data.title_ko, EN: data.title_en },
                category: data.category,
                date: data.date,
                location: data.location,
                content: { KO: data.excerpt_ko, EN: data.excerpt_en },
                longContent: { 
                    KO: koContent, 
                    EN: enContent 
                },
                image: data.image
            });
        } catch (e) {
            console.error(`Error parsing markdown file ${path}:`, e);
        }
    });

    // 최신순 정렬
    return logs.sort((a, b) => {
        const dateA = new Date(a.date.replace(/\./g, '-'));
        const dateB = new Date(b.date.replace(/\./g, '-'));
        return dateB.getTime() - dateA.getTime();
    });
}