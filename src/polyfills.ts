import { Buffer } from 'buffer';

if (typeof window !== 'undefined') {
  // window를 any 타입으로 단언(Type Assertion)해서 TypeScript 에러 회피
  (window as any).Buffer = Buffer;
  (window as any).global = window;
}