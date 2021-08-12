<template>
    <div class="pt-3">
        <b-container fluid>
            <b-card
                body-class="p-0"
                header-bg-variant="dark"
                header-text-variant="light"
                footer-class="p-2"
            >
                <template #header>
                    <datatable-header :title="title" :datatable="datatable" />
                </template>
                <b-table
                    api-url="/accounts"
                    :per-page="datatable.per_page"
                    :current-page="datatable.current_page"
                    small
                    hover
                    striped
                    head-variant="dark"
                    :items="getItems"
                    :fields="fields"
                >
                    <template #cell(is_active)="row">
                        {{ Number(row.item.is_active) ? "YES" : "NO" }}
                    </template>
                </b-table>
                <template #footer>
                    <datatable-footer :datatable="datatable" />
                </template>
            </b-card>
        </b-container>
    </div>
</template>
<script>
import datatable from "~/partials/mixins/datatable";
export default {
    mixins: [datatable],
    head() {
        return {
            title: this.title,
        };
    },
    data() {
        return {
            title: "Account List",
            fields: [
                { key: "id", sortable: true },
                { key: "account_no", sortable: true },
                { key: "account_name", sortable: true },
                {
                    key: "borrower",
                    sortable: false,
                    formatter: (v) => (v ? v.name : null),
                },
                { key: "type", sortable: true },
                { key: "opening_date", sortable: true },
                { key: "closing_date", sortable: true },
                { key: "is_active", sortable: true },
            ],
        };
    },
};
</script>
