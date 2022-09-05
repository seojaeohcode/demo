<template>
  <div id="wrap">
    <h1>User 컴포넌트</h1>
    <div>
      <p>이름: 뷰제이에스</p>
      <hr />
    </div>
    <UserDetail></UserDetail>
    <UserEdit></UserEdit>
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
};
</script>

<style scoped>
  #wrap{
    padding: 3rem;
    background: skyblue;
    height: 40vh;
  }
</style>