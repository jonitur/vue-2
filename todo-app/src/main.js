// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import '../semantic/dist/semantic.css';
import '../semantic/dist/components/dimmer';
import '../semantic/dist/components/transition';
import '../semantic/dist/components/dropdown';
import '../semantic/dist/components/modal';
import '../semantic/dist/components/rating';
import '../semantic/dist/components/tab';
import '../semantic/dist/components/popup';
import '../semantic/dist/components/sticky';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
});
