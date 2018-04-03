<template >
    <!--成功-->
    <div class="popUpSucceed">
        <div class="popUp-content">
            <div class="content-x" @click="popUpSucceedHide">
                <i class="iconfont icon-chahao-copy"></i>
            </div>
            <div class="content-header">
                <div class="icon_1"></div>
            </div>
            <div class="succeed-content">
                <div class="content-top">
                    <div class="grade-icon icon_1">
                        <i class="icon" :style="{backgroundPositionY: gamelevels*-130+'px'}"></i>
                    </div>
                </div>
                <div class="content-center">
                    <!--<p>{{data}}</p>-->
                </div>
                <div class="content-footer">
                    <p class="footer-info">
                        获得奖励
                    </p>
                    <div class="grade-tool">
                        <span class="xinxin">
                            <i class="iconfont icon-wujiaoxingshixin"></i>
                            x
                            <u>{{getStarnum}}</u>
                        </span>
                        <span class="bomb">
                            <i class="icon_1"></i>
                            x
                            <u>{{getBombnum}}</u>
                        </span>
    
                    </div>
                </div>
                <div class="footer-logo">
                    <span class="logo-text"></span>
                    <span class="logo-icon"></span>
                    <div class="login-line icon_1">
                        2017年质量月
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    props: ['getBombnum', 'getStarnum', 'gamelevels'],
    data() {
        return {
        }
    },
    methods: {
        popUpSucceedHide() {
            this.$emit('SucceedData', false)
            this.$router.go(-1)
        }
    },
    mounted() {

    },
    components: {


    }
}
</script>

<style lang="less">
.popUpSucceed {
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
                background-position: 0 -1.30rem;
            }
        }
        .succeed-content {
            width: 100%;
            height: 100%;
            padding: 0.2rem 0.05rem 0.1rem;
            .content-top {
                .grade-icon {
                    width: 1.5rem;
                    height: 1.5rem;
                    margin: 0 auto;
                    position: relative;
                    background-position: -4.8rem -9.8rem;
                    i {
                        position: absolute;
                        top: 0.2rem;
                        left: 0.15rem;
                        display: inline-block;
                        width: 1.2rem;
                        height: 1.2rem;
                        background: url('../../../static/images/gamelevels.png') no-repeat; // background-position: -0 -0px;
                        background-size: 1.5rem 11.36rem;
                    }
                }
            }
            .content-center {
                text-align: center;
                margin-bottom: 0.2rem;
                p {
                    font-size: .15rem;
                    color: #000;
                    transform: translate(0, -0.2rem);
                }
            }
            .content-footer {
                text-align: center;
                background: #f1f1f1;
                border-radius: 0.05rem;
                padding: 0.1rem 0 .05rem;
                .grade-tool {
                    font-size: .12rem;
                    padding-top: 0.05rem;
                    .xinxin {
                        display: inline-block;
                        margin-right: .05rem;
                        i {
                            font-size: 0.35rem;
                        }
                        u {
                            font-size: .14rem;
                        }
                    }
                    .bomb {
                        margin-left: .3rem;
                        display: inline-block;
                        .icon_1 {
                            width: 0.5rem;
                            height: 0.4rem;
                            display: inline-block;
                            vertical-align: bottom;
                            background-position: -5.0rem -4.5rem;
                        }
                    }
                }
            }
            .footer-logo {
                margin-top: 20px;
                text-align: center;
                .logo-text {
                    width: 70px;
                    height: 20px;
                    display: inline-block;
                    background: url('../../../static/images/logo01.png') no-repeat center/cover;
                }
                .logo-icon {
                    height: 20px;
                    width: 20px;
                    display: inline-block;
                    background: url('../../../static/images/logo02.png') no-repeat center/cover;
                }
                .login-line {
                    margin-top: 5px;
                    height: 0.01rem;
                    width: 100%;
                    color: #eee;
                    color: #666;
                    font-size: .12rem;
                    text-align: center;
                    line-height: 0.01rem;
                    background: url('../../../static/images/line.png') no-repeat center/cover;
                }
            }
        }
    }
}
</style>
