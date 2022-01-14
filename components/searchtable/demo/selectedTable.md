---
order: 2
title:
  zh-CN: 可选行表格
  en-US: Type
---

## zh-CN

- 可选行搜索表格
- 

## en-US



````jsx
import React, { useState } from 'react';
import {Button} from 'antd';
import { SearchTable } from 'pmbase';

const columns = [
  {
    title: '序号',
    dataIndex: 'index',
    key: 'index',
    isSearch:false,
    render:(text,record,index)=>index+1,
  },
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    valueType:'text',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
    valueType:'select',
    valueData:[{key:1,value:1},{key:2,value:2}],
  },
  {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
    valueType:'text',
    isSearch:false,
  },
];

const dataSource = [
  {
    id:1,
    name:'张三',
    age:16,
    address:'西安雁塔',
  },
  {
     id:2,
    name:'李四',
    age:25,
    address:'西安长安',
  },
  {
    id:3,
    name:'王五',
    age:33,
    address:'西安碑林',
  },
]

const Demo = ()=>{
  const [data,setData] = useState(dataSource);
  const onSearch = (value)=>{
    console.log('value:::',value);
  }
  const doExport = (selectedKeys) =>{
     console.log('selectedKeys:::',selectedKeys);
  }
  return (
    <SearchTable 
      rowKey="id" 
      columns={columns} 
      dataSource={data} 
      onSearch={onSearch} 
      isRowSelection
      actionRender={(selectedRowKeys) => [
        <Button key="out" onClick={()=>{doExport(selectedRowKeys)}}>
          导出
        </Button>,
      ]}
    />
  )
}

ReactDOM.render(
  <Demo />,
  mountNode);
````


