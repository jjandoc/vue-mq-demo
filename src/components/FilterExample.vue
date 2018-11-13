<template>
<img :src="$mq | mq({
    mobile: 'https://unsplash.it/300', 
    tablet: 'https://unsplash.it/700', 
    desktop: 'https://unsplash.it/1000'
})" />
<!-- <img :src="$mq | mq(images)" /> -->
</template>

<script>
// export default {
//   computed: {
//     images() {
//       return {
//         mobile: "https://unsplash.it/300",
//         tablet: "https://unsplash.it/700",
//         desktop: "https://unsplash.it/1000"
//       };
//     }
//   }
// };
</script>