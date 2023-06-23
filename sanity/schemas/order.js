export default
{
    name: 'order',
    title: 'Order',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            option:
            {
                maxLength: 40
            }
        },
        {
            name: 'phone',
            title: 'Phone',
            type: 'string',
            option:
            {
                maxLength: 10
            }
        },
        {
            name: 'address',
            title: 'Address',
            type: 'string',
            option:
            {
                maxLength: 100
            }
        },
        {
            name: 'method',
            title: 'Payment Method(0:Cod,1:Paid)',
            type: 'number',
        },
        {
            name: 'foodname',
            title: 'Food(quantity)',
            type: 'string',
            option:
            {
                maxLength: 1000
            }
        },
        {
            name: 'total',
            title: 'Total',
            type: 'number',
        },
        {
            name: 'status',
            title: 'Status (Type: 1. COD,2. Packing,3. Onway,4. Delivered)',
            type: 'number',
        },
        {
            title: 'Order Cancel',
            name: 'cancel',
            type: 'string',
            options: {
              list: [
                {title: 'Not Cancel', value: 'false'},
                {title: 'Cancel', value: 'true'}
              ],
              layout: 'radio'
            }
        }
    ]
}