<template>
  <div class="container ub-box ub-col">
    <dl class="ub-box ub-ver z-padding-v-10-px" style="backgroud:#fff;">
      <dd class="z-padding-h-10-px ub-box ub-ver">
        <span class="z-font-size-14 z-color-666 z-margin-right-3-px">{{curCity}}</span>
        <i class="iconfont icon-xiangxiazhankai z-color-666 z-font-size-16"></i>
      </dd>
      <dd class="ub-flex-1 ub-box ub-ver">
        <div class="search ub-box ub-ver-v z-width-90-percent z-box-sizing-border">
          <i class="iconfont icon-sousuo z-color-666 z-font-size-16"></i>
          <span class="z-font-size-14 z-color-999 z-margin-left-8-px">请输入商家名、品类或者商圈</span>
        </div>
      </dd>

    </dl>
  </div>
</template>

<script>
export default {
  data(){
    return{
      curCity:"上海"
    }
  }
}
</script>

<style scoped>
.container{width:100%;height:100vh;background:#e8e8e8;}
.search{background: #f5f5f5;border-radius: 12px;padding: 5px 10px}
</style>

