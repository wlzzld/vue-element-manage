<template>
  <div :id="chartId"></div>
</template>

<script>
import G2 from '@antv/g2'
export default {
  props: {
    height: {
      type: Number,
      default: 420
    }
  },
  data() {
    return {
      chartId: 'chart' + +new Date() + ((Math.random() * 1000).toFixed(0) + ''),
      chartData: [
        {
          item: '新功能',
          count: 5,
          percent: 0.15
        },
        {
          item: '产品优化',
          count: 16,
          percent: 0.48
        },
        {
          item: '代码优化',
          count: 4,
          percent: 0.12
        },
        {
          item: 'bug处理',
          count: 7,
          percent: 0.21
        },
        {
          item: '新项目',
          count: 1,
          percent: 0.04
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
        padding: [40, 0],
        background: {
          fill: '#fff'
        }
      })
      chart.source(data, {
        percent: { formatter: (val) => val * 100 + '%' }
      })
      chart.coord('theta', {
        radius: 0.75,
        innerRadius: 0.6
      })
      chart.tooltip({
        showTitle: false,
        itemTpl:
          '<li><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value}</li>'
      })
      // 辅助文本
      chart.guide().html({
        position: ['50%', '50%'],
        html:
          '<div style="color:#8c8c8c;font-size: 14px;text-align: center;width: 10em;">总任务<br><span style="color:#8c8c8c;font-size:20px">33</span>件</div>',
        alignX: 'middle',
        alignY: 'middle'
      })
      const interval = chart
        .intervalStack()
        .position('percent')
        .color('item')
        .label('percent', {
          formatter: (val, item) => item.point.item + ': ' + val
        })
        .tooltip('item*percent', (item, percent) => ({
          name: item,
          value: percent * 100 + '%'
        }))
     
      chart.render()
    }
  }
}
</script>
