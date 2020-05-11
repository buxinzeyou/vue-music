<template>
  <div class="search-container">
    <div class="search-input">
      <span class="mui-icon mui-icon-search"></span>
      <input
        ref="search"
        type="search"
        name="search"
        class="input"
        placeholder="搜索歌曲、歌手、专辑"
        autocomplete="off"
        v-model="content"
        value
        @keydown="getSearchList();setLocal();"
      />
    </div>

    <div class="hot-search" v-if="flag1">
      <p>热门搜索</p>
      <ul >
        <li @click="(content=item.first)"  v-for="(item, index) in hotSearchList" :key="index">{{item.first}}</li>
      </ul>
    </div>
    <div class="recommend" v-if="flag2">
      <h3>搜索“{{content}}”</h3>
      <ul class="recomlist">
        <router-link :to="'/song/'+item.id"  class="recomitem" v-for="(item, index) in suggest " :key="index" tag="li">
          <span class="mui-icon mui-icon-search"></span>
          <span>{{item.name}}---{{item.ar[0].name}}</span>
        </router-link>
      </ul>
    </div>

    <div class="recent" v-if="flag3">
      <p>最近搜索</p>
      <ul>
        <li @click="(content=item.recent)" v-for="(item, index) in recent" :key="index"><span class="mui-icon mui-icon-refreshempty" ></span>{{item.recent}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hotSearchList: [],
      suggest: [],
      content: "",
      flag1: true,
      flag2: false,
      flag3: true,
      recent:[]
    };
  },
  created() {
    this.getHotSearch();
    this.getSearchList();
    this.recent = JSON.parse(localStorage.getItem('recent')||'[]')
  },
  mounted() {

    this.$refs.search.focus();
  },
  methods: {
    getHotSearch() {
      this.$http.get("search/hot").then(result => {
        this.hotSearchList = result.body.result.hots;
      });
    },
    getSearchList() {
      this.$http
        .get(
          "https://api.imjad.cn/cloudmusic/?type=search&search_type=1&s=" +
            this.content
        )
        .then(result => {
          if(result.body.code === 200) {
            this.suggest = result.body.result.songs;

          } else {
            this.suggest = []
          }
        });
    },
    setLocal() {
      if(event.keyCode == 13) {
        var add = {
          recent: this.content
        }
        this.recent.push(add)
        if(this.recent.length > 5) {
          this.recent.splice(0,1)
        }
        localStorage.setItem('recent',JSON.stringify(this.recent))
      }

    }

    
  },
  watch: {
    content: function(newVal, oldVal) {
      if (this.content != "") {
        this.flag1 = false;
        this.flag2 = true;
        this.flag3 = false;

        
      } else {
        this.flag1 = true;
        this.flag2 = false;
        this.flag3 = true;

      }
      this.suggest = [];
      this.getSearchList();
    }
  }
};
</script>

<style lang="scss" scoped>
.search-container {
  margin-top: 119px;
  .search-input {
    position: relative;
    margin: 0 auto;
    padding: 15px 15px;
    border-bottom: 1px solid #eee;

    .input {
      border-radius: 50px;
      margin: 0;
      height: 30px;
      padding-left: 25px;
    }
    span {
      position: absolute;
      top: 20px;
      left: 20px;
    }
    .mui-icon {
      font-size: 20px;
    }
  }
  .hot-search {
    padding: 15px 10px 0 10px;
    p {
      font-size: 12px;
      margin: 0;
    }
    ul {
      padding-left: 5px;
      list-style: none;
      display: flex;
      flex-wrap: wrap;
      margin: 0;
      margin-top: 5px;
      li {
        border: 1px solid #eee;
        height: 32px;
        border-radius: 50px;
        display: inline-block;
        padding: 0 10px;
        line-height: 32px;
        margin: 0 10px 10px 0;
        font-size: 14px;
      }
    }
  }
  .recommend {
    padding-left: 10px;
    h3 {
      color: #507daf;
      font-size: 15px;
      font-weight: 400;
    }
    .recomlist {
      list-style: none;
      margin: 0;
      padding: 0;
      .recomitem {
        border-top: 1px solid #eee;
        border-bottom: 1px solid #eee;
        height: 45px;
        line-height: 45px;
        font-size: 15px;
        overflow: hidden;

        .mui-icon {
          font-size: 15px;
        }
      }
    }
  }
  .recent {
    ul {
      margin: 0;
      padding: 0;
      list-style: none;
      li {
        padding: 10px;
        border-bottom: 1px solid #eee;
        color: #8f8f94;
      }
    }
  }
}
</style>