<template>
<div class="layout-example">
  <h1>Current breakpoint is: {{ $mq }}</h1>
  <mq-layout mq="desktop">
    <div class="box">Display only on "desktop"</div>
  </mq-layout>
  <mq-layout mq="lgMobile+">
    <div class="box">Displays on "lgMobile" breakpoint and up.</div>
  </mq-layout>
  <mq-layout :mq="['mobile', 'desktop']">
    <div class="box">Displays on the "mobile" and "desktop" breakpoints.</div>
  </mq-layout>
</div>
</template>

<script>
export default {};
</script>

<style>
.layout-example {
  margin: 0 auto;
  max-width: 800px;
}

.box {
  border: 2px solid black;
  margin-bottom: 12px;
  padding: 20px;
}
</style>
