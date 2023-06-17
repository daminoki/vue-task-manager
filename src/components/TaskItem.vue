<template>
  <div class="task-item">
    <label for="checkbox">
      <input type="checkbox" name="checkbox" @click="handleFinishButtonClick" />
    </label>

    <template v-if="!canEdit">
      <p>{{ task.name }}</p>
      <p>{{ task.description }}</p>
    </template>
    <template v-else>
      <input v-model="name" type="text" name="name" />
      <textarea v-model="description" name="description" id="description"></textarea>
    </template>

    <button v-if="!canEdit" aria-label="edit" @click="canEdit = true">
      <img src="/img/edit-icon.svg" alt="Edit" />
    </button>
    <button v-else aria-label="save" @click="handleSaveButtonClick">
      <img src="/img/save-icon.svg" alt="Save" />
    </button>

    <button aria-label="delete" @click="handleDeleteButtonClick">
      <img src="/img/delete-icon.svg" alt="Delete" />
    </button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'TaskItem',
  props: {
    task: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      name: this.task.name,
      description: this.task.description,
      done: this.task.done,
      canEdit: false,
    };
  },
  methods: {
    ...mapActions(['deleteTask', 'editTask', 'toggleFinishTask']),
    handleDeleteButtonClick() {
      this.deleteTask(this.task.id);
    },
    handleSaveButtonClick() {
      this.canEdit = false;
      this.editTask({ ...this.task, name: this.name, description: this.description });
    },
    handleFinishButtonClick() {
      this.done = !this.done;
      this.toggleFinishTask({ ...this.task, done: this.done });
    },
  },
};
</script>

<style lang="scss" scoped></style>
