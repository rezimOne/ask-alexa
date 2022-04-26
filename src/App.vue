<template>
  <div id="app">
    <div class="components">
      <HeaderComponent :logoRoche="images.logoRoche"/>
      <transition name="home-page">
        <HomePage v-if="!isShowCard"
          :logoAlexa="images.logoAlexa"
          :logoActemra="images.logoActemra"
          :faceImage="images.digitalFace"
        />
      </transition>
      <NavbarComponent
        @showCards="showCards"
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
          :iconSay="images.iconSay"
          :userInstructions="userInstructions"
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
  components: { HeaderComponent, NavbarComponent, QuestionCard, TextfieldComponent, HomePage },
  data(){
    return {
      questions: [],
      currentQuestion: '',
      userInstructions: [],
      isShowCard: false,
      isShowTextfield: false,
      images: {
        logoRoche: require('./assets/Roche_Logo_800px_Blue_RGB.svg'),
        logoAlexa: require('./assets/logoAlexa1.png'),
        logoActemra: require('./assets/logoActemra1.png'),
        questionMark: require('./assets/questionMark.png'),
        digitalFace: require('./assets/robotFace4.png'),
        iconSay: require('./assets/say-icon3.png'),
      }
    }
  },
  beforeMount() {
    axios.get('./data.json')
    .then(res => {
      this.questions = res.data.questions;
      this.userInstructions = res.data.userInstructions;
      console.log(this.questions);
    })
    .catch(err => console.log(err))
  },
  methods: {
    showCards(event) {
      this.isShowCard = event;
      if (this.isShowCard) {
        this.currentQuestion = this.userInstructions[1];
      }
      this.isShowTextfield = event;
    },
    showQuestion(event) {
      this.currentQuestion = event;
    }
  },
}
</script>

<style lang="scss">
@import './assets/styles.scss';
body {
  background-color: black;
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 0 auto;

  width: 768px;
  height: 924px;
  -webkit-min-device-pixel-ratio: 2;
}
.components {
  position: relative;
  height: 100%;
  background-color: $blueSetColor1;
  color: #ffffff;
  top: 0;
  overflow: hidden;
  border-radius: 40px;
  #firstSay {
    font-size: 3.2rem;
    font-weight: 700;
    font-style: italic;
    user-select: none;
  }
}
.cards-wrapper {
  height: fit-content;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 85%;
  align-content: center;
  justify-content: center;
  gap: 1rem;
  position: absolute;
  bottom: 165px;
  left: 50%;
  transform: translate(-50%, 0);
}
.fade-cards-enter-active,
.fade-textfield-enter-active {
  transition: opacity 0.7s ease-out;
}
.fade-textfield-enter,
.fade-cards-enter,
.fade-textfield-leave-to,
.fade-cards-leave-to {
  opacity: 0;
}
</style>