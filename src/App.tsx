import React, {useEffect, useState} from 'react';
import './App.css';
import {Layout, Menu, theme} from 'antd';
import BladeTable from "./components/bladeTable"
import RubberTable from "./components/rubberTable";
import PlayerTable from "./components/playerTable";
import './i18n'

const {Header, Content, Footer} = Layout;

const items = [
    {key: 'blade', label: '底板 Blade'},
    {key: 'rubber', label: '胶皮 Rubber'},
    {key: 'player', label: '选手 Player'}
];

function App() {
    useEffect(() => {
        document.title = "乒乓器材王国";
    }, []);
    const [selectedKey, setSelectedKey] = useState('blade');
    const {
        token: {colorBgContainer, borderRadiusLG},
    } = theme.useToken();

    const handleMenuClick = (e: { key: React.SetStateAction<string>; }) => {
        setSelectedKey(e.key);
    };

    const renderContent = () => {
        switch (selectedKey) {
            case 'blade':
                return <BladeTable/>;
            case 'rubber':
                return <RubberTable/>;
            case 'player':
                return <PlayerTable/>;
            default:
                return null;
        }
    };

    return (
        <Layout>
            <Header style={{display: 'flex', alignItems: 'center'}}>
                <div className="demo-logo"/>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['blade']}
                    items={items}
                    onClick={handleMenuClick} // 绑定点击事件
                    style={{flex: 1, minWidth: 0}}
                />
            </Header>
            <Content style={{padding: '0 48px'}}>
                <div
                    style={{
                        background: colorBgContainer,
                        minHeight: 280,
                        padding: 24,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    {renderContent()} {/* 根据 selectedKey 渲染不同内容 */}
                </div>
            </Content>
            <Footer style={{textAlign: 'center'}}>
                乒乓器材王国 TT Equipment Kingdom ©{new Date().getFullYear()} Created by skyskyskyha
            </Footer>
        </Layout>
    );
}

export default App;
