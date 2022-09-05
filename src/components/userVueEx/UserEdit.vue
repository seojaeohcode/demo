<template>
  <div id="right">
    <h3>회원 정보를 수정할 수 있습니다.</h3>
    <p>수정사항</p>

    <label for="이름">이름</label>
    <input type="text" v-model="user.name"><br/>
    <label for="주소">주소</label>
    <input type="text" v-model="user.address"><br/>
    <label for="전화번호">전화번호</label>
    <input type="text" v-model="user.phone"><br/>
    <button @click="changeUser">수정완료</button>
  </div>
</template>

<script>
  export default {
  // props는 기본적으로 배열로 사용
  props:['name','address','phone'],
  data() {
    return {
      user:{}
    }
  },
  created(){
    //재할당을 통해 user오브젝트로 넣어줌
    this.user.name = this.name;
    this.user.address = this.address;
    this.user.phone = this.phone;
  },
  methods:{
    changeUser(){
      console.log(this.user)
      this.$emit('chilx', this.user)
      //this.$emit('child', this.user,1,2)
      //child(this.user,1,2)
    }
  }
}
</script>

<style scoped>
  #right{
    width: 50%;
    background: rgb(209, 255, 181);
    float: left;
  }
</style>