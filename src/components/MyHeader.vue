<template>
    <div>
        <button type="button" @click="onLogout">onLogout</button>
    </div>
</template>

<script>
export default {
    name: "MyHeader",
    methods: {
        onLogout () {
            localStorage.removeItem('token'),
                this.$router.push('/login')
        }
    }

}
</script>

<style lang="less" scoped>
.layout-header-container {
    height: 60px;
    border-bottom: 1px solid #eaeaea;
}

.layout-header-left-img {
    height: 50px;
}
</style>