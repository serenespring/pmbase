---
category: Components
type: 数据展示
cols: 1
title: EditTable
subtitle: 编辑表格
---

## API
属性参考[ant.table](https://ant.design/components/table-cn/#components-table-demo-edit-row)

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| dataSource | 数据数组 | object[] | - |
| columns | 表格列的配置描述 | object[] | - |
| rowKey | 表格行 `key` 的取值，可以是字符串或一个函数 | string \| function(record): string | `key` |
| handleSave | 表格行保存函数 | function | - |
| geterrInfo | 表格行编辑错误信息 | function | - |
| getEditingKey | 表格行编辑主键 | function | - |
