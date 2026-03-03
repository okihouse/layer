import { Col, Drawer, Row } from "antd"
import { FunctionComponent } from "react"
import { Utilities } from "../utils/Utilities"

interface IProps {
    title: string
    onClosed: () => void
}

export const ThreePartyTermDrawer: FunctionComponent<IProps> = (props) => {
    const { title, onClosed } = props

    return (
        <Drawer
            title={title}
            open={title != null}
            width={Utilities.isMobile() ? "100%" : "40%"}
            destroyOnHidden={true}
            onClose={onClosed}
            styles={{
                body: {
                    padding: 12,
                }
            }}
        >
            <style>
                {`
                    #terms .tit {margin-bottom:30px; padding:25px 0; font-size:30px; font-weight:bold; letter-spacing:-2px; background:#ededed; text-align:center;}
                    #terms h3 {margin:20px 0; font-size:24px; font-weight:bold; letter-spacing:-1px;}
                    #terms p {margin-bottom:10px; font-size:16px; line-height:26px; color:#222; letter-spacing:-0.5px; word-break:keep-all;}
                    #terms ul.box {margin:20px 0; padding:16px; border:5px solid #eee; box-sizing:border-box;}
                    #terms ul.box li {font-size:15px; color:#6f6f6f; line-height:28px; letter-spacing:-0.5px;}
                    table {width:100%; border-collapse:collapse; margin:10px 0 16px 0; font-size:15px;}
                    th, td {border:1px solid #e9ecef; padding:10px; vertical-align:top;}
                    th {background:#fafafa; text-align:left;}
                    .note {font-size:14px; color:#6f6f6f;}
                `}
            </style>

            <Row gutter={[8, 8]} id="terms">
                <Col span={24}>
                    <h3>개인정보의 제3자 제공</h3>
                    <p>회사는 수집한 개인정보를 이용목적 내에서만 처리하며, 정보 주체의 동의, 법률의 특별한 규정이 있는 경우에만 개인정보를 제3자에게 제공합니다. 회사는 아래와 같이 개인정보를 제3자에게 제공하고 있습니다.</p>
                    <h3>· 제공받는 자의 개인정보 이용목적</h3>
                    <p>1. 고객을 대상으로 서비스 상담 응대 및 판매</p>
                    <p>2. 마케팅 및 광고에 활용 : 신규 서비스(제품) 개발 및 특화, 이벤트 등 광고성 정보 전달, 인구통계학적 특성에 따른 서비스 제공 및 광고 게재, 접속 빈도 파악 또는 회원의 서비스 이용에 대한 통계</p><p>
                    </p><p className="bold">· 제공하는 개인정보 항목 : 이름, 연락처, 나이, 기타 문의사항· 성별제공받는 자의 보유․이용기간 : 동의일로부터 회원 탈퇴 혹은 제3자 제공 동의 철회 시까지 보유·이용합니다.</p>
                    <p>※ 이용자는 제3자 개인정보 제공에 대한 동의를 거부할 권리가 있으며, 동의를 거부할 경우 서비스 제공에 제한이 있을 수 있습니다.</p>
                    <p>※ 이용자는 언제든지 동의를 철회하거나 마케팅 목적으로 연락하는 것을 중지하도록 당사에 요청할 수 있습니다.</p>
                    <p>※ 상기 내용이 변동되는 경우 당사의 인터넷 홈페이지 개인정보처리방침을 통해 그 내용을 공시합니다.</p>
                </Col>
            </Row>
        </Drawer>
    )
}