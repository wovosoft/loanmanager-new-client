export default (context) => {
    return [
        {
            text: context.$t('active'),
            value: 'active'
        },
        {
            text: context.$t('inactive'),
            value: 'inactive'
        },
        {
            text: context.$t('closed'),
            value: 'closed'
        },
        {
            text: context.$t('defaulted'),
            value: 'defaulted'
        }
    ]
}
