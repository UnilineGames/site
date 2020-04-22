<template>
  <div id="app">
    <Header id="header"></Header>
    <div class="content-main">
      <Game
        v-for="gameData in gamesData"
        :key="gameData.id"
        :game-description="gameData.description"
        :game-logo="gameData.logo"
        :game-name="gameData.name"
        :game-play-market-link="gameData.playMarketLink"
        :game-screens="gameData.screens"
        :game-tags="gameData.tags"
        :game-title="gameData.title"
        :game-video-link="gameData.videoLink"
      >
      </Game>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from '@/components/layout/footer';
import Game from '@/components/content/game';
import Header from '@/components/layout/header';
import GamesData from './assets/constants/gamesData';

export default {
  name: 'App',
  data: function() {
    return {
      gamesData: GamesData,
    }
  },
  components: {
    Footer,
    Game,
    Header,
  }
}
</script>

<style lang="scss">
</style>
