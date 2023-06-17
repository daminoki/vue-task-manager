<template>
  <div class="task-form">
    <form class="form" autocomplete="off">
      <p class="title">Add new task</p>
      <label for="name">
        <input
          class="name-input"
          v-model="task.name"
          id="name"
          type="text"
          placeholder="Write task's name..."
        />
      </label>
      <label for="desctiption">
        <textarea
          class="description-input"
          v-model="task.description"
          id="desctiption"
          placeholder="Write task's description..."
        ></textarea>
      </label>
      <span v-if="error" class="error">{{ error }}</span>
      <button class="submit-button" @click="handleTaskSubmit">Add task</button>
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
@import '@/assets/styles/mixins';

.task-form {
  padding-top: 40px;

  .form {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .title {
    @include h3;

    color: var(--primary-text-color);
    text-align: center;
    margin: 0 0 20px;
  }

  .name-input,
  .description-input {
    @include txt18;

    width: 100%;
    color: var(--primary-text-color);
    padding: 10px;
    border: 1px solid var(--primary-text-color);
    border-radius: var(--default-border-radius);

    ::placeholder {
      @include txt18;

      color: var(--primary-text-color);
    }
  }

  .name-input {
    margin: 0 0 10px;
  }

  .submit-button {
    @include txt18;

    padding: 15px;
    text-align: center;
    color: var(--contrast-text-color);
    background-color: var(--contrast-bg-color);
    border: 1px solid transparent;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    margin: 10px 0 0;
    border-radius: var(--default-border-radius);

    &:hover {
      background-color: transparent;
      border-color: var(--contrast-bg-color);
      color: var(--contrast-bg-color);
    }
  }

  .error {
    @include txt14;

    color: var(--error-text-color);
  }
}
</style>
