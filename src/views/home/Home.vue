<template>
   <div id="home">
     <!--首页导航组件-->
     <nav-bar class="home-nav">
       <template #center>
         <div>购物街</div>
       </template>
     </nav-bar>
     <!--首页轮播图组件-->
     <home-swiper :banners="banners"></home-swiper>
     <!--首页推荐组件-->
     <home-recommend :recommends="recommends"></home-recommend>
     <!--首页特色-->
     <home-feature></home-feature>
     <!--商品列表-->
     <tab-control :titles="['流行','新款','精选']" class="tab-control"></tab-control>
     <goods-list></goods-list>
     <ul>
       <li>列表1</li>
       <li>列表2</li>
       <li>列表3</li>
       <li>列表4</li>
       <li>列表5</li>
       <li>列表6</li>
       <li>列表7</li>
       <li>列表8</li>
       <li>列表9</li>
       <li>列表10</li>
       <li>列表11</li>
       <li>列表12</li>
       <li>列表13</li>
       <li>列表14</li>
       <li>列表15</li>
       <li>列表16</li>
       <li>列表17</li>
       <li>列表18</li>
       <li>列表19</li>
       <li>列表20</li>
       <li>列表21</li>
       <li>列表22</li>
       <li>列表23</li>
       <li>列表24</li>
       <li>列表25</li>
       <li>列表26</li>
       <li>列表27</li>
       <li>列表28</li>
       <li>列表29</li>
       <li>列表30</li>
       <li>列表31</li>
       <li>列表32</li>
       <li>列表33</li>
       <li>列表34</li>
       <li>列表35</li>
       <li>列表36</li>
       <li>列表37</li>
       <li>列表38</li>
       <li>列表39</li>
       <li>列表40</li>
       <li>列表41</li>
       <li>列表42</li>
       <li>列表43</li>
       <li>列表44</li>
       <li>列表45</li>
       <li>列表46</li>
       <li>列表47</li>
       <li>列表48</li>
       <li>列表49</li>
       <li>列表50</li>
     </ul>
   </div>
</template>

<script>
  import HomeSwiper from './childComps/HomeSwiper.vue'
  import HomeRecommend from './childComps/HomeRecommend.vue'
  import HomeFeature from './childComps/HomeFeature.vue'

  import NavBar from 'components/common/navbar/NavBar.vue'
  import TabControl from 'components/content/tabControl/TabControl.vue'
  import GoodsList from 'components/content/goods/GoodsList.vue'

  import {getHomeMultidata,getHomeGoods} from 'network/home';

    export default {
        name: 'Home',
        components:{
          HomeSwiper,
          HomeRecommend,
          HomeFeature,
          NavBar,
          TabControl,
          GoodsList
        },
      data(){
         return {
           banners:[],
           recommends:[],
           goods:{
             'pop':{page:0,list:[]},
             'new':{page:0,list:[]},
             'sell':{page:0,list:[]}
           }
         }
      },
      created(){
          //1.请求多个数据,请求的结果作为then的参数
          this.getHomeMultidata();
         //2.请求商品数据,服务器接口禁用了
         this.getHomeGoods('pop');
         this.getHomeGoods('new');
         this.getHomeGoods('sell');
      },
      methods:{
        getHomeMultidata(){
          getHomeMultidata().then(res=>{
            this.banners = res.data.banner.list;
            this.recommends = res.data.recommend.list;
          })
        },
        getHomeGoods(type){
          const page=this.goods[type].page+1;
          getHomeGoods(type,page).then(res=>{
            this.goods[type].list.push(...res.data.list);
            this.goods[type].page+=1
          })
        }
      }
    }
</script>

<style>
  #home{
    padding-top: 44px;
  }
  .home-nav{
    background-color: var(--color-tint);
    color: rgba(255,255,255,.8);
    position: fixed;
    left: 0;
    right: 0;
    top:0;
    z-index: 9;
  }
  .tab-control{
    position: sticky;
    top:44px;
  }
</style>
