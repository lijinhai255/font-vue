<template>
  <div>
    <imooc-panel></imooc-panel>
    <router-view></router-view>
  </div>
</template>

<script>
import CandisePanel from '@/components/CandisePanel'

export default {
  name: 'home',
  components: {
    'imooc-panel': CandisePanel,
  },
}
</script>

<style lang="scss" scoped></style>
