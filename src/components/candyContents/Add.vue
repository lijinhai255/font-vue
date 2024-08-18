<template>
  <a-drawer
    :title="title"
    :visible="visible"
    :width="width"
    :closable="closable"
    :body-style="bodyStyle"
    @close="handleClose"
  >
    <!-- 插槽用于内容的自定义 -->
    <slot />
    <!-- 操作按钮插槽 -->
    <slot name="footer" />
  </a-drawer>
</template>

<script>
export default {
  name: 'DrawerWrapper',
  props: {
    title: {
      type: String,
      default: 'Drawer',
    },
    visible: {
      type: Boolean,
      required: true,
    },
    width: {
      type: Number,
      default: 720,
    },
    closable: {
      type: Boolean,
      default: true,
    },
    bodyStyle: {
      type: Object,
      default: () => ({
        paddingBottom: '80px',
      }),
    },
  },
  methods: {
    handleClose() {
      this.$emit('close')
    },
  },
}
</script>
