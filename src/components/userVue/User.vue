<template>
  <div id="wrap">
    <h1>User 컴포넌트</h1>
    <div>
      <p>이름: {{name}}</p>
      <!-- <button @click="changeName">이름 변경</button> -->
      <button @click="changeName">이름 변경</button>
      <hr />
    </div>
    <!-- <UserDetail
    :nameOfChild="{name: 'Vue3', familyName: 'JS'}"
    ></UserDetail> -->
    <UserDetail :nameOfChild="name"/>
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
  data(){
    return{
      name: '뷰제이에스'
    }
  },
  methods: {
    changeName(){
      this.name = 'VueJs'
    }
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