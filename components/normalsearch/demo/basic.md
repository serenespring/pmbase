---
order: 0
title:
  zh-CN: 搜索框
  en-US: Type
---

## zh-CN

- 常规搜索

## en-US

```jsx
import React from 'react';
import { Button } from 'antd';
import { NormalSearch } from 'pmbase';

const Demo = () => {
  const columns = [
    {
      label: '姓名',
      name: 'name',
      valueType: 'text',
    },
    {
      label: '年龄',
      name: 'age',
      valueType: 'select',
      valueData: [
        { key: 1, value: 1 },
        { key: 2, value: 2 },
      ],
    },
    {
      label: '住址',
      name: 'address',
      valueType: 'text',
    },
  ];
  const onSearch = values => {
    console.log('values:::::::', values);
  };

  const buttonRender = form => (
    <>
      <Button type="primary" htmlType="submit">
        查询
      </Button>
      <Button
        style={{ margin: '0 0 0 8px' }}
        onClick={() => {
          form.resetFields();
          onSearch();
        }}
      >
        重置
      </Button>
    </>
  );

  return <NormalSearch columns={columns} onSearch={onSearch} buttonRender={buttonRender} />;
};

ReactDOM.render(<Demo />, mountNode);
```
