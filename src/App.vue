<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/tasks">Tasks</router-link>
    </nav>

    <router-view />
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

#app {
  @include container;
}
</style>
