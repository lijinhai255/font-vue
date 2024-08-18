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
        <span @click="showDrawer(true)" class="layui-btn"
          >发表新糖果= {{ visable ? 'true' : 'false' }}
        </span>
      </div>
    </div>
    <DrawerWrapper
      :title="'新建账户'"
      :visible="drawerVisible"
      @close="handleClose"
    >
      <!-- 使用插槽自定义内容 -->
      <a-form layout="vertical">
        <a-form-item label="用户名">
          <a-input placeholder="请输入用户名" />
        </a-form-item>
        <a-form-item label="URL">
          <a-input placeholder="请输入URL" />
        </a-form-item>
      </a-form>
      <!-- 使用footer插槽自定义底部操作按钮 -->
      <template v-slot:footer>
        <a-button @click="handleClose">取消</a-button>
        <a-button type="primary" @click="handleSubmit">提交</a-button>
      </template>
    </DrawerWrapper>
  </div>
</template>

<script>
import DrawerWrapper from '../components/candyContents/Add.vue'
export default {
  name: 'CandisePanel',
  components: {
    DrawerWrapper,
  },
  data() {
    return {
      drawerVisible: false,
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
      isLogin: this.$store.state.isLogin,
    }
  },
  watch: {
    visable(oldValue, val) {
      console.log(oldValue, val)
    },
  },
  methods: {
    showDrawer() {
      this.drawerVisible = true
    },
    handleClose() {
      this.drawerVisible = false
    },
    handleSubmit() {
      console.log('提交表单')
      this.handleClose()
    },
  },
}
</script>

<style lang="scss" scoped></style>
