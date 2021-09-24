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
                    api-url="/accounts"
                    :per-page="datatable.per_page"
                    :current-page="datatable.current_page"
                    small
                    hover
                    striped
                    head-variant="dark"
                    :items="getItems"
                    :fields="fields">
                    <template #cell(is_active)="row">
                        {{ Number(row.item.is_active) ? "YES" : "NO" }}
                    </template>
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
        <accounts-view
            @hidden="item=null"
            :item="item"
            v-model="show_view"/>
        <accounts-add
            @stored="$refs.datatable.refresh()"
            @hidden="item=null"
            :item="item"
            v-model="show_add"/>
    </div>
</template>
<script>
import datatable from "~/partials/mixins/datatable";
import {getTodayYMD} from "~/partials/helpers";

export default {
    mixins: [datatable],
    head() {
        return {
            title: this.title,
        };
    },
    data() {
        return {
            show_view: false,
            show_add: false,
            item: null,
            title: this.$t('account_list'),
            fields: [
                {key: "id", sortable: true, label: this.$t('id')},
                {
                    key: "borrower",
                    sortable: false,
                    label: this.$t('borrower'),
                    formatter: (v) => (v ? v.name : null),
                },
                {key: "account_no", sortable: true, label: this.$t('account_no')},
                {key: "account_name", sortable: true, label: this.$t('account_name')},

                {
                    key: "type", sortable: true, label: this.$t('type'),
                    formatter: v => this.$t(v)
                },
                {key: "opening_date", sortable: true, label: this.$t('account_opening_date')},
                {key: "closing_date", sortable: true, label: this.$t('account_closing_date')},
                {key: "is_active", sortable: true, label: this.$t('is_active')},
                {key: "action", sortable: false, label: "  ", tdClass: 'text-right', thClass: 'text-right'}
            ],
        };
    },
    methods: {
        setItem() {
            this.$set(this, 'item', {
                borrower_id: null,
                account_no: null,
                account_name: null,
                type: "loan",
                is_active: 1,
                opening_date: getTodayYMD(),
                closing_date: null,
                description: null,
            });
        }
    }
};
</script>
