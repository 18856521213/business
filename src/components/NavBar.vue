<template>
  <div>
    <div class="box">
      <div class="left">
        <slot name="left"></slot>
      </div>
      <div class="mid">
        <slot name="mid">
          <div class="content">{{this.title}}</div>
        </slot>
      </div>
      <div class="right">
        <slot name="right"></slot>
      </div>
    </div>
    <!-- //用来隔绝顶部的距离 -->
    <div class="padding"></div>
  </div>
</template>

<script>
export default {
  props:{
    title:{
      type:String,
      default:"萍萍水果店"
  }
}
}
</script>

<style scoped lang="less">
@bgColor:#88c407;
.box{
  width:100%;
  height:50px;
  background-color:@bgColor;
  display: flex;
  position: fixed;
  top:0px;
  z-index: 99;
  .left,.right{
    width:20%;
  }
  .mid{
    width:80%;
    .content{
      text-align: center;
      color:white;
      line-height: 50px;
      font-size: 18px;
    }
  }
  // .right{
  //   width:20%;
  // }

}
.padding{
  width:100%;
  height: 50px;
  position: relative;
  top:0px;
}
</style>