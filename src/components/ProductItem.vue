<template>
<li class="catalog__item">
  <a class="catalog__pic" href="#" @click.prevent="gotoPage('product', {id: product.id})">
    <img :src="product.image" :alt="product.title">
  </a>

  <h3 class="catalog__title">
    <a href="#">
      {{ product.title }}
    </a>
  </h3>

  <span class="catalog__price">
    {{ product.price | numberFormat }} ₽
  </span>

  <ColorsList class="colors--black"
    :colors="product.colors"
    :checkedColor.sync="checkedColorId"
  />
</li>
</template>

<script>
import ColorsList from '@/components/ColorsList.vue';
import gotoPage from '@/helpers/gotoPage';
import numberFormat from '@/helpers/numberFormat';

export default {
  data() {
    return {
      checkedColorId: 3,
    };
  },
  props: ['product'],
  components: { ColorsList },
  filters: {
    numberFormat,
  },
  methods: {
    gotoPage,
  },
};
</script>
