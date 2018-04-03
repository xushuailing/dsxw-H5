<template>
  <div>
    <div class="content-header">
      <div class="icon_1"></div>
    </div>
    <div class="practice">
      <div class="content-top">
        <p>上次练习到</p>
        <div class="sum">
          <span>15</span>/100</div>
      </div>
      <div class="content-center">
        <mt-button type="primary" size="large">继续练习</mt-button>
      </div>
      <div class="content-footer">
        <mt-button type="default" size="large">从新开始</mt-button>
      </div>
    </div>
  </div>
</template>


<script>
export default {

}
</script>

<style lang="less">
.icon_1 {
  background-position: -2.10rem -2.60rem;
}

.practice {
  width: 100%;
  .content-top {
    padding: .7rem 0 .5rem;
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
  .content-footer,
  .content-center {
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
      border: 1px solid #26a2ff;
      color: #26a2ff;
    }
  }
}
</style>
