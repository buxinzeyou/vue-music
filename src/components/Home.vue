<template>
  <div class="home-container">
    <mt-header fixed title="网易云音乐"></mt-header>
    <div id="slider" class="mui-slider">
      <div
        id="sliderSegmentedControl"
        class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
      >
        <div class="mui-scroll">
          <router-link
            to="/recommend"
            class="mui-control-item"
            href="#item1mobile"
            data-wid="tab-top-subpage-1.html"
            tag="a"
          >推荐音乐</router-link>
          <router-link
            to="/hotsong"
            class="mui-control-item"
            href="#item2mobile"
            data-wid="tab-top-subpage-2.html"
          >热歌版</router-link>
          <router-link
            to="/search"
            class="mui-control-item"
            href="#item3mobile"
            data-wid="tab-top-subpage-3.html"
          >搜索</router-link>
        </div>
      </div>
    </div>
    <!-- <div class="margin"></div> -->
    <transition>
      <router-view></router-view>
    </transition>
  </div>
</template>
<!-- 调用   <mycom></mycom> -->
<script>
  // Vue.component('mycom',{
  //   props:[],
  //   template: '#temp'})
</script>

<style lang="scss" scoped>
.home-container {
  height: 144px;
}
.mint-header {
  z-index: 97;
  height: 84px;
  background-color: #c82519;
}
.margin {
  margin-top: 60px;
}
.app-container {
  padding-top: 84px;
  overflow-x: hidden;
}
.mint-header-title .mui-h1,
h1 {
  font-size: 40px;
}
// .v-enter {
//   opacity: 0;
//   transform: translateX(100%);
// }

// .v-leave-to {
//   opacity: 0;
//   transform: translateX(-100%);
//   position: absolute;
// }

// .v-enter-active,
// .v-leave-active {
//   transition: all 0.5s ease;
// }
.mui-slider {
  border-bottom: 1px solid #ccc;
  position: fixed;
  background-color: #fff;
  top: 80px;
}

.mui-segmented-control.mui-segmented-control-inverted
  .mui-control-item.mui-active {
  color: red;
}
.mui-bar-tab .mui-tab-item-llb {
  display: table-cell;
  overflow: hidden;
  width: 1%;
  height: 50px;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #929292;
}

.mui-bar-tab .mui-tab-item-llb .mui-icon {
  top: 3px;
  width: 24px;
  height: 24px;
  padding-top: 0;
  padding-bottom: 0;
}

.mui-bar-tab .mui-tab-item-llb .mui-icon ~ .mui-tab-label {
  font-size: 11px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
}
.mui-segmented-control.mui-segmented-control-inverted .mui-control-item {
  display: inline-block;
  width: auto;
  // padding: 0 30px;
  margin: 0 18px;
}
</style>