<template>
    <b-modal
        header-class="py-2"
        footer-class="py-1"
        button-size="sm"
        v-model="is_visible"
        :title="$t('loan_details')"
        header-bg-variant="dark"
        @shown="getAccounts(item.borrower_id);"
        @hidden="$emit('input',false);$emit('hidden',true);resetItem();"
        :ok-title="$t('submit')"
        :cancel-title="$t('cancel')"
        @ok.prevent="handleSubmit"
        header-text-variant="light">
        <template #default="{hide}">
            <!--            {{ item }}-->
            <b-form @submit.prevent="handleSubmit(hide)" ref="the_form">
                <table class="table table-sm table-bordered table-hover">
                    <tr>
                        <th>{{ $t('borrower') }} *</th>
                        <td class="p-0">
                            <borrowers-select
                                class="border-0"
                                @itemSelected="(v)=>{
                                    getAccounts(v.value);
                                    item.account_id=null;
                                }"
                                required
                                v-model="item.borrower_id"
                            />
                        </td>
                    </tr>
                    <tr>
                        <th>{{ $t('account') }} *</th>
                        <td class="p-0">
                            <b-form-select
                                size="sm"
                                required
                                class="border-0"
                                v-model="item.account_id"
                                :options="accounts"
                            />
                        </td>
                    </tr>
                    <tr v-for="x in ['disbursement_date','closing_date','loan_amount',
                        'installment_amount','installment_quantity','status']">
                        <th>{{ $t(x) + (isRequired(x) ? ' *' : '') }}</th>
                        <td class="p-0">
                            <template v-if="['status'].includes(x)">
                                <b-form-select
                                    size="sm"
                                    class="border-0"
                                    v-model="item[x]"
                                    :options="loan_statuses"
                                />
                            </template>
                            <template v-else>
                                <b-form-input
                                    class="border-0"
                                    size="sm"
                                    :required="isRequired(x)"
                                    v-model="item[x]"
                                    v-bind="getType(x)"
                                />
                            </template>
                        </td>
                    </tr>
                </table>
            </b-form>
        </template>
    </b-modal>
</template>
<script>
import loan_statuses from "~/partials/loan_statuses";
import {handleSubmit} from "~/partials/form_methods";

export default {
    props: {
        item: {
            type: Object | null,
        },
        value: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            is_visible: false,
            accounts: []
        }
    },
    watch: {
        value(v) {
            this.is_visible = !!v;
        }
    },
    computed: {
        loan_statuses() {
            return loan_statuses(this);
        }
    },
    methods: {
        resetItem() {
            this.accounts = [];
        },
        handleSubmit(hide) {
            handleSubmit(this, hide, "/loans/store", JSON.parse(JSON.stringify(this.item)));
        },
        getAccounts(v) {
            if (!v) {
                this.$set(this, 'accounts', []);
            }
            this.$axios.post("/accounts/search", {
                key: 'borrower_id',
                value: v
            }).then(res => {
                let items = res.data || [];
                items.forEach(item => {
                    item.text = [item.account_name, item.text].join(" | ");
                });
                this.$set(this, 'accounts', items);
            }).catch(err => {
                console.log(err.response);
                this.$set(this, 'accounts', []);
            });
        },
        getType(x) {
            if (['disbursement_date', 'closing_date'].includes(x)) {
                return {
                    "type": "date"
                };
            } else if (['loan_amount', 'installment_amount', 'installment_quantity'].includes(x)) {
                return {
                    "type": "number",
                    "step": "any",
                    "min": 0
                };
            }
            return null;
        },
        isRequired(x) {
            return ['disbursement_date', 'loan_amount', 'installment_amount', 'installment_quantity', 'collection_amount', 'status'].includes(x);
        }
    }
};
</script>
