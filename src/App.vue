<template>
  <div id="app">
    <!-- 标签栏 -->
    <van-tabbar active-color="#07c160" inactive-color="#000" route>
      <van-tabbar-item icon="wap-home-o" to="/homePage">首页</van-tabbar-item>
      <van-tabbar-item icon="bag-o" to="/sort">分类</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o" to="/car">购物车</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/mine">我的</van-tabbar-item>
    </van-tabbar>
      <router-view />
  </div>
</template>
<script>

export default {
   created(){
    //     Api.getGetBannerList(res=>{
    //    console.log(res,"888888888888")
    //  })


   }
}
</script>

<style>

</style>

