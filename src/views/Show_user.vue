<template>
    <div class="show_user">

        <h1> show user page {{ $route.params.id }} </h1>

        <a @click="$router.go(-1)">
            <button>back</button>
        </a>
    </div>

</template>




<script>
    export default {
        name: "Show_user"
    }
</script>

<style scoped>

</style>