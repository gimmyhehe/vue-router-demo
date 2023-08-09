<template>
    <div class="header">
        Vue Router
    </div>
    <div class="flex-box">
        <div class="aside">
            <div>
                <router-link to="/layout/home">home</router-link>
            </div>
            <div>
                <router-link to="about">about</router-link>
            </div>
        </div>
        <div class="main">
            <router-view></router-view>
        </div>
    </div>
</template>

<style scoped>
.header {
    background-color: #ecf8ff;
    text-align: center;
    height: 60px;
}
.flex-box {
    display: flex;
    height: calc(100vh - 60px);
}
.aside {
    width: 120px;
    background-color: #ffecec;
    height: 100%;
}
.main {
    flex-grow: 1;
    text-align: center;
    align-items: center;
}
</style>