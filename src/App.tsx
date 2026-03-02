import { ConfigProvider } from 'antd'
import 'antd/dist/reset.css'
import locale from 'antd/locale/ko_KR'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import './styles/index.scss'

const App = () => {
    const isProduction = process.env.NODE_ENV === 'production'
    console.log('isProduction', isProduction)

    return (
        <ConfigProvider
            locale={locale}
            theme={{
                token: {
                    colorPrimary: '#575757',
                    borderRadius: 4,
                    colorBgContainer: '#fdfeff',
                },
                components: {
                    Menu: {
                        horizontalLineHeight: '62px',
                        itemSelectedBg: '#e2e2e2'
                    },
                    Tabs: {
                        cardGutter: 6,
                    },
                    Table: {
                        rowHoverBg: '#fffaed',
                        rowExpandedBg: '#fffaed'
                    },
                    Select: {
                        optionSelectedBg: '#e2e2e2',
                    }
                }
            }}
        >
            <BrowserRouter>
                <Routes>
                    <Route path="/static/*" element={null} />
                    <Route path='*' element={<Home />} />
                </Routes>
            </BrowserRouter>
        </ConfigProvider>
    )
}

export default App