<template>
    <div class="FooterMusic">
      <div class="footerLeft" @click="updateDetailShow">
        <img :src="playList[playListIndex].al.picUrl" alt="" />
        <div>
          <p>{{ playList[playListIndex].name }}</p>
          <span>横滑切换上下首哦</span>
        </div>
      </div>
      <div class="footerRight">
        <svg @click="play"  v-if="isbtnShow" t="1679110724583" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="22345" width="81" height="81"><path d="M512 0C230.4 0 0 230.4 0 512s230.4 512 512 512 512-230.4 512-512S793.6 0 512 0z m0 981.333333C253.866667 981.333333 42.666667 770.133333 42.666667 512S253.866667 42.666667 512 42.666667s469.333333 211.2 469.333333 469.333333-211.2 469.333333-469.333333 469.333333z" fill="#666666" p-id="22346"></path><path d="M672 441.6l-170.666667-113.066667c-57.6-38.4-106.666667-12.8-106.666666 57.6v256c0 70.4 46.933333 96 106.666666 57.6l170.666667-113.066666c57.6-42.666667 57.6-106.666667 0-145.066667z" fill="#666666" p-id="22347"></path></svg>
        <svg @click="play"  v-else t="1679122540423" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="25452" width="81" height="81"><path d="M442.181818 709.818182c0 37.236364-30.254545 69.818182-69.818182 69.818182s-69.818182-30.254545-69.818181-69.818182v-395.636364c0-37.236364 30.254545-69.818182 69.818181-69.818182s69.818182 30.254545 69.818182 69.818182v395.636364z m279.272727 0c0 37.236364-30.254545 69.818182-69.818181 69.818182s-69.818182-30.254545-69.818182-69.818182v-395.636364c0-37.236364 30.254545-69.818182 69.818182-69.818182s69.818182 30.254545 69.818181 69.818182v395.636364z" p-id="25453"></path></svg>
        <svg t="1679110892920" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="24197" width="81" height="81"><path d="M981.333333 917.333333a21.333333 21.333333 0 0 1-21.333333 21.333334H64a21.333333 21.333333 0 0 1 0-42.666667h896a21.333333 21.333333 0 0 1 21.333333 21.333333zM490.666667 170.666667h469.333333a21.333333 21.333333 0 0 0 0-42.666667H490.666667a21.333333 21.333333 0 0 0 0 42.666667z m469.333333 341.333333H64a21.333333 21.333333 0 0 0 0 42.666667h896a21.333333 21.333333 0 0 0 0-42.666667zM76.193333 446.32C96 461.16 121.953333 469.333333 149.333333 469.333333s53.333333-8.173333 73.14-23.013333c21.333333-16 33.526667-38.666667 33.526667-62.32V179.266667q3.206667 3.58 6.586667 6.813333a21.473333 21.473333 0 0 0 2.953333 2.366667 64.24 64.24 0 0 1 13.333333 12c8.666667 10.22 15.84 24.18 20.733334 40.373333a21.333333 21.333333 0 0 0 40.84-12.346667c-6.666667-22.053333-16.44-40.773333-29.04-55.626666a107.46 107.46 0 0 0-20.493334-18.78c-8.813333-8.806667-16.526667-20.666667-22.36-34.42-9.033333-21.333333-11.813333-42.666667-12.553333-56.78A21.333333 21.333333 0 0 0 234.666667 42.666667h-0.566667A21.333333 21.333333 0 0 0 213.333333 64v251.56C195 304.613333 172.666667 298.666667 149.333333 298.666667c-27.38 0-53.333333 8.173333-73.14 23.013333-21.333333 16-33.526667 38.666667-33.526666 62.32s12.22 46.34 33.526666 62.32z" fill="#5C5C66" p-id="24198"></path></svg>
      </div>
      <audio
        ref="audio"
        :src="`https://music.163.com/song/media/outer/url?id=${playList[playListIndex].id}.mp3`"
      ></audio>
      <van-popup v-model:show='detailShow' position="right" :style="{ height: '100%', width: '100%' }">
        <MusicDetail
          :musicList="playList[playListIndex]"
          :play="play"
          :isbtnShow="isbtnShow"
          :addDuration="addDuration"
        />
      </van-popup>
    </div>
  </template>
  <script>
  import { mapMutations, mapState } from "vuex";
  import MusicDetail from "@/components/item/MusicDetail.vue";
  export default {
    data() {
      return {
        interVal: 0,
      };
    },
    computed: {
      ...mapState(["playList", "playListIndex", "isbtnShow", "detailShow"]),
    },
    mounted() {
        console.log(this.$refs);
        this.$store.dispatch("getLyric", this.playList[this.playListIndex].id);
        this.updateTime()
    },
    updated() {
      this.$store.dispatch("getLyric", this.playList[this.playListIndex].id);
      this.addDuration()
    },
    methods: {
      play: function () {
        // 判断音乐是否播放
        if (this.$refs.audio.paused) {
          this.$refs.audio.play();
          this.updateIsbtnShow(false);
          this.updateTime(); //播放就调用函数进行传值
        } else {
          this.$refs.audio.pause();
          this.updateIsbtnShow(true);
          clearInterval(this.interVal); //暂停清除定时器
        }
      },
      addDuration:function(){
        this.updateDuration(this.$refs.audio.duration)
      },
      updateTime: function () {
        this.interVal = setInterval(() => {
          this.updateCurrentTime(this.$refs.audio.currentTime);
        }, 1000);
      },
      ...mapMutations([
        "updateIsbtnShow",
        "updateDetailShow",
        "updateCurrentTime",
        "updateDuration"
      ]),
    },
    watch: {
      playListIndex: function () {
        //监听如果下标发生了改变，就自动播放音乐
        this.$refs.audio.autoplay = true;
        if (this.$refs.audio.paused) {
          //如果是暂停状态，改变图标
          this.updateIsbtnShow(false);
        }
      },
      playList: function () {
        if (this.isbtnShow) {
          this.$refs.audio.autoplay = true;
          this.updateIsbtnShow(false);
        }
      },
    },
    components: {
      MusicDetail,
    },
  };
  </script>
  <style lang="less" scoped>
  .FooterMusic {
    width: 100%;
    height: 1.4rem;
    background-color: #fff;
    position: fixed;
    bottom: 0;
    border-top: 1px solid #999;
    display: flex;
    padding: 0.2rem;
    justify-content: space-between;
    .footerLeft {
      width: 60%;
      height: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      img {
        width: 1rem;
        height: 1rem;
        border-radius: 50%;
      }
    }
    .footerRight {
      width: 20%;
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .icon {
        width: 0.6rem;
        height: 0.6rem;
      }
    }
  }
  </style>