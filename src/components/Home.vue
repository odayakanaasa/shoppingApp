<template>
  <div class="home">
    <home-header></home-header>
    <div class="home-main">
    <!-- 顶部轮播 -->
<!--         <div class="block">
          <el-carousel height="150px">
            <el-carousel-item v-for="item in 4" :key="item">
              <h3>{{ item }}</h3>
            </el-carousel-item>
          </el-carousel>
        </div> -->
      <transition-group enter-active-class="slideInRight">
        <ul class="goods animated" :key="animatedCurrentKey">
          <li v-for="item in goods" class="one-com" v-show="isCurrent(item.kind)">
            <one-commodity
              :itemId="item.id"
              :imgUrl="item.img"
              :title="item.title"
              :content="item.content"
              :price="item.price"
              :count="0"
             ></one-commodity>
          </li>
        </ul>
        <div :key="'0' + animatedCurrentKey">
          <p class="no-more-goods">没有更多商品啦，敬请期待!!!</p>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script>
import OneCommodity from './one-commodity.vue'
import HomeHeader from './HomeHeader.vue'

export default {
  name: 'home',
  data () {
    return {
      goods:[],
      animatedCurrentKey: 0,
    }
  },
  computed: {

  },
  methods: {
    //分类按钮点击时
    isCurrent (itemKind) {
      let currentKind = this.$store.state.GoodsCurrentSelKind;
      this.animatedCurrentKey = currentKind;
      if (currentKind === 0) {
        //0表示全部商品
        return true;
      } else {
        return itemKind === currentKind;
      }
    },
  },
  components: {
    OneCommodity: OneCommodity,
    HomeHeader: HomeHeader,
  },
  //本地测试：http://localhost:8080/static/data/goods.json
  //gitHub：/shoppingApp/static/data/github-goods.json
  //阿里云：
  mounted () {
    this.axios.get('/shoppingApp/static/data/github-goods.json')
    .then(res => {
      this.goods = [...res.data];
    })
    .catch(() =>{
      this.axios.get('http://localhost:8080/static/data/goods.json')
      .then(res => {
        this.goods = [...res.data];
      })
    })
  }
}
</script>

<style scoped>
.home{
  width: 100%;
  padding-bottom: 70px;
  padding-top: 110px;
}
.home-main{
  width: 100%;
  overflow-x: hidden;
}
.goods{
  width: 100%;
  list-style: none;
  padding: 0;
}
.goods>li{
  width: 100%;
}
.no-more-goods{
  height: 40px;
  line-height: 40px;
}
/*顶部轮播
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
   background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
   background-color: #d3dce6;
}*/
</style>
