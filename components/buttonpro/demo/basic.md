---
order: 0
title:
  zh-CN: 按钮二次封装
  en-US: Type
---

## zh-CN

- 在antd.Button组件基础上封装, type属性值增加`delete`, 删除按钮弹窗确认框
- 兼容[antd.Button](https://ant.design/components/button-cn/)组件

## en-US

````jsx
import { message } from 'antd'
import { ButtonPro } from 'pmbase'

ReactDOM.render(
  <ButtonPro type="delete" onClick={() => message.success('删除成功')}>删除</ButtonPro>,
  mountNode);
````

<style>
.ant-popover-message {
  min-width: 200px;
  padding-bottom: 30px;
}
</style>
