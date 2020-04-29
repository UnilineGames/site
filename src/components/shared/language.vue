<template>
  <div>
    <div class="btn-group language-group" data-toggle="buttons">
      <label
        v-for="option in options"
        :key="option.id"
        class="btn btn-default"
        :class="$i18n.locale === option.value ? 'active' : ''"
        v-on:click="setLocale(option.value)"
      >
        <input type="radio" name="options" id="option1" :checked="$i18n.locale === option.value">
        {{ option.text }}
      </label>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'language',
    data() {
      return {
        options: [
          { text: 'Русский', value: 'ru' },
          { text: 'English', value: 'en' },
        ]
      }
    },
    methods: {
      setLocale(locale) {
        this.$i18n.locale = locale;
        this.$root.$emit('carouselUpdate');
      }
    }
  };
</script>

<style scoped>
  .language-group {
    margin-top: -8px;
  }
</style>
