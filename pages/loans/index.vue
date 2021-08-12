<template>
    <div class="pt-3">
        <b-container fluid>
            <b-card
                body-class="p-0"
                header-bg-variant="dark"
                header-text-variant="light"
                footer-class="p-2">
                <template #header>
                    <datatable-header :title="title" :datatable="datatable"/>
                </template>
                <b-table
                    per-page="100"
                    responsive
                    api-url="/loans"
                    :per-page="datatable.per_page"
                    :current-page="datatable.current_page"
                    small
                    hover
                    striped
                    head-variant="dark"
                    :items="getItems"
                    :fields="fields">
                    <template #cell(index)="row">
                        {{ $n(row.index + datatable.from) }}
                    </template>
                    <template #cell(is_active)="row">
                        {{ Number(row.item.is_active) ? "YES" : "NO" }}
                    </template>
                </b-table>
                <template #footer>
                    <datatable-footer :datatable="datatable"/>
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
            title: "Loan List",
            fields: [
                {
                    key: "index",
                    sortable: true,
                    label: this.$t('index'),
                },
                {
                    key: "account",
                    label: "Account No",
                    sortable: false,
                    formatter: (v) => (v ? v.account_no : null),
                },
                {key: "disbursement_date", sortable: true, label: "Date"},

                {key: "loan_amount", sortable: true, label: "Loan"},
                {
                    key: "installment_amount",
                    sortable: true,
                    label: "Installment",
                },
                {key: "installment_quantity", sortable: true, label: "Inst. Qty."},
                {
                    key: "collection_amount",
                    sortable: true,
                    label: "Collection",
                },
                {key: "due_amount", sortable: true, label: "Due"},
                {key: "last_collection_date", sortable: true},
                {key: "status", sortable: true},
                {key: "closing_date", sortable: true},
            ],
        };
    },
};
</script>
