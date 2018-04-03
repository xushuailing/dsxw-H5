<template>
    <div class="grade-html">
        <div class="grade-content">
            <div class="content">
                <main class="content-main clearfix">
                    <div class="main-title">
                        质量大挑战
                    </div>
                    <p class="main-warn clearfix">每关挑战成功结束后可获得相对的
                        <i class="xingxing">★</i>数</p>
                    <div class="main-list fl">
                        <ul>
                            <p>第一阶段
                                <span>({{IsStageText1}})</span>
                            </p>
                            <li @click='beginChallenge' :data-id="index" v-for="(stageData,index) in stageData1">
                                <mt-button type="primary" class="btn" :class='{btnBg:stageData.IsPass==1}' :disabled="!stageData.IsPass || stageOne || index!=gradeValue">
                                    <span>{{stageData.ActiveName}}</span>
                                    <span v-if="stageData.IsPass == 0">
                                        <i class="iconfont icon-wujiaoxingshixin"></i>
                                        <s>x
                                            <u>{{stageData.StartNum}}</u>
                                        </s>
                                    </span>
                                    <span v-if="stageData.IsPass == 1">已通过</span>
                                    <span v-if="stageData.IsPass == 2">未通过</span>
                                </mt-button>
                            </li>
                        </ul>
                        <ul>
                            <p>第二阶段
                                <span>({{IsStageText2}})</span>
                            </p>
                            <li @click='beginChallenge' :data-id="index+3" v-for="(stageData,index) in stageData2">
                                <mt-button type="primary" class="btn" :disabled="!stageData.IsPass || stageTwo ||(index+3)!=gradeValue">
                                    <span>{{stageData.ActiveName}}</span>
                                    <span v-if="stageData.IsPass == 0">
                                        <i class="iconfont icon-wujiaoxingshixin"></i>
                                        <s>x
                                            <u>{{stageData.StartNum}}</u>
                                        </s>
                                    </span>
                                    <span v-if="stageData.IsPass == 1">已通过</span>
                                    <span v-if="stageData.IsPass == 2">未通过</span>
                                </mt-button>
                            </li>
                        </ul>
                        <ul>
                            <p>第三阶段
                                <span>({{IsStageText3}})</span>
                            </p>
                            <li @click='beginChallenge' :data-id="index+5" v-for="(stageData,index) in stageData3">
                                <mt-button type="primary" class="btn" :disabled="!stageData.IsPass || stageThree ||(index+5)!=gradeValue">
                                    <span>{{stageData.ActiveName}}</span>
                                    <span v-if="stageData.IsPass == 0">
                                        <i class="iconfont icon-wujiaoxingshixin"></i>
                                        <s>x
                                            <u>{{stageData.StartNum}}</u>
                                        </s>
                                    </span>
                                    <span v-if="stageData.IsPass == 1">已通过</span>
                                    <span v-if="stageData.IsPass == 2">未通过</span>
                                </mt-button>
                            </li>
                        </ul>
    
                    </div>
                    <div class="main-info fr">
                        <div class="info-score">
                            <p class="score-title">
                                您拥有的资产
                            </p>
                            <div class="score-grade">
                                <i class="grade-icon" :style="{backgroundPositionY: userData.gamelevels*-.65+'rem'}"></i>
                                <div class="grade-tool">
                                    <span class="xinxin">
                                        <i class="iconfont icon-wujiaoxingshixin"></i>
                                        <u>×
                                            <s>{{userData.userStarNum}}</s>
                                        </u>
                                    </span>
                                    <span class="bomb">
                                        <i class="icon_2"></i>
                                        <u>×
                                            <s>{{userData.userBombNum}}</s>
                                        </u>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="info-ranking">
                            <p class="ranking-title">
                                <i class="iconfont icon-wujiaoxingshixin"></i>排行榜TOP5
                            </p>
                            <ul>
                                <li class="ranking-list" v-for="topData in topDatas">
                                    <span class="list-name fl">{{topData.UserName}}</span>
                                    <span class="list-sum fr">
                                        <i class="iconfont icon-wujiaoxingshixin"></i>
                                        <u>×
                                            <s>{{topData.StarNum}}</s>
                                        </u>
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </main>
            </div>
        </div>
        <footer class="grade-footer clearfix">
            <ul>
                <li class="footer-rule" @click="ruleClick">
                    <a>了解规则</a>
                </li>
                <li class="footer-award" @click="exchangeClick">
                    <a>兑奖</a>
                </li>
                <li class="footer-practice" @click="practiceClick">
                    <a>练习</a>
                </li>
                <li class="footer-begin" @click='beginChallenge'>
                    <a>挑战开始</a>
                </li>
    
            </ul>
            <router-link to></router-link>
        </footer>
        <popUpRule v-show="popUpRuleShow" v-on:RuleData="ruleData"></popUpRule>
        <popUpExchange v-show="popUpExchangeShow" v-on:ExchangeData="exchangeData" :uid='userData.uid' :usertype='userData.usertype' :userid='userData.userid'> </popUpExchange>
        <popUpPractice v-show="popUpPracticeShow" v-on:PracticeData="practiceData" :questioncount='questioncount' :CurrentNum='CurrentNum'></popUpPractice>
    </div>
</template>


<script>
import axios from "axios"
import popUpRule from '../../components/pop-up/popUpRule'
import popUpExchange from '../../components/pop-up/popUpExchange'
import popUpPractice from '../../components/pop-up/popUpPractice'
import { Toast } from 'mint-ui';
import { MessageBox } from 'mint-ui';
export default {

    data() {
        return {

            /* 初始化挑战按钮 */
            isBegin: null,
            /* 初始化弹出框 */
            popUpRuleShow: false,
            popUpExchangeShow: false,
            popUpPracticeShow: false,

            /* 初始化用户数据 */
            userData: {},
            /* 关卡数据 */
            stageData1: '',
            stageData2: '',
            stageData3: '',
            gradeValue: 0,
            IsStageText1: '待开放',
            IsStageText2: '待开放',
            IsStageText3: '待开放',
            /* 初始化关卡阶段 */
            stageOne: true,
            stageTwo: true,
            stageThree: true,
            /* 用户资产 */
            // property: '',
            /* top 5*/
            pagesize: "pagesize=5",
            topDatas: null,
            /* 关卡记录 */
            ordernum: 1,
            /* 练习卡关 */
            few: 1,
            questioncount: '',//练习总数
            CurrentNum: '',//练习记录
            hintTitle: '', // 开始挑战提示信息

        }
    },

    created() {

    },
    mounted() {
        this.getUserData()
        this.userView()
        this.getGrade()
        this.TOP5()
    },
    methods: {
        /* 关卡状态 */
        gradeState(data) {
            let IsPassData = data.data
            for (var i = 0; i < IsPassData.length; i++) {
                if (IsPassData[i].IsPass == 1 || IsPassData[i].IsPass == 2) {
                    this.gradeValue = i + 1
                    // this.gradeValue = 1
                }
            }
        },
        /* 了解规则 */
        ruleData: function (data) {
            this.popUpRuleShow = data
        },
        ruleClick() {
            this.popUpRuleShow = true
        },
        /* 兑换 */
        exchangeData: function (data) {
            this.popUpExchangeShow = data
            location.reload();
        },
        exchangeClick() {
            this.popUpExchangeShow = true
        },
        /* 练习 */
        practiceData: function (data, few) {
            let _this = this
            _this.popUpPracticeShow = false
            if (data == true) {
                _this.getPractice(few)
            }
        },
        practiceClick() {
            let _this = this
            _this.$http({
                method: 'post',
                url: 'http://saas.zeego.cn/Interface/WJApp/WJ_QuestionsService.ashx?pagetype=infotest',
                params: {
                    userid: _this.userData.userid,//用户名
                    ordernum: _this.few, // 练习关数
                    Uid: _this.userData.uid
                }
            }).then(function (res) {
                _this.CurrentNum = res.data.CurrentNum//答题记录
                _this.questioncount = res.data.QuestionCount//问题总数
            }).catch(function (err) {
            })
            _this.popUpPracticeShow = true
        },
        /* 开始挑战 */
        beginChallenge() {
            let _this = this
            let text = ['一', '二', '三', '四', '五', '六', '七'];
            for (var i = 0; i < text.length; i++) {
                if (_this.gradeValue == i) {
                    _this.hintTitle = '当前挑战第' + text[i] + '关卡';
                }
            }
            MessageBox({
                title: _this.hintTitle,
                message: '每关挑战次数无限次，闯关成功后即可获得相应的奖励，可以练习后再来挑战哦!',
                showCancelButton: true,
                cancelButtonText: '去练习',
                confirmButtonText: '继续挑战',
            }).then(action => {
                if (action == 'cancel') {
                    this.practiceClick() // 调用去练习
                }
                if (action == 'confirm') {
                    this.problemId()
                }
            });
        },
        /* 获取题目ID*/
        problemId() {
            let _this = this

            let URL = 'http://saas.zeego.cn/Interface/WJApp/WJ_UserAnswerRecordService.ashx?pagetype=addRecord'
            _this.$http({
                method: 'post',
                url: URL,
                params: {
                    userid: _this.userData.userid,
                    uid: _this.userData.uid,
                    gradeValue: _this.gradeValue
                }
            }).then(function (res) {
                let data = res.data
                _this.problemData(data)
                // _this.topDatas = data.data
            }).catch(function (err) {
            })
        },
        /* 获取题目 */
        problemData(data) {
            let _this = this
            /* 判断关卡是否启动 */
            if (data.IsStartNow == 0) {
                Toast({
                    message: data.msg,
                    position: 'center',
                    duration: 1500
                });
                return;
            }
            let URL = 'http://saas.zeego.cn/Interface/WJApp/WJ_QuestionsService.ashx?pagetype=infoQuestion'
            _this.$http({
                method: 'post',
                url: URL,
                params: {
                    activeid: data.activeid,
                    RecordID: data.RecordID,
                    ordernum: _this.problemData.OrderNum,
                    Userid: _this.userData.userid,
                    // activeid: 26,
                    // RecordID: 2972,
                    // ordernum: '',
                    // Userid: 4043,
                    // ordernum:1,
                }
            }).then(function (res) {
                let problemData = res.data.data
                let QuestionCount = res.data.QuestionCount
                let LeftCount = res.data.LeftCount

                _this.$router.push({
                    path: '/answer',
                    query: {
                        userid: _this.userData.userid,//用户ID
                        usertype: _this.userData.usertype,//用户类型
                        userBombNum: _this.userData.userBombNum,//炸弹数
                        userStarNum: _this.userData.userStarNum,//星星数
                        gamelevels: _this.userData.gamelevels,//用户级别
                        uid: _this.userData.uid,//系统用户
                        ItemTitle: problemData.ItemTitle,//问题题目
                        ItemTypeName: problemData.ItemTypeName,//问题类型
                        OrderNum: problemData.OrderNum,//题目序号
                        ID: problemData.ID,//题目id
                        activeid: data.activeid,//关卡id
                        RecordID: data.RecordID,//答题记录
                        ItemContent: problemData.ItemContent,//选项
                        Answer: problemData.Answer,//答案
                        QuestionCount: QuestionCount,//问题总数
                        LeftCount: LeftCount // 用户剩余答题数
                    }
                })
            }).catch(function (err) {
            })
        },
        /*请求关卡数据*/
        getGrade() {
            let _this = this
            let URL = 'http://saas.zeego.cn//Interface/WJApp/View_Active_VipLevelService.ashx?pagetype=list'

            _this.$http({
                method: 'post',
                url: URL,
                params: {
                    userid: _this.userData.userid,
                }
            }).then(function (res) {
                let data = res.data
                _this.stageData1 = data.data.slice(0, 3)
                _this.stageData2 = data.data.slice(3, 5)
                _this.stageData3 = data.data.slice(5, 7)
                if (data.data[0].IsStartNow == 1) {
                    _this.stageOne = false
                    _this.IsStageText1 = '已开放'
                }
                if (data.data[3].IsStartNow == 1) {
                    _this.stageTwo = false
                    _this.IsStageText2 = '已开放'
                }
                if (data.data[5].IsStartNow == 1) {
                    _this.stageThree = false
                    _this.IsStageText3 = '已开放'
                }

                _this.gradeState(data)
            }).catch(function (err) {
            })
        },
        /* top5数据 */
        TOP5() {
            let _this = this
            let URL = 'http://saas.zeego.cn/Interface/WJApp/WJ_UserService.ashx?pagetype=toplist&' + _this.pagesize
            _this.$http({
                method: 'post',
                url: URL,
                params: {
                    uid: _this.userData.uid,
                    usertype: _this.userData.usertype
                }
            }).then(function (res) {
                let data = res.data
                _this.topDatas = data.data
            }).catch(function (err) {
            })
        },
        /* 获取用户数据*/
        getUserData() {
            let _this = this;
            _this.userData.userid = _this.$route.query.userid,//用户ID
                _this.userData.usertype = _this.$route.query.usertype,//用户类型
                _this.userData.userStarNum = _this.$route.query.starnum,//星星数
                _this.userData.userBombNum = _this.$route.query.bombnum,//炸弹数
                _this.userData.gamelevels = _this.$route.query.gamelevels,//用户级别
                _this.userData.uid = _this.$route.query.uid//系统用户
        },
        /* 资产刷新 */
        userView() {
            let _this = this
            _this.$http({
                method: 'post',
                url: 'http://saas.zeego.cn/Interface/WJApp/WJ_UserService.ashx?pagetype=UserView',
                params: {
                    userid: _this.userData.userid
                }
            }).then(function (res) {
                let data = res.data
                _this.userData.userStarNum = data.starnum
                _this.userData.userBombNum = data.bombnum
                _this.userData.gamelevels = data.gamelevels
            }).catch(function (err) {
            })
        },
        /* 传输练习数据 */
        getPractice(few) {
            this.$router.push({
                path: '/practice',
                query: {
                    userid: this.userData.userid,
                    few: few,
                    uid: this.userData.uid
                }
            })
        },

    },
    components: {
        popUpRule,
        popUpExchange,
        popUpPractice,
    },

}
</script>

<style lang="less">
@colorblue: #0096ff;
.icon-wujiaoxingshixin {
    color: #FFD202;
}

.grade-html {
    height: 100%;
    background: url("../../../static/images/bg.jpg")no-repeat center/cover;
    padding-top: .1rem;


    .grade-content {
        margin: .0rem .11rem;
        height: 4.4rem;
        background: #fff;
        border-radius: .05rem;
        .content {
            height: 100%;
            margin: 0 .1rem;
            .content-main {
                height: 100%;
                text-align: center;
                .main-title {
                    text-align: center;
                    color: #000;
                    font-size: .20rem;
                    text-align: center;
                    padding: .05rem 0;
                    border-bottom: 1px solid #ccc;
                }
                .main-warn {
                    padding: .05rem 0;
                    color: #666;
                    font-size: 0.12rem;
                }
                .main-list {
                    width: 56%;
                    margin-right: .05rem;
                    ul {
                        height: 1.05rem;
                        background: #f6f6f6;
                        border-radius: .1rem;
                        padding: 0 .1rem;
                        &:nth-child(2) {
                            margin: .05rem 0;
                        }
                        &:nth-child(1) {
                            height: 1.4rem;
                        }
                        P {
                            color: #000;
                            font-size: 0.1rem;
                            padding: .07rem 0 .05rem;
                        }
                        li {
                            height: .30rem;
                            width: 100%;
                            &:nth-child(3) {
                                margin: .08rem 0;
                            }
                            .btn {
                                width: 100%;
                                height: 100%;
                                border-radius: .17rem;
                                text-align: left;
                                font-size: .14rem;
                                padding-right: 0;
                                background: @colorblue;
                                .mint-button-text {
                                    line-height: 0.1rem;
                                }
                                span {
                                    margin: 0 .05rem;
                                }
                            }
                            .is-disabled {
                                background: #666;
                            }
                            .btnBg {}
                        }
                    }
                }
                .main-info {
                    width: 42%;
                    >div {
                        background: #f6f6f6;
                        border-radius: .1rem;
                    }
                    .info-score {
                        height: 1.4rem;
                        margin-bottom: .05rem;
                        padding: .07rem .05rem .1rem;
                        .score-title {
                            font-size: .1rem;
                            color: #000;
                        }
                        .score-grade {
                            .grade-icon {
                                text-align: center;
                                width: 0.6rem;
                                height: 0.61rem;
                                margin: 0.1rem 0 .05rem;
                                background: url('../../../static/images/gamelevels.png');
                                background-size: .75rem 5.68rem; // background-clip: content-box;
                                // background-position: 0 0;
                                display: inline-block;
                            }
                            .grade-tool {
                                width: 100%;
                                font-size: 0.1rem;
                                text-align: center;
                                .xinxin {
                                    display: inline-block; // margin-right: .05rem;
                                    .icon-wujiaoxingshixin {
                                        font-size: 0.16rem;
                                    }
                                }
                                .bomb {
                                    display: inline-block;
                                    .icon_2 {
                                        width: 0.5/2rem;
                                        height: 0.4/2rem;
                                        display: inline-block;
                                        vertical-align: bottom;
                                        background-position: -5rem/2 -4.50rem/2;
                                    }
                                }
                            }
                        }
                    }
                    .info-ranking {
                        height: 2.15rem;
                        padding: 0 .05rem;
                        .ranking-title {
                            font-size: .1rem;
                            color: #333;
                            font-weight: 600;
                            padding: .05rem 0;
                            text-align: center;
                            i {
                                font-size: .12rem;
                                margin-right: .05rem;
                            }
                        }
                        ul {
                            height: 1.94rem;
                            .ranking-list {
                                height: .30rem;
                                padding: .00rem .05rem;
                                margin-top: 7px;
                                border-bottom: 1px solid #ccc;
                                font-size: .12rem;
                                line-height: .3rem;
                                &:nth-child(5) {
                                    border: none;
                                }
                                .list-sum {
                                    font-size: 0.1rem;
                                    u {
                                        color: #333;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    .grade-footer {
        width: 100%;
        height: .45rem;
        position: fixed;
        bottom: 0;
        background: rgba(0, 0, 0, .8);
        text-align: center;
        ul {
            display: flex;
            li {
                flex: 1;
                padding-top: 0.15rem;
                &:first-of-type a {
                    border: none;
                }

                a {
                    display: block;
                    color: #fff;
                    font-size: .13rem;
                    border-left: 1px solid #fff;
                    ;
                }
            }
        }
    }
}
</style>
