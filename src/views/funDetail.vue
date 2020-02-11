<template>
    <div class="funDetail rela">
        <ul class="funDetail_top">
            <li v-for="(v, i) in modules" :key="i" :class="+$route.query.title === v.id? 'act rela': 'rela'">
                {{v.title}}
                <div class="swipe abso" v-if="+$route.query.title === v.id">{{v.title}}</div>
            </li>
        </ul>
        <ul class="modules">
            <li v-for="(v, i) in resDetail" :key="i" @click="skip(i)">
                <img :src="v.imgs" alt="">
                <p>{{v.title}}</p>
            </li>
        </ul>

        <img src="../../static/images/iocn-etse.png" alt="" class="setting abso" @click="$router.back()">
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
                        code: "20",
                        path: "/funDetail?title=0"
                    },
                    {
                        id: 1,
                        title: "政策匹配",
                        code: "10",
                        path: "/funDetail?title=1"
                    },
                    {
                        id: 2,
                        title: "产业分析",
                        code: "30",
                        path: "/funDetail?title=2"
                    },
                    {
                        id: 3,
                        title: "十年成果",
                        imgs: require("../../static/images/iocn-22.png"),
                        code: "10",
                        path: "funDetail?title=1"
                    },
                    {
                        id: 4,
                        title: "招商空间",
                        imgs: require("../../static/images/iocn-33.png"),
                        code: "30"
                    }
                ],
                moduleDetail: [
                    {
                        title: "论文合作",
                        imgs: require("../../static/images/iocn-nw.png"),
                        url: "/ipad/qyzx/toNavigation",
                        code: "201",
                        path: "/overDetail?title=0&select=0"
                    },
                    {
                        title: "专利转移",
                        imgs: require("../../static/images/iocn-zl.png"),
                        url: "/ipad/qyzx/toNavigation",
                        code: "202",
                        path: "/overDetail?title=0&select=1"
                    },
                    {
                        title: "技术交易",
                        imgs: require("../../static/images/iocn-jsjl.png"),
                        url: "/ipad/qyzx/toNavigation",
                        code: "203",
                        path: "/overDetail?title=0&select=2"
                    },
                    {
                        title: "科创人才",
                        imgs: require("../../static/images/iocn-ke.png"),
                        url: "/ipad/qyzx/toNavigation",
                        code: "204",
                        path: "/overDetail?title=0&select=3"
                    },
                    {
                        title: "孵化器",
                        imgs: require("../../static/images/iocn-fhq.png"),
                        url: "/ipad/qyzx/toNavigation",
                        code: "205",
                        path: "/overDetail?title=0&select=4"
                    },
                    {
                        title: "科技金融",
                        imgs: require("../../static/images/iocn-kjqr.png"),
                        url: "/ipad/qyzx/toNavigation",
                        code: "206",
                        path: "/overDetail?title=0&select=5"
                    },
                    {
                        title: "政策筛选",
                        imgs: require("../../static/images/iocn-nw.png"),
                        url: "/ipad/qjzs/toNavigation",
                        code: "101",
                        path: "/overDetail?title=1&select=6"
                    },
                    {
                        title: "政策统计",
                        imgs: require("../../static/images/iocn-zl.png"),
                        url: "/ipad/qjzs/toNavigation",
                        code: "102",
                        path: "/overDetail?title=1&select=7"
                    }
                ],
                resDetail: []
            }
        },
        created() {
            this.navDetail(+this.$route.query.title)
        },
        mounted () {
            this.navDetail(+this.$route.query.title)
        },
        watch: {
            $route(to, from) {
                this.navDetail(+to.query.title)
            }
        },
        methods: {
            skip(i){
                switch (i) {
                    case 0:
                        this.$router.push('/policyscreening')
                        break;
                    case 1:
                        this.$router.push('/PolicyStatistics')
                        break;
                
                    default:
                        break;
                }
            },
            navDetail (id) {
                if (id === 0) {
                    this.resDetail = this.moduleDetail.slice(0, 6)
                } else if (id === 1) {
                    this.resDetail = this.moduleDetail.slice(6, 11)
                } else if (id === 2) {
                    this.resDetail = this.moduleDetail.slice(11, 16)
                } else {
                    this.$router.push('/')
                }
            }
        }
    }
</script>

<style lang="stylus" scope>
    .funDetail
        width 100vw
        height 100vh
        background url("../../static/images/bg-3.png") no-repeat center
        background-size 100%
        padding 6vw 3vw 0 3vw
        > .funDetail_top
            width 100%
            height 5.5vw
            line-height: 5.5vw
            background url("../../static/images/header.png") no-repeat center
            background-size 100% 5.5vw
            display flex
            justify-content space-around
            li
                width calc(100% / 5)
                text-align center
                font-family Microsoft YaHei
                font-size 1.4vw
                color #fff
                display block
                .swipe
                    width 20vw
                    height 5.5vw
                    background url("../../static/images/header-er.png") no-repeat center
                    background-size 100% 5.5vw
                    left 0vw
                    top 0
                    transform translateX(-0vw)
            li:nth-child(1)
                padding-left: 8vw
                .swipe
                    transform translateX(0)
            li:nth-last-child(1)
                padding-right: 8vw
            li.act
                color: #fefd7b
                font-weight: 900
        > img
            width 10vw
            height 10vw
            bottom 4vw
        > img.setting
            right 4vw
        > img.loginout
            left 4vw
        .modules
            width 100%
            display flex
            justify-content flex-start
            flex-wrap wrap
            padding 10vw 5vw 0 5vw
            li
                width calc(100% / 3)
                > img
                    width 64%
                    display block
                    margin 0 auto
                p
                    color: #a8ddfa
                    font-size 2vw
                    text-align center
                    margin 2vw auto 7vw auto
</style>
