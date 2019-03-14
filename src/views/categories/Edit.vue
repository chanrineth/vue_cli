<template>
    <div class="about container">
        <select name="category_id" v-model="selectedCategory" @change="category = selectedCategory">
            <template v-for="category in categories">
                <option :value="category">{{ category.name }}</option>
            </template>
        </select>
        <form action="" method="POST" v-if="category !== null">
            <div class="form-group">
                <label>name</label>
                <input type="text" name="name" v-model="category.name" class="form-control">
            </div>

            <button @click="updateCategory" class="btn btn-primary">Update Category</button>
            <button @click="deleteCategory" class="btn btn-danger">Delete</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'editCategory',
        data () {
            return {
                categories: [],
                selectedCategory: null,
                category: null

            }
        },
        methods: {
            getPost () {
                this.$axios.get('http://127.0.0.1:9090/api/category/edit').then((response) => {
                    if (response.data.code == 200) {
                        this.categories = response.data.data
                    }

                })
            },
            updateCategory (e){
                e.preventDefault()
                this.$axios.defaults.headers.common['Content-Type'] = 'X-Requested-With'
                this.$axios.post('http://127.0.0.1:9090/api/category/store', this.category).then((response) => {
                    console.log(response)
                    this.$toastr(response.data.message, 'i am a toastr success', 'hello')
                })
            },
            deleteCategory(e){
                e.preventDefault()
                this.$axios.defaults.headers.common['Content-Type'] = 'X-Requested-With'
                this.$axios.post('http://127.0.0.1:9090/api/category/delete', this.category).then((response) => {
                    console.log(response)
                    this.$toastr(response.data.message, 'i am a toastr success', 'hello')
                    this.categories = []
                    this.category = null
                    this.getPost()
                })
            }

        },
        mounted(){
            this.getPost()
        },
    }
</script>
