<template>
  <div class="textfield">
    <img id="icon-say" :src="iconSay" v-show="isActive"/>
    <transition name="slide-fade" mode="out-in">
      <span :key="currentQuestion">{{ currentQuestion }}</span>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'TextfieldComponent',
  props: { currentQuestion: String, iconSay: String },
  data(){
    return {
      isActive: false,
    }
  },
  methods: {
    showSayIcon() {
      this.isActive = !this.isActive;
    }
  },
  updated(){
    if(!this.isActive){
      this.showSayIcon();
    }
  }
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
  height: 320px;
  background-color: $blueSetColor3;
  border: 3px solid $blueSetColor4;
  border-radius: 40px;
  position: absolute;
  top: 190px;
  left: 50%;
  transform: translate(-50%, 0);
  box-shadow: inset 4px 10px 20px #000000aa;
  user-select: none;
  overflow: hidden;
  span {
    max-width: 90%;
    font-size: 3.3rem;
    font-weight: 600;
    z-index: -2;
  }
  #icon-say {
    height: 80px;
    position: absolute;
    top: -2px;
    left: -2px;
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