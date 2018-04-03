<template>
    <div>
        <div class="answer">
            <div class="header-logo clearfix">
                <span class="logo-text icon_1"></span>
                <span class="logo-icon fr icon_1"></span>
            </div>
            <div class="header-timer">
                <div class="timer">
                    剩余答题时间
                    <span>{{timer}}</span>
                    秒
                </div>
                <div class="sum">
                    答题数
                    <span>{{answercount}}</span>/
                    <span>{{questioncount}}</span>
                </div>
            </div>
            <div class="center-title" v-if="problemData.ItemTypeName == '判断题'">
                <div class="radio box">
                    <span>Q{{+answercount+1}}</span>
                    <span>{{problemData.ItemTitle}}
                        <span>({{problemData.ItemTypeName}})</span>
                    </span>
                    <form>
                        <div v-for="(value,index) in ItemContent" class="input">
                            <!--<input type="radio"  :data-index="index"  v-model="answerData">{{value}}-->
    
                            <input type="radio" id='input' :value="index" name="sex" v-model="answerData" checked>
                        </div>
                        <!--<span>{{answerData}}</span>-->
                    </form>
                </div>
                </span>
            </div>
            <div class="center-title" v-else-if="problemData.ItemTypeName == '多选题'">
    
                <div class="radio">
                    <span>Q{{+answercount+1}}</span>
                    <span>{{problemData.ItemTitle}}
                        <span>({{problemData.ItemTypeName}})</span>
                    </span>
                    <form>
                        <div v-for="(value,index) in ItemContent" class="input">
                            <!--<input type="radio"  :data-index="index"  v-model="answerData">{{value}}-->
                            <input type="checkbox" :value="index" :id="'a'+index" v-model="answerData">
                            <label :for="'a'+index">{{value}}</label>
                        </div>
                        <!--<span>{{answerData}}</span>-->
                    </form>
                </div>
                <!--<u>{{value}}</u>-->
                </span>
            </div>
            <div class="center-title" v-else-if="problemData.ItemTypeName == '单选题'">
                <span class="OrderNum">
                    <!--({{problemData.ItemTypeName}})-->
                </span>
                <div class="radio">
                    <span>Q{{+answercount+1}}</span>
                    <span>{{problemData.ItemTitle}}
                        <span>({{problemData.ItemTypeName}})</span>
                    </span>
                    <form>
                        <div v-for="(value,index) in ItemContent" class="input">
                            <!--<input type="radio"  :data-index="index"  v-model="answerData">{{value}}-->
    
                            <input type="radio" :id="'a'+index" :value="index" name="sex" v-model="answerData">
                            <label :for="'a'+index">{{value}}</label>
                        </div>
                        <!--<span>{{answerData}}</span>-->
                    </form>
                </div>
                <!--<mt-radio :title="problemData.ItemTitle" :options="problemData.ItemContent">
                                                                                                                                                                                                                                                                                                                    </mt-radio>-->
                <!--<span class="choose">您选择的是：
                                                                                                                                                                                                                                                                                                                                                        <u>{{value}}</u>
                                                                                                                                                                                                                                                                                                                                                    </span>-->
            </div>
            <div class="footer-btn">
                <ul>
                    <li>
                        <mt-button type="danger" @click="stopClick">
                            暂停(
                            <u>{{stop}}</u>)
                        </mt-button>
                    </li>
                    <li>
                        <mt-button type="primary" @click="removeClick">
                            <i class="icon_1"></i>
                        </mt-button>
                    </li>
                    <li>
                        <mt-button type="default" @click="addanswerClick">下一题</mt-button>
                    </li>
                </ul>
            </div>
            <div class="footer-text icon_1">2017年质量月</div>
        </div>
        <popUpStop v-show="popUpStopShow" v-on:StopData="stopData" :answercount='answercount' :questioncount='questioncount'></popUpStop>
        <popUpRemove v-show="popUpRemoveShow" v-on:RemoveData="removeData" :userid="userData.userid"></popUpRemove>
        <popUpFail v-show="popUpFailShow" v-on:FailData="failData" :data='answercount'></popUpFail>
        <popUpError v-show='popUpErrorShow' v-on:ErrorData="errorData" :data="problemData.Answer"></popUpError>
        <popUpSucceed v-show='popUpSucceedShow' v-on:SucceedData="succeedData" :getBombnum='getBombnum' :getStarnum='getStarnum' :gamelevels='userData.gamelevels'></popUpSucceed>
    </div>
</template>

<script>
import popUpStop from "../../components/pop-up/popUpStop"
import popUpRemove from "../../components/pop-up/popUpRemove"
import popUpFail from "../../components/pop-up/popUpFail"
import popUpError from "../../components/pop-up/popUpError"
import popUpSucceed from "../../components/pop-up/popUpSucceed"
import { Toast } from 'mint-ui';
export default {


    /* 
    //(使用暂停过后 打错一题就直接结束了)


        
    */

    data() {
        return {
            timer: 30,// 默认倒计时
            remover: null,//定时器开关
            stop: 6,//暂停次数初始化
            is: true, // 控制数据没有渲染出来的控制器
            popUpStopShow: false, // 暂停弹出框
            popUpRemoveShow: false, // 炸弹弹出框
            popUpFailShow: false, // 闯关失败弹出框
            popUpErrorShow: false, // 超时答题弹出框
            popUpSucceedShow: false, // 挑战成功
            /* 获取用户信息 */
            userData: {
                userid: '', // 用户ID
                usertype: '',// 用户类型
                userStarNum: '',//用户星星
                userBombNum: '',//用户炸弹
                gamelevels: '',// 用户级别
                uid: '',
                answertype: 2,//答题方式
            },
            options: [],
            value: '',
            /* 获取问题数据 */
            problemData: {
                ItemTitle: '',// 问题题目
                ItemTypeName: '', //问题类型
                OrderNum: '', // 问题序号
                ID: '', // 题目ID
                activeid: '', // 关卡ID
                Answer: '', // 题目答案
                RecordID: '',//答题记录
            },
            ItemContent: [], // 题目选项
            answerData: [], // 用户提交的答案
            NextQuestio: false,//下一题按钮状态
            ispause: false, // 是否使用暂停
            isbomb: false, // 是否使用炸弹
            isover: '', // 答题是否结束
            answercount: 0, // 用户答题数
            questioncount: '', // 答题总数
            LeftCount: null,//剩余答题数
            isPass: false, // 是非通过
            getBombnum: '', //闯关成功获取的炸弹
            getStarnum: '', //闯关成功获取的星星
        }
    },
    methods: {
        /*用户和题目数据*/
        Data() {
            let _this = this;
            _this.userData.userid = _this.$route.query.userid,//用户ID
                _this.userData.usertype = _this.$route.query.usertype,//用户类型
                _this.userData.userStarNum = _this.$route.query.userStarNum,//星星数
                // _this.userData.userStarNum = '3',//星星数
                // _this.userData.userBombNum = '3',//炸弹数
                _this.userData.userBombNum = _this.$route.query.userBombNum,//炸弹数
                _this.userData.gamelevels = _this.$route.query.gamelevels,//用户级别
                _this.userData.uid = _this.$route.query.uid,//系统用户
                _this.problemData.ItemTitle = _this.$route.query.ItemTitle.replace(/[&nbsp;]/g, ''),//问题题目
                _this.problemData.ItemTypeName = _this.$route.query.ItemTypeName,//问题类型
                _this.problemData.OrderNum = _this.$route.query.OrderNum,//题目序号
                _this.problemData.ID = _this.$route.query.ID,//题目id
                _this.problemData.activeid = _this.$route.query.activeid,//关卡ID
                _this.problemData.RecordID = _this.$route.query.RecordID,//答题记录
                _this.ItemContent = _this.$route.query.ItemContent.split(","),//题目选项
                _this.problemData.Answer = _this.$route.query.Answer,//题目答案
                _this.questioncount = _this.$route.query.QuestionCount//问题总数
            _this.LeftCount = _this.$route.query.LeftCount//用户剩余答题数
        },

        /* 下一题 */
        addanswerClick: function () {
            if (!this.is) {
                return;
            }
            this.addanswer()
        },
        /* 暂停弹框*/
        stopData: function (data) {

            let _this = this
            _this.addanswer() //调用 请求问题 函数
            // _this.timer = 30 //初始化倒计时时间
            _this.startTimer() // 开始倒计时
            _this.popUpStopShow = false
        },
        stopClick() {
            if (this.stop == 0) {
                Toast({
                    message: '暂定次数已用完',
                    position: 'center',
                    duration: 1000
                });
                return
            } else {


                this.popUpStopShow = true // 显示弹框
                clearInterval(this.remover) // 停止倒计时
                this.stop-- // 暂停次数--
                this.ispause = true //使用暂停
            }
        },
        /* 炸题弹框 */
        removeData: function (data) {
            let _this = this
            if (data == false) {
                _this.isbomb = true; // 使用炸弹
                _this.addanswer(); // 调用 提交答案 函数
                // _this.timer = 30 // 初始化时间
            }
            _this.popUpRemoveShow = false
        },
        removeClick() {
            this.popUpRemoveShow = true
        },
        /* 闯关失败 */
        failData: function (data) {
            // clearInterval(this.remover)
            this.popUpFailShow = data
        },
        failClick() {
            clearInterval(this.remover)
            this.popUpFailShow = true
        },
        /* 闯关成功 */
        succeedData: function (data) {
            this.popUpSucceedShow = false
        },
        succeedClick() {
            this.popUpSucceedShow = true // 弹出成功框
            clearInterval(this.remover)
        },
        /*  回答错误  */
        errorData: function (data) {
            let _this = this
            _this.popUpErrorShow = data //隐藏弹出框
            _this.startTimer() // 开始倒计时
            _this.problemDataFun() // 请求问题
            // _this.timer = 30 //初始化倒计时
        },
        errorClick() {
            let _this = this
            _this.popUpErrorShow = true // 显示弹出框
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
                    questionnum: _this.problemData.OrderNum,
                    answertype: _this.userData.answertype,
                    ispause: _this.ispause,
                    isbomb: _this.isbomb,
                    questionanswer: _this.answerData.toString(),
                    RecordID: _this.problemData.RecordID,
                }
            }).then(function (res) {
                let data = res.data
                _this.isover = data.isover; // 回答错误次数
                _this.answercount = data.answercount; // 用户以回答的次数
                _this.LeftCount = data.leftcount // 用户剩余多少题
                // _this.questioncount = data.questioncount;// 问题总数 
                // _this.stop = data.leftpause //暂定次数
                if (data.status == 0) { // 答题错误
                    _this.errorClick()
                    return
                } else if (data.status == 1) {
                    Toast({
                        message: '回答正确',
                        position: 'center',
                        duration: 1500
                    });
                    _this.problemDataFun()
                }

            }).catch(function (err) {
            })
        },
        /* 请求问题 */
        problemDataFun() {
            let _this = this
            _this.is = false
            if (_this.LeftCount >= 1) { // 全部答题未结束
                let URL = 'http://saas.zeego.cn/Interface/WJApp/WJ_QuestionsService.ashx?pagetype=infoQuestion'
                if (_this.isover < 1) { // 没有打错题目
                    _this.problemData.OrderNum++ //题目数
                    _this.answerData = [] //初始化input的值
                    _this.$http({
                        method: 'post',
                        url: URL,
                        params: {
                            activeid: _this.problemData.activeid,
                            ordernum: _this.problemData.OrderNum,
                            Userid: _this.userData.userid,
                            RecordID: _this.problemData.RecordID,
                        }
                    }).then(function (res) {
                        _this.is = true
                        let data = res.data.data
                        _this.ItemContent = data.ItemContent.split(","),//选项
                            _this.problemData.ItemTitle = data.ItemTitle.replace(/[&nbsp;]/g, ''),
                            _this.problemData.ItemTypeName = data.ItemTypeName,
                            _this.problemData.OrderNum = data.OrderNum,
                            _this.problemData.ID = data.ID,
                            _this.problemData.Answer = data.Answer;
                        if (_this.isbomb == true) {
                            _this.timer = 30 //初始化倒计时
                            _this.isbomb = false // 初始化炸弹
                            _this.ispause = false // 初始化暂停
                            return;
                        }
                        _this.timer = 30 //初始化倒计时
                        _this.isbomb = false // 初始化炸弹
                        _this.ispause = false // 初始化暂停
                    }).catch(function (err) {
                    })
                } else { // 打错题目两次
                    _this.failClick() // 弹出闯关失败按钮
                    // clearInterval(_this.remover) // 停止定时器
                    return
                }
            } else { // 答题结束 挑战成功
                _this.isPass = true
                _this.$http({
                    method: 'post',
                    url: 'http://saas.zeego.cn/Interface/WJApp/WJ_UserAnswerRecordService.ashx?pagetype=update',
                    params: {
                        id: _this.problemData.RecordID,
                        isPass: _this.isPass,
                    }
                }).then(function (res) {
                    let data = res.data
                    _this.getBombnum = data.bombnum
                    _this.getStarnum = data.starnum
                    _this.userData.gamelevels = data.gamelevel
                    _this.succeedClick()
                }).catch(function (err) {
                })
            }
        },
        /* 倒计时 */
        startTimer() {
            var _this = this
            _this.remover = setInterval(function () {
                _this.timer-- // 初始时间--
                if (_this.timer == 0) {
                    _this.addanswer()
                }
                if (_this.timer < 0) {
                    clearInterval(_this.remover)
                }
            }, 1000)
        },

    },
    components: {
        popUpStop, //注册暂停组件
        popUpRemove, // 注册炸弹组件
        popUpFail, //注册失败组件
        popUpError, // 注册错误组件
        popUpSucceed,// 挑战成功组件
    },

    mounted() {
        this.startTimer() // 执行倒计时
        this.Data() // 获取用户数据
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
            background-position: 0 -5.32rem;
            background-size: 3.2rem*1.1 5.68rem*1.1;
            margin: 0.20rem 0.15rem 0.05rem;
        }
        .logo-icon {
            width: 0.5rem;
            height: 0.5rem;
            margin: 0.1rem .15rem;
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
            padding-left: 0.2rem;
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
                    margin: 5px 0;
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
                        vertical-align: super;
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
