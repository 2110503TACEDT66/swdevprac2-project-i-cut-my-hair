import Link from "next/link";
import Card from "./Card";
import { RestaurantJson, RestaurantItem } from "../../interface";

export default async function RestaurantCatalog({ RestaurantsJson }: { RestaurantsJson: Promise<RestaurantJson> }) {
    const RestaurantReady = await RestaurantsJson;
    
    return (
        <>
            <div className="flex flex-row content-center place-content-around flex-wrap">
                {
                    RestaurantReady.data ?
                        RestaurantReady.data.map((restaurantItem: RestaurantItem) =>
                            <Link href={`/restaurant/${restaurantItem.id}`} 
                            className="mb-9">
                                <Card restaurantName={restaurantItem.name} imgSrc={restaurantItem.imageUrl} address={restaurantItem.address} tel={restaurantItem.tel} time={restaurantItem.opentime + " - " +restaurantItem.closetime} rid={restaurantItem.id} />
                            </Link>
                        ) : null
                }
            </div>
        </>
    );
}