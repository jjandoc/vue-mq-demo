<template>
  <div id="app">
    <select v-model="demo">
      <option value="example1">Property example</option>
      <option value="example2">Filter example</option>
      <option value="example3">Computed example 1</option>
      <option value="example4">Computed example 2</option>
      <option value="example5">Layout example</option>
    </select>

    <div class="examples">
      <PropertyExample v-if="demo === 'example1'" />
      <FilterExample v-if="demo === 'example2'" />
      <ComputedExample1 v-if="demo === 'example3'" />
      <ComputedExample2 v-if="demo === 'example4'" />
      <LayoutExample v-if="demo === 'example5'" />
    </div>
  </div>
</template>

<script>
const ComputedExample1 = () => import("./components/ComputedExample1");
const ComputedExample2 = () => import("./components/ComputedExample2");
const FilterExample = () => import("./components/FilterExample");
const LayoutExample = () => import("./components/LayoutExample");
const PropertyExample = () => import("./components/PropertyExample");

export default {
  name: "app",
  components: {
    ComputedExample1,
    ComputedExample2,
    FilterExample,
    LayoutExample,
    PropertyExample
  },
  data() {
    return {
      demo: "example1"
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #1c1c1d;
  margin-top: 60px;
}

.examples {
  margin-top: 20px;
}
</style>
