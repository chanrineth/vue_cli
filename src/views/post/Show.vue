<template>
    <div class="show-post">
        <template v-if="post != null">
            <b-alert show>Default Alert</b-alert>

            <b-button v-b-modal.modal1>Launch demo modal</b-button>

            <!-- Modal Component -->
            <b-modal id="modal1" title="BootstrapVue">
                <p class="my-4">Hello from modal!</p>
            </b-modal>

            <h1>{{ post.title }}</h1>
            <small>{{ post.user.name }}</small> | <small>{{ post.created_at }}</small>
            <article>{{ post.description }}</article>
        </template>
        <template v-else>
            <h1>Data not found</h1>
        </template>
    </div>
</template>

<script>
    export default {
        name: "Show",
        data () {
            return {
                post: null
            }
        },
        methods: {
            fetchPostById(id) {
                this.$axios.get('http://127.0.0.1:9090/api/post/' + id)
                    .then((response) => {
                        if (response.data.code == 200) {
                            this.post = response.data.data
                        }
                    })
            }
        },
        mounted () {
            this.fetchPostById((this.$route.params.id))
        }
    }
</script>

<style scoped>
    .show-post {
        padding: 30px;
    }
</style>
