<template>
  <ul class="colors">
    <li class="colors__item" v-for="color in colors" :key="color.id">
      <label class="colors__label">
        <input class="colors__radio sr-only" type="radio"
          :value="color.id" v-model="currentCheckedColor">
        <span class="colors__value" :style="{backgroundColor: color.code}"></span>
      </label>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      currentCheckedColor: this.checkedColor,
    };
  },
  props: ['colors', 'checkedColor'],
  watch: {
    currentCheckedColor() {
      this.$emit('update:checkedColor', this.currentCheckedColor);
    },
  },
};
</script>
