<template >
    <!-- 兑换 -->
    <div class="popUpExchange">
        <div class="popUp-content">
            <div class="content-x" @click="popUpExchangeHide">
                <i class="iconfont icon-chahao-copy"></i>
            </div>
            <div class="content-header">
                <div class="icon_1"></div>
            </div>
            <div class="exchange-content">
                <div class="content-top">
                    <ul>
                        <li v-for='(item,index) in MoneyData' :datali='index'>
                            <i class="icon-wujiaoxingshixin iconfont"></i>
                            <span>x{{item.StarNum}}</span>
                            <a class="red" @click='exchangeClick(index)'>
                                <i class="icon_1"></i>
                                <div>剩余{{item.MoneyLeftCount}}</div>
                            </a>
                        </li>
                        <li>
                            <!--<i class="icon-wujiaoxingshixin iconfont"></i>-->
                            <div>神秘红包</div>
                            <a class="red">
                                <i class="icon_1"></i>
                                <div>2个</div>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="content-footer">
                    <p>
                        <span></span>可根据个人所得
                        <i class="xingxing">★</i>数,自由点击兑换相应的红包,兑换后会扣除相应的
                        <i class="xingxing">★</i>数。</p>
                    <p>
                        <span></span>神秘红包,根据挑战结束后系统自动统计的综合表现定出前2名。</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { MessageBox } from 'mint-ui';
import { Toast } from 'mint-ui';
export default {

    props: {
        uid: {
            type: String
        },
        usertype: {
            type: String
        },
        userid: {
            type: String
        }

    },
    data() {
        return {
            // popUpExchange:false
            MoneyData: {
                MoneyCount: '',//红包总数
                MoneyLeftCount: '',//剩余红包数
                StarNum: '',//需要的星星数
            },
            movestarnum: ''//兑换星星数
        }
    },//
    methods: {
        popUpExchangeHide() {
            this.$emit('ExchangeData', false)
        },
        /* 请求红包数据 */
        exchange() {
            let _this = this
            let URL = 'http://saas.zeego.cn/Interface/WJApp/WJ_MoneyPayService.ashx?pagetype=list'
            _this.$http({
                method: 'post',
                url: URL,
                params: {
                    uId: _this.uid,
                    IsDerectAnswer: _this.usertype
                }
            }).then(function (res) {
                let data = res.data
                _this.MoneyData = data.data
            }).catch(function (err) {
            })
        },

        /* 兑换红包 */
        exchangeClick(li) {
            MessageBox({
                title: '提示',
                message: '是否兑换红包',
                showCancelButton: true,
                cancelButtonText: '取消',
                confirmButtonText: '兑换',
            }).then(action => {
                if (action == 'confirm') {
                    for (var i = 0; i < this.MoneyData.length; i++) {
                        if (li == i) {
                            this.movestarnum = this.MoneyData[i].StarNum // 兑换星星数
                        }
                    }
                    this.YES_exchange()
                }
                if (action == 'cancel') {
                }
            });
        },
        /* 兑换红包接口 */
        YES_exchange() {
            let _this = this
            _this.$http({
                method: 'post',
                url: 'http://saas.zeego.cn/Interface/WJApp/WJ_MoneyPayRecordService.ashx?pagetype=add',
                params: {
                    uId: _this.uid,
                    isderectanswer: _this.usertype,
                    userid: _this.userid,
                    movestarnum: this.movestarnum,
                }
            }).then(function (res) {
                let data = res.data
                Toast({
                    message: data.msg,
                    position: 'center',
                    duration: 3000
                });
                if (data.status == 2) {
                    setTimeout(function() {
                    self.location = 'http://saas.zeego.cn/project/ExamGame/dist/index.aspx';
                    // top.location='http://saas.zeego.cn/project/ExamGame/dist/index.aspx'; 

                    }, 2000);
                }
            }).catch(function (err) {
            })
        },
    },

    watch: {
        uid: function (val, oldVal) {
            let _this = this;
            _this.exchange()
        }
    },
    mounted() {

    },
    components: {


    }
}
</script>

<style lang="less">
.popUpExchange {
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
                background-position: -2.1rem -1.3rem;
            }
        }
        .exchange-content {
            width: 100%;
            .content-top {
                padding-top: .3rem;
                width: 100%; // height: 3rem;
                // background: pink;
                ul {
                    width: 100%;
                    padding: 0.1rem 0;
                    display: inline-block; // display: flex;
                    text-align: center;
                    li {
                        width: 33.333%;
                        float: left;
                        font-size: .12rem;
                        padding: 0 0.05rem;
                        height: 0.9rem;
                        margin-bottom: 0.1rem;
                        .icon-wujiaoxingshixin {
                            font-size: 0.18rem;
                        }
                        .red {
                            width: 100%; // margin-top: 0.1rem;
                            display: block;
                            i {
                                width: 0.6rem;
                                height: 0.6rem;
                                background-position: -5.70rem -3.8rem;
                            }
                            div {
                                font-size: 0.13rem;
                                color: #000;
                                border-radius: 0.1rem;
                                background: #FCECCA;
                                border: 0.01rem solid #FF8799;
                                transform: translate(0, -0.23rem);
                            }
                        }
                        &:last-of-type {
                            >div {
                                height: 0.25rem;
                                line-height: 0.25rem;
                            }
                            .red {

                                i {
                                    background-position: -5rem -3.8rem;
                                }
                            }
                        }
                    }
                }
            }
            .content-footer {
                margin: 0 0.1rem;
                p {
                    font-size: .12rem;
                    span {
                        display: inline-block;
                        width: 0.05rem;
                        height: 0.05rem;
                        border-radius: 0.05rem;
                        background: #0096ff;
                        margin: .05rem 0.05rem 0.02rem 0;
                    }
                }
            }
        }
    }
}
</style>
