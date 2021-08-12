<template>
    <div class="pt-3">
        <b-container fluid>
            <b-card
                body-class="p-0"
                header-bg-variant="dark"
                header-text-variant="light"
                footer-class="p-2">
                <template #header>
                    <b-form @submit.prevent="$refs.dttable.refresh()">
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
                                    <b-btn variant="primary" v-b-modal:add-modal>
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
                    responsive
                    ref="dttable"
                    api-url="/installments"
                    :per-page="datatable.per_page"
                    :current-page="datatable.current_page"
                    small
                    hover
                    striped
                    head-variant="dark"
                    :items="getItems"
                    :fields="fields"
                >
                    <template #cell(id)="row">
                        {{ $n(row.index + datatable.from) }}
                    </template>
                    <template #cell(is_active)="row">
                        {{ Number(row.item.is_active) ? "YES" : "NO" }}
                    </template>
                    <template #cell(action)="row">
                        <b-btn-group size="sm">
                            <b-btn variant="dark" title="View" @click="show_view=true,item=row.item">
                                <b-icon-eye/>
                            </b-btn>
                            <b-btn variant="danger" title="Delete" @click="trash(row.item.id)">
                                <b-icon-trash/>
                            </b-btn>
                        </b-btn-group>
                    </template>
                </b-table>
                <template #footer>
                    <datatable-footer :datatable="datatable"/>
                </template>
            </b-card>
        </b-container>
        <installments-add @success="$refs.dttable.refresh()"/>
        <installments-view
            @hidden="item=null"
            :item="item"
            v-model="show_view"/>
    </div>
</template>
<script>
import datatable from "~/partials/mixins/datatable";

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
            title: this.$t("installment_list"),
            query_fields: JSON.parse(JSON.stringify(queries)),
            accounts: [],
            show_view: false,
            item: null,
            fields: [
                {
                    key: "id",
                    sortable: true,
                    label: this.$t('index'),
                },
                {
                    key: "borrower", sortable: false,
                    label: this.$t('borrower'),
                    formatter: (v) => v.name
                },
                {
                    key: "account",
                    sortable: false,
                    label: this.$t('account'),
                    formatter: (v) => v.account_no,
                },
                {
                    key: "loan",
                    sortable: false,
                    label: this.$t('loan'),
                    formatter: (v) => {
                        return [
                            v.id,
                            v.disbursement_date,
                            v.loan_amount,
                            v.due_amount,
                        ].join(" | ");
                    },
                },
                {
                    key: "date",
                    sortable: true,
                    label: this.$t('date'),
                    formatter: v => this.$d(new Date(v))
                },
                {
                    key: "previous_debt", sortable: true, label: this.$t('previous_debt'),
                    formatter: v => this.$n(v || 0)
                },
                {
                    key: "amount", sortable: true, label: this.$t('amount'),
                    formatter: v => this.$n(v || 0)
                },
                {
                    key: "current_debt", sortable: true, label: this.$t('current_debt'),
                    formatter: v => this.$n(v || 0)
                },
                {
                    key: "payment_method", sortable: true, label: this.$t('payment_method'),
                    formatter: v => this.$t(v)
                },
                {key: 'action', tdClass: "text-right", thClass: "text-right"}
            ],
        };
    },
    methods: {
        resetQueries() {
            this.query_fields = JSON.parse(JSON.stringify(queries));
            this.$refs.dttable.refresh();
        },
        trash(id) {
            if (confirm("Are You Sure?")) {
                this
                    .$axios.delete("installments/trash/" + id)
                    .then(res => {
                        this.$refs.dttable.refresh();
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
