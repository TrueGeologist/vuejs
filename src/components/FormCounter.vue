<template>
  <div>
    <button type="button" aria-label="Убрать один товар"
      @click="localAmount>1 ? localAmount-- : localAmount">
      <svg fill="currentColor">
        <use xlink:href="#icon-minus"></use>
      </svg>
    </button>

    <input type="number" min="1" v-model.number="localAmount">

    <button type="button" aria-label="Добавить один товар"
      @click="localAmount++">
      <svg fill="currentColor">
        <use xlink:href="#icon-plus"></use>
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      localAmount: this.amount,
    };
  },
  props: ['amount'],
  watch: {
    localAmount() {
      this.$emit('update:amount', this.localAmount);
    },
  },
};
</script>
