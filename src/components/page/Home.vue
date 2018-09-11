<template>
  <header>
    <vNav></vNav>
    <div class="img-wrap">
      <img :src="mySrc" />
    </div>
    <div class="text-wrap">
      <h1 class="shaddow">{{headline}}</h1>
      <p class="shadow-light">{{subline}}</p>
    </div>
    <div class="pointer-wrap" @click="scrollDown()">
      <router-link class="item" to="/blog"><i>Entry</i></router-link>
    </div>
  </header>
</template>

<script>
  export default {
    data() {
        return {
            mySrc: '../../../../static/images/bg1.jpg',
            headline: 'wucxzz',
            subline: '出发之前永远是梦想，上路之后永远是挑战',
        }
        
    },
    components: {
      'vNav': () => import('../common/Nav.vue')
    },
    methods: {
      scrollDown() {
        window.scrollTo(0, 800);
      }
    }
  }
</script>

<style scoped>
    header {
        position: relative;
        max-height: 100vh;
        min-height: 30vh;
    }

    .img-wrap {
        display: inline-block;
        width: 100%;
        max-height: 100vh;
        min-height: 30vh;
        background-color: #eee;
        
    }
    .img-wrap img {
        width: 100%;
        max-height: inherit;
        max-width: 100%;
        vertical-align: middle;
        opacity: 0;
        animation: fadeIn 1.5s ease-out forwards;
    }

    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1;}
    }
    .text-wrap {
        position: absolute;
        color: #fff;
        text-align: center;
        max-width: 94%;
        top: 50%;
        left: 50%;
        font-family: -apple-system,BlinkMacSystemFont,segoe ui,roboto,oxygen,ubuntu,cantarell,fira sans,droid sans,helvetica neue,sans-serif;
        transform: translateX(-50%) translateY(-50%);
    }

    .text-wrap h1 {
        font-size: 3.8rem;
        cursor: default;
        animation: fade-in-down .6s both;
        animation-delay: 1.2s;
    }
    .text-wrap p {
        font-size: 1.2rem;
        cursor: default;
        animation: fade-in-down .9s both;
        animation-delay: 1.1s;
    }
    a {
        text-decoration: none;
    }
    .pointer-wrap {
        position: absolute;
        color: rgba(255, 255, 255, 0.7);
        font-size: 34px;
        width: 34px;
        height: 34px;
        left: 50%;
        margin-left: -17px;
        bottom: 45px;
        text-align: center;
        animation: bounce 4s 2s infinite;
        transition: color .3s ease;
        cursor: pointer;
    }   
    @keyframes bounce {
        0%, 10%, 25%, 40%, 50% { transform: translateY(0); }
        20% { transform: translateY(-10px); }
        30% { transform: translateY(-5px); }
    }
    @media only screen and (max-width: 1024px) {
      .pointer-wrap {
          display: none;
      }
    }
    .shaddow {
        text-shadow: 0px 0px 30px #444;
    }
    .shadow-light {
      text-shadow: 0px 0px 5px #444;
    }

    @keyframes fade-in-down {
        from {
            opacity: 0;
            transform: translateY(-10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
</style>