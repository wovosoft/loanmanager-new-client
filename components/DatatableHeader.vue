<template>
    <b-form-row>
        <b-col md="4" sm="12">{{ title }}</b-col>
        <b-col md="8" sm="12" class="text-right">
            <b-select
                style="max-width: 100px"
                size="sm"
                v-model="datatable.per_page"
                :options="[5, 10, 15, 20, 30, 40, 50, 100, 200, 500, 1000]"
            ></b-select>
        </b-col>
    </b-form-row>
</template>
<script>
export default {
    props: {
        title: {
            type: String,
            default: "List",
        },
        datatable: {
            type: Object,
            required: true,
            default() {
                return {
                    current_page: 1,
                    last_page: 1,
                    from: 1,
                    per_page: 15,
                    to: 1,
                    total: 0,
                };
            },
        },
    },
};
</script>
