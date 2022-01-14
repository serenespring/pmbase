---
category: Components
type: 数据展示
cols: 1
title: SearchTable
subtitle: 查询表格
---

## API

## searchtable

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| rowKey | 表格行 key 的取值，可以是字符串或一个函数 | string \| function(record): string | `key` |  |
| columns | 表格行和搜索行 | array | - |
| dataSource | 表格数据 | array | - |
| isRowSelection | 可选表格数据 | boolean | - |
| isExport | 可否导出 | boolean | - |
| onSearch | 搜索框数据 | function | - |
| isRowSelection | 表格行是否可选 | boolean | - |
| actionRender | 操作信息 | function | - |




## columns

以下为新增属性，其余可参考[antd table](https://ant.design/components/table-cn/) 属性 

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| valueType | 搜索框标识 | string('date 日期', 'select 下拉框', 'text 输入框') | text |
| valueData | valueType为select时的下拉框值 | array | 默认不传该属性，搜索框标识为select时传 |
| isSearch | isSearch为false时无此所搜索，默认显示 | boolean | - |
