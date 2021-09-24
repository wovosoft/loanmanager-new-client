<template>
    <b-modal
        header-class="py-2"
        footer-class="py-1"
        button-size="sm"
        size="lg"
        v-model="is_visible"
        :title="$t('loan_details')"
        header-bg-variant="dark"
        @hidden="$emit('input',false),$emit('hidden',true)"
        header-text-variant="light">
        <template #default="{hide}">
<!--                {{item}}-->
            <b-form-row>
                <b-col md="6" sm="12">
                    <table class="table table-sm table-bordered table-hover">
                        <tr v-for="x in ['id','disbursement_date','closing_date','loan_amount',
                        'installment_amount','installment_quantity','collection_amount','due_amount',
                        'last_collection_date','status','created_at']">
                            <th>{{ $t(x) }}</th>
                            <td>
                                <template v-if="['previous_debt','amount','current_debt'].includes(x)">
                                    {{ $n(item[x], {currency: 'BDT', style: "currency"}) }}
                                </template>
                                <template v-else-if="['date'].includes(x)">
                                    {{ $d(new Date(item[x])) }}
                                </template>
                                <template v-else-if="['payment_method'].includes(x)">
                                    {{ $t(item[x]) }}
                                </template>
                                <template v-else>
                                    {{item[x]}}
                                </template>
                            </td>
                        </tr>
                    </table>
                </b-col>
                <b-col md="6" sm="12">
                    <table class="table table-sm table-bordered table-hover ">
                        <tr>
                            <th>{{ $t('borrower') }}</th>
                            <td>{{ item.borrower.name }}</td>
                        </tr>
                        <tr>
                            <th>{{ $t('account_name') }}</th>
                            <td>{{ item.account.account_name }}</td>
                        </tr>
                        <tr>
                            <th>{{ $t('account_no') }}</th>
                            <td>{{ item.account.account_no }}</td>
                        </tr>
                    </table>
                </b-col>
            </b-form-row>
        </template>
    </b-modal>
</template>
<script>

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
            is_visible: false
        }
    },
    watch: {
        value(v) {
            this.is_visible = v;
        }
    }
};
</script>
