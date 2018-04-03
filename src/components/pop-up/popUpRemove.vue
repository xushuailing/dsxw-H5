<template >
    <!--炸题-->
    <div class="popUpRemove">
        <div class="popUp-content">
            <div class="content-x" @click="NOpopUpRemoveHide">
                <i class="iconfont icon-chahao-copy"></i>
            </div>
            <div class="content-header">
                <div class="icon_1"></div>
            </div>
            <div class="remove-content">
                <div class="content-top">
                    <p class="footer-info">
                        您当前拥有
                    </p>
                    <div class="grade-tool">
                        <span class="xinxin">
                            <i class="iconfont icon-wujiaoxingshixin"></i>
                            x
                            <u>{{userStarNum}}</u>
                        </span>
                        <span class="bomb">
                            <i class="icon_1"></i>
                            x
                            <u>{{userBombNum}}</u>
                        </span>
                    </div>
                </div>
                <div class="content-center">
                    <p>
                        <span></span>每颗★可以兑换一个炸弹,用于炸题,跳过。</p>
                    <p>
                        <span></span>跳过后会显示正确答案。</p>
                </div>
                <div class="content-footer">
                    <div class="footer-tool">
                        <i class="icon1 icon_1"></i>
                        <i class="icon2 iconfont icon-dengyu"></i>
                        <span class="icon3 ">
                            <i class="iconfont icon-wujiaoxingshixin"></i>
                            x1
                        </span>
                    </div>
                    <mt-button type="primary" @click="popUpRemoveHide" :disabled='userStarNum==0&&userBombNum==0' size="large">{{RemoveText}}</mt-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    created() { },
    props: {
        userid: {
            type: String
        }
    },
    data: function () {
        return {
            popUpRemove: false,
            RemoveText: '炸题',
            userStarNum: '',
            userBombNum: '',
        }
    },
    methods: {
        popUpRemoveHide() {
            let _this = this
            if (_this.userBombNum > 0) {
                _this.isBombNum()
                return
            } else if (_this.userStarNum > 0) {
                _this.isStarNum()
                return
            }
        },
        isBombNum() {
            this.$emit('RemoveData', false)
            this.userBombNum--
            this.getRemove()
        },
        isStarNum() {
            this.$emit('RemoveData', false)
            this.userStarNum--
            this.getRemove()
        },
        NOpopUpRemoveHide() {
            this.$emit('RemoveData', true)
        },

        getRemove() {
            if (this.userBombNum == 0) {
                this.RemoveText = '兑换炸弹并使用'
                if (this.userStarNum == 0) {
                    this.RemoveText = '星星不足无法兑换'
                    return
                }
            }
        },
        /* 获取炸弹星星数 */
        userView() {
            let _this = this
            _this.$http({
                method: 'post',
                url: 'http://saas.zeego.cn/Interface/WJApp/WJ_UserService.ashx?pagetype=UserView',
                params: {
                    userid: _this.userid
                }
            }).then(function (res) {
                let data = res.data
                _this.userStarNum = data.starnum
                _this.userBombNum = data.bombnum
                // _this.userStarNum = 3
                // _this.userBombNum = 3

                _this.getRemove()
            }).catch(function (err) {
            })
        },
        Timeout() {
            let _this = this
            setTimeout(function () {
                _this.userView()
            }, 0)
        }
    },
    mounted() {
        this.Timeout()
    },
    components: {

    }
}
</script>

<style lang="less">
@colorblue: #0096ff;

.popUpRemove {
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
                background-position: -2.1rem -0rem;
            }
        }
        .remove-content {
            width: 100%;
            height: 100%;
            padding: 0.4rem 0.05rem 0.1rem;
            .content-top {
                text-align: center;
                .footer-info {
                    font-size: 0.15rem;
                }
                .grade-tool {
                    font-size: .12rem;
                    padding-top: 20px;
                    .xinxin {
                        display: inline-block;
                        margin-right: .05rem;
                        i {
                            font-size: 35px;
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
                            background-position: -5rem -4.5rem;
                        }
                    }
                }
            }
            .content-center {
                padding: 0.1rem 0;
                margin: 0.2rem 0;
                border-top: 1px solid #ccc;
                border-bottom: 1px solid #ccc;
                p {
                    font-size: .1rem;
                    span {
                        display: inline-block;
                        width: 0.05rem;
                        height: 0.05rem;
                        border-radius: 0.05rem;
                        background: #0096ff;
                        margin: 0 0.05rem 0.02rem 0;
                    }
                }
            }
            .content-footer {
                position: absolute;
                width: 100%;
                bottom: 0.2rem;
                left: 0;
                text-align: center;
                .footer-tool {
                    margin: 0.05rem 0;
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
                .mint-button--primary {
                    font-size: 0.15rem;
                    width: 2rem;
                    margin: 0 auto;
                    border-bottom: 1px solid #333;
                    border-radius: 0.2rem;
                }
            }
        }
    }
}
</style>
