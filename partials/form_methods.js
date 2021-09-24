import {failedMsgBox, successMsgBox} from "~/plugins/messages";

export const handleSubmit = (context, hide, url, data, ref = "the_form") => {
    if (!context.$refs[ref].checkValidity()) {
        context.$refs[ref].reportValidity();
        return false;
    }
    context.$axios.post(url, data).then(res => {
        successMsgBox(context, res.data);
        context.$emit("stored", res.data);
        if (typeof hide === "function") {
            hide();
        } else if (hide && hide.hasOwnProperty('vueTarget')) {
            hide.vueTarget.hide();
        }
    }).catch(err => {
        failedMsgBox(context, err.response.data);
    });
}
