<template>
  <div class="playlist-container">
    <div class="pylst-header">
      <div class="header-bg bg-blur" :style="'background: url('+ creator.img + ') no-repeat'"></div>
      <div class="info">
        <div class="left">
          <div class="icon">歌单</div>
          <img :src="creator.img" alt />
        </div>
        <div class="right">
          <h2 class="title">{{creator.name}}</h2>
          <div class="user">
            <div class="avatar">
              <img :src="creator.avatarUrl" alt />
              <span>{{creator.nickname}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="intro">
      <div class="tags">
        标签:
        <span v-for="(item, index) in creator.tags" :key="index">{{item}}</span>
      </div>

      <div id="intro-content" @click="lookAll">
        简介：
        <div v-html="creator.description"></div>
      </div>
    </div>
    <div class="list-title">歌曲列表</div>
    <div class="song-list">
      <router-link :to="'/song/'+item.id" class="song-item" v-for="(item, index) in playlist" :key="index" tag="div">
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
      id: this.$route.params.id,
      playlist: [],
      creator: {},
      flag: true
    };
  },
  created() {
    this.getDetailsList();
  },
  methods: {
    getDetailsList() {
      this.$http.get("playlist/detail?id=" + this.id).then(result => {
        this.creator = result.body.playlist.creator;
        this.playlist = result.body.playlist.tracks;
        this.creator.name = result.body.playlist.name;
        this.creator.description = result.body.playlist.description;
        this.creator.img = result.body.playlist.coverImgUrl;
        this.creator.tags = result.body.playlist.tags;
      });
    },
    lookAll() {
      var intro = document.getElementById("intro");
      var content = document.getElementById("intro-content");
      this.flag = !this.flag;
      if (this.flag == false) {
        intro.style.height = "auto";
        content.style.display = "inline";
      } else {
        intro.style.height = "130px";
        content.style.display = "-webkit-box";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.playlist-container {
  .jingling {
    background: url("//s3.music.126.net/mobile-new/img/index_icon_2x.png?5207a28c3767992ca4bb6d4887c74880=")
      no-repeat;
  }
  background-color: #f8f8f8;
  z-index: 99;
  .pylst-header {
    height: 186px;
    overflow: hidden;
    .black-bg {
      height: 100%;
      background-color: rgba($color: #fff, $alpha: 0.7);
      z-index: 3;
    }

    .bg-blur {
      float: left;
      width: 100%;
      height: 200px;
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      filter: blur(15px);
      background-color: rgba(0, 0, 0, 0.3);
    }

    .info {
      position: absolute;
      top: 30px;
      left: 15px;
      display: flex;
      justify-content: space-between;
      overflow: hidden;
      .left {
        width: 126px;
        height: 126px;
        position: relative;
        // overflow: hidden;
        .icon {
          width: 35px;
          height: 17px;
          border-radius: 9px;
          background-color: rgba($color: red, $alpha: 0.5);
          color: #fff;
          font-size: 9px;
          line-height: 17px;
          text-align: center;
          position: absolute;
          top: 10px;
          left: -4px;
        }
        img {
          height: 100%;
          // width: 100%;
        }
      }
      .right {
        margin-left: 16px;
        .title {
          font-size: 17px;
          color: #fff;
          font-weight: 300;
          height: 44px;
          line-height: 21px;
          padding-right: 20px;
          margin-bottom: 20px;
        }
        .user {
          .avatar {
            display: flex;
            align-items: center;
            img {
              border-radius: 50%;
              margin-right: 5px;
              height: 30px;
            }
            span {
              color: rgba($color: #fff, $alpha: 0.7);
              font-size: 14px;
            }
          }
        }
      }
    }
  }

  #intro {
    // height: 135px;
    color: #666;
    font-size: 14px;
    padding: 10px 10px 0 10px;
    .tags {
      margin-bottom: 15px;
      span {
        display: inline-block;
        height: 22px;
        padding: 0 5px;
        border: 1px solid #eee;
        border-radius: 50px;
        font-size: 12px;
      }
    }
    #intro-content {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      overflow: hidden;
    }
  }
  .list-title {
    height: 23px;
    background-color: #eeeff0;
    font-size: 12px;
    padding: 0 10px;
    line-height: 23px;
  }
  .song-list {
    // padding-left: 10px;
    padding-bottom: 0;
    .song-item {
      display: flex;
      flex: 1;
      padding: 10px 0;
      .index {
        width: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #999;
      }
      .info {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #eee;
        // width: 335px;
        flex: 0 0 90%;

        .left {
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
          display: flex;
          align-items: center;
          width: 35px;
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