<template>
  <div id="app">
    <LayoutHeader id="header" name="header"></LayoutHeader>
    <div class="content-main">
      <Game
        v-for="gameData in gamesData"
        :key="gameData.id"
        :game-id="gameData.id"
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
    <LayoutFooter id="footer"></LayoutFooter>
  </div>
</template>

<script>
import LayoutFooter from '@/components/layout/footer';
import Game from '@/components/content/game';
import LayoutHeader from '@/components/layout/header';
import GamesData from './assets/constants/gamesData';

export default {
  name: 'App',
  data: function() {
    return {
      gamesData: GamesData,
    }
  },
  components: {
    LayoutFooter,
    Game,
    LayoutHeader,
  }
}
</script>

<style lang="scss">
</style>
