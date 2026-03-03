import { Button, Checkbox, Col, Collapse, Divider, Flex, Form, Input, Row, Select, Tag, Typography } from 'antd'
import { FunctionComponent, useEffect, useState } from 'react'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Image1, Image10, Image2, Image3, Image4, Image5, Image6, Image7, Image8, Image9, Slide1, Slide2, Slide3, Slide4, SubmitButton } from '../assets'
import styled from 'styled-components'
import { DownOutlined } from '@ant-design/icons'

import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/pagination'
import { MarketingDrawer } from '../drawer/MarketingDrawer'
import { PrivacyTermDrawer } from '../drawer/PrivacyTermDrawer'
import { ThreePartyTermDrawer } from '../drawer/ThreePartyTermDrawer'
import { useForm } from 'antd/es/form/Form'
import { Branch } from './component/Branch'
const { Text, } = Typography

export const Home: FunctionComponent = () => {
    const [privacy, setPrivacy] = useState<boolean>(false)
    const [marketing, setMarketing] = useState<boolean>(false)
    const [thirdparty, setThirdparty] = useState<boolean>(false)
    const slides = [Slide1, Slide2, Slide3, Slide4]

    const [form] = useForm()

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
            <Col span={24} style={{ backgroundColor: '#FBF7F2', paddingBottom: 82 }}>
                <img
                    src={Image5}
                    alt={'이미지5'}
                    style={{ width: '100%' }}
                />

                <Form
                    form={form}
                    layout="vertical"
                    className="product"
                    style={{ width: '100%', paddingInline: 16 }}
                >
                    <Form.Item
                        label={'이름'}
                        name={'name'}
                        rules={[
                            {
                                required: true,
                                message: `이름을 입력해 주세요!`,
                            },
                        ]}
                    >
                        <Input
                            size='large'
                            placeholder={`이름을 입력해 주세요!`}
                            style={{ height: 50, fontSize: 18, borderRadius: 8 }}
                        />
                    </Form.Item>

                    <Form.Item
                        label={'연락처'}
                        name={'phone'}
                        rules={[
                            {
                                required: true,
                                message: `연락처 정보를 입력해 주세요!`,
                            },
                        ]}
                    >
                        <Input
                            size='large'
                            minLength={11}
                            maxLength={11}
                            inputMode="numeric"
                            pattern="[0-9]*"
                            placeholder={`연락처 정보를 입력해 주세요!`}
                            style={{ width: '100%', height: 50, fontSize: 18, borderRadius: 8 }}
                        />
                    </Form.Item>

                    <Flex vertical gap={10} style={{ marginBottom: 24 }}>
                        <Flex gap={2}>
                            <Typography.Text type='danger'>{'*'}</Typography.Text>
                            <Typography.Text style={{ fontSize: 18 }}>{'상담 분야'}</Typography.Text>
                        </Flex>
                        <Flex gap={10}>
                            <Button
                                block
                                size='large'
                                style={{ height: 48, borderRadius: 8 }}
                            >
                                {'개인 회생'}
                            </Button>
                            <Button
                                block
                                size='large'
                                style={{ height: 48, borderRadius: 8 }}
                            >
                                {'파산'}
                            </Button>
                        </Flex>
                    </Flex>

                    <Form.Item
                        label={'채무 금액'}
                        name={'budget'}
                        style={{ fontSize: 18 }}
                        normalize={(value) => value.trim()}
                        rules={[
                            {
                                required: true,
                                message: `채무 금액 정보를 입력해 주세요!`,
                            },
                        ]}
                    >
                        <Select
                            style={{ width: '100%', height: 50, fontSize: 18, textAlign: 'left' }}
                            placeholder={`채무 금액 정보를 선택하세요`}
                        >
                            <Select.Option value={'2000만원 이하'}>{'2000만원 이하'}</Select.Option>
                            <Select.Option value={'2,000만원 ~ 5,000만원'}>{'2,000만원 ~ 5,000만원'}</Select.Option>
                            <Select.Option value={'5,000만원~1억원'}>{'5,000만원~1억원'}</Select.Option>
                            <Select.Option value={'1억원 이상'}>{'1억원 이상'}</Select.Option>
                        </Select>
                    </Form.Item>

                    <Flex justify="space-between" align='baseline'>
                        <Form.Item
                            initialValue={true}
                            valuePropName="checked"
                            style={{ margin: 0, }}
                            rules={[
                                {
                                    validator: (_, value) => value ? Promise.resolve() : Promise.reject(new Error('개인정보 수집 동의 해주세요.')),
                                },
                            ]}
                        >
                            <Checkbox>
                                [필수] 개인정보 수집 및 활용 동의
                            </Checkbox>
                        </Form.Item>
                        <Typography.Link
                            onClick={() => {
                                setPrivacy(true)
                            }}
                        >
                            {'[약관 보기]'}
                        </Typography.Link>
                    </Flex>

                    <Flex justify="space-between" align='baseline'>
                        <Form.Item
                            initialValue={true}
                            valuePropName="checked"
                            style={{ margin: 0, }}
                            rules={[
                                {
                                    validator: (_, value) => value ? Promise.resolve() : Promise.reject(new Error('개인정보 수집 동의 해주세요.')),
                                },
                            ]}
                        >
                            <Checkbox>
                                [필수] 마케팅 수신 동의
                            </Checkbox>
                        </Form.Item>
                        <Typography.Link
                            onClick={() => {
                                setMarketing(true)
                            }}
                        >
                            {'[약관 보기]'}
                        </Typography.Link>
                    </Flex>

                    <Flex justify="space-between" align='baseline'>
                        <Form.Item
                            initialValue={true}
                            valuePropName="checked"
                            style={{ margin: 0, }}
                            rules={[
                                {
                                    validator: (_, value) => value ? Promise.resolve() : Promise.reject(new Error('개인정보 수집 동의 해주세요.')),
                                },
                            ]}
                        >
                            <Checkbox>
                                [필수] 제3자 제공 및 활용 동의
                            </Checkbox>
                        </Form.Item>
                        <Typography.Link
                            onClick={() => {
                                setThirdparty(true)
                            }}
                        >
                            {'[약관 보기]'}
                        </Typography.Link>
                    </Flex>
                </Form>

                <Flex style={{ paddingInline: 16, marginTop: 42 }}>
                    <a>
                        <img
                            src={SubmitButton}
                            alt={'SubmitButton'}
                            style={{ width: '100%' }}
                        />
                    </a>
                </Flex>
            </Col>
            <Col span={24} style={{ textAlign: 'center' }}>
                <img
                    src={Image6}
                    alt={'이미지6'}
                    style={{ width: '100%' }}
                />
            </Col>
            <Col span={24} style={{ }}>
                <img
                    src={Image7}
                    alt={'이미지7'}
                    style={{ width: '100%' }}
                />

                <Branch />
            </Col>
            <Col span={24} style={{ textAlign: 'center' }}>
                <img
                    src={Image8}
                    alt={'이미지8'}
                    style={{ width: '100%' }}
                />
            </Col>
            <Col span={24} style={{ textAlign: 'center' }}>
                <img
                    src={Image9}
                    alt={'이미지9'}
                    style={{ width: '100%' }}
                />
            </Col>
            <Col span={24} style={{ textAlign: 'center' }}>
                <img
                    src={Image10}
                    alt={'이미지10'}
                    style={{ width: '100%' }}
                />
            </Col>
            <Col span={24} style={{ textAlign: 'center' }}>
                {privacy && (
                    <PrivacyTermDrawer
                        title={'개인정보처리 약관'}
                        onClosed={() => {
                            setPrivacy(false)
                        }}
                    />
                )}

                {thirdparty &&
                    <ThreePartyTermDrawer
                        title={'제3자 제공 약관'}
                        onClosed={() => {
                            setThirdparty(false)
                        }}
                    />
                }

                {marketing && (
                    <MarketingDrawer
                        title='마케팅 수신동의'
                        onClosed={() => {
                            setMarketing(false)
                        }}
                    />
                )}
            </Col>
        </Row>
    )
}