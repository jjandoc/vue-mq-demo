import App from "./App.vue";
import Vue from "vue";
import VueMq from "vue-mq";

Vue.config.productionTip = false;

Vue.use(VueMq, {
  breakpoints: {
    mobile: 375, // width < 375
    lgMobile: 768, // 375 <= width < 768
    tablet: 1024, // 768 <= width < 1024
    desktop: 1440, // 1024 <= width < 1440
    xl: Infinity // 1440 <= width
  }
});

new Vue({
  render: h => h(App)
}).$mount("#app");
