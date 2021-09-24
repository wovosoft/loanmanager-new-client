<template>
    <b-btn-group size="sm">
        <b-btn v-if="view" variant="dark" :title="$t('view')" @click="onTapView">
            <b-icon-eye/>
        </b-btn>
        <b-btn v-if="add" variant="warning" :title="$t('edit')" @click="onTapAdd">
            <b-icon-pencil-fill/>
        </b-btn>
        <b-btn v-if="trash" variant="danger" :title="$t('delete')" @click="onTapTrash">
            <b-icon-trash/>
        </b-btn>
    </b-btn-group>
</template>
<script>
export default {
    props: {
        add: {
            type: Boolean,
            default: true
        },
        view: {
            type: Boolean,
            default: true
        },
        trash: {
            type: Boolean,
            default: true
        },
        onTapView: {
            type: Function,
            default: (() => {
                console.log("No Action")
            })
        },
        onTapAdd: {
            type: Function,
            default: (() => {
                console.log("No Action")
            })
        },
        onTapTrash: {
            type: Function,
            default: (() => {
                console.log("No Action")
            })
        }
    },
}
</script>
