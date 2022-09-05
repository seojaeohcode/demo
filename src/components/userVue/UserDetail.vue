<template>
  <div id="left">
    <h3>자세한 회원 정보를 확인합니다.</h3>
    <!-- 오브젝트로 처리 후 아래와 같이 구문처리 -->
    <!-- <p>{{nameOfChild.name}}</p>
    <p>{{nameOfChild.familyName}}</p> -->
    <p>{{nameOfChild}}</p>
    <p>{{sayHello}}</p>
  </div>
</template>

<script>
export default {
  // props는 기본적으로 배열로 사용
  props:{
    nameOfChild: {
      type:String, //데이터 타입을 넣어주면 해당 오류에 대한 부분을 쉽게 몰 수 있다.
      // required: true //필수적으로 데이터 전달해야함.
      default: 'ssa' //부모가 값을 주지 않는다면 초기값으로 처리
    }
  },
  data() {
    return {
      
    }
  },
  computed:{
    sayHello(){
      return this.nameOfChild + ' 안녕하세요'
    }
  }
}
</script>

<style scoped>
  #left{
    width: 50%;
    background: rgb(255, 181, 233);
    float: left;
  }
</style>