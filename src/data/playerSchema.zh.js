import {playerDataZh} from "./playerData.zh";


export const playerSchemaZh = [
    {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: '性别',
        dataIndex: 'sex',
        key: 'sex',
    },
    {
        title: '底板',
        dataIndex: 'blade',
        key: 'blade',
        filters: Array.from(
            new Set(playerDataZh.map((item) => item.blade))
        ).map((blade) => ({ text: blade, value: blade })),
        onFilter: (value, record) => record.blade === value,
    },
    {
        title: '正手胶皮',
        dataIndex: 'rubberForehand',
        key: 'rubberForehand',
        filters: Array.from(
            new Set(playerDataZh.map((item) => item.rubberForehand))
        ).map((rubberForehand) => ({ text: rubberForehand, value: rubberForehand })),
        onFilter: (value, record) => record.rubberForehand === value,
    },
    {
        title: '反手胶皮',
        dataIndex: 'rubberBackhand',
        key: 'rubberBackhand',
        filters: Array.from(
            new Set(playerDataZh.map((item) => item.rubberBackhand))
        ).map((rubberBackhand) => ({ text: rubberBackhand, value: rubberBackhand })),
        onFilter: (value, record) => record.rubberBackhand === value,
    },
];
