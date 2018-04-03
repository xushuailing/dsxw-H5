<template>
    <div>
        <div class="answer">
            <div class="header-logo clearfix">
                <span class="logo-text icon_2"></span>
                <span class="logo-icon icon_2 fr"></span>
            </div>
            <div class="header-timer">
                <div class="timer">
                    剩余答题时间
                    <span>{{timer}}</span>
                    秒
                </div>
                <div class="sum">
                    答题数
                    <span>{{few}}</span>/
                    <span>{{questioncount}}</span>
                </div>
            </div>
            <div class="center-title" v-if="problemData.ItemTypeName == '判断题'">
                <div class="box radio">
                    <span>Q{{few}}</span>
                    <span>{{problemData.ItemTitle}}
                        <span>({{problemData.ItemTypeName}})</span>
                    </span>
                    <form>
                        <div v-for="(value,index) in problemData.ItemContent" class="input">
                            <input type="radio" id='input' :value="index" name="sex" v-model="answerData" checked>
                        </div>
                    </form>
                </div>
                </span>
            </div>
            <div class="center-title" v-else-if="problemData.ItemTypeName == '多选题'">
    
                <div class="radio">
                    <span>Q{{few}}</span>
                    <span>{{problemData.ItemTitle}}
                        <span>({{problemData.ItemTypeName}})</span>
                    </span>
                    <form>
                        <div v-for="(value,index) in problemData.ItemContent" class="input">
                            <!--<input type="radio"  :data-index="index"  v-model="answerData">{{value}}-->
                            <input type="checkbox" :value="index" :id="'b'+index" v-model="answerData">
                            <label :for="'b'+index">{{value}}</label>
                        </div>
                        <!--<span>{{answerData}}</span>-->
                    </form>
                </div>
                <!--<u>{{value}}</u>-->
                </span>
            </div>
            <div class="center-title" v-else-if="problemData.ItemTypeName == '单选题'">
                <span class="OrderNum">
                </span>
                <div class="radio">
                    <span>Q{{few}}</span>
                    <span>{{problemData.ItemTitle}}
                        <span>({{problemData.ItemTypeName}})</span>
                    </span>
                    <form>
                        <div v-for="(value,index) in problemData.ItemContent" class="input">
                            <input type="radio" :id="'a'+index" :value="index" name="sex" v-model="answerData">
                            <label :for="'a'+index">{{value}}</label>
                        </div>
    
                    </form>
                </div>
            </div>
            <div class="footer-btn">
                <ul>
                    <li>
                        <mt-button type="danger" @click="stopClick">
                            暂停
                        </mt-button>
                    </li>
                    <li>
                        <mt-button type="primary" @click="returnClick">
                            <!--<i class="icon_1"></i>-->
                            返回
                        </mt-button>
                    </li>
                    <li>
                        <mt-button type="default" @click="addanswer">下一题</mt-button>
                    </li>
                </ul>
            </div>
            <div class="footer-text icon_1">2017年质量月</div>
        </div>
        <Stop v-show="StopShow" v-on:StopData="stopData" :few='few' :questioncount='questioncount'></Stop>
        <!--<popUpFail v-show="popUpFailShow" v-on:FailData="failData"></popUpFail>-->
        <error v-show='ErrorShow' v-on:ErrorData="errorData" :Answer='problemData.Answer' :ItemTitle='problemData.ItemTitle'></error>
        <!--<popUpSucceed v-show='popUpSucceedShow' v-on:SucceedData="succeedData"></popUpSucceed>-->
    </div>
</template>

<script>
import Stop from "./popUp/stop"
// import ParPopUpFail from "../../components/pop-up/popUpFail"
import error from "./popUp/error"
// import ParPopUpSucceed from "../../components/pop-up/popUpSucceed"
import { Toast } from 'mint-ui';
import { MessageBox } from 'mint-ui';
export default {


    /* 
    //(使用暂停过后 打错一题就直接结束了)
    */

    data() {
        return {
            timer: 30,// 默认倒计时
            remover: null,//定时器开关
            StopShow: false, // 暂停弹出框
            //         popUpRemoveShow: false, // 炸弹弹出框
            //         popUpFailShow: false, // 闯关失败弹出框
            ErrorShow: false, // 超时答题弹出框
            //         popUpSucceedShow: false, // 挑战成功
            //         /* 获取用户信息 */
            userData: {
                userid: '', // 用户ID
            },
            /* 获取问题数据 */
            problemData: {
                ItemTitle: '',// 问题题目
                ItemTypeName: '', //问题类型
                ID: '', // 题目ID
                activeid: '', // 关卡ID
                Answer: '', // 题目答案
                ItemContent: [], // 题目选项
                answertype: 1,//答题方式
            },
            answerData: [], // 用户提交的答案
            answercount: 0, // 用户答题数
            questioncount: 288, // 答题总数
            few: 1,//选择题目编号
            //         leftcount: '',//剩余答题数
            //         isPass: false, // 是非通过
        }
    },
    methods: {
        /*用户和题目数据*/
        Data() {
            let _this = this;
            _this.userData.userid = _this.$route.query.userid//用户ID
            _this.few = _this.$route.query.few//题目编号
            _this.userData.uid = _this.$route.query.uid
        },
        /* 暂停弹框*/
        stopData: function (data) {
            let _this = this
            _this.startTimer() // 开始倒计时
            _this.StopShow = false // 关闭弹框
        },
        stopClick() {
            this.StopShow = true // 显示弹框
            clearInterval(this.remover) // 停止倒计时
        },
        returnClick() {
            clearInterval(this.remover) // 停止倒计时
            this.$router.go(-1)
        },
        //     /* 闯关成功 */
        //     succeedData: function (data) {
        //         this.popUpSucceedShow = false
        //     },
        //     succeedClick() {
        //         this.popUpSucceedShow = true // 弹出成功框
        //         clearInterval(this.remover)
        //     },
        //     /*  下一题  */
        errorData: function (data) {
            let _this = this
            _this.ErrorShow = false //隐藏弹出框
            if (_this.few >= _this.questioncount) {
                MessageBox({
                    title: '提示',
                    message: '恭喜您练习全部完成!',
                    showCancelButton: false,
                    // cancelButtonText: '确认',
                    confirmButtonText: '返回',
                }).then(action => {
                    if (action == 'confirm') {
                        clearInterval(_this.remover)
                        _this.$router.go(-1)
                    }
                })
                return;
            }
            _this.timer = 30 //初始化倒计时
            _this.startTimer() // 开始倒计时
            _this.few++
            _this.problemDataFun() // 请求问题
        },
        errorClick() {
            let _this = this
            _this.ErrorShow = true // 显示弹出框
            clearInterval(_this.remover) // 停止定时器

        },
        /* 提交答案  */
        addanswer() {
            let _this = this

            let URL = 'http://saas.zeego.cn/Interface/WJApp/WJ_QuestionAnswerService.ashx?pagetype=add'
            _this.$http({
                method: 'post',
                url: URL,
                params: {
                    questionid: _this.problemData.ID,
                    activeid: _this.problemData.activeid,
                    userid: _this.userData.userid,
                    questionnum: _this.few,
                    answertype: _this.problemData.answertype,
                    ispause: false,
                    isbomb: false,
                    questionanswer: _this.answerData.toString(),
                    RecordID: 0,
                }
            }).then(function (res) {
                let data = res.data
                if (data.status == 0) { // 答题错误

                    _this.errorClick()
                    return
                } else if (data.status == 1) {
                    Toast({
                        message: '回答正确',
                        position: 'center',
                        duration: 1500
                    });
                    _this.few++
                    _this.timer = 30 // 初始化时间
                    if (_this.few > _this.questioncount) {
                        MessageBox({
                            title: '提示',
                            message: '恭喜您练习全部完成!',
                            showCancelButton: false,
                            // cancelButtonText: '确认',
                            confirmButtonText: '返回',
                        }).then(action => {
                            if (action == 'confirm') {
                                clearInterval(_this.remover)
                                _this.$router.go(-1)
                            }
                        })
                        return;
                    }
                    _this.problemDataFun()
                    //  _this.startTimer() // 开始倒计时
                }
            }).catch(function (err) {
            })
        },
        /* 请求问题 */
        problemDataFun() {
            let _this = this
            _this.answerData = [] //初始化input的值
            _this.$http({
                method: 'post',
                url: 'http://saas.zeego.cn/Interface/WJApp/WJ_QuestionsService.ashx?pagetype=infotest',
                params: {
                    userid: _this.userData.userid,
                    ordernum: _this.few, // 练习关数
                    Uid: _this.userData.uid // 

                }
            }).then(function (res) {
                let data = res.data.data
                _this.problemData.ItemTitle = data.ItemTitle.replace(/[&nbsp;]/g,''),// 问题题目
                    _this.problemData.ItemTypeName = data.ItemTypeName, //问题类型
                    _this.problemData.ID = data.ID, // 题目ID
                    _this.problemData.activeid = res.data.ActiveID, // 关卡ID
                    _this.problemData.Answer = data.Answer, // 题目答案
                    _this.problemData.ItemContent = data.ItemContent.split(",") // 题目选项
                _this.questioncount = res.data.QuestionCount//问题总数
            }).catch(function (err) {
            })
        },
        //     /* 倒计时 */
        startTimer() {
            var _this = this
            _this.remover = setInterval(function () {
                _this.timer-- // 初始时间--
                if (_this.timer <= 0) {
                    _this.errorClick()
                    clearInterval(_this.remover)
                }
            }, 1000)
        },

    },
    components: {
        Stop, //注册暂停组件
        //     popUpRemove, // 注册炸弹组件
        //     popUpFail, //注册失败组件
        error, // 注册错误组件
        //     popUpSucceed,// 挑战成功组件
    },

    mounted() {
        this.startTimer() // 执行倒计时
        this.Data() // 获取用户数据
        this.problemDataFun() //请求问题
    },

}
</script>

<style lang="less">
.answer {
    .header-logo {

        .logo-text {
            width: 1rem;
            height: .3rem;
            display: inline-block;
            background-size: 3.2rem*1.1 5.68rem*1.1;
            background-position: 0 -5.32rem;
            margin: 0.20rem 0.15rem 0.05rem;
        }
        .logo-icon {
            width: 0.6rem;
            height: 0.6rem;
            margin: 0rem .15rem;
            background-size: 3.2rem*1.2 5.68rem*1.2;
            background-position: -1.14rem -5.8rem;
            display: inline-block;
        }
    }
    .header-timer {
        width: 100%;
        height: 0.6rem;
        padding: 0 0.2rem;
        background: url('dsxw-answer-bg.png');
        background-size: 0.13rem 0.6rem;
        div {
            display: inline-block;
            line-height: 0.5rem;
            color: #fff;
            font-size: 0.13rem;
        }
        .timer {
            margin-right: 0.15rem;
            span {
                text-align: center;
                display: inline-block;
                width: 0.5rem;
                height: 0.25rem;
                font-size: 0.2rem;
                background: #fff;
                vertical-align: sub;
                line-height: 0.25rem;
                border-radius: 0.05rem;
                color: #0096ff;
            }
        }
        .sum {
            padding-left: 0.1rem;
            height: 0.3rem;
            line-height: 0.3rem;
            border-left: 1px solid #eee;
        }
    }
    .center-title {
        padding: 0.1rem 0.1rem;
        .radio {
            span {
                margin-right: 5px;
                color: #000;
                font-size: .13rem;
                span {
                    color: #666;
                }
            }
            form {
                padding: 10px;
                .input {
                    // height: 30px;
                    input {
                        -webkit-appearance: none;
                        -moz-appearance: none;
                        position: relative;
                        width: 20px;
                        height: 20px;
                        font-size: .14rem;
                        background: #cbd1d8;
                        border: none;
                        color: #fff;
                        cursor: pointer;
                        display: inline-block;
                        outline: none;
                        position: relative;
                        margin-right: 0.1rem; // z-index: 2;
                        border-radius: 50%;
                        &:checked {
                            background: #59ACEE;
                        }
                        &:checked::before {
                            width: 20px;
                            height: 20px;
                            position: absolute;
                            content: '\2714';
                            display: inline-block;
                            font-size: 16px;
                            text-align: center;
                            line-height: 22px;
                        }
                    }
                    label {
                        display: inline-block;
                        width: 80%;
                        vertical-align: top;
                    }
                }
            }
        }
        .box {
            form {
                display: flex;
                .input {
                    height: inherit;
                    text-align: center;
                    flex: 1;
                    margin-top: 20px;
                    #input {
                        height: 80px;
                        width: 80px;
                        background: url('correct.png')no-repeat center/60%;
                        &::before {
                            z-index: -1;
                            width: 80px;
                            height: 80px;
                            border: 2px solid #59ACEE;
                            border-radius: 50%;
                            font-size: 0;
                        }
                    }
                    &:nth-child(2) {
                        #input {
                            font-size: 20px;
                            background: url('error.png')no-repeat center/60%;
                        }
                    }
                }
            }
        }
        .choose {
            display: inline-block;
            margin-top: 0.2rem;
            font-size: .14rem;
            u {
                color: green; // margin-top: 0.2rem;
            }
        }
    }

    .footer-btn {
        width: 100%;
        position: fixed;
        bottom: .25rem;
        ul {
            width: 100%;
            li {
                width: 33.333%;
                padding: 0.2rem 0.07rem;
                float: left;
                .icon_1 {
                    margin: 0 auto;
                    width: 0.5rem;
                    height: 0.4rem;
                    display: block;
                    background-position: -5rem -4.5rem;
                }
                button {
                    width: 100%;
                    height: 0.5rem;
                    border-radius: 0.4rem;
                }
                .mint-button--primary {
                    background: #FBA800;
                }
                .mint-button--default {
                    background: #8ED718;
                }
            }
        }
    }

    .footer-text {
        height: 1px;
        width: 100%;
        color: #666;
        text-align: center;
        line-height: 0.01rem;
        font-weight: 500;
        background-position: 0 -9.6rem;
        position: absolute;
        bottom: 0.2rem;
        left: 0;
    }
}
</style>
