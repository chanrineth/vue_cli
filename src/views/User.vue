<template>

    <div class="User">
        <h1> User list :</h1>
        <!--<li v-for="user in users">{{user.name}}</li>-->
        <ul>
            <li v-for="user in users">
                <router-link :to="{name:'showuser',params: {id:user.name}} ">{{ user.name}}</router-link>
            </li>
        </ul>

    </div>
</template>

<script>
    export default {
        name: "User",
        data() {
            return {
                users: [
                    {id: 1, name: 'Rineth'},
                    {id: 2, name: 'Phea'},
                    {id: 3, name: 'Phorn'},
                    {id: 4, name: 'pisey'}
                ]

            }
        }
    }
</script>

<style scoped>

</style>