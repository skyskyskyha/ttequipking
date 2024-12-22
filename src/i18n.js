// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// 导入语言文件
import zhCN from './locales/zh-CN.json';
import enUS from './locales/en-US.json';

i18n
    .use(initReactI18next) // 将 i18n 和 react-i18next 连接
    .init({
        resources: {
            zh: {
                translation: zhCN, // 中文翻译文件
            },
            en: {
                translation: enUS, // 英文翻译文件
            },
        },
        lng: 'zh', // 默认语言
        fallbackLng: 'zh', // 如果找不到翻译，回退到中文
        interpolation: {
            escapeValue: false, // React 已经处理了转义
        },
    });

export default i18n;
