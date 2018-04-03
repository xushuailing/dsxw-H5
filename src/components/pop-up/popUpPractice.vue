<template >
  <!-- 练习 -->
  <div class="popUpPractice">
    <div class="popUp-content">
      <div class="content-x" @click="NopopUpPracticeHide">
        <i class="iconfont icon-chahao-copy"></i>
      </div>
      <div class="content-header">
        <div class="icon_1"></div>
      </div>
      <div class="practice-content go" v-if="state">
        <div class="content-top">
          <p>上次练习到</p>
          <div class="sum">
            <span>{{CurrentNum}}</span>/{{questioncount}}</div>
        </div>
  
        <div class="content-footer">
          <mt-button type="default" size="large" @click="goOnPractice">继续练习</mt-button>
          <mt-button type="primary" class="_btn" size="large" @click="currentNum">重新开始</mt-button>
        </div>
      </div>
      <div class="practice-content" v-if="!state">
        <div class="content-top">
          <p>共{{questioncount}}题</p>
        </div>
        <div class="content-center">
          <span>第</span>
          <input type="tel" v-model="few" autofocus>
          <span>题</span>
        </div>
        <div class="content-footer">
          <mt-button type="default" size="large" @click="popUpPracticeHide">开始练习</mt-button>
        </div>
      </div>
    </div>
  </div>
  <!--<router-link to='/grade/practice'>
              
              </router-link>-->
</template>

<script>
import { Toast } from 'mint-ui';

export default {
  props: ['userid', 'questioncount', 'CurrentNum'],
  data() {
    return {
      // popUpPractice: false
      state: true,//判断显示状态
      few: 1,
    }
  },
  methods: {
    NopopUpPracticeHide() {
      this.$emit('PracticeData', false)
      this.state = true
    },
    popUpPracticeHide() {
      if (!this.few) {
        Toast({
          message: '题号不能为空',
          position: 'center',
          duration: 500
        });

        return;
      }
      if (+this.few > +this.questioncount) {
        Toast({
          message: '题号不能超过题目总数',
          position: 'center',
          duration: 1000
        });
        return;
      }
      
      this.$emit('PracticeData', true, +this.few)
    },
    /* 继续练习 */
    goOnPractice() {
      if (+this.CurrentNum > +this.questioncount) {
        Toast({
          message: '题号不能超过题目总数',
          position: 'center',
          duration: 1000
        });
        return;
      }
      this.$emit('PracticeData', true, +this.CurrentNum)
    },
    // 显示从新开始
    currentNum() {

      this.state = false
    },
    initState() {
      this.state = true
    }
  },
  mounted() {
    let _this = this
    _this.initState()
  },
  components: {


  }
}
</script>

<style lang="less">
.popUpPractice {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, .5);
  padding: .1rem .3rem; //  display: none;
  .popUp-content {
    height: 3.45rem;
    margin-top: .9rem;
    background: #fff;
    border-radius: .05rem;
    padding: 0 .1rem;
    position: relative;
    .content-x {
      position: absolute;
      width: 30px;
      height: 30px;
      top: -.85rem;
      right: 0;
      color: #fff;
      display: block;
      z-index: 10;
      i {
        display: inline-block;
        width: 0.2rem;
        height: 0.2rem;
        font-size: .24rem;
      }
    }
    .content-header {
      position: absolute;
      top: -.9rem;
      left: 0;
      width: 100%;
      padding: 0 .35rem;
      .icon_1 {
        width: 1.9rem;
        height: 1.1rem;
        background-position: -2.10rem -2.60rem;
      }
    }
    .practice-content {
      width: 100%;
      .content-top {
        // padding: .7rem 0 .5rem;
        padding: 1rem 0 .2rem;
        width: 100%; // background: pink;
        text-align: center;
        p {
          color: #000;
          font-size: 0.16rem;
        }
        .sum {
          color: #26a2ff;
          font-size: 0.5rem;
        }
      }
      .content-center {
        text-align: center;
        color: #000;
        font-size: 0.16rem;
        padding-bottom: 0.8rem;
        input {
          border: 1px solid #999;
          border-radius: 0.1rem;
          height: 0.4rem;
          width: 65%;
          color: #09AFFD;
          font-size: 0.3rem;
          text-align: center;
          vertical-align: middle;
        }
      }
      .content-footer {
        padding: 0.1rem 0;
        .mint-button {
          width: 2rem;
          margin: 0 auto;
          border-radius: 0.2rem;
          .mint-button-text {
            font-size: 0.15rem;
          }
        }
        .mint-button--primary {
          border-bottom: 1px solid #333;
        }
        .mint-button--default {
          background: #5AADEF;
          color: #fff;
          border-bottom: 1px solid #056EC1;
        }
      }
    }
    .go {
      .content-top {
        padding-top: 0.8rem;
      }
      .content-footer {
        .mint-button {

          margin-top: 10px;
        }
        .mint-button--primary {
          background: #fff;
          color: #056EC1;
          border: 1px solid #056EC1;

          margin-top: 20px;
        }
      }
    }
  }
}
</style>