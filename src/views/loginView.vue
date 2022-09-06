<template>
  <div>
    <div id="signBox">
      <h1>SignUp</h1>
      <input
        type="text"
        id="id"
        v-model="id"
        placeholder="아이디를 입력하세요"
      /><br />
      <input
        type="password"
        id="pw"
        v-model="pw"
        placeholder="비밀번호를 입력하세요"
      /><br />
      <p>아이디: {{ id }}</p>
      <p>비밀번호: {{ pw }}</p>
      <button @click="pop">submit</button>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      id: "",
      pw: "",
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    pop() {
      if (this.id == "" || this.pw == "") {
        alert("아이디 혹은 비밀번호가 입력되지 않았습니다.");
      } else {
        alert("아이디:" + this.id + " 비밀번호:" + this.pw);
      }
      console.log(this.id);
      console.log(this.pw);
    },
  },
};
</script>

<style>
input {
  margin: 0.1rem;
  height: 1rem;
}
#signBox {
  background-color: rgb(236, 236, 236);
  width: 15rem;
  height: fit-content;
  margin: 0 auto;
  text-align: center;
}
</style>
