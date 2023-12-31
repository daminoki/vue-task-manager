<template>
  <div class="task-item" :class="this.done ? 'done' : 'undone'">
    <label v-if="!canEdit" class="checkbox" :for="`checkbox-${task.id}`">
      <input
        type="checkbox"
        :id="`checkbox-${task.id}`"
        @click="handleFinishButtonClick"
        :checked="this.done ? true : false"
      />
      <span class="custom-checkbox"></span>
    </label>

    <div class="info" v-if="!canEdit">
      <p class="name">{{ task.name }}</p>
      <p class="description">{{ task.description }}</p>
    </div>
    <div class="edit" v-else>
      <p class="input-title">New task's name:</p>
      <input class="input-name" v-model="name" type="text" name="name" />
      <p class="input-title">New task's description:</p>
      <textarea
        class="input-description"
        v-model="description"
        name="description"
        id="description"
      ></textarea>
      <p v-if="error" class="error">{{ this.error }}</p>
    </div>

    <div class="actions">
      <button v-if="!canEdit && !this.done" aria-label="edit" @click="canEdit = true">
        <img src="/img/edit-icon.svg" alt="Edit" />
      </button>
      <button v-if="canEdit && !this.done" aria-label="save" @click="handleSaveButtonClick">
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
      error: '',
    };
  },
  methods: {
    ...mapActions(['deleteTask', 'editTask', 'toggleFinishTask']),
    handleDeleteButtonClick() {
      this.deleteTask(this.task.id);
    },
    handleSaveButtonClick() {
      if (!this.name) {
        this.error = 'Name is required';
        return;
      }

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

  .info {
    width: 80%;
    overflow: hidden;

    @media screen and (1px <= width <= 767px) {
      width: auto;
      margin-right: auto;
    }
  }

  .actions {
    width: 15%;
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: flex-end;

    @media screen and (1px <= width <= 767px) {
      width: fit-content;
    }

    button {
      min-width: 32px;
    }
  }

  .custom-checkbox {
    display: flex;

    &::before {
      content: '';
      display: inline-block;
      min-width: 24px;
      height: 24px;
      border: 1px solid var(--primary-text-color);
      border-radius: var(--default-border-radius);
      background-position: center;
      background-repeat: no-repeat;
    }
  }

  .checkbox {
    width: 5%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (1px <= width <= 767px) {
      width: fit-content;
    }

    input {
      display: none;

      &:checked + .custom-checkbox::before {
        background-image: url('../../public/img/checked-icon.svg');
      }
    }
  }

  .name,
  .input-name {
    @include txt18;

    color: var(--primary-text-color);
    margin: 0 0 5px;
  }

  .description,
  .input-description {
    @include txt14;

    color: var(--primary-text-color);
  }

  .edit {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .input-description {
    resize: none;
  }

  .input-name,
  .input-description {
    padding: 5px;
  }

  .input-title {
    @include txt14;

    color: var(--primary-text-color);
    margin: 0 0 5px;
  }

  .error {
    @include txt14;

    color: var(--error-text-color);
  }

  &.done {
    background-color: #d9d9d9;
  }
}
</style>
