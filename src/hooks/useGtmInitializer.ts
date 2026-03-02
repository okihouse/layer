import { useCallback } from 'react';

/**
 * Google Tag Manager (GTM)을 필요한 시점에 지연(Lazy) 초기화하는 Custom Hook.
 * GTM-ID를 나중에 전달받아 스크립트 태그와 noscript iframe을 DOM에 삽입합니다.
 */
export const useGtmInitializer = () => {

    // GTM 스크립트 태그를 DOM의 <head>에 동적으로 삽입하는 핵심 로직
    const loadGoogleTagManager = useCallback((gtmId: string) => {
        // GTM 코드가 이미 로드되었는지 확인 (중복 방지)
        // if (window.dataLayer && Array.isArray(window.dataLayer) && window.dataLayer.length > 0) {
        //     console.warn(`[GTM] 이미 초기화되었거나 window.dataLayer가 존재합니다. ID: ${gtmId}`);
        //     return;
        // }

        // 1. 기존 GTM 즉시 실행 함수(IIFE) 로직
        (function (w: any, d: any, s: any, l: any, i: any) {
            w[l] = w[l] || [];
            w[l].push({
                'gtm.start': new Date().getTime(),
                event: 'gtm.js'
            });

            const f = d.getElementsByTagName(s)[0],
                j = d.createElement(s) as HTMLScriptElement,
                dl = l !== 'dataLayer' ? '&l=' + l : '';

            j.async = true;
            // GTM ID를 사용하여 소스 URL 완성
            j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;

            // <head>의 첫 번째 스크립트 태그 앞에 삽입
            f.parentNode?.insertBefore(j, f);
        })(window, document, 'script', 'dataLayer', gtmId);

        console.log(`[GTM] 스크립트 태그 삽입 완료: ${gtmId}`);
    }, []);

    // GTM noscript iframe을 <body>의 최상단에 동적으로 삽입
    const insertNoScriptTag = useCallback((gtmId: string) => {
        const iframe = document.createElement('iframe');
        iframe.src = `https://www.googletagmanager.com/ns.html?id=${gtmId}`;
        iframe.height = "0";
        iframe.width = "0";
        iframe.style.cssText = "display:none;visibility:hidden";

        const noscript = document.createElement('noscript');
        noscript.appendChild(iframe);

        // <body>의 최상단에 삽입
        document.body.prepend(noscript);

        console.log(`[GTM] noscript 태그 삽입 완료: ${gtmId}`);
    }, []);

    /**
     * 최종적으로 GTM 초기화를 실행하는 함수.
     * @param gtmId 실제 GTM 컨테이너 ID (예: "GTM-XXXXXX")
     */
    const initializeGTM = useCallback((gtmId: string) => {
        if (!gtmId || gtmId.trim() === '') {
            console.error("[GTM] 유효한 GTM ID가 제공되어야 합니다.");
            return;
        }

        loadGoogleTagManager(gtmId);
        insertNoScriptTag(gtmId);

    }, [loadGoogleTagManager, insertNoScriptTag]);

    // 컴포넌트에게 초기화 함수를 반환합니다.
    return { initializeGTM };
};