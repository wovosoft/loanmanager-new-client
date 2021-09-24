<template>
    <b-modal
        header-class="py-2"
        footer-class="py-1"
        button-size="sm"
        size="lg"
        :ok-title="$t('submit')"
        :cancel-title="$t('cancel')"
        v-model="is_visible"
        :title="$t('borrower_details')"
        header-bg-variant="dark"
        @ok.prevent="handleSubmit"
        @shown="setItem"
        @hidden="$emit('input',false),$emit('hidden',true)"
        header-text-variant="light">
        <template #default="{hide}">
            <!--            {{ item }}-->
            <b-form ref="the_form" @submit.prevent="handleSubmit(hide)">
                <table class="table table-sm table-bordered table-hover">
                    <template v-for="x in Object.keys(form)">
                        <tr v-if="!['id','created_at','deleted_at','updated_at'].includes(x)">
                            <th>{{ $t(x) + (isRequired(x) ? ' *' : '') }}</th>
                            <td class="p-0">
                                <template v-if="x==='photo'">
                                    <b-form-file
                                        class="borrower-photo"
                                        :name="x"
                                        :required="isRequired(x)"
                                        @keypress.enter="handleSubmit(hide)"
                                        accept="image/*"
                                        label-class="border-0"
                                        size="sm"
                                        v-model="form[x]"
                                    />
                                </template>
                                <template v-else-if="x==='gender'">
                                    <b-form-select
                                        class="border-0"
                                        size="sm"
                                        v-model="form[x]"
                                        :required="isRequired(x)"
                                        :options="[{value:'male',text:'Male'},{value:'female',text: 'Female'},{value:'others',text: 'Others'}]"
                                    />
                                </template>
                                <template v-else-if="x==='description'">
                                    <b-form-textarea
                                        :name="x"
                                        class="border-0"
                                        size="sm"
                                        :required="isRequired(x)"
                                        v-model="form[x]"
                                    />
                                </template>
                                <template v-else>
                                    <b-form-input
                                        :name="x"
                                        @keypress.enter="handleSubmit(hide)"
                                        class="border-0"
                                        size="sm"
                                        :required="isRequired(x)"
                                        :type="getType(x)"
                                        v-model="form[x]"
                                    />
                                </template>
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
    methods: {
        setItem() {
            this.$set(this, 'form', JSON.parse(JSON.stringify(this.item)));
        },

        handleSubmit(hide) {
            handleSubmit(this, hide, "/borrowers/store", JSON.parse(JSON.stringify(this.form)));
        },
        getType(x) {
            if (['created_at', 'updated_at', 'deleted_at', 'date_of_birth'].includes(x)) {
                return 'date';
            } else if (x === 'phone') {
                return "tel";
            } else if (x === "email") {
                return "email";
            }
            return "text";
        },
        isRequired(x) {
            return ['name', 'nid', 'fathers_name', 'mothers_name'].includes(x);
        }
    },
    watch: {
        value(v) {
            this.is_visible = v;
        }
    }
};
</script>
<style>
.borrower-photo .custom-file-label {
    border: 0;
}
</style>
