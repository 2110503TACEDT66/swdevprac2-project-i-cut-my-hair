export default async function getReservations(token: string) {
    const response = await fetch("http://localhost:200/api/v1/reservations", {

        method: "GET",
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${ token }`,
        },
    })

if (!response.ok) {
    throw new Error("Failed to fetch user")
}
return await response.json()
}