<template>
  <div class="task-item">
    <label for="checkbox">
      <input type="checkbox" name="checkbox" />
    </label>
    <p>{{  task.description  }}</p>
    <button>Edit</button>
    <button>Delete</button>
  </div>
</template>

<script>
export default {
  name: 'TaskItem',
  props: {
    task: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>
