<template>
  <div class="header">
    <div
      class="header-inner"
      :class="affix"
      v-bind:offset="offsetValue"
    >
      <div class="container">
        <div class="row">
          <div class="header-wrap">
            <div
              class="header_logo"
              ref="headerLogo"
            >
              <img
                class="img-responsive"
                src="~@/assets/img/main/logo.png"
                alt="Uniline"
              />
            </div>
            <div class="header_subinfo">
              <div class="header_h">GameDev gathering</div>
              <div class="header_text">Мы делаем крутые, интересные, веселые мобильные игры</div>
            </div>
            <div class="header_email">
              <a
                class="link link-email link-white"
                href="mailto:uniline.games@gmail.com"
              >uniline.games@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'header',
    data: function () {
      return {
        offsetValue: 0,
        affix: 'affix-top',
      };
    },
    mounted() {
      window.setTimeout(() => {
        this.offsetValue = (this.$el.offsetHeight / 2 - this.$refs.headerLogo.offsetHeight / 2);
      }, 100);
    },
    created () {
      window.addEventListener('scroll', this.handleScroll);
    },
    destroyed () {
      window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
      handleScroll () {
        if (window.pageYOffset > this.offsetValue && this.affix !== 'affix') {
          this.affix = 'affix';
        } else if (window.pageYOffset <= this.offsetValue && this.affix === 'affix') {
          this.affix = 'affix-top';
        }
      }
    }
  };
</script>

<style scoped>

</style>
