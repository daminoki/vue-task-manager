<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<template>
  <div class="task-form">
    <form class="form">
      <p>Add new task</p>

      <label for="name">
        <input v-model="task.name" id="name" type="text" placeholder="Write task's name..." />
      </label>
      <label for="desctiption">
        <textarea
          v-model="task.description"
          id="desctiption"
          placeholder="Write task's description..."
        ></textarea>
      </label>
      <span>{{ error }}</span>
      <button @click="handleTaskSubmit">Add task</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'TaskForm',
  data() {
    return {
      error: '',
      task: {
        id: '',
        name: '',
        description: '',
        done: false,
      },
      defaultTask: {
        id: '',
        name: '',
        description: '',
        done: false,
      },
    };
  },
  methods: {
    ...mapActions(['addTask']),
    handleTaskSubmit(e) {
      e.preventDefault();
      this.error = '';

      if (!this.task.name) {
        this.error = 'Name is required';
        return;
      }

      this.addTask({ ...this.task, id: new Date().getMilliseconds() });
      this.task = JSON.parse(JSON.stringify(this.defaultTask));
    },
  },
};
</script>

<style lang="scss" scoped>
.task-form {
  padding-top: 40px;

  .form {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
}
</style>
