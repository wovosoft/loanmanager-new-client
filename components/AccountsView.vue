<template>
    <b-modal
        header-class="py-2"
        footer-class="py-1"
        button-size="sm"
        size="lg"
        :ok-title="$t('ok')"
        :cancel-title="$t('cancel')"
        v-model="is_visible"
        :title="$t('account_details')"
        header-bg-variant="dark"
        @hidden="$emit('input',false),$emit('hidden',true)"
        header-text-variant="light">
        <template #default="{hide}">
            <!--                {{item}}-->
            <b-form-row>
                <b-col md="6" sm="12">
                    <table class="table table-sm table-bordered table-hover">
                        <tr v-for="x in ['id','account_no','account_name','type',
                        'is_active','opening_date','closing_date','description','created_at']">
                            <th>{{ $t(x) }}</th>
                            <td>
                                <template v-if="['previous_debt','amount','current_debt'].includes(x)">
                                    {{ $n(item[x], {currency: 'BDT', style: "currency"}) }}
                                </template>
                                <template
                                    v-else-if="['opening_date','created_at','updated_at','closing_date'].includes(x)">
                                    {{ item[x] ? $d(new Date(item[x])) : null }}
                                </template>
                                <template v-else-if="['is_active'].includes(x)">
                                    {{ $t(['no', 'yes'][item[x] || 0]) }}
                                </template>
                                <template v-else-if="['type'].includes(x)">
                                    {{ $t(item[x]) }}
                                </template>
                                <template v-else>
                                    {{ item[x] }}
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
