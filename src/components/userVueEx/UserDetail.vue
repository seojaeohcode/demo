<template>
  <div id="left">
    <h3>자세한 회원 정보를 확인합니다.</h3>
    <p><span>이름:</span>{{name}}</p>
    <p><span>주소:</span>{{address}}</p>
    <p><span>전화번호:</span>{{phone}}</p>
  </div>
</template>

<script>
export default {
  // props는 기본적으로 배열로 사용
  props:['name','address','phone'],
  data() {
    return {
      
    }
  },
}
</script>

<style scoped>
  #left{
    width: 50%;
    background: rgb(255, 181, 233);
    float: left;
  }
</style>