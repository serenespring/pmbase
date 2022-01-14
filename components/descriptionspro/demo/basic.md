---
order: 0
title:
  zh-CN: 描述信息
  en-US: Type
---

## zh-CN


## en-US

````jsx
import React from 'react';
import { DescriptionsPro } from 'pmbase'

const Demo = ()=>{
  const columns = [
    {
      title: '姓名',
      key: 'name',
      dataIndex: 'name',
    },
    {
      title: '性别',
      key: 'sex',
      dataIndex: 'sex',
    },
    {
      title: '年龄',
      key: 'age',
      dataIndex: 'age',
    },
    {
      title: '住址',
      key: 'address',
      dataIndex: 'address',
    },
  ];
  const dataSource = {
    name: '张三',
    sex: '男',
    age:  18,
    address: '西安雁塔',
  };
  return (
    <DescriptionsPro columns={columns} dataSource={dataSource} />
  )
}

ReactDOM.render(
  <Demo />,
  mountNode);
````

