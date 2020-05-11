<template>
  <div class="rcmd-container">
    <div class="rcmd-songlist">
      <h2 class="title">推荐歌单</h2>
      <div class="songlist">
        <router-link
          :to="'/playlist/'+item.id"
          class="songlist-item"
          v-for="(item, index) in songList"
          :key="index"
          tag="div"
        >
          <img :src="item.picUrl" />
          <p>{{item.name}}</p>
        </router-link>
      </div>
    </div>
    <br />
    <div class="rcmd-newsong">
      <h2 class="title">最新音乐</h2>
      <div class="newsong">
        <router-link :to="'/song/'+ item.id" tag="div" class="newsong-item" v-for="(item, index) in newSong" :key="index" >
          <div class="info">
            <div class="left">
              <h3>{{item.name}}</h3>
              <p>{{item.song.artists[0].name}}-{{item.name}}</p>
            </div>
            <div class="right">
              <span class="jingling play"></span>
            </div>
          </div>
        </router-link>
      </div>
    </div>
    <footer class="rcmd-footer">
      <div class="logo"></div>
      <div class="find">打开APP,发现更多好音乐</div>
      <p class="copyright">网易公司版权所有©1997-2020杭州乐读科技有限公司运营</p>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      songList: [],
      newSong: []
    };
  },
  created() {
    this.getSongList();
    this.getNewSong();
  },
  methods: {
    getSongList() {
      this.$http.get("personalized").then(result => {
        this.songList = result.body.result;
      });
    },
    getNewSong() {
      this.$http.get("personalized/newsong").then(result => {
        this.newSong = result.body.result;
      });
    }
  }
};
</script>

<style lang="scss">
.rcmd-container {
  .jingling {
    background: url("//s3.music.126.net/mobile-new/img/index_icon_2x.png?5207a28c3767992ca4bb6d4887c74880=")
      no-repeat;
  }
  margin-top: 140px;
  h2 {
    font-size: 17px;
    font-weight: 400;
    border-left: 2px solid red;
    padding-left: 10px;
    margin-bottom: 10px;
  }
  .rcmd-songlist {
    .songlist {
      overflow: hidden;
      height: 340px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .songlist-item {
        width: 120px;
        height: 170px;
        margin: 4px 2px;
        margin-left: 0;
        overflow: hidden;
        img {
          height: 120px;
          width: 120px;
        }
        p {
          font-size: 13px;
          color: black;
          padding: 4px;
          line-height: 14px;

          overflow: hidden;
        }
      }
    }
  }
  .rcmd-newsong {
    .newsong {
      padding-left:10px;
      padding-bottom: 0;
      .newsong-item {
        .info {
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
  .rcmd-footer {
    background: url("//s3.music.126.net/mobile-new/img/recommand_bg_2x.png?d045fafc60e017b653f8065a87496922=")
      no-repeat;
    background-size: 100%;
    background-position: 0 10px;
    width: 100%;
    height: 200px;
    position: relative;
    .logo {
      background: url("../../images/logo.png") no-repeat;
      background-size: 230px 44px;
      width: 230px;
      height: 44px;
      position: absolute;
      top: 75px;
      left: 75px;
    }
    .find {
      border: 1px solid red;
      border-radius: 20px;
      height: 40px;
      width: 300px;
      text-align: center;
      line-height: 40px;
      color: red;
      position: absolute;
      top: 125px;
      left: 40px;
    }
    .copyright {
      font-size: 10px;
      position: absolute;
      top: 170px;
      left: 60px;
    }
  }
}
</style>