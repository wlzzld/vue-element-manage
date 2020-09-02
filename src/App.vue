<template>
  <div>
    <router-view></router-view>

    <theme-setting style="display: none"></theme-setting>
  </div>
</template>

<script>
import api from '@/api'
import tableMng from '@/utils/tableMng'
import ThemeSetting from '@/components/business/setting/theme-setting'

export default {
  components: {
    ThemeSetting
  },
  created() {
    this.initBaseTable()
  },
  methods: {
    //  初始化基础数据表
    async initBaseTable() {
      const data = await api.common.getBaseTable()
      tableMng.initTable(data)
    }
  }
}
</script>
