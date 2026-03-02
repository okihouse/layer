/// <reference types="node" />
/// <reference types="react" />
/// <reference types="react-dom" />

declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'production' | 'test';
    readonly PUBLIC_URL: string;
    readonly URL: string;
  }
}

declare module '*.avif' {
  const src: string;
  export default src;
}

declare module '*.bmp' {
  const src: string;
  export default src;
}

declare module '*.gif' {
  const src: string;
  export default src;
}

declare module '*.jpg' {
  const src: string;
  export default src;
}

declare module '*.jpeg' {
  const src: string;
  export default src;
}

declare module '*.png' {
  const src: string;
  export default src;
}

declare module '*.webp' {
    const src: string;
    export default src;
}

declare module '*.svg' {
  import * as React from 'react';

  export const ReactComponent: React.FunctionComponent<React.SVGProps<
    SVGSVGElement
  > & { title?: string }>;

  const src: string;
  export default src;
}

declare module '*.module.css' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module '*.module.scss' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module '*.module.sass' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare const gtag: (event?: string, conversion?: string, args?: any) => void
declare const fbq: any
declare const kakaoPixel: any
declare const karrotPixel: any

type DataLayerEvent = {
    // GTM에서 이벤트를 구분하는 가장 흔한 키
    event: string; 
    // 그 외 사용자 정의 키는 유연하게 처리하기 위해 인덱스 시그니처를 사용합니다.
    [key: string]: any;
};

// window 객체에 dataLayer 속성을 추가합니다.
interface Window {
    // dataLayer는 DataLayerEvent 객체들의 배열이며, 초기에는 빈 배열일 수 있습니다.
    dataLayer: DataLayerEvent[];
}

// 또한, GTM 코드를 안전하게 사용하기 위해 dataLayer가 전역적으로 
// 존재함을 명시하는 전역 변수 선언도 추가합니다.
declare const dataLayer: DataLayerEvent[];