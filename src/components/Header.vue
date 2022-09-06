<template>
  <div id="wrap2">
    <nav>
      <p id="logo" style="cursor:pointer;" @click="moveLink">RustMart</p>
      <p id="price">0</p>
    </nav>
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
  methods: {
    moveLink(){
      this.$parent.ok = true;
    }
  },
};
</script>

<style scoped>
@media screen and (min-width: 1024px) {
  #wrap2 {
    background-color: rgb(255, 109, 41);
    height: 6rem;
  }
}
@media screen and (min-width: 768px) and (max-width: 1023px) {
  #wrap {
    background-color: rgb(255, 109, 41);
    height: 6rem;
  }
}
@media screen and (max-width: 767px) {
  #wrap {
    background-color: rgb(255, 109, 41);
    height: 6rem;
  }
}

* {
  margin: 0;
  padding: 0;
}

nav > p {
  color: white;
  font-size: 3rem;
  margin: 1rem;
}

#logo {
  float: left;
}

#price {
  float: right;
}

#wrap:after {
  content: "";
  display: block;
  clear: both;
}

nav:after {
  content: "";
  display: block;
  clear: both;
}
</style>
