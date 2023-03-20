<template>
  <div class="musicList">
    <div class="musicList">
      <div class="musicTop">
        <div class="title">发现好歌单</div>
        <div class="more">查看更多</div>
      </div>
      <div class="musicContent">
        <van-swipe
          :loop="false"
          :width="150"
          class="my-swpie"
          :show-indicators="false"
        >
          <van-swipe-item v-for="item in musicList" :key="item">
            <router-link :to="{path:'/itemMusic',query:{id:item.id}}">
            <img :src="item.picUrl" alt="">
            <span class="playCount">
                <svg t="1679034445214" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9174" width="81" height="81"><path d="M683.7 510.7L422.9 684.6V336.8l260.8 173.9zM509.8 858.5c192.1 0 347.8-155.7 347.8-347.8S701.9 162.9 509.8 162.9 162 318.7 162 510.7s155.7 347.8 347.8 347.8z m0 87c-240.1 0-434.7-194.6-434.7-434.7S269.7 76 509.8 76s434.7 194.6 434.7 434.7-194.6 434.8-434.7 434.8z" p-id="9175"></path></svg>
                {{ changeCount(item.playCount) }}
            </span>
            <span class="name">
                {{ item.name }}
            </span>
        </router-link>
        </van-swipe-item>
        </van-swipe>
      </div>
    </div>
  </div>
</template>

<script>
import { getMusicList } from "@/request/api/home.js";
export default {
  data() {
    return {
      musicList: [],
    };
  },
  methods: {
    async getGedan() {
      let res = await getMusicList();
      console.log(res);
      this.musicList = res.data.result;
    },
    changeCount: function (num) {
      if (num >= 100000000) {
        return (num / 100000000).toFixed(1) + "亿";
      } else if (num >= 10000) {
        return (num / 10000).toFixed(1) + "万";
      }
    },
  },
  mounted() {
    this.getGedan();
  },
};
</script>

<style lang="less" scoped>
.musicList {
  width: 100%;
  height: 5rem;
  padding: 0.2rem;
  .musicTop {
    width: 100%;
    height: 0.6rem;
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.2rem;
    .title {
      font-size: 0.4rem;
      font-weight: 900;
    }
    .more {
      border: 1px solid #ccc;
      text-align: center;
      line-height: 0.6rem;
      padding: 0 0.2rem;
      border-radius: 0.4rem;
    }
  }
  .musicContent {
    width: 100%;
    height: 3.6rem;

    .van-swipe-item {
      //   margin-right: 0.14rem;
      padding-right: 0.2rem;
      position: relative;
      height: 3.8rem;
      img {
        width: 100%;
        height: 2.4rem;
        border-radius: 0.2rem;
        //   position: absolute;
      }
      .playCount {
        position: absolute;
        z-index: 100;
        right: 0.3rem;
        color: white;
        margin-top: 0.06rem;
        .icon {
          width: 0.3rem;
          height: 0.3rem;
        }
      }
      .name {
        //   position: absolute;
        bottom: 0px;
      }
    }
  }
}
</style>