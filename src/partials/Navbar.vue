<template>
    <div id="nav">
        <router-link :to="{name:'home'}">Home</router-link>
        |
        <router-link :to="{name:'about'}">About</router-link>
        |
        <router-link :to="{name:'contact'}">Contact</router-link>
        |
        <router-link :to="{name:'user'}">User</router-link>
        |
        <router-link :to="{name:'listPost'}">Post</router-link>
        |
        <router-link :to="{name:'create'}">Create</router-link>
        |
        <router-link :to="{name:'category-edit'}">Edit Category</router-link>


    </div>
</template>

<script>
    export default{
        name: "Navbar"
    }
</script>


<style scoped>
    #nav {
        padding: 30px;
    }

    #nav a {
        font-weight: bold;
        color: #2c3e50;
    }

    #nav a.router-link-exact-active {
        color: #42b983;
    }
</style>

