import { DownOutlined } from '@ant-design/icons'
import { Collapse, Divider, Tag, Typography } from 'antd'
import { FunctionComponent, useEffect } from 'react'
import styled from 'styled-components'

const { Text } = Typography

// 스타일 정의 (이미지의 베이지톤 배경과 카드 형태 구현)
const StyledCollapse = styled(Collapse)`
  background-color: #f5f2ed !important; /* 전체 배경색 */
  border: none !important;

  .ant-collapse-item {
    border-bottom: none !important;
  }

  .ant-collapse-header {
    align-items: center !important;
    padding: 12px 16px !important;
  }

  .ant-collapse-content-box {
    padding: 0 16px 16px 16px !important;
  }
`;

const BranchCard = styled.div`
  background-color: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`;

const BranchItem = styled.div`
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

const VerticalBar = styled.span`
  color: #8c8c8c;
  font-weight: bold;
  margin-right: 8px;
`;

// 데이터 타입 정의
interface BranchInfo {
    id: number;
    name: string;
    address: string;
    tel?: string;
    fax?: string;
}

const branches: { name: string, branches: BranchInfo[] }[] = [
    {
        name: '서울',
        branches: [
            {
                id: 1,
                name: '서울(신사)',
                address: '서울시 서초구 강남대로 623, 우일빌딩 10층',
                tel: '02-515-0080',
                fax: '02-6455-0492',
            },
            {
                id: 2,
                name: '서울(정동)',
                address: '서울시 중구 정동길 3, 경남신문사 본관 3층',
                tel: '02-2088-7355',
                fax: '070-7543-8355',
            },
            {
                id: 3,
                name: '의정부',
                address: '경기도 의정부시 녹양로 18번길 35-18',
                tel: '031-826-1424',
                fax: '031-826-8773',
            },
        ]
    },
    {
        name: '강원',
        branches: [
            {
                id: 1,
                name: '강릉',
                address: '강원도 강릉시 경포로 41, 4층',
                tel: '033-647-0450',
                fax: '033-647-0452',
            },
            {
                id: 2,
                name: '삼척',
                address: '강원도 삼척시 사대길 59, 지원빌딩 203호',
                tel: '033-574-0450',
                fax: '033-574-0455',
            },
        ]
    },
    {
        name: '전라',
        branches: [
            {
                id: 1,
                name: '광주',
                address: '광주시 서구 상무중앙로 114, 랜드피아 214호',
                tel: '062-430-1000',
                fax: '062-430-1004',
            },
        ]
    },
    {
        name: '경상',
        branches: [
            {
                id: 1,
                name: '창원',
                address: '경상남도 창원시 성산구 창이대로689번길 12, 현승빌딩 5층',
                tel: '055-275-0400',
            },
            {
                id: 2,
                name: '울산',
                address: '울산시 남구 삼산로35번길 17, 2층',
            },
        ]
    },
    {
        name: '충청',
        branches: [
            {
                id: 1,
                name: '대전',
                address: '대전시 서구 둔산로 56, 한화생명 둔산사옥 4층',
                tel: '042-483-2774',
            },
        ]
    },
]

export const Branch: FunctionComponent = () => {
    useEffect(() => {
    }, [])

    const renderHeader = (name: string, count: number) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{
                fontSize: '18px',
                fontWeight: 'bold',
                paddingBottom: '2px'
            }}>
                {name}
            </span>
            <Tag bordered={false} style={{ backgroundColor: '#e8e2d9', color: '#8c7e6a', borderRadius: '4px' }}>
                {count}개 지점
            </Tag>
        </div>
    )

    return (
        <StyledCollapse
            defaultActiveKey={['1']}
            expandIcon={({ isActive }) => <DownOutlined rotate={isActive ? 180 : 0} />}
            expandIconPosition="end"
            ghost
        >
            {branches.map((b, index: number) => {
                return (
                    <Collapse.Panel header={renderHeader(b.name, b.branches.length)} key={`${index + 1}`}>
                        <BranchCard>
                            {b.branches.map((branch, idx: number) => (
                                <BranchItem key={branch.id}>
                                    <div style={{ marginBottom: '8px' }}>
                                        <VerticalBar>|</VerticalBar>
                                        <Text strong style={{ fontSize: '18px' }}>{branch.name}</Text>
                                    </div>

                                    <div style={{ paddingLeft: '14px' }}>
                                        <div style={{ marginBottom: '4px' }}>
                                            <Text type="secondary">{branch.address}</Text>
                                        </div>
                                        <div>
                                            <Text type="secondary" style={{ marginRight: '15px' }}>
                                                <span style={{ fontSize: '12px', fontWeight: 'bold' }}>T.</span> {branch.tel}
                                            </Text>
                                            <Text type="secondary">
                                                <span style={{ fontSize: '12px', fontWeight: 'bold' }}>F.</span> {branch.fax}
                                            </Text>
                                        </div>
                                    </div>
                                    {b.branches.length - 1 > idx && (
                                        <Divider style={{ margin: '20px 0' }} />
                                    )}
                                </BranchItem>
                            ))}
                        </BranchCard>
                    </Collapse.Panel>
                )
            })}
        </StyledCollapse>
    )
}