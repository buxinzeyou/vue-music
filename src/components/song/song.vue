<template>
  <div class="song-container">
    <audio id="audio" :src="song.url" autoplay @timeupdate="timeupdate" ref="audio"></audio>
    <div class="needle">
      <img
        src="https://s3.music.126.net/mobile-new/img/needle-ip6.png?be4ebbeb6befadfcae75ce174e7db862="
        width="100px"
        alt
      />
    </div>
    <div class="bg-blur" :style="'background: url('+songdetail.picUrl+'?param=500y800) no-repeat'"></div>

    <div class="song-wrap">
      <div class="song">
        <img
          class="CD"
          src="https://s3.music.126.net/mobile-new/img/disc_default.png?7c9b3adc16f5485c2bfbe8a540534188="
          alt
        />
        <img class="songimg" @click="play" :src="songdetail.picUrl+'?param=184y184'" alt />
        <div class="btn" @click="play">
          <img
            class="play"
            v-show="!flag"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKgAAACoCAMAAABDlVWGAAABJlBMVEUAAAAAAAD////l5eX///9iYmKDg4Pn5+f///9YWFj////09PT////4+Pjt7e3///////9oaGhBQUH////////////////CwsIaGhr///8xMTEkJCT////7+/vp6en///////////////+srKyoqKienp58fHz////y8vKTk5P///8EBAT////////////////V1dW3t7f////////////////////v7++jo6N9fX3///////+UlJT////s7Oz////Nzc3///////+RkZGPj495eXkTExP////////29vb////k5OTPz882Njb////////////c3Nz///////9ycnJsbGz///9dXV3////////Q0ND///9QUFD///////////////////9FeiN6AAAAYXRSTlNmAP3c+oWT3ueB9vA19ealRId5EQbuurpu83RxD/nh05dfAquooo+M7JtzaSolE+vMspJ3Wj7w6KSQj6ucKeXNxLWnmpmObVYd8t3axXZRSt7TvbKLideCeSzHnn4V3Nh6YarbPAAABlRJREFUeNrU14lWEmEYh/GXcdj3HQTZRCkS913UNE2zbLd9Oc/930Q2LmVpwPAC03MD/M5835n/IC6dkqHnzcVoZvdkLp2HfHruZDcTXWw+DyVdOilAt6uNjI8782Ua1W2XjTShtdDSmzRdlH6zFKq5bKQBTS5H57gqXJrP1tsb7kShkBPJFQoJ90a7np0vhblqLrrc8R7oQ4vVPZOLIp8mp8flzsanJ59FuMjcqxZdHVKFxvYDWK1lPQXpooInu4ZVYD/m6pAWNLn0DSvvekJ6KLHuxerb0qyrQwrQViV/oZzKSc/lpi6sgUrLdSN16MyWARBcOBWbnS4EAYytj67r1KGtqMUseaSvPCWLGr14u+pDZysmwFhc+i4+BmBWZgcATTXTFvO9qOS3qOlmShu68g7A6xa13F6A7yuq0ORnA9jZENU2dgDjc1IPGvMB4QNR7+AJ4IspQVObBjDmF+Wur6qxmdKAbpeBoEcGlCcIlLf7hx7lOzxOlYeaP+oTmmoYQFsGWhswGql+oMUMEInLgItHgEzRPvS43OHYVY+/fGwXGvIBkzKU6oAvZA8aywOPZEg9AvIxO9AXAZg4lKF1OAGBF71DX5jw5EyG2NkTMJ/3Co2ZcM8tQ819D8xYb9CVgA2nijSw0gs0tArBzk59aRBWQ91Dj30QjssIiofBd9wttFiGiTMZSWcTUC52B629Bg5lRB0Cr2tdQRvAfRlZ94FGN9AjA+oywupgHHWGzuRhTEbaGORnOkFTZYj4ZaT5I1BOdYBuAnEZcXFg89/QmAFtGXltMGL/ghZ9I7+g19fUV/wHtAJBvzggfxAqd0NXDPCII/KAsXIXNPXOIQd/efjvUndAmxB2xMH/zB+G5u3Qr2k4EMd0AOmvt0IrsCMOagcqt0FbJkyLg5oGs3ULNApecVReiP4NnTHALY7KDcbHv6BbDno1XTUGW39CWwa8F4flB6P1B3TRgQ/UeqSLN6GzAQd83f1dHAKzN6AfoCQOrARLN6Andr9GpiITT9/KwPLAye/QGATFTusAxsOCDKogxH6D7sOC2GkNq+B9GVALsP8LWgzAqdjJ4LJXCRlIpxAoXkOrtteT6yYmH8gg8kL1GroHU/1CoTSQBZ6CvSto0oRc/1DM7GNRLwdm8hK6DF5RgMI9j6jnheVLaBTWdaAwPy7KrUP0Alqbg4QWlPCU6JaAuZoFDcGaqEHh6RdRLQIhC/oBsppQzAXVN1UWlixoBjyqUIhozr8H3vyE1lYhpwnVnv8CpH9CZyAi2lAIPtK8pDPn0Cp8UoWqz/8zqJ5DGzCpCdWf/0lonEMzMK0J1Z//acicQ30wrgnVn/9x8LkkCWFRherPfxiSEgKvLlR//r0QkmWY14Xqz/88LEsTsqpQ/fm3RlQWoa4L1Z//OixKFNq6UP35vw9RycDGMKAYD3P9vEhlF9y6UP35d8OuvISELlR//hPwUqxh0oTqz781TbIKueFB4em4rb/Mq5IfMpRn0nOPIS+ADBUatvcz/w/0B/X2VgMACMNQ9AMnWOADKwT/QuahyZYcDcte7e146X9W+vFmWmEzOeOJGfjMCmWOEubMYw7no7wizHPHvMuMAMFIOo5IxsiOjJDLSOOM2cDYN44hxliMjGnL2OAOWMCgGgz84uBEDKDFIG8ORLhzLPO2Y5kK6PpMdJiBsR28nQkMOBEMJtTixISY4JUTZWPCgVXevesgCINhGG7dZPLEIg7GRRsMTsaoMTEOnmLUuBgn+e//JuTHGt0aKT3y3QIFpj6vO9ctnbnAmr9PIysefn0E0PfhkjW92HFtnQHULn5AAG9aISZGF3NaQYxVrInRrcVYBW4H5vkPEPIfuIV5UGXhClHT8Qv9oXQ/MckoTfb+wVTGqK8ZUl9+4mmUnpGj03pOmzlH5y/w5w6ZiAil+G9qA0KpkfWMTxKsJ6530wel3try9CwjSscg27BTDcw321gHjzyuEjj9IbwP1hPeDqHo2abP0pn5XMR/NhTB/fyo2gv3q0gh1JSkEHCrUuMSG1VxCdxDOtfR1ZDr4AGUwIUACi5JJZMyx1RHUgY3kIn0LBuFQk2EFlv7J3t0+id7JPi86wlJsfm9FUVbQrZR1LrPmQ0hKZfSXC7Fzr5LeD7uGoYBQBCGV56PS2g5ewGy+NkUNbjr9gAAAABJRU5ErkJggg=="
            width="56px"
            height="56px"
            alt
          />
        </div>
      </div>
    </div>
    <div class="lyric-container">
      <div class="lyric">
        <LyricScroll
          :lyric="lyric"
          :t-lyric="tLyric"
          :lyric-active-class="'lyric-active'"
          :lyric-center-class="'lyric-center'"
          triangle-width="14px"
          triangle-color="#fff"
          center-line-color="#fff"
          center-time-color="#fff"
          :current-time="currentTime"
          @change-current-time="handleChangeCurrentTime"
        />
      </div>
    </div>

    <!-- <div id="lyric"></div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      song: {},
      songdetail: {},
      originLyric: "",
      flag: true,

      // 原始译词
      originTLyric: "",
      // 当前播放时间
      currentTime: 0
    };
  },
  computed: {
    // 原词，格式为{xx: 歌词, ...}，xx为该词开始时间
    lyric() {
      return this.lyricToObj(this.originLyric);
    },
    // 译词，格式同原词
    tLyric() {
      return this.lyricToObj(this.originTLyric);
    }
  },
  created() {
    this.getSong();
    this.getSongImg();
    this.getSongLyric();
  },

  methods: {
    // 将00:00.00转换为秒数
    timeStrToNum(str) {
      const minute = Number(str.slice(0, 2));
      const second = Number(str.slice(3, 5));
      const minSec = Number(str.slice(6, 8));
      return minute * 60 + second + minSec / 100;
    },
    // 将歌词字符串转换为对象，格式为{开始时间: 歌词, ...}
    lyricToObj(lyricStr) {
      const obj = {};
      let perLyric;
      let time;
      lyricStr.split("\n").forEach((item, idx) => {
        perLyric = item.slice(item.indexOf("]") + 1);
        if (perLyric) {
          time = this.timeStrToNum(item.slice(1, 9));
          obj[time] = perLyric;
        }
      });
      return obj;
    },
    // 更新播放时间
    timeupdate() {
      this.changeCurrentTime(this.$refs.audio.currentTime);
    },

    changeCurrentTime(newTime) {
      this.currentTime = newTime;
    },

    handleChangeCurrentTime(time) {
      this.$refs.audio.currentTime = time;
    },

    getSong() {
      this.$http.get("music/url?id=" + this.id).then(result => {
        this.song = result.body.data[0];
      });
    },
    getSongImg() {
      this.$http.get("song/detail?ids=" + this.id).then(result => {
        this.songdetail = result.body.songs[0].al;
      });
    },
    play() {
      if (!this.flag) {
        document.getElementById("audio").play();
        this.flag = !this.flag;
      } else {
        document.getElementById("audio").pause();
        this.flag = !this.flag;
      }
    },
    getSongLyric() {
      this.$http
        .get("https://api.imjad.cn/cloudmusic/?type=lyric&id=" + this.id)
        .then(result => {
          if (result.body.code === 200) {
            this.originLyric = result.body.lrc.lyric;
          } else {
            this.lyric = "未找到歌词";
          }
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.song-container {
  .bg-blur {
    float: left;
    width: 100%;
    height: 650px;
    filter: blur(15px);
    overflow: hidden;
  }
  .needle {
    position: absolute;
    z-index: 99;
    left: 50%;
  }

  .song-wrap {
    position: absolute;
    padding-top: 70px;
    .song {
      display: flex;
      justify-content: center;
      position: relative;
      .CD {
        width: 80%;
        border-radius: 50%;
        border: 10px solid rgba($color: #fff, $alpha: 0.1);
      }

      .songimg {
        border-radius: 50%;
        width: 50%;
        position: absolute;
        top: 19%;
        // margin-top: -50%;
      }
      .btn {
        position: absolute;
        top: 50%;
        margin-top: -28px;
      }
    }
  }
  .lyric-container {
    width: 100%;
    height: 200px;
    position: absolute;
    top: 400px;
    display: flex;
    justify-content: center;
  }
  .lyric {
    // left: 50%;
    // margin-left: -150px;
    width: 80%;
    height: 200px;
    // border: 1px solid red;
    color: #fff;
    overflow: hidden;
    text-align: center;
  }
}
</style>