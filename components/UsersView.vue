<template>
    <b-modal
        header-class="py-2"
        footer-class="py-1"
        button-size="sm"
        :ok-title="$t('ok')"
        :cancel-title="$t('cancel')"
        v-model="is_visible"
        :title="$t('user_details')"
        header-bg-variant="dark"
        @hidden="$emit('input',false),$emit('hidden',true)"
        header-text-variant="light">
        <template #default="{hide}">
            <!--                {{item}}-->
            <table class="table table-sm table-bordered table-hover">
                <tr v-for="x in ['id','name','email','created_at','updated_at']">
                    <th>{{ $t(x) }}</th>
                    <td>
                        <template v-if="['created_at','updated_at'].includes(x)">
                            {{ $d(new Date(item[x])) }}
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
