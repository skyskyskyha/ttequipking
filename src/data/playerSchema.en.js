import {playerDataEn} from "./playerData.en";


export const playerSchemaEn = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Sex',
        dataIndex: 'sex',
        key: 'sex',
    },
    {
        title: 'Blade',
        dataIndex: 'blade',
        key: 'blade',
        filters: Array.from(
            new Set(playerDataEn.map((item) => item.blade))
        ).map((blade) => ({ text: blade, value: blade })),
        onFilter: (value, record) => record.blade === value,
    },
    {
        title: 'Forehand Rubber',
        dataIndex: 'rubberForehand',
        key: 'rubberForehand',
        filters: Array.from(
            new Set(playerDataEn.map((item) => item.rubberForehand))
        ).map((rubberForehand) => ({ text: rubberForehand, value: rubberForehand })),
        onFilter: (value, record) => record.rubberForehand === value,
    },
    {
        title: 'Backhand Rubber',
        dataIndex: 'rubberBackhand',
        key: 'rubberBackhand',
        filters: Array.from(
            new Set(playerDataEn.map((item) => item.rubberBackhand))
        ).map((rubberBackhand) => ({ text: rubberBackhand, value: rubberBackhand })),
        onFilter: (value, record) => record.rubberBackhand === value,
    },
];
