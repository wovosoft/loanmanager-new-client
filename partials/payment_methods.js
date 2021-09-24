export default (context) => {
    return [
        {
            text: context.$t('cash'),
            value: 'cash'
        },
        {
            text: context.$t('mobile'),
            value: 'mobile'
        },
        {
            text: context.$t('card'),
            value: 'card'
        },
        {
            text: context.$t('bank'),
            value: 'bank'
        }
    ]
}
