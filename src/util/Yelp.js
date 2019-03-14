const apiKey = 'JUWUXy-zYMtqkJRfk49_rOC735wNcnFMLLJIvHroW1ERdeiDIgK0AsPzzN6SEiAh3BTbOik5ZkxOZuxfBMhl73z0GQUu-6BQrCRKEEB_JhK9L0qdBhs-7OaP6LCBXHYx';

const Yelp = {
    search(term,location,sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,{
            headers: {
                Authorization: `Bearer ${apiKey}`,
            }
        }).then( response => {
            return response.json();

        }).then( jsonResponse => {
            if(jsonResponse.businesses) {
               return jsonResponse.businesses.map( business => {
                   console.log(business);
                   return {
                       id: business.id,
                       imageSrc: business.image_url,
                       name: business.name,
                       address: business.location.address1,
                       city: business.location.city,
                       state: business.location.state,
                       zipCode: business.location.zipCode,
                       category: business.categories[0].title,
                       rating: business.rating,
                       reviewCount: business.review_count,
                       url: business.url
                   }
               });
            }
        });
    }
}

export default Yelp;