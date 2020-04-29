<template>
  <div class="game_wrap">
    <div class="container">
      <div class="row">
        <div class="col-md-10 col-sm-10">
          <div class="game_name">
            <div class="game_logo" v-if="gameLogo">
              <img
                class="img-responsive"
                :src="require('@/assets/img/' + gameLogo)"
                :alt="$t(gameId + '.name')"
              />
            </div>
            <div class="game_h">{{ $t(gameId + '.name') }}</div>
            <div class="game_sub-h">{{ $t(gameId + '.title') }}</div>
            <div class="game_tag-list">
              <div
                class="game_tag"
                v-for="tag in gameTags"
                :key="tag"
              >
                {{ $t('tags.' + tag) }}
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-2 col-sm-2">
          <div class="game_market-list">
            <div class="game_market game_market__play">
              <a
                class="link link-img"
                v-if="gamePlayMarketLink"
                v-bind:href="gamePlayMarketLink"
              >
                <img
                  class="img-responsive"
                  src="~@/assets/img/icons/market/play_market.png"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div
            class="game_description"
            v-html="$t(gameId + '.description')"
          ></div>
        </div>
        <div class="col-md-6">
          <div
            class="game_video"
            :class="!gameVideoLink ? 'game_video--empty' : ''"
          >
            <span
              class="game_video--empty-text"
              v-if="!gameVideoLink"
            >
              {{$t('content.video.empty')}}
            </span>

            <iframe
              v-if="gameVideoLink"
              class="game_video-iframe"
              width="560"
              height="315"
              v-bind:src="gameVideoLink"
              frameborder="0"
              allow="autoplay; encrypted-media"
              allowfullscreen
            >
            </iframe>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12">
          <div class="game_screens">
            <carousel
              ref='carousel'
              id="game_screens-slider"
              :items="4"
              :loop="true"
              :nav="false"
              :margin="10"
              :responsiveClass="true"
              :responsive="{
               0:{items:1},
               576:{items:2},
               768:{items:2},
               1200:{items:4},
               1500:{items:5}
              }"
            >
              <img
                v-for="screen in gameScreens[$i18n.locale]"
                :key="screen"
                :src="require('@/assets/img/' + screen)"
              />
            </carousel>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import carousel from 'vue-owl-carousel2';

  export default {
    name: 'game',
    props: [
      'gameId',
      'gameLogo',
      'gameName',
      'gameTitle',
      'gameTags',
      'gameVideoLink',
      'gamePlayMarketLink',
      'gameScreens',
      'gameDescription',
    ],
    components: {
      carousel,
    },
  };
</script>

<style scoped>

</style>
