import { Col, Row, Space, Typography } from 'antd'
import { FunctionComponent, useEffect } from 'react'
import { Image1, Image2, Image3, Image4, Image5, Slide1, Slide2, Slide3, Slide4 } from '../assets'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/pagination'
import { PrivacyTermDrawer } from '../drawer/PrivacyTermDrawer'
import { ThreePartyTermDrawer } from '../drawer/ThreePartyTermDrawer'

export const Home: FunctionComponent = () => {
    const slides = [Slide1, Slide2, Slide3, Slide4]

    useEffect(() => {
    }, [])

    return (
        <Row
            justify={'center'}
            align={'middle'}
            style={{
                width: 520,
                margin: '0 auto',
                height: window.innerHeight,
                backgroundColor: '#F6F1E8',
            }}
        >
            <Col span={24} style={{ textAlign: 'center' }}>
                <img
                    src={Image1}
                    alt={'이미지1'}
                    style={{ width: '100%' }}
                />
            </Col>
            <Col span={24} style={{ textAlign: 'center' }}>
                <img
                    src={Image2}
                    alt={'이미지2'}
                    style={{ width: '100%' }}
                />
            </Col>
            <Col span={24} style={{ textAlign: 'center' }}>
                <img
                    src={Image3}
                    alt={'이미지3'}
                    style={{ width: '100%' }}
                />
            </Col>
            <Col span={24} style={{ textAlign: 'center' }}>
                <img
                    src={Image4}
                    alt={'이미지4'}
                    style={{ width: '100%' }}
                />
            </Col>
            <Col span={24} style={{ textAlign: 'center', backgroundColor: '#F6F1E8', paddingBottom: 64 }}>
                <style>{`
                    .swiper-pagination-bullet {
                        width: 12px;
                        height: 12px;
                        background: #D6CCC2;      /* 비활성 상태 색상 */
                        opacity: 1;
                    }
                    .swiper-pagination-bullet-active {
                        width: 12px;           /* 강조될 때 가로로 길게 (선택사항) */
                        border-radius: 6px;    /* 둥근 사각형 형태 */
                        background: #2A1F1B;   /* 활성 상태 강조 색상 (파란색 예시) */
                        transition: all 0.3s;  /* 부드러운 전환 효과 */
                    }
                `}</style>
                <Swiper
                    modules={[Autoplay, Pagination]}
                    slidesPerView={2}          // 한 번에 2개 노출
                    slidesPerGroup={1}         // 한 번에 1개씩 넘기기
                    spaceBetween={0}          // 슬라이드 사이 간격 (px)
                    loop={true}                // 무한 루프 (권장)
                    autoplay={{
                        delay: 2500,             // 2.5초마다 전환
                        disableOnInteraction: false, // 사용자 조작 후에도 자동 재생 유지
                    }}
                    pagination={{
                        clickable: true,         // 클릭 가능하게 설정
                        dynamicBullets: false,   // 4개 고정을 위해 false (기본값)
                    }}
                    style={{ paddingBottom: '40px' }}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 20
                        },
                        480: {
                            slidesPerView: 1,
                            spaceBetween: 0
                        },
                        670: {
                            slidesPerView: 2,
                            spaceBetween: 0
                        },
                        980: {
                            slidesPerView: 2,
                            spaceBetween: 0
                        },
                        1501: {
                            slidesPerView: 2,
                            spaceBetween: 0
                        }
                    }}
                >
                    {slides.map((r, idx: number) => {
                        return (
                            <SwiperSlide key={idx}>
                                <img
                                    src={r}
                                    alt={`movie image ${idx}`}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        objectPosition: 'center',
                                    }}
                                />
                            </SwiperSlide>
                        )
                    })}
                </Swiper>

            </Col>
            <Col span={24} style={{ textAlign: 'center' }}>
                <img
                    src={Image5}
                    alt={'이미지5'}
                    style={{ width: '100%' }}
                />
            </Col>
            <Col span={24} style={{ textAlign: 'center' }}>
                <PrivacyTermDrawer
                    title={'개인정보처리 약관'}
                    onClosed={() => {
                        // setPrivacyTerm(null)
                    }}
                />
                <ThreePartyTermDrawer
                    title={'제3자 제공 약관'}
                    onClosed={() => {
                        // setThreePartyTerm(null)
                    }}
                />
            </Col>
        </Row>
    )
}