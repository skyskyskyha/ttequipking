import { Table, Input, Button } from "antd";
import React, { useState } from "react";
import { playerDataZh } from "../data/playerData.zh";
import { playerDataEn } from "../data/playerData.en";
import { playerSchemaZh } from "../data/playerSchema.zh"; // 中文 schema
import { playerSchemaEn } from "../data/playerSchema.en"; // 英文 schema
import i18n from "i18next";


function PlayerTable() {
    const [searchText, setSearchText] = useState('');
    const [language, setLanguage] = useState('zh'); // 当前语言状态

    const handleSearch = (e:any) => {
        setSearchText(e.target.value.toLowerCase());
    };

    // 根据当前语言动态切换 schema
    const columns = language === 'zh' ? playerSchemaZh : playerSchemaEn;

    // 根据语言动态加载数据
    const playerData = language === 'zh' ? playerDataZh : playerDataEn;

    // 动态过滤数据
    const filteredData = playerData.filter((item) =>
        Object.values(item).some((value) =>
            value.toString().toLowerCase().includes(searchText)
        )
    );

    // 切换语言
    const changeLanguage = (lang:any) => {
        setLanguage(lang); // 更新语言状态
        i18n.changeLanguage(lang); // 更新 i18n 的语言
    };

    return (
        <div>
            {/* 顶部的提示文字和搜索框 */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                <p style={{ margin: 0 }}>
                    {language === 'zh'
                        ? "远古选手不具备参考价值，选手用过多种配置，现仅列举一种"
                        : "Ancient players are not representative, and only one configuration is listed here."}
                </p>
                {/* 右侧的语言切换按钮 */}
                <div style={{ display: 'flex', gap: 8 }}>
                    <Button
                        onClick={() => changeLanguage('zh')}
                        type={language === 'zh' ? 'primary' : 'default'}
                    >
                        中文
                    </Button>
                    <Button
                        onClick={() => changeLanguage('en')}
                        type={language === 'en' ? 'primary' : 'default'}
                    >
                        English
                    </Button>
                </div>
            </div>
            <Input
                placeholder={language === 'zh' ? "搜索所有列" : "Search all columns"}
                onChange={handleSearch}
                style={{ marginBottom: 16, width: 300 }}
            />
            <Table
                dataSource={filteredData}
                columns={columns}
                pagination={{
                    defaultPageSize: 20,
                    showSizeChanger: true,
                    pageSizeOptions: ['10', '20', '50'],
                }}
            />
        </div>
    );
}

export default PlayerTable;
