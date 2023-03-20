<template>
    <div class="itemMusicList">
      <div class="itemListTop">
        <div class="listLeft">
            <svg t="1679108760300" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="18358" width="81" height="81"><path d="M512 0C230.4 0 0 230.4 0 512s230.4 512 512 512 512-230.4 512-512S793.6 0 512 0z m0 981.333333C253.866667 981.333333 42.666667 770.133333 42.666667 512S253.866667 42.666667 512 42.666667s469.333333 211.2 469.333333 469.333333-211.2 469.333333-469.333333 469.333333z" fill="#666666" p-id="18359"></path><path d="M672 441.6l-170.666667-113.066667c-57.6-38.4-106.666667-12.8-106.666666 57.6v256c0 70.4 46.933333 96 106.666666 57.6l170.666667-113.066666c57.6-42.666667 57.6-106.666667 0-145.066667z" fill="#666666" p-id="18360"></path></svg>
          <span
            >播放全部<span>(共{{ itemList.length }}首)</span></span
          >
        </div>
        <div class="listRight">
            <svg t="1679108785119" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="19343" width="81" height="81"><path d="M863.328262 481.340895l-317.344013 0.099772L545.984249 162.816826c0-17.664722-14.336138-32.00086-32.00086-32.00086s-31.99914 14.336138-31.99914 32.00086l0 318.400215-322.368714-0.17718c-0.032684 0-0.063647 0-0.096331 0-17.632039 0-31.935493 14.239806-32.00086 31.904529-0.096331 17.664722 14.208843 32.031824 31.871845 32.095471l322.59234 0.17718 0 319.167424c0 17.695686 14.336138 32.00086 31.99914 32.00086s32.00086-14.303454 32.00086-32.00086L545.982529 545.440667l317.087703-0.099772c0.063647 0 0.096331 0 0.127295 0 17.632039 0 31.935493-14.239806 32.00086-31.904529S880.960301 481.404542 863.328262 481.340895z" fill="#575B66" p-id="19344"></path></svg>
          <span>收藏({{ subscribedCount }})</span>
        </div>
      </div>
      <div class="itemList">
        <div class="item" v-for="(item, i) in itemList" :key="i">
          <div class="itemLeft" @click="playMusic(i)">
            <span class="leftSpan">{{ i + 1 }}</span>
            <div>
              <p>{{ item.name }}</p>
              <span v-for="(item1, index) in item.ar" :key="index">{{
                item1.name
              }}</span>
            </div>
          </div>
          <div class="itemRight">
            <svg t="1679108896154" class="icon liebiao" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="21370" width="81" height="81"><path d="M98.357122 818.73194c-14.213723 0-25.764803 11.532661-25.764803 25.76071 0 14.233166 11.55108 25.770943 25.764803 25.770943M922.866648 818.73194 98.128925 818.73194c-14.21884 0-25.770943 11.532661-25.770943 25.76071 0 14.233166 11.552104 25.770943 25.770943 25.770943l824.737724 0c14.213723 0 25.764803-11.538801 25.764803-25.770943C948.633498 830.262554 937.081395 818.73194 922.866648 818.73194zM98.357122 483.770052c-14.213723 0-25.764803 11.537777-25.764803 25.76992 0 14.229073 11.55108 25.764803 25.764803 25.764803M922.866648 483.770052 98.128925 483.770052c-14.21884 0-25.770943 11.537777-25.770943 25.76992 0 14.229073 11.552104 25.764803 25.770943 25.764803l824.737724 0c14.213723 0 25.764803-11.537777 25.764803-25.764803C948.633498 495.307829 937.081395 483.770052 922.866648 483.770052zM98.357122 148.815327c-14.213723 0-25.764803 11.539824-25.764803 25.768897 0 14.227026 11.55108 25.76378 25.764803 25.76378M98.128925 200.346981l824.737724 0c14.213723 0 25.764803-11.536754 25.764803-25.76378 0-14.229073-11.55108-25.768897-25.764803-25.768897L98.128925 148.814304c-14.21884 0-25.770943 11.539824-25.770943 25.768897C72.359005 188.81125 83.911108 200.346981 98.128925 200.346981z" fill="#272636" p-id="21371"></path></svg>
          </div>
        </div>
      </div>
    </div>
  </template>
  <script>
  import { mapMutations } from 'vuex';
  export default {
    setup(props) {
      console.log(props);
    },
    props: ["itemList", "subscribedCount"],
    methods:{
      playMusic:function(i){
        this.updatePlayList(this.itemList)
        this.updatePlayListIndex(i)
      },
      ...mapMutations(['updatePlayList','updatePlayListIndex'])
    }
  };
  </script>
  <style lang="less" scoped>
  .itemMusicList {
    width: 100%;
    height: 10rem;
    background-color: #fff;
    padding: 0 0.2rem;
    margin-top: 0.2rem;
    border-top-left-radius: 0.4rem;
    border-top-right-radius: 0.4rem;
    .itemListTop {
      width: 100%;
      height: 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .listLeft {
        width: 3rem;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .icon {
          stroke: #333333;
          stroke-width: 20;
        }
        span {
          font-weight: 700;
          span {
            font-weight: 400;
            font-size: 0.24rem;
            color: #999;
          }
        }
      }
      .listRight {
        display: flex;
        align-items: center;
        background-color: red;
        padding: 0.2rem;
        border-radius: 0.4rem;
        color: #fff;
        .icon {
          width: 0.3rem;
          height: 0.3rem;
          fill: #fff;
          margin-right: 0.1rem;
          stroke: #fff;
          stroke-width: 50;
        }
      }
    }
    .itemList {
      width: 100%;
      .item {
        width: 100%;
        height: 1.4rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .itemLeft {
          width: 85%;
          height: 100%;
          display: flex;
          align-items: center;
          .leftSpan {
            display: inline-block;
            width: 0.2rem;
            text-align: center;
          }
          div {
            p {
              width: 4.54rem;
              height: .4rem;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              font-weight: 700;
            }
            span{
              font-weight: 400;
              font-size: .24rem;
              color: #999;
            }
            margin-left: 0.3rem;
          }
        }
        .itemRight{
          width: 20%;
          height: 100%;
          display: flex;
          // justify-content: space-between;
          align-items: center;
          position: relative;
          .icon{
            fill: #999;
          }
           .liebiao{
              position: absolute;
              right: 0;
            }
        }
      }
    }
  }
  </style>