<template>
  <tab-bar>
    <tab-bar-item path="/home" >
      <!--<img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="" >-->
      <!--<img slot="item-icon-active" src="../../../assets/img/tabbar/Hom.svg" alt="">-->
      <!--<div slot="item-text">首页</div>-->
      <template #item-icon>
        <img src="~assets/img/tabbar/home.svg" alt="">
      </template>
      <template #item-icon-active>
        <img src="~assets/img/tabbar/Hom.svg" alt="">
      </template>
      <template #item-text>
        <div>首页</div>
      </template>
    </tab-bar-item >
    <tab-bar-item path="/category" >
      <!--<img slot="item-icon" src="../../../assets/img/tabbar/all-fill.svg" alt="">-->
      <!--<img slot="item-icon-active" src="../../../assets/img/tabbar/All.svg" alt="">-->
      <!--<div slot="item-text">分类</div>-->
      <template #item-icon>
        <img src="~assets/img/tabbar/all-fill.svg" alt="">
      </template>
      <template #item-icon-active>
        <img src="~assets/img/tabbar/All.svg" alt="">
      </template>
      <template #item-text>
        <div>分类</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/cart" >
      <!--<img slot="item-icon" src="../../../assets/img/tabbar/icon-test.svg" alt="">-->
      <!--<img slot="item-icon-active" src="../../../assets/img/tabbar/Icon.svg" alt="">-->
      <!--<div slot="item-text">购物车</div>-->
      <template #item-icon>
        <img src="~assets/img/tabbar/icon-test.svg" alt="">
      </template>
      <template #item-icon-active>
        <img src="~assets/img/tabbar/Icon.svg" alt="">
      </template>
      <template #item-text>
        <div>购物车</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/profile" >
      <!--<img slot="item-icon" src="../../../assets/img/tabbar/RectangleCopy.svg" alt="">-->
      <!--<img slot="item-icon-active" src="../../../assets/img/tabbar/Rectangle.svg" alt="">-->
      <!--<div slot="item-text">我的</div>-->
      <template #item-icon>
        <img src="~assets/img/tabbar/RectangleCopy.svg" alt="">
      </template>
      <template #item-icon-active>
        <img src="~assets/img/tabbar/Rectangle.svg" alt="">
      </template>
      <template #item-text>
        <div>我的</div>
      </template>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from 'components/common/tabbar/TabBar.vue'
  import TabBarItem from 'components/common/tabbar/TabBarItem.vue'
    export default {
        name: 'MainTabBar',
      components:{
        TabBar,
        TabBarItem
      }
    }
</script>

<style>

</style>
