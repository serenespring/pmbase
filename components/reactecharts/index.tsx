/**
 * 基于echarts-for-react的封装
 * author: serenespring
 * date: 2021-01-10
 */

import React, { useRef } from 'react';
import ReactECharts from 'echarts-for-react';

const ReactEcharts = (props: any) => {
    const instance = useRef(null);

    const { option, height = 400, ...others } = props;
    return (
        <ReactECharts
            ref={instance}
            option={option}
            style={{ width: '100%', height }}
            {...others}
        />
    )
}

export default ReactEcharts