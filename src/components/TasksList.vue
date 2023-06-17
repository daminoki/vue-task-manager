<template>
  <ul class="tasks-list">
    <li v-for="task in getTasks" :key="task.id">
      <TaskItem :task="task" />
    </li>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex';
import TaskItem from '@/components/TaskItem.vue';

export default {
  components: { TaskItem },
  computed: {
    ...mapGetters(['getTasks']),
  },
};
</script>

<style lang="scss" scoped></style>
