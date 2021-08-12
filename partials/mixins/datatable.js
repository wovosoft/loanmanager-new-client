export default {
    data() {
        return {
            datatable: {
                current_page: 1,
                last_page: 1,
                from: 1,
                per_page: 15,
                to: 1,
                total: 0,
            },
            fields: [],
            query_fields: {}
        }
    },
    methods: {
        getItems(ctx) {
            // console.log(ctx)
            let url = new URL(this.$axios.defaults.baseURL + ctx.apiUrl);
            url.searchParams.append("page", ctx.currentPage);
            return this.$axios
                .post(url.toString(), {...ctx, ...this.query_fields})
                .then(({data}) => {
                    this.$set(this, "datatable", {
                        current_page: data.current_page,
                        last_page: data.last_page,
                        from: data.from,
                        per_page: data.per_page,
                        to: data.to,
                        total: data.total,
                    });
                    return data.data;
                })
                .catch((err) => {
                    console.log(err.response);
                    this.$set(this, "datatable", {
                        current_page: 1,
                        last_page: 1,
                        from: 1,
                        per_page: 15,
                        to: 1,
                        total: 0,
                    });
                    return [];
                });
        },
    },
}
