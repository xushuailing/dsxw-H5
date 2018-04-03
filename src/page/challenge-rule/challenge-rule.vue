<template>
    <div class="app">
        <div class="rule">
            <div class="rule-content">
    
                <div class="content-title">
                    挑战规则
                </div>
                <div class="content-box">
                    <div class="content-text">
                        <mt-tab-container v-model="active">
                            <mt-tab-container-item id="0">
                                <p>本次知识竞赛线上挑战分七关，详见下表：</p>
                                <table>
    
                                    <tr>
                                        <th>关卡</th>
                                        <th>答题数量</th>
                                        <th>奖励1</th>
                                        <th>奖励2</th>
                                        <th>获得称号</th>
                                    </tr>
    
                                    <tr>
                                        <th>第一关</th>
                                        <th>10道</th>
                                        <th>
                                            <i class="xingxing">★</i>
                                        </th>
                                        <th>炸弹</th>
                                        <th>白铁质量</th>
                                    </tr>
    
                                    <tr>
                                        <th>第二关</th>
                                        <th>20道</th>
                                        <th>
                                            <i class="xingxing">★★</i>
                                        </th>
                                        <th>炸弹</th>
                                        <th>青铜质量</th>
                                    </tr>
    
                                    <tr>
                                        <th>第三关</th>
                                        <th>20道</th>
                                        <th>
                                            <i class="xingxing">★★</i>
                                        </th>
                                        <th>炸弹</th>
                                        <th>水晶质量</th>
                                    </tr>
                                    <tr>
                                        <th>第四关</th>
                                        <th>30道</th>
                                        <th>
                                            <i class="xingxing">★★</i>
                                        </th>
                                        <th>炸弹</th>
                                        <th>白银质量</th>
                                    </tr>
                                    <tr>
                                        <th>第五关</th>
                                        <th>30道</th>
                                        <th>
                                            <i class="xingxing">★★</i>
                                        </th>
                                        <th>炸弹</th>
                                        <th>黄金质量</th>
                                    </tr>
                                    <tr>
                                        <th>第六关</th>
                                        <th>40道</th>
                                        <th>
                                            <i class="xingxing">★★★</i>
                                        </th>
                                        <th>炸弹</th>
                                        <th>铂金质量</th>
                                    </tr>
                                    <tr>
                                        <th>第七关</th>
                                        <th>40道</th>
                                        <th>
                                            <i class="xingxing">★★★</i>
                                        </th>
                                        <th>炸弹</th>
                                        <th>钻石质量</th>
                                    </tr>
    
                                </table>
                            </mt-tab-container-item>
                            <mt-tab-container-item id="1">
                                <p>1、第1关，题库为固定的小题库“与质量月相关的知识点”；</p>
                                <p>2、第2~7关，挑战题目从总题库里随机抽选，已挑战的题在后续关卡中会自动剔除；</p>
                                <p>3、练习题库内包含所有闯关挑战时使用的题目，可以先练习再闯关；
                                </p>
                                <p>4、仅挑战成功后才可获得对应关卡的
                                    <i class="xingxing">★</i>、炸弹和称号奖励；
                                </p>
                                <p>5、每一道题的答题时间为30秒，超时或答错会重新开始当前关卡；
                                </p>
                                <p>6、每关挑战机会无限次，通过后不可再挑战，当前关卡答题错数≥3次时系统会自动终止当前关卡，挑战将重新开始；
                                </p>
                                <p>7、闯关过程可暂停，恢复答题后自动跳到下一题；
                                </p>
                                <p></p>
                                <p>8、挑战时暂停的题不再作答也不计算在答题总数内；
                                </p>
                                <p>9、挑战时每关只能暂停6次，练习时不限暂停次数；
                                </p>
                                <p>10、闯关成功可获得一颗
                                    <i class="xingxing">★</i>，用
                                    <i class="xingxing">★</i>可以购买炸弹；
                                </p>
                                <p>11、炸弹用来炸题，炸掉的题算在总答题数量内；
                                </p>
                                <p>12、练习时点击“重新开始”，可手动选择从第几题开始；
                                </p>
                                <p>13、练习时恢复暂停后继续答当前题；
                                </p>
                                <p>14、挑战和练习答错时，系统会显示正确答案；
                                </p>
                                <p>15、已兑换和购买使用的
                                    <i class="xingxing">★</i>会从累计
                                    <i class="xingxing">★</i>数中自动减少；
                                </p>
                                <p><div>16、第一阶段开放时间：2017年6月23日</div><div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;第二阶段开放时间：2017年7月10日<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（上午9:00）</div></div> <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;第三阶段开放时间：2017年7月17日 <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（上午9:00）</div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 每阶段开放当日都会发布一批红包；</div>
                                </p>
                                <p>17、兑换红包数量有限，先兑先得。
                                </p>
                            </mt-tab-container-item>
                            <mt-tab-container-item id="2">
                                <table>
                                    <tr>
                                        <th colspan="6">2017年线上知识竞赛练习题库知识点目录</th>
                                    </tr>
                                    <tr>
                                        <th>序号</th>
                                        <th>间接雇员</th>
                                        <th>直接雇员</th>
                                    </tr>
    
                                    <tr>
                                        <th>1</th>
                                        <th>产品质量先期策划（APQP）</th>
                                        <th>5S</th>
                                    </tr>
    
                                    <tr>
                                        <th>2</th>
                                        <th>设计失效模式及后果分析（DFMEA）</th>
                                        <th>关键绩效指标（KPI）
                                        </th>
                                    </tr>
    
                                    <tr>
                                        <th>3</th>
                                        <th>制程失效模式及后果分析（PFMEA）</th>
                                        <th>静电释放(ESD)
                                        </th>
                                    </tr>
                                    <tr>
                                        <th>4</th>
                                        <th>测量系统的评估（MSA）</th>
                                        <th>改善建议(3i)
                                        </th>
                                    </tr>
                                    <tr>
                                        <th>5</th>
                                        <th>统计过程控制（SPC）</th>
                                        <th>客诉问题（0KM）
                                        </th>
                                    </tr>
                                    <tr>
                                        <th>6</th>
                                        <th>德国汽车工业联合会6.3/6.5</th>
                                        <th>过程质量问题反馈(MQF)
                                        </th>
                                    </tr>
                                    <tr>
                                        <th>7</th>
                                        <th>产品质量先期策划（PPAP）</th>
                                        <th>客诉问题（FCR）
                                        </th>
                                    </tr>
                                    <tr>
                                        <th>8</th>
                                        <th>汽车行业质量管理体（IATF16949）</th>
                                        <th>审核资料
                                        </th>
                                    </tr>
                                    <tr>
                                        <th>9</th>
                                        <th>IWMS、MES、PLM、PLM（工业4.0）</th>
                                        <th>标准作业指导书(SOP)
                                        </th>
                                    </tr>
                                    <tr>
                                        <th>10</th>
                                        <th>精益生产相关知识</th>
                                        <th>精益生产相关知识
                                        </th>
                                    </tr>
                                    <tr>
                                        <th>11</th>
                                        <th>品质控制七大手法</th>
                                        <th>品质控制七大手法</th>
                                    </tr>
                                    <tr>
                                        <th>12</th>
                                        <th>质量工具（5WHY）</th>
                                        <th>质量工具（5WHY）</th>
                                    </tr>
                                    <tr>
                                        <th>13</th>
                                        <th>质量工具（PDCA）</th>
                                        <th>质量工具（PDCA）</th>
                                    </tr>
                                    <tr>
                                        <th>14</th>
                                        <th>质量工具（8D）</th>
                                        <th>质量工具（8D）</th>
                                    </tr>
                                    <tr>
                                        <th>15</th>
                                        <th>质量方针</th>
                                        <th>质量方针</th>
                                    </tr>
                                </table>
                            </mt-tab-container-item>
                        </mt-tab-container>
    
                    </div>
                </div>
                <div class="content-button">
                    <p class="title">最终解释权归德赛西威质量月组委会所有</p>
                    <mt-button type="default" v-on:click="page1()" :disabled='disabled1'>上一页</mt-button>
                    <mt-button type="default" v-on:click="page2()" :disabled='disabled2'>下一页</mt-button>
                </div>
            </div>
            <footer class="rule-footer clearfix">
                <ul>
                    <li class="footer-rule ">
                        <router-link to="/">不接受</router-link>
                    </li>
                    <li class="footer-award " @click='userInfo'>
                        <router-link to>接受</router-link>
                    </li>
                </ul>
            </footer>
        </div>
    </div>
</template>

<script>
import axios from "axios"
export default {
    data() {
        return {
            active: '0',
            userData: {
                userid: '',
                usertype: '',
                starnum: '',
                bombnum: '',
                gamelevels: '',
                uid: '',
            },
            disabled2: false,
            disabled1: true,

        }
    },

    methods: {
        /* 得到用户信息 */
        getUserData() {
            // this.userData 
            this.userData.userid = this.$route.query.userid,
                this.userData.usertype = this.$route.query.usertype,
                this.userData.starnum = this.$route.query.starnum,
                this.userData.bombnum = this.$route.query.bombnum,
                this.userData.gamelevels = this.$route.query.gamelevels,
                this.userData.uid = this.$route.query.uid
            // this.userInfo(userData)
        },
        // 规则翻页
        page1() {
            if (this.active > 0) {
                this.active--;
                this.active = this.active.toString()
                if (this.active == 0) {
                    this.disabled1 = true
                } else if (this.active < 2) {
                    this.disabled2 = false
                }
                return
            }
        },
        page2() {
            if (this.active < 2) {
                this.active++;
                this.active = this.active.toString()
                if (this.active == 2) {
                    this.disabled2 = true
                } else if (this.active >= 0) {
                    this.disabled1 = false
                }
                return
            }


        },
        /* 传递用户数据 */
        userInfo() {
            this.$router.push({
                path: "/grade",
                query: {
                    userid: this.userData.userid, //用户ID
                    usertype: this.userData.usertype, //用户类型
                    starnum: this.userData.starnum, //炸弹数
                    bombnum: this.userData.bombnum, //星星数
                    gamelevels: this.userData.gamelevels, //用户级别
                    uid: this.userData.uid, //系统用户
                }
            })
        },
        getLocalStorage() {
            if (this.userData.userid) {
                return
            }
            this.userData.userid = localStorage.userid
            this.userData.usertype = localStorage.usertype
            this.userData.starnum = localStorage.starnum
            this.userData.bombnum = localStorage.bombnum
            this.userData.gamelevels = localStorage.gamelevels
            this.userData.uid = localStorage.uid
        },
    },
    mounted() {
        let _this = this
        _this.getUserData()
        _this.getLocalStorage()
    },
}
</script>

<style lang="less">
.app {
    min-height: 100%;
    height: 100%;
    width: 100%;
    min-width: 3.2rem;
    .rule {
        background: url("../../../static/images/bg.jpg") no-repeat center/cover;
        height: 100%;
        padding-top: 0.2rem;
        .rule-content {
            margin: 0 0.15rem 0.15rem;
            padding-bottom: 0.1rem;
            border-radius: 0.1rem;
            background: #fff;
            .content-title {
                color: #000;
                font-size: 0.2rem;
                text-align: center;
                padding: 0.1rem 0;
                margin: 0 0.3rem;
            }
            .content-box {
                min-height: 2.6rem;
                margin: 0 0.3rem;
                .content-text {
                    height: 2.8rem;
                    overflow: hidden;
                    overflow-y: auto;
                    &::-webkit-scrollbar-track-piece {
                        background-color: rgba(0, 0, 0, 0);
                        border-left: 1px solid rgba(0, 0, 0, 0);
                    }
                    &::-webkit-scrollbar {
                        width: 0.03rem;
                        height: 0.1rem;
                        border-radius: 5px;
                    }
                    &::-webkit-scrollbar-thumb {
                        background-color: rgba(0, 0, 0, 0.3);
                        background-clip: padding-box;
                        border-radius: 5px;
                        min-height: 0.2rem;
                    }
                    &::-webkit-scrollbar-thumb:hover {
                        background-color: rgba(0, 0, 0, 0.3);
                        border-radius: 5px;
                    }

                    .mint-tab-container-wrap {
                        .mint-tab-container-item:nth-child(1) {
                            font-size: 0.12rem;
                            p {
                                font-size: .11rem;
                            }
                            tr {
                                height: 0.3rem;
                            }
                            table {
                                margin-top: 0.05rem;
                            }
                        }

                        .mint-tab-container-item:nth-child(2) {

                            border-top: 1px solid #ccc;
                        }
                        .mint-tab-container-item:nth-child(3) {
                            table {
                                margin-top: 0.05rem;
                                font-size: .11rem;
                                text-align: left;
                                tr:nth-child(1) {
                                    th {
                                        font-weight: 600;
                                        color: #000;
                                    }
                                }
                                tr:nth-child(2) {
                                    text-align: center;
                                    th {
                                        font-weight: 600;
                                        background: #ccc;
                                        color: #000;
                                    }
                                }
                                tr:nth-child(3) {}
                                tr {
                                    th:nth-child(1) {
                                        text-align: center;
                                    }
                                }
                            }
                        }
                    }
                    .mint-tab-container {
                        margin: 0 auto 0.2rem;
                        font-size: 0.11rem;
                        p {
                            margin: 0.1rem 0;
                        }
                        table {
                            margin: 0 auto;
                        }
                        tr,
                        th,
                        td,
                        table {
                            color: #666;
                            font-weight: normal
                        }
                        th {
                            border: 1px solid #666;
                        }
                    }
                }
            }
            .content-button {
                width: 100%;
                text-align: center;
                margin-top: 0.1rem;
                .title {
                    font-size: 0.12rem;
                    font-weight: 700;
                }
                .mint-button {
                    height: 0.4rem;
                    width: 40%;
                    border-radius: 0.2rem;
                    margin: 0.15rem 0.1rem;
                    color: #fff;
                    font-size: 0.12rem;
                    background: #999;
                }
                .is-disabled {
                    background: #fff;
                    color: #333;
                }
            }
        }
        .rule-footer {
            width: 100%;
            height: 0.45rem;
            position: fixed;
            left: 0;
            bottom: 0;
            background: rgba(0, 0, 0, .8);
            text-align: center;
            ul {
                height: 100%;
                display: flex;
                li {
                    flex: 1;
                    margin: 0.1rem 0;
                    line-height: 0.25rem;
                    a {
                        display: inline-block;
                        width: 100%;
                        font-size: 0.13rem;
                        color: #ccc;
                    }
                }
                .footer-rule {
                    border-right: 1px solid #ccc;
                }
            }
        }
    }
}
</style>
