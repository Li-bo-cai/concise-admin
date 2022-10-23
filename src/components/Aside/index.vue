<template>
  <div>
    <el-scrollbar height="calc(100vh - 60px)">
      <el-menu text-color="#232323" :default-active="activeRouter" :router="true" :unique-opened="true"
        @open="secondOpen">
        <template v-for="item in routes" :key="item.name">
          <el-menu-item v-if="item.meta && !item.meta.hasChild" :index="item.path">
            <template #title>
              <span>{{ item.meta.title }}</span>
            </template>
          </el-menu-item>

          <el-sub-menu v-else-if="item.meta && item.meta.hasChild" :index="item.path">
            <template #title>
              <span>{{ item.meta.title }}</span>
            </template>
            <el-menu-item v-for="_item in item.children" :key="_item.name" :index="secondRouter(item.path,_item.path)">
              <template #title>
                <span>{{ _item.meta.title }}</span>
              </template>
            </el-menu-item>
          </el-sub-menu>
        </template>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script setup>
import { computed } from '@vue/reactivity';
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const router = useRouter();
const route = useRoute();
const routes = router.options.routes;
console.log(routes, route);

const activeRouter = computed(() => {
  if (route.path == "/home") return '/';
  return route.path;
});

// 点击一级路由跳转
const secondOpen = (index, indexPath) => {
  console.log(index, indexPath, route.path);
  console.log();
  if (index != '/' && route.path.substring(0, index.length) == index) return
  router.push({
    path: index
  })
}

// 二级路由生成
const secondRouter = (path1, path2) => {
  if (path1 == '/') {
    return `/${path2}`;
  } else {
    return `${path1}/${path2}`
  }
}

</script>

<style lang="scss" scoped>
.el-menu {
  border-right: none;

  // .el-menu-item {
  //   height: 35px;
  //   line-height: 35px;
  // }
}
</style>