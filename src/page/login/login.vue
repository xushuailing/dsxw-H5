<template>
    <div class="app-login">
        <header class="login-content">
            <div class="logo">
                <i class="logo-text  fl"></i>
                <i class="logo-icon  fr"></i>
            </div>
        </header>
        <div class="login-prompt">
            <div class="prompt-text">
                乐业·勤业·卓业
            </div>
        </div>
        <form class="login-form" role="form">
            <ul>
                <li class="form-group">
                    <i class="icon-icon iconfont fl"></i>
                    <mt-field label="工号" placeholder="请输入工号" class="form-group-input useridcard" v-model="useridcard"></mt-field>
                    <!--<label for="">工号</label>-->
                    <!--<input type="text"  v-model="useridcard" placeholder="请输入工号" class="form-group-input useridcard">-->
                </li>
                <li class="form-group">
                    <!--v-model="username"-->
                    <i class="iconfont icon-geren-copy fl"></i>
                    <mt-field label="姓名" placeholder="请输入姓名(中文)" class="form-group-input" v-model="username"></mt-field>
                </li>
                <li class="form-group">
                    <!--v-model="password"-->
                    <i class="iconfont icon-mima fl"></i>
                    <mt-field label="密码" placeholder="身份证后4位" type="password" class="form-group-input" v-model="userpass"></mt-field>
    
                </li>
            </ul>
        </form>
        <div class="login-btn">
            <router-link to>
                <button type="submit" class="btn-default" @click="userLogin">登录</button>
            </router-link>
        </div>
        <div class="login-line icon_1">
            2017年质量月
        </div>
    
    </div>
</template>

<script>
import axios from "axios"
import { Toast } from 'mint-ui';
export default {


    data() {

        return {
            useridcard: '',
            username: '',
            userpass: '',
            userid: '',
            usertype: '',
            bombnum: '',
            gamelevels: '',
            uid: '',
        }
    },
    methods: {
        userLogin() {
            var _this = this
            var r = window.location.href.split('=');
            // var r = 'http://saas.zeego.cn/project/ExamGame/dist/index.html?openid=ocpe8wWEY2bB2Cl4LiPmSUTkvpIY#/'.split('=')
            var r = 'http://saas.zeego.cn/project/ExamGame/dist/index.html?openid=ocpe8wWEY2bB2Cl4LiPmSUTkvpIY&from=singlemessage&isappinstalled=0#/'.split('=')
            var open = r[1].split('&')[0].split('#')[0]
            
            var URL = 'http://saas.zeego.cn/Interface/WJApp/WJ_UserService.ashx?pagetype=UserLogin'

            if (_this.useridcard == '' || _this.username == '' || _this.userpass == '') {
                Toast({
                    message: '工号姓名密码不能为空',
                    position: 'center',
                    duration: 500
                });
            } else {
                this.$http({
                    method: 'post',
                    url: URL,
                    params: {
                        useridcard: _this.useridcard,
                        username: _this.username,
                        userpass: _this.userpass,
                        openid: open
                    }
                }).then(function (res) {
                    var data = res.data
                    if (data.status == 1) {
                        _this.login(data)
                        _this.localStorage(data)
                        Toast({
                            message: data.msg,
                            position: 'center',
                            duration: 500
                        });
                    } else if (data.status == 0) {
                        Toast({
                            message: data.msg,
                            position: 'center',
                            duration: 500
                        });
                    }
                }).catch(function (err) {
                })
            }
        },
        /* 传递数据 */
        login(data) {
            this.$router.push({
                path: "/rule",
                query: {
                    userid: data.userid,//用户ID
                    usertype: data.usertype,//用户类型
                    starnum: data.starnum,//炸弹数
                    bombnum: data.bombnum,//星星数
                    gamelevels: data.gamelevels,//用户级别
                    uid: data.uid,//系统用户
                }
            })
        },
        /* 存储数据 */
        localStorage(data) {
            window.localStorage.setItem("userid",data.userid);
            window.localStorage.setItem("usertype",data.usertype);
            window.localStorage.setItem("starnum",data.starnum);
            window.localStorage.setItem("bombnum",data.bombnum);
            window.localStorage.setItem("gamelevels",data.gamelevels);
            window.localStorage.setItem("uid",data.uid);
        },
    },
    computed: {

    },
    mounted() {

    }

}
</script>

<style lang="less">
/*
* @Author: Marte
* @Date:   2017-06-05 15:09:54
* @Last Modified by:   Marte
* @Last Modified time: 2017-06-05 15:09:54
*/

@sizecolor: #247BB5;
html,
body {
    height: 100%;
    min-height: 5.08rem;
}

.app-login {
    height: 100%;
    width: 100%;
    background: url('login-bg.jpg') no-repeat center/cover; // position: relative;
    .login-content {
        .logo {
            width: 100%;
            height: 0.45rem; // background: red;
            padding: 0.05rem;
            .logo-text {
                width: 1rem;
                height: .3rem;
                margin: 0.07rem 0.05rem 0.05rem;
                background: url('../../../static/images/logo01.png') no-repeat center/cover;
            }
            .logo-icon {
                width: 0.6rem;
                height: 0.6rem;
                margin-right: 0.05rem;
                background: url('../../../static/images/logo02.png') no-repeat center/cover;
            }
        }
    }
    .login-prompt {
        width: 2.5rem;
        height: .3rem;
        margin: 0 auto;
        margin-top: 1.4rem;
        // display: inline-block;
        .prompt-text {
            height: 100%;
            padding: .05rem;
            background: url("login-sbg.png") no-repeat;
            background-size: cover;
            text-align: center;
            line-height: 0.16rem;
            color: @sizecolor;
        }
    }
    .login-form {
        width: 75%;
        height: 1.3rem;
        margin: 0 auto;
        background: #C4E1F3;
        padding: 0 .1rem;
        border-radius: .05rem;
        margin-top: .3rem;
        color: @sizecolor;
        margin-bottom: .3rem;
        ul {
            height: 100%;
            width: 100%;
        }
        .form-group {
            height: 33.333%;
            width: 100%;
            margin: 0;
            border-bottom: 1px solid #ececec;
            .iconfont {
                text-align: center;
                line-height: .425rem;
                width: .25rem;
                height: 100%;
                margin-left: .05rem;
                font-size: .22rem;
            }
            .mint-cell {
                height: 100%;
                min-height: .3rem;
                background-image: none;
                background: #C4E1F3;
                .mint-cell-wrapper {
                    font-size: .13rem; // margin-top: 3px;
                    height: 100%;
                    min-height: 0;
                    background-image: none;
                    .mint-cell-title {
                        width: .39rem;
                    }
                    .mint-cell-value {
                        color: #000;
                        input {

                            background: #C4E1F3;
                        }
                    }
                }
            }
        }
    }
    .login-btn {
        width: 75%;
        margin: 0 auto;
        height: .35rem;
        a {
            display: block;
            height: 100%;
            .btn-default {
                width: 100%;
                color: #fff;
                background: linear-gradient(to bottom, #60b5f2 12%, #055B96 90%);
                height: 100%;
                font-size: .18rem;
                border-radius: 0.05rem;
                border: 1px solid #8ED8FF;
            }
        }
    }
    .login-line {
        height: 0.01rem;
        width: 100%;
        margin-top: .4rem;
        color: #eee;
        text-align: center;
        line-height: 0.01rem;
        background-position: 0 -9.6rem;
    }
}
</style>




