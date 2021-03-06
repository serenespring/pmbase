---
order: 1
title:
  zh-CN: 带搜索条件的表格
  en-US: Type
---

## zh-CN

- 快速开发一个带搜索条件的表格
-

## en-US

```jsx
import React, { useState } from 'react';
import { Button } from 'antd';
import { SearchTable } from 'pmbase';

const columns = [
  {
    title: '序号',
    dataIndex: 'index',
    key: 'index',
    isSearch: false,
    render: (text, record, index) => index + 1,
  },
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    valueType: 'text',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
    valueType: 'select',
    valueData: [
      { key: 1, value: 1 },
      { key: 2, value: 2 },
    ],
  },
  {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
    valueType: 'text',
    isSearch: false,
  },
];

const dataSource = () => {
  const data = [];
  for (let i = 0; i < 89; i++) {
    data.push({
      id: i,
      name: `张三${i}`,
      age: 16 + i,
      address: '西安雁塔',
    });
  }
  return data;
};

const Demo = () => {
  const [data, setData] = useState(dataSource);
  const onSearch = value => {
    console.log('value:::', value);
  };
  const onChange = pagination => {
    console.log('pagination:::', pagination);
  };
  return (
    <SearchTable
      rowKey="id"
      columns={columns}
      dataSource={data}
      onSearch={onSearch}
      onChange={onChange}
      buttonRender={(form, reset) => [
        <>
          <Button type="primary" htmlType="submit">
            查询
          </Button>
          <Button
            style={{ margin: '0 0 0 8px' }}
            onClick={() => {
              reset();
              onSearch();
            }}
          >
            重置
          </Button>
        </>,
      ]}
    />
  );
};

ReactDOM.render(<Demo />, mountNode);
```
