<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <div class="header"></div>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <Menu></Menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import Menu from "@/components/menu/Menu.vue";
</script>

<style lang="scss" scoped>
.header {
  background: #000;
}
</style>