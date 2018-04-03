<template >
    <!-- 暂定 -->
    <div class="popUpStop">
        <div class="popUp-content">
            <div class="content-x" @click="popUpStopHide">
                <i class="iconfont icon-chahao-copy"></i>
            </div>
            <div class="content-header">
                <div class="icon_1"></div>
            </div>
            <div class="stop-content">  
                <div class="content-top">
                    <div class="text">
                        <p>温馨提示：</p>
                        <p>恢复暂停后当前题不可答,直接下一题。</p>
                        <p>(暂停后的题不计入答题总数)</p>
                        <p>当前关卡已暂停
                            <span>{{6-stopSum}}</span>次,还有暂停
                            <span>{{stopSum}}</span>次</p>
                    </div>
                </div>
                <div class="content-center">
                    <p>当前答题数</p>
                    <div class="sum">
                        <span>{{answercount}}</span>/<span>{{questioncount}}</span>
                    </div>
                </div>
                <div class="content-footer">
                    <mt-button type="primary"  size="large" @click="popUpStopHide">下一题</mt-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    props:['answercount','questioncount'],
    data() {
        return {
            stopSum:6,
            popUpStop: false
        }
    },
    methods: {
        popUpStopHide() {
            this.stopSum--
            this.$emit('StopData',false)
        },
        // NOpopUpStopHide(){
        //     this.$emit('StopData',false)
        // }
    },
    mounted() {

    },
    components: {


    }
}
</script>

<style lang="less">
.popUpStop {
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
                background-position: -4.2rem -0rem;
            }
        }
        .stop-content {
            width: 100%;
            .content-top {
                padding: .4rem .05rem 0.1rem;
                width: 100%;
                text-align: center;
                font-size: 0.13rem;
                .text {
                    padding: 10px 0;
                    color: #333;
                    background: #F8EFE6;
                    border: 1px solid #D7AD73;
                    border-radius: 10px;
                    span {
                        color: red;
                    }
                }
            }
            .content-center {
                padding: .2rem 0;
                width: 100%;
                text-align: center;
                p {
                    color: #000;
                    font-size: 0.15rem;
                }
                .sum {
                    color: #000;
                    font-size: 0.5rem;
                }
            }
            .content-footer {
                .mint-button--primary {
                    font-size: 0.15rem;
                    width: 2rem;
                    margin: 0 auto;
                    border-radius: 0.2rem;
                    border-bottom: 1px solid #333;
                }
            }
        }
    }
}
</style>
