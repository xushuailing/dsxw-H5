<template >
    <!--了解规则-->
    <div class="popUpRule">
        <div class="popUp-content">
            <div class="content-x" @click="popUpRulHide">
                <i class="iconfont icon-chahao-copy"></i>
            </div>
            <div class="content-header">
                <div class="icon_1"></div>
            </div>
            <div class="knowRule-content">
                <div class="content-top">
                    <ul>
                        <li>
                            <span class="top-icon">
                                <i class="iconfont icon-wujiaoxingshixin"></i>
                                <s>x1</s>
                            </span>
                            <span class="top-text">
                                <u>前200名</u>有抽红包的机会
                            </span>
                        </li>
                        <li>
                            <span class="top-icon">
                                <i class="iconfont icon-wujiaoxingshixin"></i>
                                <s>x3</s>
                            </span>
                            <span class="top-text">
                                <u>前100名</u>有抽红包的机会
                            </span>
                        </li>
                        <li>
                            <span class="top-icon">
                                <i class="iconfont icon-wujiaoxingshixin"></i>
                                <s>x5</s>
                            </span>
                            <span class="top-text">
                                <u>前50名</u>有抽红包的机会
                            </span>
                        </li>
                        <li>
                            <span class="top-icon">
                                <i class="iconfont icon-wujiaoxingshixin"></i>
                                <s>x7</s>
                            </span>
                            <span class="top-text">
                                <u>前20名</u>有抽红包的机会
                            </span>
                        </li>
                        <li>
                            <span class="top-icon">
                                <i class="iconfont icon-wujiaoxingshixin"></i>
                                <s>x9</s>
                            </span>
                            <span class="top-text">
                                <u>前10名</u>有抽红包的机会
                            </span>
                        </li>
                    </ul>
                </div>
                <div class="content-center">
                    <p>
                        <span></span>抽红包或兑换炸弹每消耗一颗<i class="xingxing">★</i>。</p>
                    <p>
                        <span></span><i class="xingxing">★</i>的总数会自动减少。</p>
                </div>
                <div class="content-footer">
                    <div class="footer-titie">道具</div>
                    <p class="footer-info">
                        每颗<i class="xingxing">★</i>可以兑换一个炸弹,用于炸题,跳过
                    </p>
                    <div class="footer-tool">
                        <i class="icon1 icon_1"></i>
                        <i class="icon2 iconfont icon-dengyu"></i>
                        <span class="icon3 ">
                            <i class="iconfont icon-wujiaoxingshixin"></i>
                            x1
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    // props:["gradeData"],
    data() {
        return {
            // popUpRuleShow:false
            // ruleHide:''
        }
    },
    methods: {
        popUpRulHide(){
            // this.ruleHide = false
            this.$emit('RuleData',false)
        }
    },
    mounted() {

    },
    components: {

    }
}
</script>

<style lang="less">

@colorblue: #0096ff;

.popUpRule {
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
                background-position: -0rem -0rem;
            }
        }
        

        .knowRule-content {
            .content-top {
                padding-top: .3rem;
                >ul {
                    width: 100%;
                    padding: 0 .1rem;
                    >li {
                        margin: .05rem 25px;
                        font-size: .12rem;
                        .top-icon {
                            margin-right: .03rem;
                            .iconfont {
                                color: #FFD202;
                            }
                            >s {
                                font-size: .12rem;
                            }
                        }
                        .top-text {
                            color: #333;
                            u {
                                color: #E10058;
                            }
                        }
                    }
                }
            }
            .content-center {
                padding: 0.1rem 0;
                margin: 0.1rem .1rem;
                border-top: 1px solid #ccc;
                border-bottom: 1px solid #ccc;
                p {
                    font-size: .1rem;
                    span {
                        display: inline-block;
                        width: 0.05rem;
                        height: 0.05rem;
                        border-radius: 0.05rem;
                        background: @colorblue;
                        margin: 0 0.05rem 0.02rem 0;
                    }
                }
            }
            .content-footer {
                padding: 0 0 .1rem;
                text-align: center;
                .footer-titie {
                    color: @colorblue;
                    font-size: 0.2rem;
                }
                .footer-info {
                    color: #666;
                    font-size: .10rem;
                    padding: .05rem 0;
                }
                .footer-tool {
                    padding-top: 0.05rem;
                    .icon1 {
                        width: 0.5rem;
                        height: 0.4rem;
                        display: inline-block;
                        vertical-align: top;
                        background-position: -5rem -4.5rem;
                    }
                    .icon2 {
                        font-size: 0.3rem;
                        color: #333;
                        margin: 0 0.2rem;
                    }
                    .icon3 {
                        font-size: 0.12rem;
                        color: #333;
                        padding-bottom: 0.2rem;
                        display: inline-block;
                        vertical-align: middle;
                        .iconfont {
                            font-size: 0.3rem;
                        }
                    }
                }
            }
        }
    }
}
</style>
