<template>
    <b-modal
        header-class="py-2"
        footer-class="py-1"
        button-size="sm"
        size="lg"
        :ok-title="$t('ok')"
        :cancel-title="$t('cancel')"
        v-model="is_visible"
        :title="$t('borrower_details')"
        header-bg-variant="dark"
        @hidden="$emit('input',false),$emit('hidden',true)"
        header-text-variant="light">
        <template #default="{hide}">
            <!--            {{ item }}-->
            <table class="table table-sm table-bordered table-hover">
                <tr v-for="x in Object.keys(item)">
                    <th>{{ $t(x) }}</th>
                    <td>
                        <template v-if="['previous_debt','amount','current_debt'].includes(x)">
                            {{ $n(item[x], {currency: 'BDT', style: "currency"}) }}
                        </template>
                        <template v-else-if="['created_at','updated_at','deleted_at','date_of_birth'].includes(x)">
                            {{ item[x] ? $d(new Date(item[x])) : null }}
                        </template>
                        <template v-else-if="['payment_method','gender'].includes(x)">
                            {{ $t(item[x]) }}
                        </template>
                        <template v-else>
                            {{ item[x] }}
                        </template>
                    </td>
                </tr>
            </table>
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
