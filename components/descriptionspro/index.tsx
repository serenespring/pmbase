/** 
 * descriptions
 * @author: serenespring 
 * @since: 2022-01-14
 */
import React from 'react';
import { Descriptions } from 'antd';



const DescriptionsPro = (props: any) => {
  const { columns = [], dataSource = {},...others } = props;
  return (
    <Descriptions {...others}>
      {columns.map((item:any)=>(
        <Descriptions.Item key={item.key} label={item.title}>{dataSource[item.dataIndex]}</Descriptions.Item>
      ))}
    </Descriptions >
  )

}

export default DescriptionsPro;
