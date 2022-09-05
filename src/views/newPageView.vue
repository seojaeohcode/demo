<template>
    <div>
    <h1>Welcome to {{title}}</h1>
    <!-- vmodel 양방향 바인딩 -->
    <input type="text" v-model="input1">
    <button @click="getData">Get</button>
    <button @click="setData">Set</button>
    </div>
</template>
<script>
export default {
    components: {},
    data() {
        return {
            title: '개발자의 미래',
            input1: 'abcd'
        }
    },
    setup() {},
    beforeCreate(){//데이터가 정의되기 전에 실행 -> 실제로 데이터가 생성되기 전이기 때문에 거의 의미 없음.
        console.log('beforeCreate')
    },
    created() {//작성하는 순서와 무관하게 created가 먼저 만들어지고 데이터가 출력됨.
        console.log('created')
    },
    beforeMount(){//mount가 되기전에 html의 내용 검색 불가
        console.log('beforeMount')
    },
    mounted() {//template의 h1 input button tag가 출력됨.
        console.log('mounted')
    },
    beforeUpdate(){
        console.log('beforeUpdate')
    },
    Update(){
        console.log('Update')
    },
    beforeDestroy() {
        console.log('beforeDestroy')
    },
    destroyed() {
        console.log('destroyed')   
    },
    unmounted() {
        console.log('unmounted')
    },
    methods: {
        getData(){
            alert(this.input1);
        },
        setData(){
            this.input1 = '123456789'
        }
    }
}
</script>