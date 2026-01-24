import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    // 나중에 경로 별칭(@) 등을 설정할 때 여기에 추가합니다.
    resolve: {
        alias: {
            // 필요하다면 여기에 alias 추가
        },
    },
    // gray-matter 등 node 라이브러리 사용 시 호환성을 높여주는 설정
    define: {
        // global 변수를 window로 매핑하여 일부 node 라이브러리 에러 방지
        global: 'window',
    },
});