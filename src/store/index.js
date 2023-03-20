import {createStore} from 'vuex'
import {getMusicLyric} from "@/request/api/item.js"
import {getPhoneLogin} from "@/request/api/home.js"

export default createStore({
  state: {
    playList: [{ //默认播放列表
      al: {
        id: 127008464,
        name: "最后的句号",
        pic: 109951165956423040,
        picUrl: "https://p1.music.126.net/teQ44sEFry607xd86Garbg==/109951165956423041.jpg",
        pic_str: "109951165956423041",
      },
      id: 1842865092,
      name: "最后的句号",
      ar: [{ name: "小新" }]
    }],
    playListIndex: 0, //默认下标为0
    isbtnShow: true, //暂停按钮的显示
    detailShow: false, //歌曲详情页的显示
    lyricList: {},//歌词
    currentTime: 0,//当前时间
    duration: 0,//歌曲总时长
    isLogin: false,//判断是否登录
    isFooterMusic: true,//判断底部组件是否需要显示
    token: "",
    user: {},//用户信息
  },
  getters: {
  },
  mutations: {
    updateIsbtnShow: function (state, value) {
      state.isbtnShow = value
    },
    pushPlayList:function(state,value){
      state.playList.push(value)
    },
    updatePlayList: function (state, value) {
      state.playList = value
      console.log(state.playList);
    },
    updatePlayListIndex: function (state, value) {
      state.playListIndex = value
    },
    updateDetailShow: function (state) {
      state.detailShow = !state.detailShow
    },
    updateLyricList:function(state,value){
      state.lyricList=value
    },
    updateCurrentTime:function(state,value){
      // console.log(state.currentTime);
      state.currentTime=value
    },
    updateDuration:function(state,value){
      state.duration=value
    },
    updateIsLogin:function(state,value){
      state.isLogin=true
    },
    updateToken:function(state,value){
      state.token=value
      localStorage.setItem('token',state.token)
    },
    updateUser:function(state,value){
      state.user=value
    }
  },
  actions: {
    getLyric: async function (context, value) {
      let res = await getMusicLyric(value)
      console.log(res);
      context.commit("updateLyricList",res.data.lrc)
    },
    getLogin:async function(context,value){
      let res=await getPhoneLogin(value);
      // console.log(res);
      return res
    }
  },
  modules: {
  }
})
