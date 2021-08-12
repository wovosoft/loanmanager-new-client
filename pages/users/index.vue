<template>
    <div class="pt-3">
        <b-container>
            <b-table
                small
                hover
                striped
                head-variant="dark"
                :items="getItems"
            ></b-table>
        </b-container>
    </div>
</template>
<script>
export default {
    head() {
      return{
        title:'User List'
      }
    },
    mounted() {
        this.getItems();
    },
    data() {
        return {};
    },
    methods: {
        getItems() {
            return this.$axios
                .post("https://loanmanager.test/api/users")
                .then((res) => {
                    return res.data.data;
                })
                .catch((err) => {
                    console.log(err.response);
                    return [];
                });
        },
    },
};
</script>
