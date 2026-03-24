import { Button, Checkbox, Col, Flex, Form, Input, message, Row, Select, Typography } from 'antd'
import { FunctionComponent, useEffect, useRef, useState } from 'react'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Image1, Image10, Image11, Image2, Image3, Image4, Image5, Image6, Image7, Image8, Image9, Slide1, Slide2, Slide3, Slide4, SubmitButton } from '../assets'
import { SmsService } from '../services/SmsService'

import { useForm } from 'antd/es/form/Form'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/pagination'
import { MarketingDrawer } from '../drawer/MarketingDrawer'
import { PrivacyTermDrawer } from '../drawer/PrivacyTermDrawer'
import { ThreePartyTermDrawer } from '../drawer/ThreePartyTermDrawer'
import { Branch } from './component/Branch'
import { Consulting } from './component/Consulting'

export const Home: FunctionComponent = () => {
    const [privacy, setPrivacy] = useState<boolean>(false)
    const [marketing, setMarketing] = useState<boolean>(false)
    const [thirdparty, setThirdparty] = useState<boolean>(false)
    const [type, setType] = useState<'파산' | '개인 회생' | null>('개인 회생')
    const slides = [Slide1, Slide2, Slide3, Slide4]

    // 1. 부모 컨테이너를 참조하기 위한 Ref
    const containerRef = useRef<HTMLDivElement>(null);
    const [messageApi, contextHolder] = message.useMessage()

    message.config({
        getContainer: () => containerRef.current || document.body,
    })

    const [form] = useForm()
    const [loading, setLoading] = useState(false)

    const handleSubmit = async () => {
        try {
            const values = await form.validateFields()
            if (!type) {
                messageApi.error('상담 분야를 선택해 주세요.')
                return
            }
            if (!values.privacy) {
                messageApi.error('개인정보 처리방침에 동의해 주세요.')
                return
            }
            if (!values.marketing) {
                messageApi.error('마케팅 정보 수신에 동의해 주세요.')
                return
            }
            if (!values.thirdparty) {
                messageApi.error('제3자 정보 제공에 동의해 주세요.')
                return
            }
            setLoading(true)
            const msg = `[상담신청] 이름: ${values.name}, 연락처: ${values.phone}, 분야: ${type}, 채무금액: ${values.budget}`
            await SmsService.send('01090491492', msg)
            messageApi.open({
                content: (
                    <div style={{ maxWidth: 520, minWidth: 375, textAlign: 'left', borderBlock: '1px solid #fff' }}>
                        <div style={{ paddingInline: 16, paddingBlock: 12 }}>
                            <div style={{ fontSize: '16px', fontWeight: 500, color: '#CFC4BA', textAlign: 'center' }}>
                                상담 신청이 완료되었습니다!
                            </div>
                        </div>
                    </div>
                ),
            })
            form.resetFields()
        } catch (err: any) {
            if (err?.errorFields) return // 유효성 검사 실패는 antd가 처리
            messageApi.error('전송 중 오류가 발생했습니다. 다시 시도해 주세요.')
        } finally {
            setLoading(false)
        }
    }

    const showNotice = () => {
        messageApi.open({
            content: (
                <div style={{ maxWidth: 520, minWidth: 375, textAlign: 'left', borderBlock: '1px solid #fff' }}>
                    <div style={{ paddingInline: 16, paddingBlock: 12 }}>
                        <div style={{ fontSize: '16px', fontWeight: 500, marginBottom: '8px', color: '#CFC4BA' }}>
                            보다 깊이 있는 상담을 위해<br />
                            하루 최대 5건으로 제한하여 진행합니다.
                        </div>
                        <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#CFC4BA' }}>
                            금일 5건 중 3건 접수
                        </div>
                    </div>
                </div>
            ),
            duration: 4, // 3초 후 자동으로 사라짐
            style: {
                marginTop: 24,
            },
            icon: <span />,
        });
    };

    useEffect(() => {
        showNotice()
    }, [])

    return (
        <Row
            ref={containerRef}
            justify={'center'}
            align={'middle'}
            style={{
                maxWidth: 520,
                margin: '0 auto',
                height: window.innerHeight,
                backgroundColor: '#F6F1E8',
            }}
        >
            {contextHolder}
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
                    style={{ paddingBottom: '40px', backgroundColor: '#F6F1E8' }}
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
                                // type={type === '개인 회생' ? 'primary' : 'default'}
                                style={{
                                    height: 48,
                                    borderRadius: 8,
                                    backgroundColor: type === '개인 회생' ? '#2A1F1B' : undefined,
                                    color: type === '개인 회생' ? '#fff' : undefined,
                                }}
                                onClick={() => {
                                    setType('개인 회생')
                                }}
                            >
                                {'개인 회생'}
                            </Button>
                            <Button
                                block
                                size='large'
                                // type={type === '파산' ? 'primary' : 'default'}
                                style={{
                                    height: 48,
                                    borderRadius: 8,
                                    backgroundColor: type === '파산' ? '#2A1F1B' : undefined,
                                    color: type === '파산' ? '#fff' : undefined,
                                }}
                                onClick={() => {
                                    setType('파산')
                                }}
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
                            name={'privacy'}
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
                            name={'marketing'}
                            initialValue={true}
                            valuePropName="checked"
                            style={{ margin: 0, }}
                            rules={[
                                {
                                    validator: (_, value) => value ? Promise.resolve() : Promise.reject(new Error('마케팅 수신에 동의 해주세요.')),
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
                            name={'thirdparty'}
                            initialValue={true}
                            valuePropName="checked"
                            style={{ margin: 0, }}
                            rules={[
                                {
                                    validator: (_, value) => value ? Promise.resolve() : Promise.reject(new Error('제3자 제공 및 활용 동의 해주세요.')),
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
                    <a onClick={handleSubmit} style={{ width: '100%', opacity: loading ? 0.6 : 1, cursor: loading ? 'not-allowed' : 'pointer' }}>
                        <img
                            src={SubmitButton}
                            alt={'SubmitButton'}
                            style={{ width: '100%' }}
                        />
                    </a>
                </Flex>
            </Col>
            <Col span={24} style={{ textAlign: 'center' }}>
                <a href='tel:15775469'>
                    <img
                        src={Image6}
                        alt={'이미지6'}
                        style={{ width: '100%' }}
                    />
                </a>
            </Col>
            <Col span={24} style={{ paddingBottom: 64, backgroundColor: '#F3EEE8', }}>
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
            <Col span={24} style={{ textAlign: 'center', }}>
                <img
                    src={Image10}
                    alt={'이미지10'}
                    style={{ width: '100%' }}
                />
                <Consulting />
            </Col>
            <Col span={24} style={{ textAlign: 'center' }}>
                <img
                    src={Image11}
                    alt={'이미지11'}
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