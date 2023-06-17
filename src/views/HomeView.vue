<template>
  <div class="home-view">
    <h1 class="title">
      This is a simple task manager that will help you not forget anything important
    </h1>
    <p class="subtitle">Click the button below to start using the application</p>
    <router-link class="nav-link" to="/tasks">Start here</router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/mixins';

.home-view {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;

  .title {
    @include h1;

    color: var(--primary-text-color);
    text-align: center;
    padding: 60px 0 30px;
  }

  .subtitle {
    @include h3;

    color: var(--primary-text-color);
    text-align: center;
    padding: 0 0 30px;
  }

  .nav-link {
    @include h3;

    color: var(--contrast-text-color);
    background-color: var(--contrast-bg-color);
    padding: 15px 20px;
    border: 2px solid transparent;
    transition: all .2s ease-in-out;

    &:hover {
      background-color: transparent;
      border-color: var(--contrast-bg-color);
      color: var(--contrast-bg-color);
    }
  }
}
</style>
