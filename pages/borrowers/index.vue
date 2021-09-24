<template>
    <div class="pt-3">
        <b-container fluid>
            <b-card
                body-class="p-0"
                header-bg-variant="dark"
                header-text-variant="light"
                footer-class="p-2">
                <template #header>
                    <datatable-header :title="title" :datatable="datatable">
                        <template #actions>
                            <b-btn-group size="sm">
                                <b-btn variant="primary" @click="show_add=true;setItem();">
                                    <b-icon-plus></b-icon-plus>
                                </b-btn>
                            </b-btn-group>
                        </template>
                    </datatable-header>
                </template>
                <b-table
                    ref="datatable"
                    api-url="/borrowers"
                    :per-page="datatable.per_page"
                    :current-page="datatable.current_page"
                    small
                    hover
                    striped
                    head-variant="dark"
                    :items="getItems"
                    :fields="fields">
                    <template #cell(action)="row">
                        <action-btns
                            :on-tap-add="()=>{
                                item=JSON.parse(JSON.stringify(row.item));
                                show_add=true;
                            }"
                            :on-tap-view="()=>{
                                item=JSON.parse(JSON.stringify(row.item));
                                show_view=true;
                            }"/>
                    </template>
                </b-table>
                <template #footer>
                    <datatable-footer :datatable="datatable"/>
                </template>
            </b-card>
        </b-container>
        <borrowers-view
            @hidden="item=null"
            :item="item"
            v-model="show_view"/>
        <borrowers-add
            @stored="$refs.datatable.refresh()"
            @hidden="item=null"
            :item="item"
            v-model="show_add"/>
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
            show_add: false,
            show_view: false,
            item: null,
            title: this.$t('borrower_list'),
            fields: [
                {key: "id", sortable: true, label: this.$t('id')},
                {key: "name", sortable: true, label: this.$t('name')},
                {key: "fathers_name", sortable: true, label: this.$t('fathers_name')},
                {key: "mothers_name", sortable: true, label: this.$t('mothers_name')},
                {key: "date_of_birth", sortable: true, label: this.$t('date_of_birth')},
                {key: "phone", sortable: true, label: this.$t('phone')},
                {key: 'action', label: "", thClass: 'text-right', tdClass: 'text-right'}
            ],
        };
    },
    methods: {
        setItem() {
            this.$set(this, 'item', {
                name: null,
                nid: null,
                fathers_name: null,
                mothers_name: null,
                spouse_name: null,
                gender: null,
                date_of_birth: null,
                present_division: null,
                present_district: null,
                present_upazila: null,
                present_thana: null,
                present_village: null,
                permanent_division: null,
                permanent_district: null,
                permanent_upazila: null,
                permanent_thana: null,
                permanent_village: null,
                email: null,
                phone: null,
                photo: null,
                description: null,
            });
        }
    }
};
</script>
