<template>
    <div class="pt-3">
        <b-container>
            <b-table
                ref="datatable"
                small
                hover
                striped
                head-variant="dark"
                :fields="fields"
                :items="getItems">
                <template #cell(action)="row">
                    <action-btns
                        :on-tap-add="()=>{
                            item=JSON.parse(JSON.stringify(row.item));
                            show_add=true;
                        }"
                        :on-tap-view="()=>{
                            item=JSON.parse(JSON.stringify(row.item));
                            show_view=true;
                        }"/>
                </template>
            </b-table>
        </b-container>

        <users-view
            @hidden="item=null"
            :item="item"
            v-model="show_view"/>
        <users-add
            @stored="$refs.datatable.refresh()"
            @hidden="item=null"
            :item="item"
            v-model="show_add"/>
    </div>
</template>
<script>
export default {
    head() {
        return {
            title: this.$t('user_list')
        }
    },
    data() {
        return {
            show_view: false,
            show_add: false,
            item: null,
            fields: [
                {key: 'id', sortable: false, label: this.$t('id')},
                {key: 'name', sortable: false, label: this.$t('name')},
                {key: 'email', sortable: false, label: this.$t('email')},
                {
                    key: 'created_at', sortable: false, label: this.$t('created_at'),
                    formatter: v => this.$d(new Date(v))
                },
                {
                    key: 'updated_at', sortable: false, label: this.$t('updated_at'),
                    formatter: v => this.$d(new Date(v))
                },
                {key: "action", sortable: false, label: "  ", tdClass: 'text-right', thClass: 'text-right'}
            ]
        };
    },
    methods: {
        getItems() {
            return this.$axios
                .post("https://loanmanager.test/api/users")
                .then((res) => {
                    return res.data.data;
                })
                .catch((err) => {
                    console.log(err.response);
                    return [];
                });
        },
    },
};
</script>
