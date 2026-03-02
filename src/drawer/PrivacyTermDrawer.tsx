import { Col, Drawer, Row } from "antd"
import { FunctionComponent, useState } from "react"
import { Utilities } from "../utils/Utilities"

interface IProps {
    id?: string
    title: string
    onClosed: () => void
}

export const PrivacyTermDrawer: FunctionComponent<IProps> = (props) => {
    const { id, title, onClosed } = props
    const [content, setContent] = useState<string>()

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
            <Row gutter={[8, 8]}>
                <Col span={24}>
                    <div
                        className="ql-editor"
                        dangerouslySetInnerHTML={{ __html: content ?? '' }} />
                </Col>
            </Row>
        </Drawer>
    )
}