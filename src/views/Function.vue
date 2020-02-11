<template>
    <div class="function rela">
        <!--TODO: 更换标题-->
        <img src="../../static/images/iocn-liewe.png" alt="" class="text">
        <ul class="modules">
            <li v-for="(v, i) in modules" :key="i" @click="toClickRequest('/ipad/router/toNavigation', v.code, v.path)">
                <img :src="v.imgs" alt="">
                <p>{{v.title}}</p>
            </li>
        </ul>
        <ul class="modules">
            <li v-for="(v, i) in modules2" :key="i" @click="toClickRequest('/ipad/router/toNavigation', v.code, v.path)">
                <img :src="v.imgs" alt="" v-show="v.imgs">
                <p v-show="v.title">{{v.title}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'function',
        data() {
            return {
                modules: [
                    {
                        id: 0,
                        title: "招商概揽",
                        imgs: require("../../static/images/iocn-11.png"),
                        code: "20"
                    },
                    {
                        id: 1,
                        title: "政策匹配",
                        imgs: require("../../static/images/iocn-22.png"),
                        code: "10",
                        path: "funDetail?title=1"
                    },
                    {
                        id: 2,
                        title: "产业分析",
                        imgs: require("../../static/images/iocn-33.png"),
                        code: "30"
                    }
                ],
                modules2: [
                    {
                        id: 3,
                        title: "十年成果",
                        imgs: require("../../static/images/iocn-33.png"),
                        code: "30"
                    },
                    {
                        id: 4,
                        title: "招商空间",
                        imgs: require("../../static/images/iocn-33.png"),
                        code: "30"
                    },{}
                ]
            }
        }
    }
</script>

<style lang="stylus" scope>
    .function
        width 100vw
        height 100vh
        background-size 100%
        padding-top 3vw
        padding-bottom 3vw
        > img.text
            width 30vw
            display block
            margin 0 auto 4vw auto
        > img.loginout
            width 10vw
            height 10vw
            left 4vw
            bottom 4vw
        .modules
            width 100%
            height 25vw
            display flex
            justify-content space-between
            padding 0 10vw
            li
                width calc((100% - 6vw) / 3)
                > img
                    width 70%
                    height: 12vw
                    display block
                    margin 0 auto
                p
                    width 90%
                    height 6vw
                    line-height 6vw
                    color: #a8ddfa
                    font-size 2vw
                    text-align center
                    background url("../../static/images/iocn-loiie.png") no-repeat center
                    background-size 100%
                    margin 2vw auto 0 auto
            li:nth-last-child(1)
                > img
                    width 60%

</style>
