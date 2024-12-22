import {rubberDataZh} from "./rubberData.zh";


export const rubberSchemaEn = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Brand',
        dataIndex: 'brand',
        key: 'brand',
        filters: Array.from(
            new Set(rubberDataZh.map((item) => item.brand))
        ).map((brand) => ({ text: brand, value: brand })),
        onFilter: (value, record) => record.brand === value,
    },
    {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
        sorter: (a, b) => a.price - b.price,
    },
    {
        title: 'User',
        dataIndex: 'user',
        key: 'user',
        render: tags => (
            <div>
                {tags.map((tag, index) => (
                    <div key={index}>{tag}</div>
                ))}
            </div>
        ),
    },
    {
        title: 'Review',
        dataIndex: 'review',
        key: 'review',
        render: tags => (
            <div>
                {tags.map((tag, index) => (
                    <div key={index}>{tag}</div>
                ))}
            </div>
        ),
    },
    {
        title: 'Hardness',
        dataIndex: 'hardness',
        key: 'hardness',
        sorter: (a, b) => a.spin - b.spin,
    },
    {
        title: 'Spin',
        dataIndex: 'spin',
        key: 'spin',
        sorter: (a, b) => a.spin - b.spin,
    },
    {
        title: 'Speed',
        dataIndex: 'speed',
        key: 'speed',
        sorter: (a, b) => a.speed - b.speed,
    },
    {
        title: 'Control',
        dataIndex: 'control',
        key: 'control',
        sorter: (a, b) => a.control - b.control,
    },
    {
        title: 'Recommendation Level',
        dataIndex: 'reclevel',
        key: 'reclevel',
        sorter: (a, b) => a.reclevel - b.reclevel,
    },
    {
        title: 'PS',
        dataIndex: 'ps',
        key: 'ps',
    },
];
