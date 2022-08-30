<template>
    <div>
    <h2>{{title}}</h2>
    </div>
</template>
<script>
export default {
    components: {},
    data() {
        return {
            title: '현재 페이지는 상태가 좋습니다.',
        }
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {}
}
</script>
<style scoped>
    h2{
        background-color: blue;
        padding: 20px;
        color: #fff;
    }
</style>