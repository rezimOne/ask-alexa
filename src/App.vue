<template>
  <div id="app">
    <HeaderComponent :logoRoche="images.logoRoche"/>
    <div class="components">
      <transition name="home-page">
        <HomePage v-if="!isShowCard"
          :logoAlexa="images.logoAlexa"
          :logoActemra="images.logoActemra"
          :faceImage="images.digitalFace"
        />
      </transition>
      <NavbarComponent
        @showCards="showCards"
        @hideCards="hideCards"
      />
      <transition name="fade-cards">
        <section class="cards-wrapper" v-if="isShowCard">
          <QuestionCard
            v-for="(question, index) in questions"
            :key="index"
            :index="index"
            :question="question"
            @setQuestion="showQuestion"
            :questionMark="images.questionMark"
          />
        </section>
      </transition>
      <transition name="fade-textfield">
        <TextfieldComponent
          v-if="isShowTextfield"
          :currentQuestion="currentQuestion"
        />
      </transition>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import NavbarComponent from './components/NavbarComponent.vue'
import QuestionCard from './components/QuestionCard.vue'
import TextfieldComponent from './components/TextfieldComponent.vue'
import HomePage from './components/HomePage.vue'
import HeaderComponent from './components/HeaderComponent.vue'
export default {
  name: 'App',
  components: { HeaderComponent, NavbarComponent, QuestionCard, TextfieldComponent, HomePage},
  data(){
    return {
      questions: [],
      currentQuestion: 'choose question',
      isShowCard: false,
      isShowTextfield: false,
      images: {
        logoRoche: require('./assets/Roche_Logo_800px_Blue_RGB.svg'),
        logoAlexa: require('./assets/logoAlexa1.png'),
        logoActemra: require('./assets/logoActemra1.png'),
        questionMark: require('./assets/questionMark.png'),
        digitalFace: require('./assets/robotFace4.png')
      }
    }
  },
  beforeMount() {
    axios.get('./data.json')
    .then(res => {
      this.questions = res.data.questions;
      console.log(this.questions);
    })
    .catch(err => console.log(err))
  },
  methods: {
    showCards(event) {
      this.isShowCard = event;
      this.isShowTextfield = event
    },
    hideCards(event) {
      if(this.isShowCard){
        this.isShowCard = event;
        this.isShowTextfield = event;
        this.currentQuestion = 'choose question';
      }else console.log('PRESS START');
    },
    showQuestion(event) {
      this.currentQuestion = `Alexa, ask Pavexa ${event}`;
    }
  },
}
</script>

<style lang="scss">
@import './assets/styles.scss';
body {
  background-color: $blueSetColor1;
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $blueSetColor4;
  background-color: $blueSetColor1;
  padding: 1.5rem;
}
.components {
  height: 89vh;
  background-color: $blueSetColor1;
  position: relative;
}
.cards-wrapper {
  height: fit-content;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 750px;
  align-content: center;
  justify-content: center;
  gap: 2rem;
  padding: 10px;
  position: absolute;
  bottom: 200px;
  left: 50%;
  transform: translate(-50%, 0);
}
.fade-cards-enter-active,
.fade-textfield-enter-active
{
  transition: opacity 0.7s ease-out;
}
.fade-textfield-enter,
.fade-cards-enter,
.fade-textfield-leave-to,
.fade-cards-leave-to {
  opacity: 0;
}
</style>