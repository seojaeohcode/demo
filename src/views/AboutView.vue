<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h1>{{ title }}</h1>
    <button @click="count++">추가</button>
    <p>{{ count }}</p>
    <!-- 2버전 -->
    <!-- <homeCom><homeCom /> -->
    <!-- 3버전 -->
    <homeCom />
  </div>
</template>

<script>
  // @ => src기준으로 저장
  import homeCom from '@/components/Home.vue'
  //@ => v-model
 export default {
  components: {
    homeCom
  },
  data(){
    return {
      title: '안녕하세요. 반갑습니다.',
      count: 1,
    }
  }
 }
</script>