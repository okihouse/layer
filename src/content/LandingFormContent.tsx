import { Checkbox, Flex, Form, FormInstance, Input, InputNumber, Radio, Select, Typography } from "antd"
import { FunctionComponent, ReactNode, useState } from "react"
import { PrivacyTermDrawer } from "../drawer/PrivacyTermDrawer"
import { ThreePartyTermDrawer } from "../drawer/ThreePartyTermDrawer"
import { LandingModel } from "../model/LandingModel"
import { GenderType } from "../type/GenderType"
import { LandingDbItemType } from "../type/LandingDbItemType"

interface IProps {
    id?: string
    item: LandingModel.ILandingItemModel
    form?: FormInstance<any>
    children?: ReactNode
}

export const LandingFormContent: FunctionComponent<IProps> = (props) => {
    const { id, item, form, children } = props

    const [privacyTerm, setPrivacyTerm] = useState<string | null>()
    const [threePartyTerm, setThreePartyTerm] = useState<string | null>()

    const renderFormItem = (item: LandingModel.IAssignLandignDbItemModel) => {
        const key = `${item?.id}_${item?.label}_${item?.type}`
        const label = item?.label?.trim()
        const required = item?.isRequired

        switch (item?.type) {
            case LandingDbItemType.typography:
                return (
                    <Form.Item
                        key={key}
                        label={label}
                        name={label}
                        rules={[
                            {
                                required: required,
                                message: `${label}을 입력해 주세요!`,
                            },
                        ]}
                    >
                        <Input
                            size='large'
                            placeholder={`${label}을 입력해 주세요!`}
                            style={{ height: 60, fontSize: 24 }}
                        />
                    </Form.Item>
                )
            case LandingDbItemType.username:
                return (
                    <Form.Item
                        key={key}
                        label={label}
                        name={label}
                        rules={[
                            {
                                required: required,
                                message: `이름을 입력해 주세요!`,
                            },
                        ]}
                    >
                        <Input
                            size='large'
                            placeholder={`이름을 입력해 주세요!`}
                            style={{ height: 60, fontSize: 24 }}
                        />
                    </Form.Item>
                )
            case LandingDbItemType.gender:
                return (
                    <Form.Item
                        key={key}
                        label={label}
                        name={label}
                        rules={[
                            {
                                required: required,
                                message: `${label} 정보를 선택해 주세요!`,
                            },
                        ]}
                    >
                        <Radio.Group
                            style={{ height: 60, fontSize: 24 }}
                        >
                            <Radio value={GenderType.female}>여성</Radio>
                            <Radio value={GenderType.male}>남성</Radio>
                        </Radio.Group>
                    </Form.Item>
                )
            case LandingDbItemType.age:
                return (
                    <Form.Item
                        key={key}
                        label={label}
                        name={label}
                        rules={[
                            {
                                required: required,
                                message: `${label}를 입력해 주세요!`,
                            },
                        ]}
                    >
                        <InputNumber
                            min={1}
                            max={100}
                            size='large'
                            addonAfter={'세'}
                            placeholder={`${label}를 입력해 주세요!`}
                            style={{ width: '100%', height: 60, fontSize: 24 }}
                        />
                    </Form.Item>
                )
            case LandingDbItemType.phone:
                return (
                    <Form.Item
                        key={key}
                        label={label}
                        name={'연락처'}
                        className="phone"
                        rules={[
                            {
                                required: required,
                                message: `${label} 정보를 입력해 주세요!`,
                            },
                            // {
                            //     pattern: /^010\d{7,8}$/,
                            //     message: '올바른 휴대폰 번호를 입력하세요',
                            // },
                        ]}
                    >
                        <Input
                            size='large'
                            minLength={11}
                            maxLength={11}
                            inputMode="numeric"
                            pattern="[0-9]*"
                            placeholder={`${label} 정보를 입력해 주세요!`}
                            style={{ width: '100%', height: 60, fontSize: 24 }}
                        />
                    </Form.Item>
                )
            case LandingDbItemType.select:
                return (
                    <Form.Item
                        key={key}
                        label={label}
                        name={label}
                        normalize={(value) => value.trim()}
                        rules={[
                            {
                                required: required,
                                message: `${label} 정보를 입력해 주세요!`,
                            },
                        ]}
                    >
                        <Select
                            style={{ width: '100%', height: 60, fontSize: 24 }}
                            placeholder={`${label} 정보를 선택하세요`}
                        >
                            {item.items?.map((t) => {
                                return (
                                    <Select.Option key={t} value={t}>{t}</Select.Option>
                                )
                            })}
                        </Select>
                    </Form.Item>
                )
            default:
                return null
        }
    }

    return (
        <>
            <Flex justify='center' style={{ marginTop: 24, marginBottom: 24, }}>
                <Form
                    form={form}
                    layout="vertical"
                    className="product"
                    style={{ width: '100%' }}
                >
                    {item?.form?.map((r) => {
                        return (
                            renderFormItem(r)
                        )
                    })}
                    <Flex justify="space-between" align='baseline'>
                        <Form.Item
                            name="privacy"
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
                                setPrivacyTerm('개인정보처리 약관')
                            }}
                        >
                            {'[약관]'}
                        </Typography.Link>
                    </Flex>
                </Form>
            </Flex>
            {children}

            {privacyTerm && (
                <PrivacyTermDrawer
                    id={id}
                    title={privacyTerm}
                    onClosed={() => {
                        setPrivacyTerm(null)
                    }}
                />
            )}

            {threePartyTerm && (
                <ThreePartyTermDrawer
                    title={threePartyTerm}
                    onClosed={() => {
                        setThreePartyTerm(null)
                    }}
                />
            )}
        </>
    )
}