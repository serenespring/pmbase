---
order: 0
title:
  zh-CN: 可编辑表格
  en-US: Type
---

## zh-CN

- 基于antd.Table组件基础上封装

## en-US

````jsx
import { message } from 'antd'
import { EditTable } from 'xmzbase'

const Demo = ()=>{
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
  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
    },
    {
      title: '住址',
      dataIndex: 'address',
      editable: true,
    },
  ];
  const handleTableSave = (value)=>{
    console.log('value::::::',value);
  }
  const geterrInfo = (errInfo)=>{
    console.log('errInfo::::::',errInfo);
  }
  return(
    <EditTable 
      dataSource={dataSource}
      columns={columns}
      handleSave={(data) => {
        handleTableSave(data);
      }}
      rowKey="id"
      geterrInfo={geterrInfo}
      getEditingKey={(key) => {
        console.log('key::::',key);
      }}   
    />
  )
}

ReactDOM.render(
  <Demo/>,
  mountNode);
````

