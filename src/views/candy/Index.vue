<template>
  <div class="layui-container">
    candy121212
    <div class="layui-row layui-col-space15">
      <div class="layui-col-md16">
        <!-- <imooc-top></imooc-top> -->
        <imooc-list></imooc-list>
      </div>
      <!-- <div class="layui-col-md4">
        <imooc-tips></imooc-tips>
        <imooc-sign></imooc-sign>
        <imooc-hotlist></imooc-hotlist>
        <imooc-ads></imooc-ads>
        <imooc-links></imooc-links>
      </div> -->
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
