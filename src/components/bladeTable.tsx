import { Table, Input, Button } from "antd";
// import { bladeDataZh } from "../data/bladeDataZh";
import { bladeDataZh } from "../data/bladeData.zh"; // 中文数据
import { bladeDataEn } from "../data/bladeData.en"; // 英文数据
import { bladeSchemaZh } from "../data/bladeSchema.zh";
import { bladeSchemaEn } from "../data/bladeSchema.en"; // 导入英文版本的 schema
import React, { useState } from "react";
import i18n from "i18next";

function BladeTable() {
    const [searchText, setSearchText] = useState('');
    const [language, setLanguage] = useState('zh'); // 当前语言状态

    const handleSearch = (e: any) => {
        setSearchText(e.target.value.toLowerCase());
    };

    // 根据当前语言动态切换 schema
    const columns = language === 'zh' ? bladeSchemaZh : bladeSchemaEn;

    // 根据语言动态加载数据
    const bladeData = language === 'zh' ? bladeDataZh : bladeDataEn;

    // 动态过滤数据
    const filteredData = bladeData.filter((item) =>
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
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                {/* 左侧的搜索框 */}
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

export default BladeTable;
