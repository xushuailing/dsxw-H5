<template >
    <!-- 回答错误-->
    <div class="popUpError">
        <div class="popUp-content">
            <div class="content-x" @click="popUpErrorHide">
                <i class="iconfont icon-chahao-copy"></i>
            </div>
            <div class="content-header">
                <div class="icon_1"></div>
            </div>
            <div class="error-content">
                <div class="content-top">
                    <div class="text">
                        <p>回答错误</p>
                        <p>当前关卡已答错<u>{{sum}}</u>题，答错题数≥3时该卡关会自动停止并重新开始</p>
                        <p>不要气馁，闯关还在继续，加油！</p>
                    </div>
                </div>
                <div class="content-center_error">
                    <p>正确答案</p>
                    <div class="sum">
                        <p>{{data}}</p>
                    </div>
                </div>
                <div class="content-footer">
                    <mt-button type="primary" size="large" @click="popUpErrorHide">继续答题</mt-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    
    props:['data'],
    // props:['data'],
    data() {
        return {
            sum:1
        }
    },
    methods: {
        popUpErrorHide() {
            this.$emit('ErrorData', false)
            this.sum++
        }
    },
    mounted() {

    },
}
</script>

<style lang="less">
.popUpError {
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
                background-position: -4.2rem -1.30rem;
            }
        }
        .error-content {
            width: 100%;
            height: 100%;
            .content-top {
                padding: 0.4rem 0.05rem 0.1rem;
                width: 100%;
                text-align: center;
                font-size: 0.13rem;
                .text {
                    padding: 0.1rem 0;
                    color: #333;
                    background: #F8EFE6;
                    border: 1px solid #D7AD73;
                    border-radius: 0.1rem;
                    u{
                        color: red;
                    }
                }
            }
            .content-center_error {
                padding: .2rem 0;
                width: 100%;
                text-align: center;
                p {
                    color: #000;
                    font-size: 0.15rem;
                }
                .sum {
                    padding-top: 0.4rem;
                    P {
                        color: #26a2ff;
                    }
                }
            }
            .content-footer {
                .mint-button--primary {
                    font-size: 0.15rem;
                    width: 2rem;
                    margin: 0 auto;
                    border-radius: 0.2rem;
                }
            }
        }
    }
}
</style>
