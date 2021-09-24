<template>
    <div class="pt-3">
        <b-container fluid>
            <b-card
                body-class="p-0"
                header-bg-variant="dark"
                header-text-variant="light"
                footer-class="p-2">
                <template #header>
                    <b-form @submit.prevent="$refs.datatable.refresh()">
                        <b-form-row>
                            <b-col md="2" sm="12">{{ title }}</b-col>
                            <b-col md="2" sm="12">
                                <b-input-group>
                                    <api-selectable
                                        size="sm"
                                        class="form-control form-control-sm p-0"
                                        :title="$t('search_borrowers')"
                                        value-field="value"
                                        v-model="query_fields.borrower_id"
                                        @input="searchAccounts"
                                        :placeholder="$t('search_borrowers')"
                                        api-url="borrowers/search"
                                    />
                                    <template #append>
                                        <b-btn size="sm" title="Reset"
                                               @click="query_fields.borrower_id=null,accounts=[],query_fields.account_id=null">
                                            <b-icon-trash/>
                                        </b-btn>
                                    </template>
                                </b-input-group>
                            </b-col>
                            <b-col md="2" sm="12" v-if="query_fields.borrower_id">
                                <b-input-group>
                                    <b-form-select
                                        title="Select Account"
                                        :options="accounts"
                                        v-model="query_fields.account_id"
                                        value-field="id"
                                        text-field="account_no"
                                        placeholder="Account" size="sm">
                                        <template #first>
                                            <b-form-select-option :value="null">
                                                Select Account
                                            </b-form-select-option>
                                        </template>
                                    </b-form-select>
                                    <template #append>
                                        <b-btn size="sm" title="Reset" @click="query_fields.account_id=null">
                                            <b-icon-trash/>
                                        </b-btn>
                                    </template>
                                </b-input-group>
                            </b-col>
                            <b-col md="2" sm="12" v-else>
                                <b-form-input
                                    size="sm" name="account_no"
                                    :title="$t('account_no')" type="search"
                                    v-model="query_fields.account_no"
                                    :placeholder="$t('account_no')"/>
                            </b-col>
                            <b-col md="3" sm="12">
                                <b-input-group size="sm">
                                    <b-input
                                        title="Starting Date"
                                        v-model="query_fields.starting_date"
                                        type="date"
                                    />
                                    <b-input
                                        title="Ending Date"
                                        v-model="query_fields.ending_date"
                                        type="date"
                                    />
                                    <template #append>
                                        <b-btn size="sm" :title="$t('reset')"
                                               @click="query_fields.starting_date=null,query_fields.ending_date=null">
                                            <b-icon-trash/>
                                        </b-btn>
                                    </template>
                                </b-input-group>
                            </b-col>
                            <b-col md="1" sm="12">
                                <b-btn variant="primary" size="sm" :title="$t('search')" type="submit">
                                    <b-icon-search/>
                                </b-btn>
                                <b-btn variant="danger" size="sm" :title="$t('reset')" @click="resetQueries">
                                    <b-icon-trash/>
                                </b-btn>
                            </b-col>
                            <b-col md="2" sm="12" class="text-right">
                                <b-btn-group size="sm" class="d-inline">
                                    <b-btn variant="primary" @click="setItem();show_add=true;">
                                        <b-icon-plus/>
                                    </b-btn>
                                </b-btn-group>
                                <b-select
                                    class="d-inline"
                                    style="max-width: 100px"
                                    size="sm"
                                    v-model="datatable.per_page"
                                    :options="[
                                    5, 10, 15, 20, 30, 40, 50, 100, 200, 500,
                                    1000,
                                ]"
                                ></b-select>
                            </b-col>
                        </b-form-row>
                    </b-form>
                </template>
                <b-table
                    ref="datatable"
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
        <loans-view
            @hidden="item=null"
            :item="item"
            v-model="show_view"/>
        <loans-add
            @stored="$refs.datatable.refresh()"
            @hidden="item=null"
            :item="item"
            v-model="show_add"/>
    </div>
</template>
<script>
import datatable from "~/partials/mixins/datatable";
import {getTodayYMD} from "~/partials/helpers";

const queries = {
    borrower_id: null,
    account_id: null,
    starting_date: null,
    ending_date: null,
    account_no: null,
};
export default {
    mixins: [datatable],
    head() {
        return {
            title: this.title,
        };
    },
    data() {
        return {
            title: this.$t('loan_list'),
            query_fields: JSON.parse(JSON.stringify(queries)),
            accounts: [],
            show_view: false,
            show_add: false,
            item: null,
            fields: [
                {
                    key: "index",
                    sortable: true,
                    label: this.$t('index'),
                },
                {
                    key: "account",
                    label: this.$t("account_no"),
                    sortable: false,
                    formatter: (v) => (v ? v.account_no : null),
                },
                {
                    key: "disbursement_date", sortable: true,
                    label: this.$t("disbursement_date"),
                    formatter: v => this.$d(new Date(v))
                },

                {
                    key: "loan_amount", sortable: true,
                    label: this.$t("loan_amount"),
                    formatter: v => this.$n(v, {style: 'currency', currency: 'BDT'})
                },
                {
                    key: "installment_amount",
                    sortable: true,
                    label: this.$t("installment_amount"),
                    formatter: v => this.$n(v, {style: 'currency', currency: 'BDT'})
                },
                {
                    key: "installment_quantity",
                    sortable: true,
                    label: this.$t("installment_quantity"),
                    formatter: v => this.$n(v)
                },
                {
                    key: "collection_amount",
                    sortable: true,
                    label: this.$t("collection_amount"),
                    formatter: v => this.$n(v, {style: 'currency', currency: 'BDT'})
                },
                {
                    key: "due_amount",
                    sortable: true,
                    label: this.$t("due_amount"),
                    formatter: v => this.$n(v, {style: 'currency', currency: 'BDT'})
                },
                {
                    key: "last_collection_date", sortable: true, label: this.$t("last_collection_date"),
                    formatter: v => v ? this.$d(new Date(v)) : null
                },
                {
                    key: "status", sortable: true, label: this.$t('status'),
                    formatter: v => this.$t(v)
                },
                {key: "closing_date", sortable: true, label: this.$t('closing_date')},
                {key: 'action', label: "", thClass: 'text-right', tdClass: 'text-right'}
            ],
        };
    },
    methods: {
        setItem() {
            this.$set(this, 'item', {
                borrower_id: null,
                account_id: null,
                disbursement_date: getTodayYMD(),
                closing_date: null,
                loan_amount: 0,
                installment_amount: 0,
                installment_quantity: 0,
                status: "active",
            });
        },
        resetQueries() {
            this.query_fields = JSON.parse(JSON.stringify(queries));
            this.$refs.datatable.refresh();
        },
        trash(id) {
            if (confirm("Are You Sure?")) {
                this
                    .$axios.delete("installments/trash/" + id)
                    .then(res => {
                        this.$refs.datatable.refresh();
                    })
                    .catch(err => {
                        console.log(err.response.data);
                    });
            }
        },
        searchAccounts(q) {
            this.query_fields.account_id = null;
            if (q) {
                this.query_fields.account_no = null;
                this
                    .$axios.post("accounts/by-borrower-id", {borrower_id: q})
                    .then(res => {
                        this.accounts = res.data;
                    })
                    .catch(err => {
                        console.log(err.response.data);
                        this.accounts = [];
                    });
            } else {
                this.accounts = [];
            }
        }
    }
};
</script>
