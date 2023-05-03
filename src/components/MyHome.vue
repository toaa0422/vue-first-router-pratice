<template>
    <div class="home-container">
        <my-header></my-header>
        <div class="home-main-box">
            <my-aside></my-aside>
            <div class="home-main-body">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
import MyHeader from "./MyHeader.vue"
import MyAside from "./MyAside.vue"
export default {
    components: {
        MyHeader,
        MyAside
    }

}
</script>

<style lang="scss" scoped></style>