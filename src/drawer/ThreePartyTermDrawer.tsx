import { Col, Drawer, Row, Spin } from "antd"
import { FunctionComponent, useEffect, useState } from "react"
import { Errors } from "../contexts/ErrorContext"
import { ConsultingService } from "../services/ConsultingService"
import { Utilities } from "../utils/Utilities"

interface IProps {
    title: string
    onClosed: () => void
}

export const ThreePartyTermDrawer: FunctionComponent<IProps> = (props) => {
    const { title, onClosed } = props

    const [isLoading, setLoading] = useState<boolean>(false)
    const [content, setContent] = useState<string>()

    const detail = async () => {
        setLoading(true)
        const response = await ConsultingService.threePartyTerm()
        if (response.status === 200) {
            setContent(response.data.item)
        } else {
            Errors.AjaxError(response.data)
        }
        setLoading(false)
    }

    useEffect(() => {
        if (title) {
            detail()
        }
    }, [title])

    return (
        <Drawer
            title={title}
            open={title != null}
            width={Utilities.isMobile() ? "100%" : "40%"}
            destroyOnClose={true}
            onClose={onClosed}
            styles={{
                body: {
                    padding: 12,
                }
            }}
        >
            <Spin spinning={isLoading}>
                <Row gutter={[8, 8]}>
                    <Col span={24}>
                        <div
                            className="ql-editor"
                            dangerouslySetInnerHTML={{ __html: content ?? '' }} />
                    </Col>
                </Row>
            </Spin>
        </Drawer>
    )
}