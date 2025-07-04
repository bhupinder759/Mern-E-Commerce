import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import { capturePayment } from '@/store/shop/order-slice';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const PaypalReturnPage = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const paymentId = params.get('paymentId');
    const payerId = params.get('PayerID');

    useEffect(() => {
        if (paymentId && payerId) {
            const orderId = JSON.parse(sessionStorage.getItem('currentOrderId'));

            dispatch(capturePayment({ paymentId, payerId, orderId })).then(data => {
                if (data?.payload?.success) {
                    sessionStorage.removeItem('currentOrderId');
                    window.location.href = '/shop/payment-success';
                }
            })
        }
    })
  return (
    <Card>
        <CardHeader>
            <CardTitle>Processing Payment...please wait!</CardTitle>
        </CardHeader>
    </Card>
  )
}

export default PaypalReturnPage