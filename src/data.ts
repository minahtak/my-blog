
import type { ThoughtCard, InterestCell, WebProject, LogEntry, Experience, Language } from './types';
import { loadLogs } from './utils/loadLogs';


export const translations = {
  KO: {
    home: {
      speed: '',
      quote: '"내게 능력 주시는 자 안에서 내가 모든 것을 할 수 있느니라"',
      cta: 'Unlock Log',
      base: 'Current Base',
      moments: 'Fractions',
      aspiration: 'Chutzpah',
      vibe: 'Sharp Logic'
    },
    me: {
      selfDefined: '배우는 중이고, 만드는 중입니다.',
      motto: '생각만 하지 않고, 바로 실험합니다.',
      traces: '탁민아 연대기'
    },
    logs: {
      desc: '파편들.',
      back: 'Back to Log'
    },
    builds: {
      desc: '모호한 아이디어를 실체화하는 즐거움에 대하여'
    }
  },
  EN: {
    home: {
      speed: 'Trying a bit of everything.',
      quote: '"I can do all this through him who gives me strength."',
      cta: 'Unlock Log',
      base: 'Current Base',
      moments: 'Fractions',
      aspiration: 'Chutzpah',
      vibe: 'Sharp Logic'
    },
    me: {
      selfDefined: 'Learning, and building.',
      motto: 'Less thinking, more experimenting.',
      traces: 'Small failures and grand experiments form the concrete foundation of tomorrow.'
    },
    logs: {
      desc: 'Fragments.',
      back: 'Back to Log'
    },
    builds: {
      desc: 'On the joy of turning vague ideas into something real.'
    }
  }

};

import iksuLogo from '../src/assets/project1.png';

export const webProjects: WebProject[] = [
  {
    id: 'p1',
    title: { KO: 'IKSU | Israel Korean Student Union', EN: 'IKSU | Israel Korean Student Union' },
    description: {
      KO: '이스라엘 전역의 한국인 유학생들을 연결하고 학업을 지원하는 웹사이트를 제작중입니다',
      EN: 'A digital network spanning Israel. An engine moving from survival to solidarity.'
    },
    tech: ['Community System', 'Branding', 'Solidarity'],
    link: '#',
    image: 'https://i.pinimg.com/736x/ab/6a/35/ab6a35c42836a450180d9f66255b64f2.jpg',
    color: '#6366f1',
    type: 'Web'
  },
  {
    id: 'p2',
    title: { KO: 'Minah Tak.com', EN: 'Minah Tak.com' },
    description: {
      KO: '정체성을 건설하는 과정을 그리드로 담아낸 시각적 아카이브입니다',
      EN: 'A visual archive capturing the process of building identity in an editorial grid.'
    },
    tech: ['React', 'Motion Design', 'Narrative'],
    link: 'https://minahtak.com',
    image: 'https://i.pinimg.com/736x/a6/28/18/a62818d384abebd5405ead947cfbf90e.jpg',
    color: '#f43f5e',
    type: 'Web'
  },
  {
    id: 'p3',
    title: { KO: 'HomeLink', EN: 'HomeLink' },
    description: {
      KO: '스프링 프레임워크 프로젝트로 가족 구성원들의 소통과 협업을 돕는 가족 관리 플렛폼을 제작했습니다',
      EN: 'Developed a family management platform using the Spring Framework to facilitate communication and collaboration among family members'
    },
    tech: ['Java', 'JavaScript', 'HTML', 'CSS'],
    link: 'https://github.com/minahtak/HomeLink',
    image: 'https://i.pinimg.com/736x/24/3c/f8/243cf8acb714be44a0e7494c4a0f9144.jpg',
    color: '#f43f5e',
    type: 'Web'
  },
  {
    id: 'y1',
    title: { KO: 'Content Strategist', EN: 'Content Strategist' },
    description: {
      KO: '유튜브 누적 조회수 약 240만 회',
      EN: 'Approximately 2.4 million cumulative views'
    },
    tech: ['Viral Strategy', 'Storytelling', 'Business'],
    link: 'https://www.youtube.com/@maddang_x',
    image: 'https://i.pinimg.com/736x/c8/1b/f2/c81bf2bc106032bd823cf8efba5a5f8a.jpg',
    color: '#fbbf24',
    type: 'Social'
  }
];

export const experiences: Experience[] = [
  {
    id: 'e1',
    title: { KO: 'YouTube Creator', EN: 'YouTube Creator' },
    company: { KO: 'Personal Channel', EN: 'Personal Channel' },
    period: 'Apr 2025 – Present',
    description: {
      KO: '이스라엘에서의 일상을 브이로그로 공유하며 1.34만 구독자와 소통. 한 영상이 200만 조회수를 기록했습니다. Premiere Pro와 Photoshop으로 모든 제작 과정을 독립적으로 진행하며 스토리텔링과 사람들이 클릭하게 만드는 요소를 학습 중입니다.',
      EN: 'Creating vlog-style videos sharing life in Israel as a Korean student with 13.4k subscribers. One video hit 2M views. Producing, editing, and designing everything independently using Premiere Pro and Photoshop—learning storytelling, pacing, and what makes people click.'
    },
    tags: ['Content', 'Storytelling', 'Visual Design']
  },
  {
    id: 'e2',
    title: { KO: 'Mechina Program', EN: 'Mechina Program' },
    company: { KO: 'Hebrew University', EN: 'Hebrew University' },
    period: 'Feb 2025 – Present',
    location: { KO: 'Jerusalem', EN: 'Jerusalem' },
    description: {
      KO: '비즈니스 트랙, 국제 예비 프로그램. 새로운 국가, 언어, 학문 시스템 속에서 비즈니스와 경제를 공부합니다.',
      EN: 'Business Track, International Preparatory Program. Studying business and economics while navigating life in a new country, language, and academic system.'
    },
    tags: ['Business', 'Economics', 'Cross-cultural']
  },
  {
    id: 'e3',
    title: { KO: 'Sandwich Artist', EN: 'Sandwich Artist' },
    company: { KO: 'Subway', EN: 'Subway' },
    period: 'Nov 2024 – Feb 2025',
    location: { KO: 'Korea', EN: 'Korea' },
    description: {
      KO: '오픈과 마감 업무, 재료 준비, 주방 관리를 담당. 속도, 책임감, 압박 속 멀티태스킹 능력을 키웠습니다.',
      EN: 'Handled opening/closing shifts, ingredient prep, and kitchen management. Built speed, responsibility, and multitasking under pressure.'
    },
    tags: ['Operations', 'Multitasking', 'Service']
  },
  {
    id: 'e4',
    title: { KO: '대형 베이커리 카페', EN: 'Barista' },
    company: { KO: 'Large Bakery Cafe', EN: 'Large Bakery Cafe' },
    period: 'Aug 2024 – Nov 2024',
    location: { KO: 'Korea', EN: 'Korea' },
    description: {
      KO: '3층 규모 프리미엄 카페에서 근무하며 전체 메뉴를 암기하고 대량 서비스를 미소로 응답하는 방법을 배웠습니다.',
      EN: 'Worked at a three-story premium cafe, memorized the entire menu, and handled high-volume service with a smile.'
    },
    tags: ['Customer Service', 'High-volume', 'Professionalism']
  },
  {
    id: 'e5',
    title: { KO: 'Java & Spring Backend Development Course', EN: 'Java & Spring Backend Development Course' },
    company: { KO: 'Full-Stack Web Development Training', EN: 'Full-Stack Web Development Training' },
    period: 'Feb 2024 – Aug 2024',
    description: {
      KO: 'Java와 Spring Framework 중심 과정 수료. 프로젝트를 진행하고 디버깅하며 기술적 아이디어를 명확하게 전달하는 법을 배웠습니다.',
      EN: 'Completed a course focused on Java and Spring Framework. Worked on projects, debugged, learned to communicate technical ideas clearly.'
    },
    tags: ['Backend', 'Java', 'Team Collaboration']
  },
  {
    id: 'e6',
    title: { KO: 'Language Study in the UK', EN: 'Language Study in the UK' },
    company: { KO: 'Six-Month English Immersion Program', EN: 'Six-Month English Immersion Program' },
    period: '2023',
    description: {
      KO: '6개월간 영어를 향상시키며 다문화 환경을 탐색. 다양한 억양, 문화, 대화 스타일을 넘나들며 소통하는 법을 배웠습니다.',
      EN: 'Spent six months improving my English and navigating multicultural environments. Learned to communicate across different accents, cultures, and conversational styles. Grew more confident asking questions and less afraid of sounding imperfect.'
    },
    tags: ['Language', 'Cross-cultural', 'Communication']
  },
  {
    id: 'e7',
    title: { KO: 'Library Assistant', EN: 'Library Assistant' },
    company: { KO: 'City Library', EN: 'City Library' },
    period: 'Aug 2022 – Nov 2022',
    location: { KO: 'Korea', EN: 'Korea' },
    description: {
      KO: '이벤트 기획 지원, 컬렉션 관리, 포스터 디자인, 소셜 미디어 콘텐츠 제작, 디지털 마케팅을 통한 이벤트 홍보. 창의적인 아이디어를 생성하고 시각적으로 전달하는 법을 배웠습니다.',
      EN: 'Assisted with event planning, managed collections, designed posters, created social media content, and promoted events through digital marketing. Learned how to generate creative ideas and communicate them visually.'
    },
    tags: ['Marketing', 'Design', 'Events']
  },
  {
    id: 'e8',
    title: { KO: 'Certifications & Training', EN: 'Certifications & Training' },
    company: { KO: 'Various Programs', EN: 'Various Programs' },
    period: '2020 – 2021',
    description: {
      KO: 'Photoshop 그래픽 디자인 과정 (GTQ 자격증, 2021) • 소프트웨어 교육 강사 자격증 (2021) • 드론 강사 자격증 (2020) • ITQ 컴퓨터 활용능력 자격증 (2020)',
      EN: 'Photoshop Graphic Design Course (GTQ Certification, 2021) • Software Education Instructor License (2021) • Drone Instructor License (2020) • ITQ Computer Skills Certification (2020). Tried a lot of things. Some stuck, some didn\'t. All taught me something.'
    },
    tags: ['Photoshop', 'Teaching', 'Tech']
  }
];

export const interestCells: InterestCell[] = [
  { name: { KO: '코딩', EN: 'Coding' }, size: 130 },
  { name: { KO: '패션', EN: 'Fashion' }, size: 105 },
  { name: { KO: '여행', EN: 'Travle' }, size: 115 },
  { name: { KO: '통기타', EN: 'Guitar' }, size: 110 },
  { name: { KO: '베이킹', EN: 'Baking' }, size: 120 },
];

export const thoughts: ThoughtCard[] = [
  {
    id: '1',
    category: 'CHUTZPAH',
    content: { KO: '잘 되면 잘 된거고 잘 못 되면 그냥 해보는 거였어~', EN: 'It\'s not just about doing; it\'s about asking until it works.' },
    detail: { KO: '뻔뻔함과 논리 사이의 미묘한 선을 타는 것이 핵심!', EN: 'The key is riding the fine line between audacity and logic.' }
  },
  {
    id: '2',
    category: 'BUILDER',
    content: { KO: '낭비하기엔 청춘이니까!', EN: 'My identity is not a fixed result, but an ongoing project.' },
    detail: { KO: '인생은 한번.', EN: 'Wherever I am, I make the ground I stand on my kingdom.' }
  }
];

// (수정) 함수로 감싸서, 나중에 호출할 때 실행되도록 변경
export const getLogEntries = () => loadLogs();
