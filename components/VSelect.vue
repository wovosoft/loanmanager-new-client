<template>
    <b-dd
        :toggle-class="toggleClass"
        class="typehead-dd"
        @shown="dropdownOpened"
        v-bind="{...$props,...$attrs,...init}"
        :menu-class="['dropdown-menu-scrollable',menuClass].join(' ')">
        <b-input
            class="ml-2 mr-2"
            style="width: calc(100% - 14px)"
            v-model="query"
            :placeholder="searchPlaceholder"
            :size="searchSize"
            @input="v=>$emit('search',v)"
            type="search"/>
        <b-dd-item
            @click="itemSelected(item)"
            v-for="(item,item_key) in searchedItems"
            :key="item_key">
            {{ item[textField] }}
        </b-dd-item>
    </b-dd>
</template>

<script>
import {isObject} from 'bootstrap-vue/src/utils/inspect'

export default {
    name: "VSelect",
    props: {
        initialItem: {
            default: null
        },
        initPlaceholder: {
            type: String,
            default: () => "Not Selected"
        },
        variant: {
            type: String,
            default: 'outline-dark'
        },
        block: {
            type: Boolean,
            default: true
        },
        menuClass: {
            type: String,
            default: null
        },
        searchSize: {
            type: String,
            default: 'sm'
        },
        searchPlaceholder: {
            type: String,
            default: 'Search Items...'
        },
        options: {
            type: Array | Function,
            default: () => []
        },
        valueField: {
            type: String,
            default: "value"
        },
        textField: {
            type: String,
            default: "text"
        },
        value: {
            default: null
        },
        clearSearchOnSelect: {
            type: Boolean,
            default: false
        },
        limit: {
            type: Number,
            default: null
        },
        toggleClass: {
            type: String | Array,
            default: 'dd-toggle-border-color'
        }
    },
    beforeMount() {
        this.init.text = this.initPlaceholder;
    },
    mounted() {
        if (this.initial && this.value) {
            this.searchItems(this.value, true);
        }
    },
    watch: {
        value(v) {
            if (this.initial && v) {
                this.searchItems(v, true);
            }
        },
        query(val) {
            this.searchItems(val);
        },
        selectedItem(val) {
            //set placeholder
            if (isObject(val) && !Array.isArray(val)) {
                if (typeof this.textField === "function") {
                    this.init.text = this.textField(val);
                } else {
                    this.init.text = val[this.textField];
                }
            } else {
                this.init.text = this.initPlaceholder;
            }

            //now emit the value
            if (isObject(val) && !Array.isArray(val)) {
                if (typeof this.valueField === 'function') {
                    this.$emit('input', this.valueField(val));
                } else {
                    this.$emit('input', val[this.valueField]);
                }
            } else {
                this.$emit('input', val);
            }
        }
    },
    data() {
        return {
            init: {
                text: 'Select Element',
            },
            query: null,
            selectedItem: null,
            searchedItems: [],
            initial: true
        }
    },
    methods: {
        dropdownOpened() {
            this.$el.querySelector("[type='search']").focus();
        },
        itemSelected(item) {
            this.$set(this, 'selectedItem', item);
            if (this.clearSearchOnSelect) {
                this.query = null;
            }
            this.$emit("itemSelected", item);
        },
        searchItems(query, initial = false) {
            if (Array.isArray(this.options)) {
                let items = this.options.filter(i => i[this.textField].toLocaleLowerCase().includes((query || "").toLocaleLowerCase()));
                if (this.limit) {
                    items = items.slice(0, this.limit);
                }
                this.$set(this, 'searchedItems', items);
            } else if (typeof this.options === 'function') {
                this.options(query, initial).then(items => {
                    if (initial) {
                        this.$set(this, 'searchedItems', [items]);
                        this.selectedItem = items;
                    } else {
                        this.$set(this, 'searchedItems', items);
                    }
                    this.initial = false;
                });
            }
        },
    }
}
</script>

<style lang="scss">
.typehead-dd {
    .dropdown-menu-scrollable {
        max-height: 300px;
        overflow-y: scroll !important;
        overflow-x: auto;
        width: 100%;
    }

    .dropdown-toggle {
        text-align: left;
    }

    .dropdown-toggle::after {
        right: 10px;
        position: absolute;
        margin-top: 6px;
    }

    .dd-toggle-border-color {
        border: 1px solid #ced4da;
    }
}

</style>
