<template>
  <div class="container ub-box ub-col">
    <dl class="ub-box ub-ver z-padding-v-10-px" style="background:#fff">
      <dd @click.stop="$openWin('/pages/citySelect/main')" class="z-padding-h-10-px ub-box ub-ver">
        <span class="z-font-size-14 z-color-666 z-margin-right-3-px">{{curCity}}</span>
        <i class="iconfont icon-xiangxiazhankai z-color-666 z-font-size-16"></i>
      </dd>
      <dd class="ub-flex-1 ub-box ub-ver">
        <div @click.stop="$openWin('/pages/search/main')" class="search ub-box ub-ver-v z-width-90-percent z-box-sizing-border">
          <i class="iconfont icon-sousuo z-color-666 z-font-size-16"></i>
          <span class="z-font-size-14 z-color-999 z-margin-left-8-px">请输入商家名、品类或者商圈</span>
        </div>
      </dd>
    </dl>

    <div class="ub-box ub-ver z-bg-color-fff">
      <!-- 轮播图 -->
      <swiper class="swiper" :indicator-dots ="false" autoplay="true" interval="5000" :duration="500">
        <block v-for="(item,idx) in imgUrls" :key="idx" >
          <swiper-item>
            <img :src="item"  class="z-width-100-percent" mode="widthFix">
          </swiper-item>
        </block>
      </swiper>
    </div>
    
    <!-- 图标九宫格入口 -->
    <dl class="ub-box ub-wrap z-padding-v-5-px" style="background:#fff">
      <div class="icon-item ub-box ub-col ub-ver" :key="key" v-for="(idx,key) in iconMap">
        <dd class="icon ub-box ub-ver iconfont" :class="key" :style="{background:idx.bk}"></dd>
        <span class="z-padding-v-8-px z-font-size-12 z-color-333">{{idx.title}}</span>
      </div>
    </dl>
    <!-- 广告 -->
    <dl class="ub-box ub-wrap z-margin-top-6-px z-padding-v-5-px" style="background:#fff">
      <dd class="adv ub-flex-1 z-box-sizing-border ub-box ub-ver ub-col">
        <span class="z-font-size-14 z-lineHeight-36" style="color:#55a40f">我们约吧</span>
        <span class="z-font-size-12 z-color-666">恋人家人好朋友</span>
        <img src="/static/images/index1.png" class="z-img-cover">
      </dd>
      <dd class="adv ub-flex-1 z-box-sizing-border z-padding-v-5-px ub-box ub-ver ub-col">
        <span class="z-font-size-14 z-lineHeight-36" style="color:#ff3f0d">低价超值</span>
        <span class="z-font-size-12 z-color-666">十元惠生活</span>
        <img src="/static/images/index2.png" class="z-img-cover">
      </dd>
      <dd class="adv ub-flex-1 z-box-sizing-border z-padding-v-5-px ub-box ub-ver ub-col">
        <span class="z-font-size-14 z-lineHeight-36" style="color:#f742a0">午后时光</span>
        <span class="z-font-size-12 z-color-666">懒散下午茶</span>
        <img src="/static/images/index3.png" class="z-img-cover">
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
  data() {
    return {
      curCity: "上海",
      imgUrls: [
        "https://p1.meituan.net/codeman/826a5ed09dab49af658c34624d75491861404.jpg",
        "https://p0.meituan.net/codeman/a97baf515235f4c5a2b1323a741e577185048.jpg",
        "https://p0.meituan.net/codeman/daa73310c9e57454dc97f0146640fd9f69772.jpg"
      ],
      iconMap: {
        "icon-caigou": { title: "美食", bk: "#EF8B3E" },
        "icon-shangpin": { title: "猫眼电影", bk: "#E4463B" },
        "icon-touchengkongyun": { title: "酒店住宿", bk: "#8B67E5" },
        "icon-daohang": { title: "休闲娱乐", bk: "#5DC7B0" },
        "icon-zitigui": { title: "外卖", bk: "#F3AE42" },
        "icon-jiesuan": { title: "KTV", bk: "#5DC1A9" },
        ".icon-jijianfasong": { title: "丽人", bk: "#EC5B6E" },
        "icon-shoucang": { title: "景点门票", bk: "#5CA2F2" },
        "icon-baobiao": { title: "火车票", bk: "#FD9D21" },
        "icon-pifuzhuti": { title: "民宿", bk: "#BED300" }
      }
    };
  }
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 100vh;
  background: #e8e8e8;
}
.search {
  background: #f5f5f5;
  border-radius: 12px;
  padding: 5px 10px;
}
.swiper {
  height: 120px;
  width: calc(100% - 16px);
}
.icon-item {
  width: 20%;
  padding: 10px 13px 0 13px;
  box-sizing: border-box;
}
.icon {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  color: #fff;
  font-size: 24px;
}
.adv{
  border-right: 2px solid #eee
}
.adv img{
  width: 50px;
  height: 50px;
}
</style>

