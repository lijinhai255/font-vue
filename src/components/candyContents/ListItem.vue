<template>
  <div>
    <ul class="fly-list">
      <li v-for="(item, index) in items" :key="'listitem' + index">
        <a class="fly-avatar" @click.prevent="showCandyDetail(item)">
          <img
            :src="item?.image_url ? item?.image_url : '/img/header.jpg'"
            alt="产品图片地址"
          />
        </a>
        <h2>
          <a class="badgeTitle">{{ item.description }}</a>
          <router-link :to="{ name: 'detail', params: { tid: item._id } }"
            >{{ item.title }}（规格:长{{ item.length }} 宽{{ item.width }}）
          </router-link>
        </h2>
        <div class="fly-list-info">
          <router-link
            :to="{ name: 'home', params: { uid: item?.uid?._id } }"
            link
          >
            <cite>厂家名称： {{ item?.uid?.name }}</cite>
          </router-link>
          <span>{{ item.created | moment }}</span>

          <span class="fly-list-kiss layui-hide-xs" title="悬赏飞吻">
            <!-- <i class="iconfont icon-kiss"></i> -->
            价格：
            {{ item.price_per_unit }}{{ item.price_unit }}
          </span>
          <span class="fly-list-kiss layui-hide-xs" title="悬赏飞吻">
            <!-- <i class="iconfont icon-kiss"></i> -->
            零售价：
            {{ item.price_per_weight }}
          </span>
          <span class="fly-list-nums">
            <i class="iconfont icon-pinglun1" title="回答"></i>
            {{ item.answer }}
          </span>
        </div>
        <div
          class="fly-list-badge"
          v-show="item.tags.length > 0 && item.tags[0].name !== ''"
        >
          <span
            class="layui-badge"
            v-for="(tag, index) in item.tags"
            :key="'tag' + index"
            :class="tag.class"
            >{{ tag.name }}</span
          >
        </div>
      </li>
    </ul>
    <div style="text-align: center" v-show="isShow">
      <div class="laypage-main" v-if="!isEnd">
        <a @click.prevent="more()" class="laypage-next">更多求解</a>
      </div>
      <div class="nomore gray" v-else>没有更多了</div>
    </div>
    <el-dialog
      title="糖果图片"
      :visible.sync="dialogVisible"
      width="600px"
      :before-close="handleClose"
    >
      <el-image
        :src="item?.image_url ? item?.image_url : '/img/header.jpg'"
        style="width: 100%; height: 100%"
        :fit="fit"
      ></el-image>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'listitem',
  data() {
    return {
      dialogVisible: false,
      cuttentItem: {}
    }
  },
  props: {
    lists: {
      default: () => [],
      type: Array
    },
    isShow: {
      default: true,
      type: Boolean
    },
    isEnd: {
      default: false,
      type: Boolean
    }
  },
  computed: {
    items() {
      this.lists.map((item) => {
        switch (item.catalog) {
          case 'ask':
            item.catalog = '提问'
            break
          case 'share':
            item.catalog = '分享'
            break
          case 'logs':
            item.catalog = '动态'
            break
          case 'notice':
            item.catalog = '公告'
            break
          case 'advise':
            item.catalog = '建议'
            break
          case 'discuss':
            item.catalog = '交流'
            break
        }
      })
      return this.lists
    }
  },
  methods: {
    more() {
      this.$emit('nextpage')
    },
    showCandyDetail(item) {
      console.log(item)
      this.cuttentItem = item
      this.dialogVisible = true
    },
    handleClose(done) {
      done()
    }
  }
}
</script>

<style lang="scss" scoped>
.nomore {
  font-size: 16px;
  padding: 30px 0;
}
.badgeTitle {
  font-size: 13px;
}
</style>
