<template>
  <div class="textfield">
    <img id="icon-say" :src="iconSay" v-show="isActive"/>
    <transition name="fade-header-text">
      <h1 v-show="isActive">{{ userInstructions[0] }}</h1>
    </transition>
    <transition name="slide-fade" mode="out-in">
      <span
        :key="currentQuestion"
        :style="{ marginTop: marginTopChange }"
        >{{ currentQuestion }}
      </span>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'TextfieldComponent',
  props: { currentQuestion: String, iconSay: String, userInstructions: Array },
  data(){
    return {
      isActive: false,
    }
  },
  methods: {
    showSayIcon() {
      this.isActive = !this.isActive;
    },
  },
  computed: {
    marginTopChange: function() {
      return this.isActive ? '50px' : 0;
    }
  },
  beforeUpdate(){
    if(!this.isActive){
      this.showSayIcon();
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/styles.scss';
.textfield {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 310px;
  background-color: $blueSetColor3;
  border: 3px solid $blueSetColor4;
  border-radius: 40px;
  position: absolute;
  top: 100px;
  left: 50%;
  transform: translate(-50%, 0);
  box-shadow: inset 4px 10px 20px #000000aa;
  user-select: none;
  overflow: hidden;
  span {
    // margin-top: 50px;
    position: relative;
    max-width: 92%;
    font-size: 3rem;
    font-weight: 600;

  }
  #icon-say {
    height: 85px;
    position: absolute;
    top: -2px;
    left: -2px;
  }
  h1 {
    position: absolute;
    top: 10px;
    left: 100px;
    font-size: 3rem;
    font-weight: 700;
    margin: 0;
    font-style: italic;
    color: #d5eef7;
  }
}
.fade-header-text-enter-active{
  transition: all 1s ease;
}
.fade-header-text-enter {
  opacity: 0;
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