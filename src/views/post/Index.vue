<template>
    <div class="about">
        <template v-for="post in posts">
            <h1>{{post.title}} {{post.description}}</h1>
            <hr>
        </template>

    </div>
</template>

<script>
    export default {
        name: 'ListPost',
        data () {
            return {
                posts: []
            }
        },
        methods: {
            getPost () {
                this.$axios.get('http://127.0.0.1:8000/api/post').then((response) => {
                    if (response.data.code == 200) {
                        this.posts = response.data.data
                    }

                })
            }
        },
        mounted(){
            this.getPost()
        },

    }
</script>