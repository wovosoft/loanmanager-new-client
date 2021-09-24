<template>
    <b-modal
        header-class="py-2"
        footer-class="py-1"
        button-size="sm"
        size="lg"
        v-model="is_visible"
        :title="$t('Installment Details')"
        header-bg-variant="dark"
        @hidden="$emit('input',false),$emit('hidden',true)"
        header-text-variant="light">
        <template #default="{hide}">
            <b-row>
                <b-col md="6" sm="12">

                    <table class="table table-sm table-bordered table-hover">
                        <tr v-for="x in ['id','date','previous_debt','amount','current_debt','payment_method']">
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
                            <th>{{ $t('loan_amount') }}</th>
                            <td>{{ $n(item.loan.loan_amount, {style: "currency", currency: 'BDT'}) }}</td>
                        </tr>
                        <tr>
                            <th>{{ $t('due_amount') }}</th>
                            <td>{{ $n(item.loan.due_amount, {style: "currency", currency: 'BDT'}) }}</td>
                        </tr>
                        <tr>
                            <th>{{ $t('disbursement_date') }}</th>
                            <td>{{ $d(new Date(item.loan.disbursement_date)) }}</td>
                        </tr>
                    </table>
                </b-col>
            </b-row>
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
