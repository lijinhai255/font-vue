<template>
  <div class="fly-panel fly-column">
    <div class="layui-container">
      <ul class="layui-clear">
        <router-link tag="li" to="/" class="layui-hide-xs">
          <a href="/">首页</a>
        </router-link>
        <router-link
          v-for="(item, index) in lists"
          :key="'panel' + index"
          tag="li"
          :to="item.path"
        >
          <a href="jie/index.html">
            {{ item.name }}
            <span class="layui-badge-dot" v-if="item.isNew"></span>
          </a>
        </router-link>
        <li class="layui-hide-xs layui-hide-sm layui-show-md-inline-block">
          <span class="fly-mid"></span>
        </li>
      </ul>

      <div class="fly-column-right layui-hide-xs">
        <span class="fly-search">
          <i class="layui-icon"></i>
        </span>
        <router-link :to="{ name: 'add' }" class="layui-btn"
          >发表新糖果</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CandisePanel',
  data() {
    return {
      lists: [
        // {
        //   name: '提问',
        //   path: '/index/ask',
        //   isNew: false
        // },
        // {
        //   name: '分享',
        //   path: '/index/share',
        //   isNew: true
        // },
        // {
        //   name: '讨论',
        //   path: '/index/discuss',
        //   isNew: false
        // },
        // {
        //   name: '建议',
        //   path: '/index/advise',
        //   isNew: false
        // },
        // {
        //   name: '公告',
        //   path: '/index/notice',
        //   isNew: false
        // },
        // {
        //   name: '动态',
        //   path: '/index/logs',
        //   isNew: false
        // }
      ],
      isLogin: this.$store.state.isLogin
    }
  }
}
</script>

<style lang="scss" scoped></style>
