<template>
    <v-select
        size="sm"
        toggle-class="border-0"
        v-model="item"
        init-placeholder="Search Borrower"
        :options="searchItems"
        @itemSelected="v=>$emit('itemSelected',v)"
    />
</template>
<script>
export default {
    props: {
        value: {
            default: null
        }
    },
    data() {
        return {
            query: null,
            item: null
        }
    },
    watch: {
        value(val) {
            this.$set(this, 'item', val);
        },
        item(v) {
            this.$emit('input', v);
        }
    },
    mounted() {
        this.item = this.value;
    },
    methods: {
        searchItems(query, exact = false) {
            return this.$axios
                .post("/borrowers/search", {exact: exact, filter: query})
                .then(res => res.data)
                .catch(err => {
                    console.log(err.response)
                    return [];
                });
        }
    }
}
</script>
