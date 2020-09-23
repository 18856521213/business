<template>
  <div class="box">
    <div class="content">
       我是活动版块aa
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.box{
  display:flex;
  justify-content: center;
  align-items: center;
  padding:10px 0 ;
  .content{
    background: #f1f1f1 url("~@/assets/imgs/banner1.jpg") no-repeat;
    width: 95%;
    height: 150px;
    border-radius: 2%;
    overflow: hidden;
  }
  }
</style>