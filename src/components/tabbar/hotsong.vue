<template>
  <div class="hot-container">
    <div class="header">
      <div class="header">
        <img
          src="http://s3.music.126.net/mobile-new/img/hot_music_bg_2x.jpg?f01a252389c26bcf016816242eaa6aee="
          alt
        />
      </div>
      <div class="jingling title"></div>
      <span>更新时间：04月13日</span>
    </div>

    <div class="hotsong-list">
      <router-link :to="'/song/'+item.id" class="hotsong-item" v-for="(item, index) in hotsong" :key="index" tag="div">
        <div class="index">{{index+1}}</div>
        <div class="info">
          <div class="left">
            <h3>{{item.name}}{{item.alia[0] ? '('+item.alia[0]+')' : ''}}</h3>
            <p>{{item.ar[0].name}}-{{item.name}}</p>
          </div>
          <div class="right">
            <span class="jingling play"></span>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hotsong: []
    };
  },
  created() {
    this.getHotSongList();
  },

  methods: {
    getHotSongList() {
      this.$http.get("top/list?idx=1").then(result => {
        this.hotsong = result.body.playlist.tracks;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.hot-container {
  .jingling {
    background: url("http://s3.music.126.net/mobile-new/img/index_icon_2x.png?5207a28c3767992ca4bb6d4887c74880=")
      no-repeat;
  }
  .header {
    margin-top: 119px;
    position: relative;
    img {
      width: 100%;
      height: 100%;
    }

    .title {
      background-position: -24px -30px;
      background-size: 166px 97px;
      position: absolute;
      top: 25px;
      left: 20px;
      width: 142px;
      height: 67px;
    }
    span {
      color: #fff;
      font-size: 12px;
      -webkit-transform: scale(0.9);
      margin: 0;
      position: absolute;
      top: 100px;
      left: 17px;
    }
  }
  .hotsong-list {
    // padding-left: 10px;
    padding-bottom: 0;
    .hotsong-item {
      display: flex;
      flex: 1;
      .index {
        width: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #999;
      }

      .info {
        flex: 0 0 90%;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #eee;
        .left {
          padding: 5px 0;

          h3 {
            font-size: 17px;

            font-weight: 400;
          }
          p {
            font-size: 12px;
            margin: 0;
          }
          hr {
            font-size: 0px;
            line-height: 0px;
            padding: 0px;
            margin: 0px;
          }
        }
        .right {
          width: 35px;
          display: flex;
          align-items: center;
          .play {
            display: inline-block;
            // background-color: red;
            width: 22px;
            height: 22px;
            background-position: -24px 0;
            background-size: 166px 97px;
          }
          
        }
      }
    }
  }
}
</style>