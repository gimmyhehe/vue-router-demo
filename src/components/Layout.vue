<template>
    <div class="page-layout">
        <router-view name="header"></router-view>
        <div class="flex-box">
            <router-view name="aside"></router-view>
            <div class="main">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<style>
.page-layout {
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
}
</style>