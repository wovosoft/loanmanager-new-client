<template>
    <b-modal
        header-class="py-2"
        footer-class="py-1"
        button-size="sm"
        :ok-title="$t('submit')"
        @ok.prevent="handleSubmit"
        :cancel-title="$t('cancel')"
        v-model="is_visible"
        :title="$t('user_details')"
        header-bg-variant="dark"
        @shown="setItem"
        @hidden="$emit('input',false);$emit('hidden',true);resetItem();"
        header-text-variant="light">
        <template #default="{hide}">
            <!--            {{ form }}-->
            <b-form ref="the_form" @submit.prevent="handleSubmit(hide)" @keypress.enter="handleSubmit(hide)">
                <b-form-group :label="$t('name')">
                    <b-form-input name="name" size="sm" required v-model="form.name"/>
                </b-form-group>
                <b-form-group :label="$t('email')">
                    <b-form-input size="sm" name="email" required v-model="form.email"/>
                </b-form-group>
                <b-form-group :label="$t('password')+' (Fill if changes needed)'">
                    <b-form-input size="sm" type="password" name="password" v-model="form.password"/>
                </b-form-group>
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
            form: {
                id: null,
                name: null,
                email: null,
                password: null
            }
        }
    },

    watch: {
        value(v) {
            this.is_visible = v;
        }
    },
    methods: {
        setItem() {
            this.$set(this, 'form', this.item);
        },
        resetItem() {
            this.$set(this, 'form', {
                id: null,
                name: null,
                email: null,
                password: null
            });
        },
        handleSubmit(hide) {
            handleSubmit(this, hide, "/users/store", JSON.parse(JSON.stringify(this.form)));
        },
    }
};
</script>
