let movie={
    name:"Titanic",
    year:1997
}
// console.log(movie.name)

let jsonRef={
    
        "data": [
            {
                "company": "Google",
                "country": "USA"
            },
            {
                "company": "UST",
                "country": "India"
            },
            {
                "company": "Red Hat",
                "country": "Germany",
                "year": 2002
            },
            {
                "company": "Microsoft",
                "country": "USA"
            },
            {
                "company": "Tata Consultancy Services",
                "country": "India"
            },
            {
                "company": "SAP",
                "country": "Germany"
            },
            {
                "company": "Sony",
                "country": "Japan",
                "year": 1946
            },
            {
                "company": "Samsung",
                "country": "South Korea"
            },
            {
                "company": "Nokia",
                "country": "Finland",
                "year": 1865
            },
            {
                "company": "Alibaba",
                "country": "China"
            }
        ]
    
    
}

// console.log(jsonRef);

console.log(jsonRef.data.filter(ele => ele.country==="India"))