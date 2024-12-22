import {bladeDataZh} from "./bladeData.zh";

export const bladeSchemaZh = [
    {
        title: '名称',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: '品牌',
        dataIndex: 'brand',
        key: 'brand',
        filters: Array.from(
            new Set(bladeDataZh.map((item) => item.brand))
        ).map((brand) => ({ text: brand, value: brand })),
        onFilter: (value, record) => record.brand === value,
    },
    {
        title: '价格',
        dataIndex: 'price',
        key: 'price',
        sorter: (a, b) => a.price - b.price,
    },
    {
        title: '使用选手',
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
        title: '评测',
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
        title: '底劲',
        dataIndex: 'power',
        key: 'power',
        sorter: (a, b) => a.power - b.power,
    },
    {
        title: '旋转',
        dataIndex: 'spin',
        key: 'spin',
        sorter: (a, b) => a.spin - b.spin,
    },
    {
        title: '速度',
        dataIndex: 'speed',
        key: 'speed',
        sorter: (a, b) => a.speed - b.speed,
    },
    {
        title: '控制',
        dataIndex: 'control',
        key: 'control',
        sorter: (a, b) => a.control - b.control,
    },
    {
        title: '推荐指数',
        dataIndex: 'reclevel',
        key: 'reclevel',
        sorter: (a, b) => a.reclevel - b.reclevel,
    },
];
