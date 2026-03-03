import { Col, Drawer, Row } from "antd"
import { FunctionComponent } from "react"
import { Utilities } from "../utils/Utilities"

interface IProps {
    title: string
    onClosed: () => void
}

export const MarketingDrawer: FunctionComponent<IProps> = (props) => {
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
                    <div className="tit">
                        <div className="container">마케팅 수신동의</div>
                    </div>
                    <div className="container">

                        <p>본 마케팅수신에 동의하실 경우 개별 광고성 정보 전송 채널(이메일, 문자, App. Push 등)을 통해 다양한 이벤트 안내, 상품 안내 등의 광고성 정보 수신에 대해 동의한 것으로 봅니다.</p>

                        <h3>1. 개인정보의 수집, 이용 목적</h3>
                        <p>회사는 다음의 목적을 위하여 개인정보를 처리합니다. 처리 목적이 변경되는 경우 관련 법령에 따른 필요한 조치를 이행하고 본 방침을 개정하여 고지합니다.</p>
                        <ul className="box">
                            <li>① 상담 접수 및 처리, 본인 확인, 고객관리, 민원 처리</li>
                            <li>② 서비스 제공에 따른 계약 이행 및 정산(필요 시)</li>
                            <li>③ 서비스 품질 개선, 부정 이용 방지 및 보안</li>
                            <li>④ 이벤트·프로모션 등 마케팅 정보 제공(별도의 수신 동의에 따름)</li>
                            <li>⑤ 법령상 의무의 이행 및 분쟁 대응</li>
                        </ul>


                        <h3>2. 수집하려는 개인정보의 항목</h3>
                        <table>
                            <thead><tr><th>수집 시점</th><th>목적</th><th>항목</th></tr></thead>
                            <tbody>
                                <tr><td>상담 신청</td><td>상담 접수·처리 및 본인 확인</td><td>성명, 휴대전화번호</td></tr>
                                <tr><td>마케팅 수신 동의</td><td>이벤트·혜택 안내</td><td>이메일(선택), 휴대전화번호</td></tr>
                                <tr><td>서비스 이용 시 자동 생성</td><td>보안 및 서비스 품질</td><td>접속IP, 쿠키, 접속기록, 기기·브라우저 정보 등</td></tr>
                            </tbody>
                        </table>
                        <p className="note">※ 실제 수집하지 않는 항목(예: 주소록·기기고유번호 등)은 기재/수집하지 않습니다.</p>

                        <h3>3. 개인정보의 보유 및 이용 기간</h3>
                        <p>목적 달성 시 또는 1년</p>

                        <h3>4. 동의 거부권 및 불이익</h3>
                        <p>정보주체는 제3자 제공에 대한 동의를 거부할 권리가 있습니다. 다만, 동의를 거부할 경우 상담 연결이 제한될 수 있습니다.</p>

                        <h3>5. 동의의 철회</h3>
                        <p>정보주체는 언제든지 동의를 철회할 수 있습니다. 철회는 고객센터 등 안내된 연락처를 통해 신청하실 수 있으며, 회사는 지체 없이 조치합니다.</p>

                        <h3>6. 고지</h3>
                        <p>제공받는 자, 제공 목적, 제공 항목, 보유·이용기간 등에 변경이 있는 경우, 회사는 개인정보처리방침의 제3자 제공 항목 및 본 동의서를 통해 내용을 공지·반영합니다.</p>
                    </div>
                </Col>
            </Row>
        </Drawer>
    )
}