<template>
    <div class="overDetail rela">
        <div class="pagetitle">政策筛选结果</div>
        <div class="choosedate">
            <span>政策年份：{{data[0].checked}}</span>
            <span>政策级别：{{data[1].checked}}</span>
            <span>政策类型：{{data[2].checked}}</span>
            <span>产业类型：{{data[3].checked}}</span>
        </div>
        <ul class="modules_main">
            <li v-for="item in pages" :key="item" :class="page == item ? 'act': ''" @click="doAction(item)">
                <p>第{{item}}页</p>
            </li>
        </ul>
        <img src="../../static/images/iocn-etse.png" alt="" class="setting abso" @click="$router.back()">
    </div>
</template>

<script>
    export default {
        name: 'overDetail',
        data() {
            if(this.$route.query.options){
                this.data = JSON.parse(this.$route.query.options)
            }
            return {
                pages:10,
                page: ''
            }
        },
        methods: {
            doAction(item){
                this.page = item
                // TODO: 点击了第item页
            }
        }
    }
</script>

<style lang="stylus" scope>
    .overDetail
        width 100vw
        height 100vh
        background url("../../static/images/bg-3.png") no-repeat center
        background-size 100%
        padding-top 1vw
        .pagetitle
            margin 1.5vw 5vw 0 5vw
            color #ffffff
            text-align center 
            padding 2vw
            font-size 2.5vw
            cursor pointer
            background #010938
        .choosedate
            margin 1vw 5vw 0 5vw
            color #ffffff
            text-align left
            font-size 1.6vw
            cursor pointer
            background #010938
            padding 1vw
            span 
                margin-right 2vw
        > img
            width 10vw
            height 10vw
            bottom 4vw
        > img.setting
            right 4vw
        > img.loginout
            left 4vw
        .zhengce
            display flex
            margin-left 7vw
            margin-right 7vw
            margin-bottom 2vw
            .nianfen
                font-size 2vw
                color #ffffff
                align-items center
                display flex
            .steps
                flex 1
                margin-left 7vw
                .step
                    font-size 2vw
                    color #ffffff
                    padding-left 2vw
                    padding-right 2vw
                    border 1px solid #747a81
                    line-height 4vw
                    float left
                    margin-right 2vw
                    margin-top 0.5vw
                    margin-bottom 0.5vw
                .checked
                    background #199ed7
        .modulesTitle
            width 100%
            height 4.1vw
            line-height 4.1vw
            padding 0 13vw
            text-align center
            color #ffffff
            font-size 2.5vw
        .btns
            display flex
            font-size 2vw
            color #000
            margin-left 7vw
            margin-right 7vw
            .width
                flex 1
            .btn
                display inline-block
                padding-left 2vw
                padding-right 2vw
                line-height 4vw
                border-radius 4px
                border 1px solid #747a81
                margin-right 2vw
                background #ffffff
                &:last-child
                    margin-right 15vw
            .checked
                background #199ed7
                color #ffffff
        .modules_main
            width 100%
            display flex
            justify-content flex-start
            flex-wrap wrap
            margin-top 3vw
            padding 0vw 5vw 3vw 5vw
            li
                width calc(100% / 3)
                p
                    width 95%
                    height 7.8vw
                    line-height 7.8vw
                    color: #3c6cc6
                    font-size 1.6vw
                    text-align center
                    background url("../../static/images/iocn-re4.png") no-repeat center
                    background-size 100% 7.8vw
                    margin 0vw auto
            li.act
                p
                    color: #7cbcef
                    background url("../../static/images/iocn-re44.png") no-repeat center
                    background-size 100% 7vw
            li:nth-last-child(1)
                > img
                    width 60%
        .haveChars
            width 100%
            padding 7vw 5vw 0 5vw
            .chars
                width calc(100% - 44vw)
                height 37vw
                background url("../../static/images/iocn-looer.png") no-repeat center
                background-size 100% 37vw
                margin-left: 5vw
            ul.left
                width 17vw
                height 38vw
                li
                    width 100%
                    margin-bottom: 2vw
                    a
                        display block
                        p
                            height 6vw
                            line-height 6vw
                            color: #fff
                            font-size 1.6vw
                            text-align center
                            background url("../../static/images/iocn-33tr.png") no-repeat center
                            background-size 100% 6vw
                li.act
                    a
                        p
                            color: #7bbbec
                            background url("../../static/images/iocn-ewe.png") no-repeat center
                            background-size 100% 5.8vw
                li:nth-last-child(1)
                    margin-bottom: 0

</style>
