<template>
  <div>
    <NavBar title="首页"></NavBar>
    <!-- 轮播图 -->
    <van-swipe  :autoplay="3000" indicator-color="#88c407">
      <van-swipe-item @click="add" v-for="item in img" :key="item.id" >
        <img :src="item.url" alt="" class="swiper-img" />
      </van-swipe-item>
    </van-swipe>
    <!-- 九宫格 -->
    <van-grid :column-num="4">
      <van-grid-item v-for="item in tabMain" :key="item.id" :icon="item.url" :text="item.text" :to="item.path" />
    </van-grid>
    <!-- 活动版块 -->
    <Activity></Activity>
    <div style="height:900px;"></div>
</div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Activity from "@/components/Activity.vue";
export default {
  data(){
    return{
      //轮播图数据
      img:[
        {
          url:require("@/assets/imgs/banner1.jpg"),
          id:1
        },
        {
          url:require("@/assets/imgs/banner2.jpg"),
          id:2
        },
        {
          url:require("@/assets/imgs/banner3.jpg"),
          id:3
        },
        {
          url:require("@/assets/imgs/banner1.jpg"),
          id:4
        },
        {
          url:require("@/assets/imgs/banner2.jpg"),
          id:5
        }
      ],
      //小菜单数据
      tabMain:[
          {
            url:"https://iconfont.alicdn.com/t/01f84478-e76d-4405-9d96-0d6e225b2787.png",
            text:"模块一",
            id:1,
            path:"/one"
          },
          {
            url:"https://iconfont.alicdn.com/t/07a17828-2bf9-426b-a231-136965c4554d.png",
            text:"模块二",
            id:2,
            path:"/two"
          },
          {
            url:"https://iconfont.alicdn.com/t/2df4f2cd-fc68-42a3-b7f6-23bc42230307.png",
            text:"模块三",
            id:3,
            path:"/three"
          },
          {
            url:"https://iconfont.alicdn.com/t/22321fe0-0f6d-4bcd-9647-5f936e8ea7e3.png",
            text:"模块四",
            id:4,
            path:"/fore"
          },
          {
            url:"https://iconfont.alicdn.com/t/ca124ea0-ff23-41b9-a682-6450d7b0f84e.png",
            text:"模块五",
            id:5,
            path:"/five"
          },
          {
            url:"https://iconfont.alicdn.com/t/b4364a3b-ddcf-4489-a9a4-f5f55a7d6331.png",
            text:"模块六",
            id:6,
            path:"/six"
          },
          {
            url:"https://iconfont.alicdn.com/t/54a24897-9793-4085-ad1a-6382519a6b63.png",
            text:"模块七",
            id:7,
            path:"/seven"
          },
          {
            url:"https://iconfont.alicdn.com/t/ac18c14e-ce45-495a-ad1a-75b5e3f22f01.png",
            text:"模块八",
            id:8,
            path:"/eight"
          },
      ],
      list:[]
 }
    
  },
  methods:{
    add(){
      this.$router.push("/car")
    }
  },
  created(){
    this.Api.GetBannerList(res=>{
      this.list = res.data.data
      console.log(this.list)
    })
  },
  components:{
    NavBar,
    Activity
  }
}
</script>

<style scoped lang="less"> 
.swiper-img{
  width:100%;
}

</style>