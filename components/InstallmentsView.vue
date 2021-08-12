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
                    Borrower
                    <table></table>
                </b-col>
                <b-col md="6" sm="12"></b-col>
            </b-row>
            <pre v-html="item"></pre>
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
