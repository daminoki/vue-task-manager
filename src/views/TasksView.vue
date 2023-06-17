<template>
  <div>
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

<style lang="scss" scoped></style>
