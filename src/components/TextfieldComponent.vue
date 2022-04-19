<template>
  <div class="textfield">
    <transition name="slide-fade" mode="out-in">
      <span :key="currentQuestion">{{ currentQuestion }}</span>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'TextfieldComponent',
  props: { currentQuestion: String },
}
</script>

<style lang="scss" scoped>
@import '../assets/styles.scss';
.textfield {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 85%;
  height: 350px;
  background-color: $blueSetColor3;
  border-radius: 40px;
  position: absolute;
  top: 210px;
  left: 50%;
  transform: translate(-50%, 0);
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
  user-select: none;
  span {
    max-width: 90%;
    font-size: 3.5rem;
    font-weight: 600;
  }
}
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all 0.4s cubic-bezier(.17,.67,.83,.67);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for <2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>