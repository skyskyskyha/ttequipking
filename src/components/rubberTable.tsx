import { Table, Input, Button } from "antd";
import React, { useState } from "react";
import { rubberDataZh } from "../data/rubberData.zh";
import { rubberDataEn } from "../data/rubberData.en";
import { rubberSchemaZh } from "../data/rubberSchema.zh"; // 中文 schema
import { rubberSchemaEn } from "../data/rubberSchema.en"; // 英文 schema
import i18n from "i18next";

function RubberTable() {
    const [searchText, setSearchText] = useState('');
    const [language, setLanguage] = useState('zh'); // 当前语言状态

    const handleSearch = (e:any) => {
        setSearchText(e.target.value.toLowerCase());
    };

    // 根据当前语言动态切换 schema
    const columns = language === 'zh' ? rubberSchemaZh : rubberSchemaEn;

    // 根据语言动态加载数据
    const rubberData = language === 'zh' ? rubberDataZh : rubberDataEn;

    // 动态过滤数据
    const filteredData = rubberData.filter((item) =>
        Object.values(item).some((value:any) =>
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
            {/* 搜索框和语言切换按钮布局 */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                <Input
                    placeholder={language === 'zh' ? "搜索所有列" : "Search all columns"}
                    onChange={handleSearch}
                    style={{ width: 300 }}
                />
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

export default RubberTable;
