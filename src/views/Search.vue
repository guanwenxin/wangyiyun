<template>
    <div class="searchTop">
      <svg @click="$router.go(-1)" t="1679277341553" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="44750" width="81" height="81"><path d="M729.6 931.2l-416-425.6 416-416c9.6-9.6 9.6-25.6 0-35.2-9.6-9.6-25.6-9.6-35.2 0l-432 435.2c-9.6 9.6-9.6 25.6 0 35.2l432 441.6c9.6 9.6 25.6 9.6 35.2 0C739.2 956.8 739.2 940.8 729.6 931.2z" p-id="44751"></path></svg>
      <input
        type="text"
        placeholder="陈奕迅"
        v-model="searchKey"
        @keydown.enter="enterKey"
      />
    </div>
    <div class="searchHistory">
      <span class="searchSpan">历史</span>
      <span
        v-for="item in keyWorldList"
        :key="item"
        class="spanKey"
        @click="searchHistory(item)"
      >
        {{ item }}
      </span>
      <svg @click="delHistory" t="1679278178629" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="45769" width="81" height="81"><path d="M202.666667 256h-42.666667a32 32 0 0 1 0-64h704a32 32 0 0 1 0 64H266.666667v565.333333a53.333333 53.333333 0 0 0 53.333333 53.333334h384a53.333333 53.333333 0 0 0 53.333333-53.333334V352a32 32 0 0 1 64 0v469.333333c0 64.8-52.533333 117.333333-117.333333 117.333334H320c-64.8 0-117.333333-52.533333-117.333333-117.333334V256z m224-106.666667a32 32 0 0 1 0-64h170.666666a32 32 0 0 1 0 64H426.666667z m-32 288a32 32 0 0 1 64 0v256a32 32 0 0 1-64 0V437.333333z m170.666666 0a32 32 0 0 1 64 0v256a32 32 0 0 1-64 0V437.333333z" fill="#000000" p-id="45770"></path></svg>
    </div>
       <div class="itemList">
        <div class="item" v-for="(item, i) in searchList" :key="i">
          <div class="itemLeft" @click="updateIndex(item)">
            <span class="leftSpan">{{ i + 1 }}</span>
            <div>
              <p>{{ item.name }}</p>
              <span v-for="(item1, index) in item.artists" :key="index">{{
                item1.name
              }}</span>
            </div>
          </div>
          <div class="itemRight">
            <svg t="1679280789101" class="icon bofang" v-if='item.mvid !=0' viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="46803" width="81" height="81"><path d="M546.133333 977.749333C298.666667 977.749333 97.450667 776.533333 97.450667 529.066667S298.666667 80.384 546.133333 80.384 994.816 281.6 994.816 529.066667 793.6 977.749333 546.133333 977.749333z m0-829.098666c-209.749333 0-380.416 170.666667-380.416 380.416s170.666667 380.416 380.416 380.416 380.416-170.666667 380.416-380.416S755.882667 148.650667 546.133333 148.650667z" fill="#231815" p-id="46804"></path><path d="M498.517333 692.906667c-10.752 0-21.504-2.56-31.402666-7.850667a67.584 67.584 0 0 1-36.010667-59.904V432.981333c0-25.088 13.824-48.128 36.010667-59.904 22.186667-11.776 48.981333-10.24 69.802666 3.925334l133.12 96.426666c18.261333 12.629333 29.184 33.450667 29.184 55.637334 0 22.357333-11.093333 43.349333-29.696 55.978666l-131.925333 95.573334c-12.117333 8.192-25.6 12.288-39.082667 12.288z m-1.024-260.096l1.706667 192.341333 131.072-95.914667-0.341333-0.341333h0.341333l-132.778667-96.085333z" fill="#231815" p-id="46805"></path></svg>
            <svg t="1679280860803" class="icon liebiao" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="47802" width="81" height="81"><path d="M902.779659 795.440467c-6.179746-6.181793-14.304797-9.577123-22.950711-9.577123L129.341299 785.863345c-17.945721 0-32.540114 14.59644-32.540114 32.525788 0 17.962094 14.594393 32.555463 32.540114 32.555463l750.487649 0c17.931395 0 32.525788-14.594393 32.525788-32.555463C912.354735 809.745265 908.959406 801.61919 902.779659 795.440467" fill="#272536" p-id="47803"></path><path d="M879.828948 461.055724 129.341299 461.055724c-17.945721 0-32.525788 14.594393-32.525788 32.541137 0 17.930371 14.580067 32.525788 32.525788 32.525788l750.487649 0c17.931395 0 32.525788-14.594393 32.525788-32.525788 0-8.647961-3.39533-16.800641-9.575076-22.980387C896.599913 464.436728 888.474862 461.055724 879.828948 461.055724" fill="#272536" p-id="47804"></path><path d="M902.779659 154.426115c-6.179746-6.179746-14.304797-9.574053-22.950711-9.574053L129.341299 144.852062c-17.945721 0-32.540114 14.594393-32.540114 32.540114 0 17.946744 14.594393 32.525788 32.540114 32.525788l750.487649 0c17.931395 0 32.525788-14.579043 32.525788-32.525788C912.354735 168.745239 908.959406 160.606885 902.779659 154.426115" fill="#272536" p-id="47805"></path></svg>
          </div>
        </div>
      </div>
  </template>
  <script>
  import { getSearchMusic } from "@/request/api/home.js";
  export default {
    data() {
      return {
        keyWorldList: [],
        searchKey: "",
        searchList: [],
      };
    },
    mounted() {
      this.keyWorldList = JSON.parse(localStorage.getItem("keyWorldList"))
        ? JSON.parse(localStorage.getItem("keyWorldList"))
        : [];
    },
    methods: {
      enterKey: async function () {
        if (this.searchKey !== "") {
          this.keyWorldList.unshift(this.searchKey);
          //   去重
          this.keyWorldList = [...new Set(this.keyWorldList)];
          // 固定长度
          if (this.keyWorldList.length > 10) {
            this.keyWorldList.splice(this.keyWorldList.length - 1, 1);
          }
          localStorage.setItem("keyWorldList", JSON.stringify(this.keyWorldList));
          let res = await getSearchMusic(this.searchKey);
          // console.log(res);
          this.searchList = res.data.result.songs;
          this.searchKey = "";
        }
      },
      delHistory: function () {
        localStorage.removeItem("keyWorldList");
        this.keyWorldList = [];
      },
      searchHistory:async function (item) {
        let res = await getSearchMusic(item);
      //   console.log(res);
        this.searchList = res.data.result.songs;
      },
      updateIndex:function(item){
          item.al=item.album
          item.al.picUrl=item.album.artist.img1v1Url
          this.$store.commit("pushPlayList",item)
          this.$store.commit("updatePlayListIndex",this.$store.state.playList.length-1)
          
      }
    },
  };
  </script>
  <style lang="less" scoped>
  .searchTop {
    width: 100%;
    height: 1rem;
    padding: 0 0.2rem;
    display: flex;
    align-items: center;
    input {
      margin-left: 0.2rem;
      border: none;
      border-bottom: 1px solid #999;
      width: 90%;
      padding: 0.1rem;
    }
  }
  .searchHistory {
    width: 100%;
    padding: 0.2rem;
    position: relative;
    .searchSpan {
      font-weight: 700;
    }
    .spanKey {
      padding: 0.1rem 0.2rem;
      background-color: rgb(185, 169, 169);
      border-radius: 0.4rem;
      margin: 0.1rem 0.2rem;
      display: inline-block;
    }
    .icon {
      width: 0.3rem;
      height: 0.3rem;
      position: absolute;
      right: 0.2rem;
    }
  }
   .itemList {
      width: 100%;
      padding: .2rem;
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
           .bofang{
              position: absolute;
              left: 0;
            }
           .liebiao{
              position: absolute;
              right: 0;
            }
        }
      }
    }
  </style>