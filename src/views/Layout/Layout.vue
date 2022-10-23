<template>
  <div class="common-layout">
    <el-container>
      <el-header class="header">
        <div></div>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <aside-menu></aside-menu>
        </el-aside>
        <el-main>
          <el-scrollbar height="calc(100vh - 60px)">
            <router-view></router-view>
          </el-scrollbar>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import AsideMenu from "@/components/Aside/index.vue";

</script>

<style scoped lang="scss" >
.header {
  background: #000;
}

.el-main {
  padding: 0;
}
</style>