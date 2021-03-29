import Vue from 'vue';
import App from './App.vue';

import data from './data/data';
import anyMessage from './data/function';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');

alert(data.message);
anyMessage('Message from anyMessage');
