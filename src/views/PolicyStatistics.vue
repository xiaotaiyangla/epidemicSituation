<template>
    <div class="overDetails rela">
        <div class="pagetitle">政策统计</div>
        <div class="choosedate">
            <el-date-picker @change="changeYear" class="year" size="large" :clearable="false" v-model="year" align="left" type="year" placeholder="请选择统计年份"></el-date-picker>
        </div>
        <ul class="modules_main">
            <li :class="action == '开始' ? 'act': ''" @click="doAction('开始')">
                <p>开始</p>
            </li>
            <li :class="action == '暂停' ? 'act': ''" @click="doAction('暂停')">
                <p>暂停</p>
            </li>
        </ul>
        <img src="../../static/images/iocn-etse.png" alt="" class="setting abso" @click="$router.back()">
    </div>
</template>

<script>
    export default {
        name: 'overDetail',
        data() {
            return {
                action: '',
                year: ''
            }
        },
        methods: {
            doAction(action){
                if(!action) return;
                if(!this.year){
                    this.$message({
                        message: '请选择统计年份',
                        type: 'warning'
                    });
                    return;
                }
                switch (action) {
                    case '开始':
                        // TODO: 点击开始
                        this.action = '开始';
                        break;
                    case '暂停':
                        // TODO: 点击暂停
                        this.action = '暂停';
                        break;
                    default:
                        break;
                }
            },
            changeYear(year){
                // TODO: 选择了统计年份
            }
        }
    }
</script>

<style lang="stylus" scope>
    .overDetails
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
            margin 3vw 5vw 0 5vw
            color #ffffff
            text-align left
            font-size 1.7vw
            cursor pointer
            background #010938
            .year
                > input
                    height 2.5vw
                    font-size 2vw
                    background transparent
                    color #ffffff
                    padding 2vw
                    width 80vw
                    border 0
        > img
            width 10vw
            height 10vw
            bottom 4vw
        > img.setting
            right 4vw
        > img.loginout
            left 4vw
        .modulesTitle
            width 100%
            height 4.1vw
            line-height 4.1vw
            padding 0 13vw
            text-align center
            color #ffffff
            font-size 2.5vw
        .modules_main
            width 100%
            display flex
            justify-content flex-start
            flex-wrap wrap
            margin-top 3vw
            padding 0vw 5vw 0 5vw
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
