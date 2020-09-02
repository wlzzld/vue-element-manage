<template>
  <div :id="chartId"></div>
</template>

<script>
import G2 from '@antv/g2'
export default {
  props: {
    height: {
      type: Number,
      default: 360
    }
  },
  data() {
    return {
      chartId: 'chart' + +new Date() + ((Math.random() * 1000).toFixed(0) + ''),
      chartData: [
        {
          type: '新功能',
          value: 5
        },
        {
          type: '产品优化',
          value: 16
        },
        {
          type: '代码优化',
          value: 4
        },
        {
          type: 'bug处理',
          value: 7
        },
        {
          type: '新项目',
          value: 1
        }
      ]
    }
  },
  mounted() {
    this.createChart(this.chartId, this.chartData)
  },
  methods: {
    createChart(container, data) {
      let chart = new G2.Chart({
        container: container,
        forceFit: true,
        height: this.height,
        padding: [50, 50, 50, 80],
        background: { fill: '#fff' }
      })
      chart.source(data)
      chart.scale('value', {
        min: 0,
        alias: '数量'
      })
      chart.axis('type', {
        tickLine: {
          length: 0
        }
      })
      chart.axis('value', {
        line: {
          lineWidth: 1,
          stroke: 'rgb(202,202,202)'
        },
        title: {
          textStyle: {
            fill: '#4a4a4a'
          }
        }
      })
      chart
        .interval()
        .position('type*value')
        .color('value')
        .label('value')
      chart.render()
    }
  }
}
</script>
