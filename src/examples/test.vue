<template>
  <div>
    <zl-loading>Loading...</zl-loading>
    <div class="border-box-contaier">
      <zl-border-box-1>dv-border-box-1</zl-border-box-1>
    </div>
    <div class="chart-container" style="height: 150px;">
      <zl-digital-flop :config="config1" style="width:200px;height:50px;" />
    </div>
    <div class="chart-container">
      <zl-scroll-board
        :config="scrollBoard1"
        @click="clickHandler"
        style="width:500px;height:200px"
      />
    </div>
    <div class="chart-container">
      <zl-scroll-ranking-board
        :config="scrollRankingBoard1"
        style="width:500px;height:300px"
      />
    </div>
  </div>
</template>
<script>
import digitalFlop from './codeData/digitalFlop/index.js'
import scrollBoard from './codeData/scrollBoard/index.js'
import scrollRankingBoard from './codeData/scrollRankingBoard/index.js'
export default {
  data() {
    return {
      ...digitalFlop,
      ...scrollBoard,
      ...scrollRankingBoard,
      config1: {
        number: [100],
        content: '{nt}个',
      },
    }
  },
  methods: {
    clickHandler(e) {
      console.log('clickHandler -> e', e)
    },
  },
}
</script>
<style lang="less">
.border-box-contaier {
  height: 300px;
  padding: 30px;
  overflow: hidden;
  box-sizing: border-box;
  background-color: #282c34;

  .border-box-content {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #46bd87;
    font-weight: bold;
  }

  .dv-border-box-11-title {
    font-weight: bold;
    fill: #8cacf9;
  }
}
</style>
