<template>
    <div class="topNav">
        <div class="topLeft">
            <svg t="1679022693327" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5086" width="81" height="81"><path d="M849.1 128 174.9 128c-25.9 0-46.9 21-46.9 46.9l0 34.2c0 25.9 21 46.9 46.9 46.9l674.2 0c25.9 0 46.9-21 46.9-46.9l0-34.2C896 149 875 128 849.1 128z" p-id="5087"></path><path d="M849.1 768 174.9 768c-25.9 0-46.9 21-46.9 46.9l0 34.2c0 25.9 21 46.9 46.9 46.9l674.2 0c25.9 0 46.9-21 46.9-46.9l0-34.2C896 789 875 768 849.1 768z" p-id="5088"></path><path d="M849.1 448 174.9 448c-25.9 0-46.9 21-46.9 46.9l0 34.2c0 25.9 21 46.9 46.9 46.9l674.2 0c25.9 0 46.9-21 46.9-46.9l0-34.2C896 469 875 448 849.1 448z" p-id="5089"></path></svg>
        </div>
        
        <div class="topConent">
        <span @click="$router.push('/infoUser')">我的</span>
        <span class="active">发现</span>
        <span>云村</span>
        <span>视频</span>
        </div>

        <div class="topRight">
            <svg @click="$router.push('/search')" t="1679025203028" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6064" width="81" height="81"><path d="M448 768c176.725333 0 320-143.274667 320-320 0-176.725333-143.274667-320-320-320-176.725333 0-320 143.274667-320 320 0 176.725333 143.274667 320 320 320z m0 42.666667c-200.298667 0-362.666667-162.368-362.666667-362.666667S247.701333 85.333333 448 85.333333s362.666667 162.368 362.666667 362.666667-162.368 362.666667-362.666667 362.666667z m304.917333-27.584a21.333333 21.333333 0 0 1 30.165334-30.165334l150.848 150.848a21.333333 21.333333 0 0 1-30.165334 30.165334l-150.848-150.826667z" fill="#3D3D3D" p-id="6065"></path></svg>
        </div>

    </div>
</template>

<style lang="less" scoped>
    .topNav{
        width: 100%;
        height: 1rem;
        padding: .2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .topConent{
            width: 65%;
            height: 100%;
            display: flex;
            justify-content: space-around;
            // align-items: center;
            font-size: .36rem;
            .active{
                font-weight: 900;
            }
        }
    }
</style>