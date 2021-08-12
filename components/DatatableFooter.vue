<template>
    <b-row>
        <b-col md="6" sm="12">
            {{
                $t("datatable_footer_left_title", {
                    from: $n(datatable.from),
                    to: $n(datatable.to),
                    count: $n(datatable.to - datatable.from + 1),
                    total: $n(datatable.total)
                })
            }}
        </b-col>
        <b-col md="6" sm="12">
            <b-pagination
                size="sm"
                align="right"
                class="mb-0"
                :per-page="datatable.per_page"
                v-model="datatable.current_page"
                :total-rows="datatable.total"
            >
                <template #page="p">{{ $n(p.page) }}</template>
            </b-pagination>
        </b-col>
    </b-row>
</template>
<script>
export default {
    props: {
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
