/** 
 * inconfont图标封装
 * @author: serenespring 
 * @since: 2022-01-12
 */

import React from 'react';
import { createFromIconfontCN } from '@ant-design/icons';

const IconPro = (props: any) => {
  const { type, scriptUrl = '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js', ...others } = props;
  const MyIcon = createFromIconfontCN({
    scriptUrl, // 在 iconfont.cn 上生成
  });
  return (
    <MyIcon type={type} {...others} />
  );
}



export default IconPro;
