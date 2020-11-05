<template>
<div class="container" :class="{'show': showSidebar}">
    <div class="control">
        <button @click="showNav"><font-awesome-icon :icon="['fas', 'th']" /></button>
    </div>
    <div class="navigation-icons">
        <button><font-awesome-icon :icon="['fas', 'plus']" /></button>
        <button><font-awesome-icon :icon="['fas', 'project-diagram']" /></button>
    </div>
</div>
    
</template>

<script>
export default {
    data: () => {
        return {showSidebar: false}
    },
    methods: {
        showNav() {
            this.showSidebar = !this.showSidebar
        }
    }
}   
</script>

<style scoped>
    .container {
        position: absolute;
        top: 0;
        left: 0;
        width: 50px;
        padding: 10px;
        min-height: calc(100vh - 20px);
        background-color: #020c0ea4;
        z-index: 999;
        transition: all .5s ease-in-out;
    }

    .control {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px;
        margin-bottom: 10px;
    }

    .navigation-icons {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 50px;
        float: left;
    }

    button {
        font-size: 2rem;
        padding: 10px 0;
        cursor: pointer;
        transition: all .5s ease-in-out;
        background-color: transparent;
        border-style: none;
    }

    button:hover {
        color: #fff;
    }

    .control {
        padding-bottom: 2em;
    }

    .show {
        width: 200px;
    }
</style>