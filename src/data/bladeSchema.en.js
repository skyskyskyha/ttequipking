import { bladeDataZh } from "./bladeData.zh";

export const bladeSchemaEn = [
    {
        title: 'Name', // 英文
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Brand',
        dataIndex: 'brand',
        key: 'brand',
        filters: Array.from(
            new Set(bladeDataZh.map((item) => item.brand))
        ).map((brand) => ({ text: brand, value: brand })), // filters 的 text 也国际化
        onFilter: (value, record) => record.brand === value,
    },
    {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
        sorter: (a, b) => a.price - b.price,
    },
    {
        title: 'Players',
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
        title: 'Reviews',
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
        title: 'Power',
        dataIndex: 'power',
        key: 'power',
        sorter: (a, b) => a.power - b.power,
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
];
