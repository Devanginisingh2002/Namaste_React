import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 * Logo
 * Nav Items
 * 
 * Body
 *  search
 *  Restaurant Container
 *  Restaurant Card
 * 
 * Footer
 *  copyright 
 *  links
 *  address
 *  contact
 */


const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="data:image/png;base64,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" alt="logo"></img>
            </div>
            <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Contact</li>
                <li>Contact us</li>
            </ul>

            </div>
        </div>
    )
}

const RestaurantCard = (props) => {
    // const {resName, cusienes} = props;, ? optional chaining
    const {resData} = props;
    const {name, cuisines, avgRating, deliveryTime, costForTwo, cloudinaryImageId} = resData?.info;
    console.log(props);
    return (
        <div className="res-card" style={{background: "#f0f0f0"}}>
            {/* {<img className="item-1" 
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resData.info.cloudinaryImageId/>} */}

            <img
  className="item-1"
  src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
  alt="food"
/>

            <h3>Name: {name}</h3>
            <h4>cuisines: {cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{resData.info.sla.deliveryTime}</h4>
            <h4>{costForTwo}</h4>
        </div>
    )
}

// Data from live API
const resList = [
{
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "1003415",
"name": "Pastas By Pizza Hut",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/5/f249ac91-2d8f-472b-b60c-4a7ea4ed9f86_1003415.jpg",
"locality": "Chhindwara",
"areaName": "Parasia Road",
"costForTwo": "₹400 for two",
"cuisines": [
"Pastas"
],
"avgRating": 3.5,
"parentId": "306806",
"avgRatingString": "3.5",
"totalRatingsString": "7",
"sla": {
"deliveryTime": 64,
"lastMileTravel": 13.1,
"serviceability": "SERVICEABLE",
"slaString": "60-65 mins",
"lastMileTravelString": "13.1 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-08-14 00:00:00",
"opened": true
},
"badges": {},
"isOpen": true,
"aggregatedDiscountInfoV2": {},
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textBased": {},
"textExtendedBadges": {}
}
},
"orderabilityCommunication": {
"title": {},
"subTitle": {},
"message": {},
"customIcon": {}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-b9aa3d17-1617-4486-9869-5bbd1d3abc2b"
},
"cta": {
"link": "https://www.swiggy.com/city/chhindwara/pastas-by-pizza-hut-parasia-road-rest1003415",
"text": "RESTAURANT_MENU",
"type": "WEBLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "830418",
"name": "Indian Coffee House",
"cloudinaryImageId": "2469fa88ee9b0b5d1366ba88f2a7fa7f",
"locality": "Chhindwara City",
"areaName": "Khajri Chowk",
"costForTwo": "₹300 for two",
"cuisines": [
"South Indian",
"Chinese",
"Fast Food",
"Beverages"
],
"avgRating": 4.4,
"veg": true,
"parentId": "106448",
"avgRatingString": "4.4",
"totalRatingsString": "235",
"sla": {
"deliveryTime": 63,
"lastMileTravel": 13.1,
"serviceability": "SERVICEABLE",
"slaString": "60-65 mins",
"lastMileTravelString": "13.1 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-08-13 22:30:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "Rxawards/_CATEGORY-South%20Indian.png",
"description": "Delivery!"
}
]
},
"isOpen": true,
"aggregatedDiscountInfoV2": {},
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "Delivery!",
"imageId": "Rxawards/_CATEGORY-South%20Indian.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"orderabilityCommunication": {
"title": {},
"subTitle": {},
"message": {},
"customIcon": {}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-b9aa3d17-1617-4486-9869-5bbd1d3abc2b"
},
"cta": {
"link": "https://www.swiggy.com/city/chhindwara/indian-coffee-house-city-khajri-chowk-rest830418",
"text": "RESTAURANT_MENU",
"type": "WEBLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "1003414",
"name": "Pizza Hut",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/a1e023e4-bdf3-4bcb-b4d9-2498ba52528e_1003414.JPG",
"locality": "Chhindwara",
"areaName": "Parasia Road",
"costForTwo": "₹350 for two",
"cuisines": [
"Pizzas"
],
"avgRating": 4.3,
"parentId": "721",
"avgRatingString": "4.3",
"totalRatingsString": "168",
"sla": {
"deliveryTime": 60,
"lastMileTravel": 13.1,
"serviceability": "SERVICEABLE",
"slaString": "55-60 mins",
"lastMileTravelString": "13.1 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-08-14 00:00:00",
"opened": true
},
"badges": {},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹99"
},
"orderabilityCommunication": {
"title": {},
"subTitle": {},
"message": {},
"customIcon": {}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-b9aa3d17-1617-4486-9869-5bbd1d3abc2b"
},
"cta": {
"link": "https://www.swiggy.com/city/chhindwara/pizza-hut-parasia-road-rest1003414",
"text": "RESTAURANT_MENU",
"type": "WEBLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "1046102",
"name": "Tasty Talk",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/16/7cbbb087-5eb9-4464-bce2-8e8a392d19a2_1046102.jpg",
"locality": "Chhindwara City",
"areaName": "Chhindwara City",
"costForTwo": "₹200 for two",
"cuisines": [
"Chinese",
"Italian",
"Pizzas",
"Pastas",
"Fast Food",
"Burgers",
"Cafe"
],
"avgRating": 4.1,
"veg": true,
"parentId": "618935",
"avgRatingString": "4.1",
"totalRatingsString": "9",
"sla": {
"deliveryTime": 68,
"lastMileTravel": 12.1,
"serviceability": "SERVICEABLE",
"slaString": "65-70 mins",
"lastMileTravelString": "12.1 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-08-13 23:45:00",
"opened": true
},
"badges": {},
"isOpen": true,
"aggregatedDiscountInfoV2": {},
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textBased": {},
"textExtendedBadges": {}
}
},
"orderabilityCommunication": {
"title": {},
"subTitle": {},
"message": {},
"customIcon": {}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"isNewlyOnboarded": true,
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-b9aa3d17-1617-4486-9869-5bbd1d3abc2b"
},
"cta": {
"link": "https://www.swiggy.com/city/chhindwara/tasty-talk-chhindwara-city-rest1046102",
"text": "RESTAURANT_MENU",
"type": "WEBLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "234875",
"name": "Adil Hotel",
"cloudinaryImageId": "gp1ityra6utvzqn6ghnv",
"locality": "Rautha Wada",
"areaName": "Chhindwara Locality",
"costForTwo": "₹150 for two",
"cuisines": [
"Biryani",
"Tandoor"
],
"avgRating": 4.4,
"parentId": "27123",
"avgRatingString": "4.4",
"totalRatingsString": "1.3K+",
"sla": {
"deliveryTime": 45,
"lastMileTravel": 11.5,
"serviceability": "SERVICEABLE",
"slaString": "45-50 mins",
"lastMileTravelString": "11.5 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-08-14 00:00:00",
"opened": true
},
"badges": {},
"isOpen": true,
"aggregatedDiscountInfoV2": {},
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textBased": {},
"textExtendedBadges": {}
}
},
"orderabilityCommunication": {
"title": {},
"subTitle": {},
"message": {},
"customIcon": {}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-b9aa3d17-1617-4486-9869-5bbd1d3abc2b"
},
"cta": {
"link": "https://www.swiggy.com/city/chhindwara/adil-hotel-rautha-wada-chhindwara-locality-rest234875",
"text": "RESTAURANT_MENU",
"type": "WEBLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "658210",
"name": "The Fusion Lounge",
"cloudinaryImageId": "fa4944f0cfdcbca2bec1f3ab8e3db3f7",
"locality": "Triloki nagar",
"areaName": "Railway Station",
"costForTwo": "₹300 for two",
"cuisines": [
"South Indian",
"Chinese",
"Beverages",
"Fast Food",
"Desserts"
],
"avgRating": 4.1,
"parentId": "395453",
"avgRatingString": "4.1",
"totalRatingsString": "356",
"sla": {
"deliveryTime": 58,
"lastMileTravel": 11.9,
"serviceability": "SERVICEABLE",
"slaString": "55-60 mins",
"lastMileTravelString": "11.9 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-08-13 23:00:00",
"opened": true
},
"badges": {},
"isOpen": true,
"aggregatedDiscountInfoV2": {},
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textBased": {},
"textExtendedBadges": {}
}
},
"orderabilityCommunication": {
"title": {},
"subTitle": {},
"message": {},
"customIcon": {}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-b9aa3d17-1617-4486-9869-5bbd1d3abc2b"
},
"cta": {
"link": "https://www.swiggy.com/city/chhindwara/the-fusion-lounge-triloki-nagar-railway-station-rest658210",
"text": "RESTAURANT_MENU",
"type": "WEBLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "719963",
"name": "Chatori Food Junction",
"cloudinaryImageId": "906c0affa7d8ff78a3e4db88b4433cde",
"locality": "Parasia Road",
"areaName": "Parasia Road",
"costForTwo": "₹200 for two",
"cuisines": [
"South Indian",
"Snacks",
"Pizzas",
"Burgers"
],
"avgRating": 5,
"veg": true,
"parentId": "429054",
"avgRatingString": "5.0",
"totalRatingsString": "<3",
"sla": {
"deliveryTime": 63,
"lastMileTravel": 13.4,
"serviceability": "SERVICEABLE",
"slaString": "60-65 mins",
"lastMileTravelString": "13.4 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-08-13 23:00:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "v1695133679/badges/Pure_Veg111.png",
"description": "pureveg"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "pureveg",
"imageId": "v1695133679/badges/Pure_Veg111.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "₹131 OFF",
"subHeader": "ABOVE ₹249",
"discountTag": "FLAT DEAL"
},
"orderabilityCommunication": {
"title": {},
"subTitle": {},
"message": {},
"customIcon": {}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-b9aa3d17-1617-4486-9869-5bbd1d3abc2b"
},
"cta": {
"link": "https://www.swiggy.com/city/chhindwara/chatori-food-junction-parasia-road-rest719963",
"text": "RESTAURANT_MENU",
"type": "WEBLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "945448",
"name": "Yummy Better",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/22/5c6d3a34-1ac1-44ca-94cf-7e9122459ebc_945448.jpg",
"locality": "Chhindwara City",
"areaName": "Chhindwara City",
"costForTwo": "₹200 for two",
"cuisines": [
"South Indian",
"Fast Food"
],
"veg": true,
"parentId": "557138",
"avgRatingString": "--",
"sla": {
"deliveryTime": 67,
"lastMileTravel": 12.3,
"serviceability": "SERVICEABLE",
"slaString": "65-70 mins",
"lastMileTravelString": "12.3 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-08-13 22:00:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "v1695133679/badges/Pure_Veg111.png",
"description": "pureveg"
}
]
},
"isOpen": true,
"aggregatedDiscountInfoV2": {},
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "pureveg",
"imageId": "v1695133679/badges/Pure_Veg111.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"orderabilityCommunication": {
"title": {},
"subTitle": {},
"message": {},
"customIcon": {}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-b9aa3d17-1617-4486-9869-5bbd1d3abc2b"
},
"cta": {
"link": "https://www.swiggy.com/city/chhindwara/yummy-better-chhindwara-city-rest945448",
"text": "RESTAURANT_MENU",
"type": "WEBLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
}
]


const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            {/* Complete Res-Cards: As New component for reusability */}
            <div className="res-container">
                {/* <RestaurantCard resName = "Meghna Foods" cusienes="Biryani North Indian"/>
                 <RestaurantCard resName = "kfc" cusienes="Fast Food"/> */}

                 {/* <RestaurantCard resData = {resList[0]}/> */}

                 {
                    resList.map(restaurant => <RestaurantCard key = {restaurant.info.id} resData = {restaurant}/>
                    
                    )
                 }
            </div>
        </div>
    )
}
const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Body />
        </div>
    )
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)