
export default async function getRestaurant(id:string) {
    const response = await fetch(`http://localhost:400/api/v1/restaurants/${id}`)

    if(!response){
        throw new Error(`Failed to fetch restaurant with id of ${id}`)
    }
    return await response.json()
}