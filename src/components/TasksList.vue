<template>
  <div class="tasks-list">
    <p class="title">List of tasks</p>
    <p class="subtitle" v-if="!getTasks.length">
      List is empty now. Add some task and you will see them!
    </p>
    <ul v-else class="list">
      <li v-for="task in sortedTasks" :key="task.id">
        <TaskItem :task="task" />
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import TaskItem from '@/components/TaskItem.vue';

export default {
  components: { TaskItem },
  computed: {
    ...mapGetters(['getTasks']),
    sortedTasks() {
      return [...this.getTasks].sort((a, b) => a.done - b.done);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/mixins';

.tasks-list {
  padding: 40px 0;

  .list {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
  }

  .title {
    @include h3;

    color: var(--primary-text-color);
    margin: 0 0 20px;
    text-align: center;
  }

  .subtitle {
    @include txt18;

    color: var(--primary-text-color);
  }
}
</style>
