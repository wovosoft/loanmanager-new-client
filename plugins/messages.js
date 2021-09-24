export const successMsgBox = (context, data) => {
    return context.$bvToast.toast(data.message, {
        title: data.title || "SUCCESS",
        variant: data.type || "success",
        autoHideDelay: data.delay || 3000,
        appendToast: true
    })
}
export const failedMsgBox = (context, data) => {
    const h = context.$createElement;
    let content = [];
    let errors = [];
    if (data.errors) {
        for (let x in data.errors) {
            errors.push(h("li", data.errors[x]));
        }
    }
    content.push(h("ol", {class: ['pl-3']}, errors));
    const vNodesMsg = h('div', [
        h('h5', {class: 'font-weight-bold'}, (data.message || "Operation Failed")), content
    ]);
    return context.$bvToast.toast(vNodesMsg, {
        title: data.title || "FAILED",
        variant: data.type || "danger",
        autoHideDelay: data.delay || 5000,
        appendToast: true
    })
}
// export default (context, inject) => {
//     inject('successMsgBox', (data) => {
//         // console.log(context.app)
//         this.$bvToast.toast(data.message, {
//             title: data.title || "Successfully Done",
//             variant: data.type || "success",
//             autoHideDelay: data.delay || 3000,
//             appendToast: true
//         })
//     })
// }


