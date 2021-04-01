<template>
  <div class="content__catalog">
    <ProductFilter :price-from.sync="filterPriceFrom" :price-to.sync="filterPriceTo"
    :category-id.sync="filterCategoryId" :color-id.sync="filterColorId" v-model="page" />

    <section class="catalog">
      <ProductList :products="products" />
      <!-- То же самое, что и
      <ProductList :products="products"></ProductList>
      так как внутри нет никакого текста
      -->
      <BasePagination v-model="page" :count="countProducts" :per-page="productsPerPage" />
    </section>
  </div>
</template>

<script>
import products from './data/products';
import ProductList from './components/ProductList.vue';
import BasePagination from './components/BasePagination.vue';
import ProductFilter from './components/ProductFilter.vue';

export default {
  name: 'App',
  components: { ProductList, BasePagination, ProductFilter },
  // То же самое, что и {ProductList: ProductList}, так как названия одинаковые
  data() {
    return {
      filterPriceFrom: 0,
      filterPriceTo: 150000,
      filterCategoryId: 0,
      filterColorId: 0,
      page: 1,
      productsPerPage: 3,
    };
  },
  computed: {
    filteredProducts() {
      let filteredProducts = products;
      if (this.filterPriceFrom > 0) {
        filteredProducts = filteredProducts.filter(
          (product) => product.price > this.filterPriceFrom,
        );
      }

      if (this.filterPriceTo > 0) {
        filteredProducts = filteredProducts.filter((product) => product.price < this.filterPriceTo);
      }

      if (this.filterCategoryId) {
        filteredProducts = filteredProducts.filter(
          (product) => product.categoryId === this.filterCategoryId,
        );
      }

      if (this.filterColorId) {
        filteredProducts = filteredProducts.filter(
          (product) => product.colors.some(
            (el) => el.id === this.filterColorId,
          ),
        );
      }

      return filteredProducts;
    },
    products() {
      const offset = (this.page - 1) * this.productsPerPage;
      return this.filteredProducts.slice(offset, offset + this.productsPerPage);
    },
    countProducts() {
      return this.filteredProducts.length;
    },
  },
};
</script>
