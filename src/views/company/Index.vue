<template>
  <div class="layui-container">
    company
    <div class="layui-row layui-col-space15">
      <div class="layui-col-md16">
        <!-- <imooc-top></imooc-top> -->
        <imooc-list></imooc-list>
      </div>
    </div>
  </div>
</template>

<script>
import List from '@/components/candyContents/List'
export default {
  name: 'index',
  components: {
    'imooc-list': List,
  },
}
</script>

<style lang="scss" scoped></style>
