import React, {useEffect, useState} from 'react';
import './App.css';
import {Layout, Menu, Table, theme} from 'antd';
import {bladeData} from "./data/bladeData";
import {bladeSchema} from "./data/bladeSchema";
import {rubberData} from "./data/rubberData";
import {rubberSchema} from "./data/rubberSchema";

const {Header, Content, Footer} = Layout;

const items = [
    {key: 'blade', label: '底板'},
    {key: 'rubber', label: '胶皮'},
    {key: 'player', label: '选手'}
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
                return (
                    <Table
                        dataSource={bladeData}
                        columns={bladeSchema}
                        pagination={{
                            defaultPageSize: 20,
                            showSizeChanger: true,
                            pageSizeOptions: ['10', '20', '50'],
                        }}
                    />
                );
            case 'rubber':
                return (
                    <Table
                        dataSource={rubberData}
                        columns={rubberSchema}
                        pagination={{
                            defaultPageSize: 20,
                            showSizeChanger: true,
                            pageSizeOptions: ['10', '20', '50'],
                        }}
                    />
                );
            case 'player':
                return <div>选手内容 尚在开发中</div>;
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
                乒乓器材王国 ©{new Date().getFullYear()} Created by skyskyskyha
            </Footer>
        </Layout>
    );
}

export default App;
