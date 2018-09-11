<template>
    <div>
        <vNav></vNav>
        <header class="a-header">
            <nav class="main-nav">
                <h1>{{ header }}</h1>
            </nav>
        </header>
    </div>
</template>

<script>
    export default {
        props: [ 'header' ],
        components: {
            'vNav': () => import('../common/Nav.vue'),
        }
    }
</script>

<style scoped>
    .a-header {
        height: 65vh;
        min-height: 180px;
        background: url(../../../../static/images/pic1.jpg) no-repeat 50% 100%;
        background-size: cover;
    }
    @media screen and (max-width: 900px) {
        height: 45vh;
    }
    @media screen and (max-width: 500px) {
        height: 30vh;
    }
    .main-nav {
        display: flex;
        justify-content: center;
        align-items: center;
        height: inherit;
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%);
    }
    .main-nav h1 {
        font-size: 3rem;
        font-weight: 400;
        color: #fff;
        font-family: "Comic Sans MS", curslve, sans-serif;
    }
    article {
        width: 80%;
        min-height: 61vh;
        margin: 0 auto; 
        font-size: 1.55rem;
    }
    article p {
        margin: 1.2rem 0;
    }
    article a {
        color: #FA5555;  
    }
</style>