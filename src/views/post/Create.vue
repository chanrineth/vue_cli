<template>
    <div class="about container">
        <h3>Create Post From api</h3>
        <form action="" method="post">
            <div class="row form-group">
                <label for="name">Nsme:</label>
                <input class="form-control" v-model="name" type="text" id="name" name="name">
            </div>
            <div class="row form-group">
                <button class="btn btn-primary" @click="onClickSaveCategory">
                    Create Category
                </button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'CreatePost',
        data () {
            return {
                name: ''
            }
        },
        methods: {
            onClickSaveCategory (e) {
                e.preventDefault()
                this.$axios.defaults.headers.common['Content-Type'] = 'X-Requested-With'
                this.$axios.post('http://127.0.0.1:9090/api/category/store', {
                    name: this.name
                })
                    .then((res) => {
                        console.log(res)
                    })
            }
        }
    }
</script>
