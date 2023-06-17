<template>
  <div class="home-view">
    <p>{{ getFirstItem }}</p>
    <button type="button" class="button" @click="handleButtonClick">click</button>
    <ul>
      <li v-for="(item, index) in array" :key="index">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      message: 'Hello',
      array: [1, 2, 3],
    };
  },
  computed: {
    getFirstItem() {
      return this.array[0];
    },
  },
  methods: {
    handleButtonClick() {
      this.message = 'new message';
    },
  },
};
</script>

<style lang="scss" scoped>
.home-view {
  background-color: #d9d9d9;
}
</style>
