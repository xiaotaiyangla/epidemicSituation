<template>
  <div class="overDetail rela">
    <div class="pagetitle">政策筛选</div>
    <div class="choosedate">条件筛选：</div>
    <div class="zhengce" v-for="(item, index) in data" :key="index">
      <div class="nianfen">{{item.title}}</div>
      <div class="steps">
        <span
          :class="String(item.checked).indexOf(item.options[i]) != -1 ? 'step checked' : 'step'"
          v-for="(step, i) in item.options"
          :key="i"
          @click="item.type === 'radio' ? item.checked = item.options[i] : choosemulti(index, i)"
        >{{step}}</span>
      </div>
    </div>
    <div class="btns">
      <div class="btn checked" @click="shownews">显示最新政策</div>
      <div class="btn checked" @click="scrollAction">{{scroll ? '开始滚动' : '暂停滚动'}}</div>
      <div class="width"></div>
      <div class="btn checked" @click="makesure">确定</div>
      <div class="btn" @click="reset">重置</div>
    </div>
    <img src="../../static/images/iocn-etse.png" alt class="setting abso" @click="$router.back()" />
  </div>
</template>

<script>
export default {
  name: "overDetail",
  data() {
    return {
      scroll: true,
      year: "",
      data: [
        {
          title: "政策年份",
          // radio: 单选 checkbox 多选
          type: 'checkbox',
          checked: '2019',
          options: ["2019", "2018", "2017", "2016", "2015及以前"]
        },
        {
          title: "政策级别",
          type: 'radio',
          checked: '市级',
          options: ["市级", "区级"]
        },
        {
          title: "政策类型",
          type: 'radio',
          checked: '产业',
          options: ["产业", "人才", "上市", "股权投融资", "其他"]
        },
        {
          title: "产业类型",
          type: 'radio',
          checked: '商贸物流',
          options: ["商贸物流", "制造", "软件信息", "建筑", "文化旅游", "影视"]
        }
      ]
    };
  },
  methods: {
    scrollAction() {
      this.scroll = !this.scroll;
      if (this.scroll) {
        // TODO: 开始滚动
      } else {
        // TODO: 暂停滚动
      }
    },
    reset() {
      this.data.forEach(e => {
        e.checked = e.options[0];
      });
      // TODO: 重置
    },
    shownews() {
      // TODO: 显示最新政策
    },
    choosemulti(index, i){
        let checked = String(this.data[index].checked)
        let options =  this.data[index].options
        let checkeds = checked.split(',')
        if(checked.indexOf(options[i]) != -1){
            checkeds.splice(checkeds.findIndex(item => item === options[i]), 1)
        }else{
            checkeds.push(options[i]);
        }
        this.data[index].checked = checkeds.join(',')
    },
    makesure() {
      this.$router.push({
        path: "/policysure",
        query: {
          options: JSON.stringify(this.data)
        }
      });
    }
  }
};
</script>

<style lang="stylus" scope>
.overDetail {
  width: 100vw;
  height: 100vh;
  background-size: 100%;
  padding-top: 1vw;
  margin-bottom 3vw
  .pagetitle {
    margin: 1.5vw 5vw 0 5vw;
    color: #ffffff;
    text-align: center;
    padding: 2vw;
    font-size: 2.5vw;
    cursor: pointer;
    background: #010938;
  }

  .choosedate {
    margin: 1vw 5vw 0 5vw;
    color: #ffffff;
    text-align: left;
    font-size: 2.5vw;
    cursor: pointer;
    background: #010938;
    padding: 1vw;

    .year {
      > input {
        height: 2.5vw;
        font-size: 2vw;
        background: transparent;
        color: #ffffff;
        padding: 2vw;
        width: 80vw;
        border: 0;
      }
    }
  }

  > img {
    width: 10vw;
    height: 10vw;
    bottom: 4vw;
  }

  > img.setting {
    right: 4vw;
  }

  > img.loginout {
    left: 4vw;
  }

  .zhengce {
    display: flex;
    margin-left: 7vw;
    margin-right: 7vw;
    margin-bottom: 2vw;

    .nianfen {
      font-size: 2vw;
      color: #ffffff;
      align-items: center;
      display: flex;
    }

    .steps {
      flex: 1;
      margin-left: 7vw;

      .step {
        font-size: 2vw;
        color: #ffffff;
        padding-left: 2vw;
        padding-right: 2vw;
        border: 1px solid #747a81;
        line-height: 4vw;
        float: left;
        margin-right: 2vw;
        margin-top: 0.5vw;
        margin-bottom: 0.5vw;
      }

      .checked {
        background: #199ed7;
      }
    }
  }

  .modulesTitle {
    width: 100%;
    height: 4.1vw;
    line-height: 4.1vw;
    padding: 0 13vw;
    text-align: center;
    color: #ffffff;
    font-size: 2.5vw;
  }

  .btns {
    display: flex;
    font-size: 2vw;
    color: #000;
    margin-left: 7vw;
    margin-right: 7vw;
    margin-bottom 3vw
    .width {
      flex: 1;
    }

    .btn {
      display: inline-block;
      padding-left: 2vw;
      padding-right: 2vw;
      line-height: 4vw;
      border-radius: 4px;
      border: 1px solid #747a81;
      margin-right: 2vw;
      background: #ffffff;

      &:last-child {
        margin-right: 15vw;
      }
    }

    .checked {
      background: #199ed7;
      color: #ffffff;
    }
  }

  .modules_main {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin-top: 3vw;
    padding: 0vw 5vw 0 5vw;

    li {
      width: calc((100% / 3));

      p {
        width: 95%;
        height: 7.8vw;
        line-height: 7.8vw;
        color: #3c6cc6;
        font-size: 1.6vw;
        text-align: center;
        background: url('../../static/images/iocn-re4.png') no-repeat center;
        background-size: 100% 7.8vw;
        margin: 0vw auto;
      }
    }

    li.act {
      p {
        color: #7cbcef;
        background: url('../../static/images/iocn-re44.png') no-repeat center;
        background-size: 100% 7vw;
      }
    }

    li:nth-last-child(1) {
      > img {
        width: 60%;
      }
    }
  }

  .haveChars {
    width: 100%;
    padding: 7vw 5vw 0 5vw;

    .chars {
      width: calc(100% - 44vw);
      height: 37vw;
      background: url('../../static/images/iocn-looer.png') no-repeat center;
      background-size: 100% 37vw;
      margin-left: 5vw;
    }

    ul.left {
      width: 17vw;
      height: 38vw;

      li {
        width: 100%;
        margin-bottom: 2vw;

        a {
          display: block;

          p {
            height: 6vw;
            line-height: 6vw;
            color: #fff;
            font-size: 1.6vw;
            text-align: center;
            background: url('../../static/images/iocn-33tr.png') no-repeat center;
            background-size: 100% 6vw;
          }
        }
      }

      li.act {
        a {
          p {
            color: #7bbbec;
            background: url('../../static/images/iocn-ewe.png') no-repeat center;
            background-size: 100% 5.8vw;
          }
        }
      }

      li:nth-last-child(1) {
        margin-bottom: 0;
      }
    }
  }
}
</style>
