export default async function deleteReservation(token: string, resId: string) {
    const response = await fetch(`http://localhost:4000/api/v1/reservations/${resId}`, {

        method: "DELETE",
        headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
    },
    })

if (!response.ok) {
    throw new Error("Failed to fetch user")
}
return await response.json()
}