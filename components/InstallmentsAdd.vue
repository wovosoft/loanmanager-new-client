<template>
    <b-modal
        id="add-modal"
        header-class="py-2"
        footer-class="py-1"
        button-size="sm"
        :title="$t('Take Installment')"
        header-bg-variant="dark"
        header-text-variant="light"
        no-close-on-esc
        :ok-title="$t('submit')"
        :cancel-title="$t('back')"
        @hidden="resetItem"
        @ok.prevent="$refs.the_sub.click()">
        <template #default="{hide}">
            <b-form @submit.prevent="store(hide)">
                <b-form-group :label="$t('account_no')+' *'">
                    <b-input-group size="sm">
                        <b-input
                            v-model="account_no"
                            name="account_no"
                            type="search"
                            :placeholder="$t('Search Account')"
                            @keypress.enter.prevent="searchLoan"
                        />
                        <template #append>
                            <b-btn size="sm" variant="dark" @click="searchLoan">
                                <b-icon-search/>
                            </b-btn>
                        </template>
                    </b-input-group>
                </b-form-group>
                <b-form-group :label="$t('loan')+' *'">
                    <b-select
                        :options="loans"
                        required
                        size="sm"
                        name="loan"
                        v-model="item.loan_id"
                        @input="loanChanged">
                        <b-select-option
                            :value="loan.id"
                            v-for="(loan, loan_key) in loans"
                            :key="loan_key">
                            {{
                                [
                                    loan.id,
                                    "# Amount:",
                                    loan.loan_amount,
                                    "| Date:",
                                    loan.disbursement_date,
                                    "| Due:",
                                    loan.due_amount,
                                ].join(" ")
                            }}
                        </b-select-option>
                    </b-select>
                </b-form-group>
                <b-form-group :label="$t('date')+ ' *'">
                    <b-input size="sm" type="date" required v-model="item.date"/>
                </b-form-group>
                <b-form-group :label="$t('installment') +' *'">
                    <b-input-group size="sm">
                        <b-input
                            type="number"
                            step="any"
                            :min="0"
                            required
                            v-model="item.amount"
                        />
                        <b-select :options="['cash', 'bank', 'mobile']"/>
                    </b-input-group>
                </b-form-group>
                <b-btn
                    ref="the_sub"
                    hidden
                    type="submit"
                    variant="dark"
                    block
                    size="sm"
                >
                    SUBMIT
                </b-btn>
            </b-form>
        </template>
    </b-modal>
</template>
<script>
import dayjs from "dayjs"

const initialItem = {
    loan_id: null,
    amount: 0,
    method: "cash",
    date: dayjs().format("YYYY-MM-DD")
};
export default {
    data() {
        return {
            account_no: null,
            item: JSON.parse(JSON.stringify(initialItem)),
            loans: [],
        };
    },
    computed: {
        selectedLoan() {
            if (!this.item.loan_id) {
                return null;
            }
            return (this.loans || []).find((i) => i.id === this.item.loan_id);
        },
    },
    methods: {
        resetItem() {
            this.$set(this, 'item', JSON.parse(JSON.stringify(initialItem)));
        },
        searchLoan() {
            this.$axios
                .post("loans/by-account-no", {
                    account_no: this.account_no,
                })
                .then((res) => {
                    console.log(res.data);
                    this.$set(this, "loans", res.data);
                })
                .catch((err) => {
                    console.log(err.response.data);
                    this.$set(this, "loans", []);
                });
        },
        loanChanged() {
            this.item.amount = this.selectedLoan ? this.selectedLoan.installment_amount : 0;
        },
        store(hide) {
            this.$axios
                .post("installments/store", this.item)
                .then((res) => {
                    console.log(res.data);
                    this.$set(this, 'item', JSON.parse(JSON.stringify(initialItem)));
                    this.$emit("success", true);
                    hide();
                })
                .catch((err) => {
                    console.log(err.response.data);
                    this.$emit("failed", true);
                });
        },
    },
};
</script>
