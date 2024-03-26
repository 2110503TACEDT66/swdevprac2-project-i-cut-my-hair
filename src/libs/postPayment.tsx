export default async function postPayment(token:string, amount:number, method:string, resid:string){
    const response = await fetch(`http://localhost:400/api/v1/reservations/${resid}/payments`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
            reservationId: resid,
            amount: amount,
            paymentMethods: method,
        }),
    })
}