<template>
    <b-modal
        header-class="py-2"
        footer-class="py-1"
        button-size="sm"
        :ok-title="$t('submit')"
        :cancel-title="$t('cancel')"
        v-model="is_visible"
        :title="$t('Installment Details')"
        header-bg-variant="dark"
        @ok.prevent="handleSubmit"
        @shown="setItem"
        @hidden="$emit('input',false);$emit('hidden',true);form={};"
        header-text-variant="light">
        <template #default="{hide}">
<!--            {{ form }}-->
            <b-form ref="the_form" @submit.prevent="handleSubmit(hide)">
                <table class="table table-sm table-bordered table-hover">
                    <tr>
                        <th>{{ $t('loan') }}</th>
                        <td>
                            <loans-select
                                @itemSelected="setLoanFields"
                                class="border-0"
                                v-model="form.loan_id"
                            />
                        </td>
                    </tr>
                    <template v-for="x in Object.keys(form)">
                        <tr v-if="['date','amount','payment_method'].includes(x)">
                            <th>{{ $t(x) + (isRequired(x) ? ' *' : '') }}</th>
                            <td class="p-0">
                                <b-form-input
                                    v-if="['date','amount'].includes(x)"
                                    v-bind="getType(x)"
                                    class="border-0"
                                    size="sm"
                                    v-model="form[x]"
                                />
                                <b-form-select
                                    v-else
                                    class="border-0"
                                    size="sm"
                                    :options="payment_methods"
                                    v-model="form[x]"
                                />
                            </td>
                        </tr>
                    </template>
                </table>
            </b-form>
        </template>
    </b-modal>
</template>
<script>

import {handleSubmit} from "~/partials/form_methods";
import payment_methods from "~/partials/payment_methods";

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
            form: {}
        }
    },
    computed: {
        payment_methods() {
            return payment_methods(this);
        },
    },
    methods: {
        setLoanFields(v) {
            console.log(v)
            this.form.amount = v.installment_amount || 0;
        },
        setItem() {
            this.$set(this, 'form', JSON.parse(JSON.stringify(this.item)));
        },
        handleSubmit(hide) {
            handleSubmit(this, hide, "/installments/store", JSON.parse(JSON.stringify(this.form)));
        },
        getType(x) {
            if (['date'].includes(x)) {
                return {
                    type: 'date'
                };
            } else if (['amount'].includes(x)) {
                return {
                    type: "number",
                    min: 0,
                    step: 'any'
                };
            }
            return {type: "text"};
        },
        isRequired(x) {
            return ['name', 'nid', 'fathers_name', 'mothers_name'].includes(x);
        },
        findLoan(e) {
            this.$axios.post("/installments/search_loans", {
                filter: ''
            }).then(res => {
                console.log(res.data)
            }).catch(err => {
                console.log(err.response.data);
            });
        }
    },
    watch: {
        value(v) {
            this.is_visible = v;
        }
    }
};
</script>
