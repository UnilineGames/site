<template>
  <div class="footer text-center">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-xs-12">
          <Language></Language>
        </div>
        <div class="col-md-6 col-xs-12">
          <a
            :href="$i18n.locale==='ru' ? './policy_android.html' : './policy_android_eng.html'"
            class="footer_link link link-white"
          >
            {{ $t('footer.privacy_policy') }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Language from '@/components/shared/language';

  export default {
    name: 'LayoutFooter',
    components: {
      Language,
    },
  };
</script>

<style scoped>

</style>
