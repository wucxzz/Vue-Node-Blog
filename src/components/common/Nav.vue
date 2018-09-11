<template>
    <div>
        <ul class="nav">
            <li>
                <router-link class="item" to="/">主页</router-link>
            </li>
            <li>
                <router-link class="item" to="/about">关于</router-link>
            </li>
            <li>
                <router-link class="item" to="/blog">Blog</router-link>
            </li>
            <li v-if="isLogin">
                <router-link class="item" to="/publish">发布</router-link>
            </li>
            <li v-if="!isLogin">
                <router-link class="item" to="/login">登录</router-link>
            </li>
            <!-- <li v-if="isLogin">
                <router-link class="item" @click="logoutAdmin">退出</router-link>
            </li> -->
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                isLogin: '',
            }
        },
        methods: {
            logoutAdmin() {
                this.$http.post('/api/user/logout')
                    .then((res) => {
                        this.$router.push('/Admin');
                    })
                    .catch((err) => {
                        throw err;
                    })
            }
        },
        beforeCreate() {
            this.$http.get('/api/getSession')
                .then((res) => {
                    res.data === false ? this.isLogin = false : this.isLogin = true;
                })
                .catch((err) => {
                    throw err;
                })
        },
        methods: {

        }
    }
</script>

<style>
    .nav {
        position: fixed;
        width: 100%;
        display: flex;
        -webkit-flex-flow: row wrap;
        justify-content: flex-end;
        right: 30px;
        background-color: rgba(0, 0, 0, 0);
        transition: all .4s;
        list-style: none;
        z-index: 100;
    }
    .item {
        font-size: 1.2rem;
        display: block;
        margin: 0;
        padding: 1rem 1.2rem;
        opacity: 1;
        transition: opacity 0.4s;
        cursor: pointer;
        color: #fff;
    }
    a {
        text-decoration: none;
    }
    .nav a:hover {
        opacity: 0.7;
    }
</style>