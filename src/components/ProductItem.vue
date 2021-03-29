<template>
<li class="catalog__item">
  <a class="catalog__pic" href="#">
    <img :src="product.image" :alt="product.title">
  </a>

  <h3 class="catalog__title">
    <a href="#">
      {{ product.title }}
    </a>
  </h3>

  <span class="catalog__price">
    {{ product.price }} ₽
  </span>

  <ul class="colors colors--black">
    <li class="colors__item" v-for="(colors, index) in product.colors" :key="colors.color">
      <label class="colors__label">
        <input class="colors__radio sr-only" type="radio"
        :value="value(index)" v-model="checkedColor">
        <span class="colors__value" :style="style(index)"></span>
      </label>
    </li>
  </ul>
</li>
</template>

<script>
export default {
  data() {
    return {
      checkedColor: 3,
    };
  },
  props: ['product'],
  methods: {
    value(i) {
      return this.product.colors[i].id;
    },
    style(i) {
      return `backgroundColor: ${this.product.colors[i].code}`;
    },
  },
};
</script>
