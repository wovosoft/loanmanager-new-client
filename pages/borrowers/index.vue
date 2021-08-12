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
                    api-url="/borrowers"
                    :per-page="datatable.per_page"
                    :current-page="datatable.current_page"
                    small
                    hover
                    striped
                    head-variant="dark"
                    :items="getItems"
                    :fields="fields"
                ></b-table>
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
            title: "Borrower List",
            fields: [
                { key: "id", sortable: true },
                { key: "name", sortable: true },
                { key: "fathers_name", sortable: true },
                { key: "mothers_name", sortable: true },
                { key: "date_of_birth", sortable: true },
                { key: "phone", sortable: true },
            ],
        };
    },
};
</script>
