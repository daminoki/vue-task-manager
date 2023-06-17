<template>
  <div class="task-view">
    <router-link class="nav-link" to="/">
      <img src="/img/arrow-icon.svg" alt="Go back" />
      back to main page
    </router-link>
    <TaskForm />
    <TasksList />
  </div>
</template>

<script>
import TaskForm from '@/components/TaskForm.vue';
import TasksList from '@/components/TasksList.vue';

export default {
  name: 'TasksView',
  components: { TaskForm, TasksList },
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/mixins';

.task-view {
  .nav-link {
    @include txt18;

    color: var(--primary-text-color);
    display: flex;
    gap: 5px;
    align-items: center;
    padding: 30px 0 0;

    img {
      width: 22px;
      height: 22px;
      transition: transform 0.2s ease-in-out;
    }

    &:hover {
      img {
        transform: rotate(-135deg);
      }
    }
  }
}
</style>
