<template>
    <b-dropdown
        menu-class="min-w-100"
        class="api-selectable"
        :size="size"
        right
        :text="selected?selected.text:placeholder"
        block
        toggle-class="text-left"
        variant="light"
        @shown="$el.querySelector('input').focus()">
        <div class="px-2">
            <b-input
                :value="filter"
                v-model="query"
                :placeholder="placeholder"
                :debounce="debounce"
                type="search" :size="size"/>
        </div>
        <b-dd-item
            v-for="(item,item_key) in items"
            @click="selectItem(item)"
            :key="item_key">
            {{ item.text }}
        </b-dd-item>
    </b-dropdown>
</template>

<script>
export default {
    props: {
        apiUrl: {
            type: String,
            required: true
        },
        size: {
            default: "sm",
            type: String
        },
        placeholder: {
            type: String,
            default: "Search..."
        },
        debounce: {
            type: String | Number,
            default: 300
        },
        value: {
            default: null
        },
        valueField: {
            type: String,
            default: 'value'
        },
        identifier: {
            type: String,
            default: 'id'
        }
    },
    data() {
        return {
            items: [],
            filter: null,
            query: null,
            selected: null
        }
    },
    watch: {
        query() {
            this.fetchData();
        },
        value: {
            deep: true,
            handler(v) {
                if (this.valueField && v) {
                    this.selected = (this.items || []).find(i => i.value === v);
                } else {
                    this.selected = v;
                }
            }
        }
    },
    mounted() {
        this.init();
    },
    methods: {
        init() {
            if (this.value) {
                let q = {key: this.identifier, value: this.value};
                let the = this;
                this.fetchData(q, function (items) {
                    the.selected = (items || []).find(i => i.value === q.value);
                });
            }
        },
        selectItem(item) {
            this.$set(this, 'selected', item);
            this.$emit("input", (this.selected && this.valueField) ? this.selected[this.valueField] : this.selected);
        },
        fetchData(q = null, callback = null) {
            this
                .$axios
                .post(this.apiUrl, q || {filter: this.query})
                .then(res => {
                    this.items = res.data;
                    if (typeof callback === "function") {
                        callback(this.items);
                    }
                })
                .catch(err => {
                    console.log(err.response);
                });
        }
    }
}
</script>
<style lang="scss">
.api-selectable {
    .dropdown-toggle::after {
        float: right !important;
        top: 13px !important;
        position: absolute;
        right: 5px;
    }

    .dropdown-menu {
        max-height: 300px;
        overflow: auto;
    }

    .min-w-100 {
        min-width: 100% !important;
    }
}
</style>
