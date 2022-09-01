<template>
  <div id="wrap">
  <p>copyright @ 2022 developer Seojaeoh</p>
  </div>
</template>

<script>
  export default {
    components: {},
    data() {
      return {
        exampleData: "",
      };
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {},
  };
  </script>

<style scoped>
@media screen and (min-width: 1024px) {
  #wrap {
    background-color: rgb(255, 109, 41);
    height: 6rem;
  }
  p{
    color: white;
    font-weight: bold;
    font-size: 1vw;
    text-align: center;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }
}
@media screen and (min-width: 768px) and (max-width: 1023px) {
  #wrap {
    background-color: rgb(255, 109, 41);
    height: 6rem;
  }
  p{
    color: white;
    font-weight: bold;
    font-size: 1vw;
    text-align: center;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }
}
@media screen and (max-width: 767px) {
  #wrap {
    background-color: rgb(255, 109, 41);
    height: 6rem;
  }
  p{
    color: white;
    font-weight: bold;
    font-size: 1vw;
    text-align: center;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>


