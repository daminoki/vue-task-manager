<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="scss">
@import '@/assets/styles/reset';
@import '@/assets/styles/global';
@import '@/assets/styles/mixins';
@import '@/assets/styles/variables';

#app {
  @include container;
}
</style>
