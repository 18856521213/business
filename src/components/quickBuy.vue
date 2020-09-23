<template>
  <div class="box">
    <h2>{{title}}</h2>
    <van-count-down :time="time"/>
    <div class="click-box" @click="changeRoute">点击查看更多</div>
  </div>
</template>

<script>
export default {
  data(){
    return{
    time:this.timer*60*60*1000
    }
  },
  props:{
    timer:{
      type:Number,
      default:30
    },
    title:{
      type:String,
      default:"瞬间秒杀"
    },
    path:{
      type:String,
      default:""
    }
  },
  methods:{
    changeRoute(){
      if(this.path != ""){
        this.$router.push(this.path)
      }
    }
  }
}
</script>

<style scoped lang="less">
.box{
  width:100%;
  height:200px;
  line-height: 60px;
  text-align: center;
  background-color:#df2b2b;
  .van-count-down{
    font-size: 30px;
    line-height: 30px;
    color:white;
  }
  h2{
    color:white;
    background-color:#58a107 ;
  }
  .click-box{
    font-size: 14PX;
    width:120px;
    height:30px;
    background-color:rgb(48, 46, 46) ;
    color:white;
    border-radius: 20px;
    line-height: 30px;
    margin:15px auto;
  }
}
</style>