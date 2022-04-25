<template>
  <div id="card" class="card" @click="showQuestion">
    <!-- <p>{{ questionNumber }}</p> -->
    <img :src="questionMark"/>
  </div>
</template>

<script>
export default {
  name: 'QuestionCard',
  props: { index: Number, question: String, questionMark: String },
  data() {
    return {
      isOpen: false,
      questionNumber: this.index + 1
    }
  },
  methods: {
    showQuestion(){
      this.$emit('setQuestion', this.question)
      // console.log(this.question)
    }
  }
}
</script>

<style lang="scss">
@import '../assets/styles.scss';
.card {
  box-sizing: border-box;
  user-select: none;
  display: flex;
  align-items: center;
  width: 110px;
  height: 110px;
  background-color: $blueSetColor2;
  outline: none;
  border-radius: 40px;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
  transition: 0.2s all;
  p {
    margin: 0 auto;
  }
  img {
    height: 70px;
    margin: 0 auto;
    opacity: 0.7;
  }
  &:active {
    transform: scale(0.95);
  }
}
</style>