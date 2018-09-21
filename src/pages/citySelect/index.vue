<template>
  <div class="container ub-box ub-col">
    <City @cityService="cityService"></City>
  </div>
</template>

<script>
  import City from "@/components/City"
  export default {
    components:{
      City
    },
    data(){
      return {}
    },
    methods:{
      cityService(city){
        //更新Vuex state中的curCity
        this.$store.commit('updateCity',city)
        this.$backBeforeWin()
      }
    },
    onShow(){
      wx.setNavigationBarTitle({title:"选择城市"})
    }
  };
</script>

<style scoped>
.container{
  width: 100%;
  height: 100vh;
  background: #fff;
}
</style>

