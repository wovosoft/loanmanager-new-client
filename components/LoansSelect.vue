<template>
    <v-select
        size="sm"
        toggle-class="border-0"
        v-model="item"
        init-placeholder="Search Loan"
        :options="searchItems"
        @itemSelected="v=>$emit('itemSelected',v)"
    />
</template>
<script>
export default {
    props: {
        value: {
            default: null
        },
    },
    data() {
        return {
            query: null,
            item: null,
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
    methods: {
        searchItems(query, exact = false) {
            // if (!(query || "").toString().trim()) {
            //     return false;
            // }
            return this.$axios
                .post("/installments/search_loans", {exact: exact, filter: query})
                .then(res => res.data)
                .catch(err => []);
        }
    }
}
</script>
