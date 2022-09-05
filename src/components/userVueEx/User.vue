<template>
  <div id="wrap">
    <h1>User 컴포넌트</h1>
    <div>
      <p>이름: 뷰제이에스</p>
      <hr />
    </div>
    <UserDetail :name="name" :address="address" :phone="phone" />
    <UserEdit :name="name" :address="address" :phone="phone" @chilx="parents" />
  </div>
</template>

<script>
import UserDetail from "./UserDetail.vue";
import UserEdit from "./UserEdit.vue";

export default {
  components: {
    UserDetail,
    UserEdit,
  },
  data() {
    return {
      name: "VueJs",
      address: "Seoul",
      phone: "010-1234-5678",
    };
  },
  methods: {
    parents(user) {
      console.log("부모가 받았습니다.");
      this.name = user.name;
      this.address = user.address;
      this.phone = user.phone;
    },
  },
};
</script>

<style scoped>
#wrap {
  padding: 3rem;
  background: skyblue;
  height: 40vh;
}
</style>
