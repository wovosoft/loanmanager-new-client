<template>
    <b-modal
        header-class="py-2"
        footer-class="py-1"
        button-size="sm"
        :ok-title="$t('submit')"
        :cancel-title="$t('cancel')"
        v-model="is_visible"
        :title="$t('account_details')"
        header-bg-variant="dark"
        @ok.prevent="handleSubmit"
        @shown="setItem"
        @hidden="$emit('input',false);$emit('hidden',true);form={}"
        header-text-variant="light">
        <template #default="{hide}">
            <!--            {{ form }}-->
            <b-form ref="the_form" @submit.prevent="handleSubmit(hide)">
                <table class="table table-sm table-bordered table-hover">
                    <tr v-for="x in ['borrower_id','account_no','account_name','type',
                     'is_active','opening_date','closing_date']">
                        <td>{{ ($t('borrower_id' === x ? 'borrower' : x)) + (isRequired(x) ? ' *' : '') }}</td>
                        <td class="p-0">
                            <template v-if="['type'].includes(x)">
                                <b-form-select
                                    class="border-0"
                                    :required="isRequired(x)"
                                    size="sm"
                                    :options="loan_types"
                                    v-model="form[x]"
                                />
                            </template>
                            <template v-else-if="['borrower_id'].includes(x)">
                                <borrowers-select
                                    class="border-0"
                                    v-model="form[x]"
                                />
                            </template>
                            <template v-else-if="['is_active'].includes(x)">
                                <b-form-radio-group
                                    class="m-1"
                                    :required="isRequired(x)"
                                    :options="active_inactive"
                                    v-model="form[x]"
                                />
                            </template>

                            <template v-else>
                                <b-form-input
                                    class="border-0"
                                    :required="isRequired(x)"
                                    :type="getType(x)"
                                    size="sm"
                                    v-model="form[x]"
                                />
                            </template>
                        </td>
                    </tr>
                </table>
                <b-form-group :label="$t('description')">
                    <b-form-textarea
                        :rows="4"
                        :required="isRequired('description')"
                        size="sm"
                        :options="loan_types"
                        v-model="form['description']"
                    />
                </b-form-group>
            </b-form>
        </template>
    </b-modal>
</template>
<script>
import loan_types from "~/partials/loan_types";
import active_inactive from "~/partials/active_inactive"
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
    computed: {
        loan_types() {
            return loan_types(this);
        },
        active_inactive() {
            return active_inactive(this);
        }
    },
    data() {
        return {
            is_visible: false,
            form: {}
        }
    },
    methods: {
        handleSubmit(hide) {
            handleSubmit(this, hide, "/accounts/store", JSON.parse(JSON.stringify(this.form)));
        },
        setItem() {
            this.$set(this, 'form', JSON.parse(JSON.stringify(this.item)));
        },
        getType(x) {
            if (['opening_date', 'closing_date'].includes(x)) {
                return "date";
            }
            return "text";
        },
        isRequired(x) {
            return ['borrower_id', 'account_no', 'account_name', 'type', 'opening_date'].includes(x);
        }
    },
    watch: {
        value(v) {
            this.is_visible = v;
        }
    }
};
</script>
