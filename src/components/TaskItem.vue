<template>
  <div class="task-item">
    <label class="checkbox" for="checkbox">
      <input type="checkbox" id="checkbox" @click="handleFinishButtonClick" />
    </label>

    <div class="info" v-if="!canEdit">
      <p>{{ task.name }}</p>
      <p>{{ task.description }}</p>
    </div>
    <div v-else>
      <input v-model="name" type="text" name="name" />
      <textarea v-model="description" name="description" id="description"></textarea>
    </div>

    <div class="actions">
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

<style lang="scss" scoped>
@import '@/assets/styles/mixins';

.task-item {
  display: flex;
  width: 100%;
  gap: 20px;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border: 1px solid var(--primary-text-color);
  border-radius: var(--default-border-radius);

  .checkbox {
    width: 5%;
  }

  .info {
    width: 80%;
  }

  .actions {
    width: 15%;
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: flex-end;
  }
}
</style>
