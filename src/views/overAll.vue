<template>
    <div class="overAll rela">
        <ul class="modules">
            <li v-for="(v, i) in resDetail" :key="i" @click="toClickRequest(v.url, v.code, v.path)">
                <img :src="v.imgs" alt="">
                <p>{{v.title}}</p>
            </li>
        </ul>
        <img src="../../static/images/iocn-etse.png" alt="" class="setting abso" @click="$router.back()">
        <img src="../../static/images/eit.png" alt="" class="loginout abso" @click="$router.push('/')">
    </div>
</template>

<script>
    export default {
        name: 'function',
        data() {
            return {
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
                        title: "国家创新指标",
                        imgs: require("../../static/images/iocn-nw.png"),
                        url: "/ipad/qjzs/toNavigation",
                        code: "101",
                        path: "/overDetail?title=1&select=6"
                    },
                    {
                        title: "山东省创新指标",
                        imgs: require("../../static/images/iocn-zl.png"),
                        url: "/ipad/qjzs/toNavigation",
                        code: "102",
                        path: "/overDetail?title=1&select=7"
                    },
                    {
                        title: "各区县创新指标",
                        imgs: require("../../static/images/iocn-jsjl.png"),
                        url: "/ipad/qjzs/toNavigation",
                        code: "103",
                        path: "/overDetail?title=1&select=8"
                    },
                    {
                        title: "中心城区",
                        imgs: require("../../static/images/iocn-ke.png"),
                        url: "/ipad/qjzs/toNavigation",
                        code: "104",
                        path: "/overDetail?title=1&select=9"
                    },
                    {
                        title: "楼宇设施",
                        imgs: require("../../static/images/iocn-fhq.png"),
                        url: "/ipad/qjzs/toNavigation",
                        code: "105",
                        path: "/overDetail?title=1&select=10"
                    },
                    {
                        title: "高新技术企业",
                        imgs: require("../../static/images/iocn-nw.png"),
                        url: "/ipad/xjdn/toNavigation",
                        code: "301",
                        path: "/overDetail?title=2&select=11"
                    },
                    {
                        title: "中小微企业",
                        imgs: require("../../static/images/iocn-zl.png"),
                        url: "/ipad/xjdn/toNavigation",
                        code: "302",
                        path: "/overDetail?title=2&select=12"
                    },
                    {
                        title: "瞪羚企业",
                        imgs: require("../../static/images/iocn-jsjl.png"),
                        url: "/ipad/xjdn/toNavigation",
                        code: "303",
                        path: "/overDetail?title=2&select=13"
                    },
                    {
                        title: "创新载体",
                        imgs: require("../../static/images/iocn-ke.png"),
                        url: "/ipad/xjdn/toNavigation",
                        code: "304",
                        path: "/overDetail?title=2&select=14"
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
    .overAll
        width 100vw
        height 100vh
        background url("../../static/images/bg-3.png") no-repeat center
        background-size 100%
        padding-top 18vw
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
            padding 0 15vw
            li
                width calc(100% / 3)
                display block
                > img
                    width 60%
                    display block
                    margin 0 auto
                p
                    color: #a8ddfa
                    font-size 2vw
                    text-align center
                    margin 2vw auto 7vw auto
</style>
