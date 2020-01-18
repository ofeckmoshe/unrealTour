// const apartments = [
//     { id: 1, title: 'My cool apartment', description: 'My apartment description', cityId: 2, owner: 1, price: 200000, main_image: "images/apartment/apartment_1.jpg", images: ["images/apartment/apartment_1.jpg", "images/apartment/apartment_2.jpg", "images/apartment/apartment_4.jpg", "images/apartment/apartment_4.jpg", "images/apartment/apartment_5.jpg"], number_of_beds: 3, number_of_rooms: 1, address: '330 3rd Ave', sqft: 7500, status: 2, for_rent: false, for_sale: true },
//     { id: 2, title: 'My nice apartment', description: 'My nice apartment description', cityId: 6, owner: 2, price: 300000, number_of_beds: 1, number_of_rooms: 4, address: '330 3rd Ave', main_image: "images/apartment/apartment_2.jpg", images: ["images/apartment/apartment_6.png", "images/apartment/apartment_7.jpg", "images/apartment/apartment_8.jpg", "images/apartment/apartment_9.jpg", "images/apartment/apartment_1.jpg"], for_rent: false, for_sale: false },
//     { id: 3, title: 'My cool apartment', description: 'My apartment description', cityId: 17, owner: 1, price: 400000, main_image: "images/apartment/apartment_4.jpg", images: ["images/apartment/apartment_1.jpg", "images/apartment/apartment_1.jpg", "images/apartment/apartment_1.jpg", "images/apartment/apartment_1.jpg", "images/apartment/apartment_1.jpg"], number_of_beds: 5, number_of_rooms: 2, address: 'Alenby 3 st', sqft: 7500, status: 2, for_rent: true, for_sale: false },
//     {
//         id: 4,
//         title: 'My nice apartment',
//         description: 'My nice apartment description',
//         cityId: 13,
//         owner: 2,
//         price: 250000,
//         number_of_beds: 1,
//         number_of_rooms: 3,
//         address: 'Saloona 23 st',
//         main_image: "images/apartment/apartment_4.jpg",
//         images: ["images/apartment/apartment_1.jpg", "images/apartment/apartment_1.jpg", "images/apartment/apartment_1.jpg", "images/apartment/apartment_1.jpg", "images/apartment/apartment_1.jpg"],
//         for_rent: false,
//         for_sale: true
//     },
//     { id: 5, title: 'My cool apartment', description: 'My apartment description', cityId: 4, owner: 1, price: 150000, main_image: "images/apartment/apartment_4.jpg", images: ["images/apartment/apartment_1.jpg", "images/apartment/apartment_2.jpg", "images/apartment/apartment_4.jpg", "images/apartment/apartment_4.jpg", "images/apartment/apartment_4.jpg"], number_of_beds: 3, number_of_rooms: 5, address: 'Rozeni 423 st', sqft: 7500, status: 2, for_rent: false, for_sale: true },
//     { id: 6, title: 'My nice apartment', description: 'My nice apartment description', cityId: 2, owner: 4, price: 350000, number_of_beds: 5, number_of_rooms: 1, address: 'Zurik 52 st', main_image: "images/apartment/apartment_5.jpg", images: ["images/apartment/apartment_1.jpg", "images/apartment/apartment_2.jpg", "images/apartment/apartment_4.jpg", "images/apartment/apartment_4.jpg", "images/apartment/apartment_4.jpg"], for_rent: true, for_sale: false },
//     { id: 7, title: 'My cool apartment', description: 'My apartment description', cityId: 15, owner: 1, price: 5000000, main_image: "images/apartment/apartment_6.png", images: ["images/apartment/apartment_1.jpg", "images/apartment/apartment_2.jpg", "images/apartment/apartment_4.jpg", "images/apartment/apartment_4.jpg", "images/apartment/apartment_4.jpg"], number_of_beds: 3, number_of_rooms: 3, address: 'Korab 41 st', sqft: 7500, status: 2, for_rent: false, for_sale: true },
//     { id: 8, title: 'My nice apartment', description: 'My nice apartment description', cityId: 21, owner: 8, price: 1500000, number_of_beds: 2, number_of_rooms: 6, address: 'Moris 422 st 33s', main_image: "images/apartment/apartment_7.jpg", images: ["images/apartment/apartment_1.jpg", "images/apartment/apartment_2.jpg", "images/apartment/apartment_4.jpg", "images/apartment/apartment_4.jpg", "images/apartment/apartment_4.jpg"], for_rent: true, for_sale: false },
//     { id: 9, title: 'My cool apartment', description: 'My apartment description', cityId: 16, owner: 7, price: 2500000, main_image: "images/apartment/apartment_8.jpg", images: ['https://ap.rdcpix.com/1759188762/861b901071ac8c0bbb7d4ee13c9296a3l-m0xd-w1020_h770_q80.jpg', 'https://ap.rdcpix.com/1759188762/861b901071ac8c0bbb7d4ee13c9296a3l-m0xd-w1020_h770_q80.jpg', 'https://ap.rdcpix.com/1759188762/861b901071ac8c0bbb7d4ee13c9296a3l-m0xd-w1020_h770_q80.jpg', 'https://ap.rdcpix.com/1759188762/861b901071ac8c0bbb7d4ee13c9296a3l-m0xd-w1020_h770_q80.jpg'], number_of_beds: 3, number_of_rooms: 4, address: 'Alenby 3 st', sqft: 7500, status: 2, for_rent: true, for_sale: false },
//     { id: 10, title: 'My nice apartment', description: 'My nice apartment description', cityId: 12, owner: 6, price: 2300000, number_of_beds: 4, number_of_rooms: 2, address: 'Alenby 3 st', main_image: "images/apartment/apartment_9.jpg", images: ["images/apartment/apartment_1.jpg", "images/apartment/apartment_2.jpg", "images/apartment/apartment_4.jpg", "images/apartment/apartment_4.jpg", "images/apartment/apartment_4.jpg"], for_rent: false, for_sale: true },
//     {
//         id: 11,
//         title: 'My cool apartment',
//         description: 'My apartment description',
//         cityId: 20,
//         owner: 1,
//         price: 30,
//         main_image: "images/apartment/apartment_1.jpg",
//         images: ['https://ap.rdcpix.com/1759188762/861b901071ac8c0bbb7d4ee13c9296a3l-m0xd-w1020_h770_q80.jpg', 'https://ap.rdcpix.com/1759188762/861b901071ac8c0bbb7d4ee13c9296a3l-m0xd-w1020_h770_q80.jpg', 'https://ap.rdcpix.com/1759188762/861b901071ac8c0bbb7d4ee13c9296a3l-m0xd-w1020_h770_q80.jpg', 'https://ap.rdcpix.com/1759188762/861b901071ac8c0bbb7d4ee13c9296a3l-m0xd-w1020_h770_q80.jpg'],
//         number_of_beds: 3,
//         number_of_rooms: 2,
//         address: 'Alenby 3 st',
//         sqft: 7500,
//         status: 2,
//         for_rent: true,
//         for_sale: false
//     },
//     { id: 12, title: 'My nice apartment', description: 'My nice apartment description', cityId: 7, owner: 2, price: 30, number_of_beds: 3, number_of_rooms: 4, address: 'Alenby 3 st', main_image: "images/apartment/apartment_1.jpg", images: ["images/apartment/apartment_1.jpg", "images/apartment/apartment_2.jpg", "images/apartment/apartment_4.jpg", "images/apartment/apartment_4.jpg", "images/apartment/apartment_4.jpg"], for_rent: true, for_sale: false },
//     {
//         id: 13,
//         title: 'My cool apartment',
//         description: 'My apartment description',
//         cityId: 8,
//         owner: 1,
//         price: 30,
//         main_image: "images/apartment/apartment_1.jpg",
//         images: ['https://ap.rdcpix.com/1759188762/861b901071ac8c0bbb7d4ee13c9296a3l-m0xd-w1020_h770_q80.jpg', 'https://ap.rdcpix.com/1759188762/861b901071ac8c0bbb7d4ee13c9296a3l-m0xd-w1020_h770_q80.jpg', 'https://ap.rdcpix.com/1759188762/861b901071ac8c0bbb7d4ee13c9296a3l-m0xd-w1020_h770_q80.jpg', 'https://ap.rdcpix.com/1759188762/861b901071ac8c0bbb7d4ee13c9296a3l-m0xd-w1020_h770_q80.jpg'],
//         number_of_beds: 3,
//         number_of_rooms: 5,
//         address: 'Alenby 3 st',
//         sqft: 7500,
//         status: 2,
//         for_rent: true,
//         for_sale: false
//     },
//     { id: 14, title: 'My nice apartment', description: 'My nice apartment description', cityId: 9, owner: 2, price: 30, number_of_beds: 3, number_of_rooms: 4, address: 'Alenby 3 st', main_image: "images/apartment/apartment_1.jpg", images: ["images/apartment/apartment_1.jpg", "images/apartment/apartment_2.jpg", "images/apartment/apartment_4.jpg", "images/apartment/apartment_4.jpg", "images/apartment/apartment_4.jpg"], for_rent: true, for_sale: false },
//     {
//         id: 15,
//         title: 'My cool apartment',
//         description: 'My apartment description',
//         cityId: 9,
//         owner: 1,
//         price: 30,
//         main_image: "images/apartment/apartment_1.jpg",
//         images: ["images/apartment/apartment_1.jpg", "images/apartment/apartment_2.jpg", "images/apartment/apartment_4.jpg", "images/apartment/apartment_4.jpg", "images/apartment/apartment_4.jpg"],
//         number_of_beds: 3,
//         number_of_rooms: 3,
//         address: 'Alenby 3 st',
//         sqft: 7500,
//         status: 2,
//         for_rent: true,
//         for_sale: false
//     },
//     { id: 16, title: 'My nice apartment', description: 'My nice apartment description', cityId: 10, owner: 2, price: 30, number_of_beds: 3, number_of_rooms: 4, address: 'Alenby 3 st', main_image: "images/apartment/apartment_1.jpg", images: ["images/apartment/apartment_1.jpg", "images/apartment/apartment_2.jpg", "images/apartment/apartment_4.jpg", "images/apartment/apartment_4.jpg", "images/apartment/apartment_4.jpg"], for_rent: true, for_sale: false },
//     {
//         id: 17,
//         title: 'My cool apartment',
//         description: 'My apartment description',
//         cityId: 19,
//         owner: 1,
//         price: 30,
//         main_image: "images/apartment/apartment_1.jpg",
//         images: ["images/apartment/apartment_1.jpg", "images/apartment/apartment_2.jpg", "images/apartment/apartment_4.jpg", "images/apartment/apartment_4.jpg", "images/apartment/apartment_4.jpg"],
//         number_of_beds: 3,
//         number_of_rooms: 2,
//         address: 'Alenby 3 st',
//         sqft: 7500,
//         status: 2,
//         for_rent: true,
//         for_sale: false
//     },
//     { id: 18, title: 'My nice apartment', description: 'My nice apartment description', cityId: 5, owner: 2, price: 30, number_of_beds: 3, number_of_rooms: 4, address: 'Alenby 3 st', main_image: "images/apartment/apartment_1.jpg", images: ["images/apartment/apartment_1.jpg", "images/apartment/apartment_2.jpg", "images/apartment/apartment_4.jpg", "images/apartment/apartment_4.jpg", "images/apartment/apartment_4.jpg"], for_rent: true, for_sale: false },
//     {
//         id: 19,
//         title: 'My cool apartment',
//         description: 'My apartment description',
//         cityId: 6,
//         owner: 1,
//         price: 30,
//         main_image: "images/apartment/apartment_1.jpg",
//         images: ["images/apartment/apartment_1.jpg", "images/apartment/apartment_2.jpg", "images/apartment/apartment_4.jpg", "images/apartment/apartment_4.jpg", "images/apartment/apartment_4.jpg"],
//         number_of_beds: 3,
//         number_of_rooms: 1,
//         address: 'Alenby 3 st',
//         sqft: 7500,
//         status: 2,
//         for_rent: true,
//         for_sale: false
//     },
//     {
//         id: 20,
//         title: 'My nice apartment',
//         description: 'My nice apartment description',
//         cityId: 2,
//         owner: 2,
//         price: 30,
//         number_of_beds: 3,
//         number_of_rooms: 1,
//         address: 'Alenby 3 st',
//         main_image: "images/apartment/apartment_1.jpg",
//         images: ["images/apartment/apartment_8.jpg", "images/apartment/apartment_2.jpg", "images/apartment/apartment_1.jpg", "images/apartment/apartment_4.jpg", "images/apartment/apartment_7.jpg"],
//         for_rent: true,
//         for_sale: false
//     }
// ];
// //
// // const cities = [{"Tel aviv":1,"New york":2,"New delhi":3,"Barcelona":4,"Madrid":5,"London":6,"Liverpool":7,"Babruysk":8,"Bacău":9,"Dublin":10,"Chicago":11,"Rio de Janeiro":12,"Sau Paulo":13,"Paris":14,"Roma":15,"Sidney":16,"Tokyo":17,"Moscow":18,"Mexico City":19,"Hong Kong":20,"Berlin":21}];
// const cities = [
//     {id: 1, label: 'Tel-Aviv', name: 'tel_aviv', description: 'Wonderful city', country: 'Israel', image: "images/cities/tel_aviv.jpg",},
//     {id: 2, label: 'New York', name: 'new_york', description: 'Wonderful city', country: 'United State', image: "images/cities/new_york.jpg"},
//     {id: 3, label: 'New Delhi', name: 'new_delhi', description: 'India', country: 'United State', image: "images/cities/new_delhi.jpg"},
//     {id: 4, label: 'Barcelona', name: 'barcelona', description: 'Wonderful city', country: 'Spain', image: "images/cities/barcelona.jpg"},
//     {id: 5, label: 'Madrid', name: 'madrid', description: 'Wonderful city', country: 'Spain', image: "images/cities/madrid.jpg"},
//     {id: 6, label: 'London', name: 'london', description: 'Wonderful city', country: 'United Kingdom', image: "images/cities/london.jpg"},
//     {id: 7, label: 'Liverpool', name: 'liverpool', description: 'Wonderful city', country: 'United Kingdom', image: "images/cities/liverpool.jpg"},
//     {id: 8, label: 'Babruysk', name: 'babruysk', description: 'Wonderful city', country: 'Belarus', image: "images/cities/babruysk.jpg"},
//     {id: 9, label: 'Bacău', name: 'bacău', description: 'Wonderful city', country: 'Romania', image: "images/cities/bacău.jpg"},
//     {id: 10, label: 'Dublin', name: 'dublin', description: 'Wonderful city', country: 'Irland', image: "images/cities/dublin.jpg"},
//     {id: 11, label: 'Chicago', name: 'chicago', description: 'Wonderful city', country: 'United State', image: "images/cities/chicago.jpg"},
//     {id: 12, label: 'Rio de Janeiro', name: 'rio_de_janeiro', description: 'Wonderful city', country: 'Brazil', image: "images/cities/rio_de_janeiro.png"},
//     {id: 13, label: 'Sau Paulo', name: 'sau_paulo', description: 'Wonderful city', country: 'Brazil', image: "images/cities/sau_paulo.jpg"},
//     {id: 14, label: 'Paris', name: 'paris', description: 'Wonderful city', country: 'France', image: "images/cities/paris.jpg"},
//     {id: 15, label: 'Roma', name: 'roma', description: 'Wonderful city', country: 'Italy', image: "images/cities/roma.jpg"},
//     {id: 16, label: 'Sidney', name: 'sidney', description: 'Wonderful city', country: 'Australia', image:"images/cities/sidney.jpg"},
//     {id: 17, label: 'Tokyo', name: 'tokyo', description: 'Wonderful city', country: 'Japan', image: "images/cities/tokyo.jpg"},
//     {id: 18, label: 'Moscow', name: 'moscow', description: 'Wonderful city', country: 'Russia', image: "images/cities/moscow.jpg"},
//     {id: 19, label: 'Mexico City', name: 'mexico_city', description: 'Wonderful city', country: 'Mexico', image: "images/cities/mexico_city.jpg"},
//     {id: 20, label: 'Hong Kong', name: 'hong_Kong', description: 'Wonderful city', country: 'China', image: "images/cities/hong_Kong.jpg"},
//     {id: 21, label: 'Berlin', name: 'berlin', description: 'Wonderful city', country: 'Germany', image: "images/cities/berlin.jpg"}
// ];
// import React from "react";
// class Apartments extends React.Component{
//     constructor(){
//         super();
//         this.state={
//             apartments:[],
//             cities:[]
//         }
//     }
//     componentDidMount(){
//         this.getApartmentsFromServer();
//     };
//     getApartmentsFromServer = () =>{
//
//         fetch(`https://storage.googleapis.com/realtour/data-rt.json`, {
//                 method: 'GET',
//             }
//         ).then(response => response.json()
//         ).then(success => {
//                 this.setState({
//                     arguments:success["apartments"],
//                     cities:success["cities"]
//                 })
//             }
//         ).catch(error => console.log(error));
//     };
// }

// const apartments = [
//     { id: 1, title: 'My cool apartment', description: 'My apartment description', cityId: 2, owner: 1, price: 200000, main_image: "images/apartment/apartment_1.jpg", images: ["images/apartment/apartment_1.jpg", "images/apartment/apartment_2.jpg", "images/apartment/apartment_4.jpg", "images/apartment/apartment_4.jpg", "images/apartment/apartment_5.jpg"], number_of_beds: 3, number_of_rooms: 1, address: '330 3rd Ave', sqft: 7500, status: 2, for_rent: false, for_sale: true },
//     { id: 2, title: 'My nice apartment', description: 'My nice apartment description', cityId: 6, owner: 2, price: 300000, number_of_beds: 1, number_of_rooms: 4, address: '330 3rd Ave', main_image: "images/apartment/apartment_2.jpg", images: ["images/apartment/apartment_6.png", "images/apartment/apartment_7.jpg", "images/apartment/apartment_8.jpg", "images/apartment/apartment_9.jpg", "images/apartment/apartment_1.jpg"], for_rent: false, for_sale: false },
//     { id: 3, title: 'My cool apartment', description: 'My apartment description', cityId: 17, owner: 1, price: 400000, main_image: "images/apartment/apartment_4.jpg", images: ["images/apartment/apartment_1.jpg", "images/apartment/apartment_1.jpg", "images/apartment/apartment_1.jpg", "images/apartment/apartment_1.jpg", "images/apartment/apartment_1.jpg"], number_of_beds: 5, number_of_rooms: 2, address: 'Alenby 3 st', sqft: 7500, status: 2, for_rent: true, for_sale: false },
//     {
//         id: 4,
//         title: 'My nice apartment',
//         description: 'My nice apartment description',
//         cityId: 13,
//         owner: 2,
//         price: 250000,
//         number_of_beds: 1,
//         number_of_rooms: 3,
//         address: 'Saloona 23 st',
//         main_image: "images/apartment/apartment_4.jpg",
//         images: ["images/apartment/apartment_1.jpg", "images/apartment/apartment_1.jpg", "images/apartment/apartment_1.jpg", "images/apartment/apartment_1.jpg", "images/apartment/apartment_1.jpg"],
//         for_rent: false,
//         for_sale: true
//     },
//     { id: 5, title: 'My cool apartment', description: 'My apartment description', cityId: 4, owner: 1, price: 150000, main_image: "images/apartment/apartment_4.jpg", images: ["images/apartment/apartment_1.jpg", "images/apartment/apartment_2.jpg", "images/apartment/apartment_4.jpg", "images/apartment/apartment_4.jpg", "images/apartment/apartment_4.jpg"], number_of_beds: 3, number_of_rooms: 5, address: 'Rozeni 423 st', sqft: 7500, status: 2, for_rent: false, for_sale: true },
//     { id: 6, title: 'My nice apartment', description: 'My nice apartment description', cityId: 2, owner: 4, price: 350000, number_of_beds: 5, number_of_rooms: 1, address: 'Zurik 52 st', main_image: "images/apartment/apartment_5.jpg", images: ["images/apartment/apartment_1.jpg", "images/apartment/apartment_2.jpg", "images/apartment/apartment_4.jpg", "images/apartment/apartment_4.jpg", "images/apartment/apartment_4.jpg"], for_rent: true, for_sale: false },
//     { id: 7, title: 'My cool apartment', description: 'My apartment description', cityId: 15, owner: 1, price: 5000000, main_image: "images/apartment/apartment_6.png", images: ["images/apartment/apartment_1.jpg", "images/apartment/apartment_2.jpg", "images/apartment/apartment_4.jpg", "images/apartment/apartment_4.jpg", "images/apartment/apartment_4.jpg"], number_of_beds: 3, number_of_rooms: 3, address: 'Korab 41 st', sqft: 7500, status: 2, for_rent: false, for_sale: true },
//     { id: 8, title: 'My nice apartment', description: 'My nice apartment description', cityId: 21, owner: 8, price: 1500000, number_of_beds: 2, number_of_rooms: 6, address: 'Moris 422 st 33s', main_image: "images/apartment/apartment_7.jpg", images: ["images/apartment/apartment_1.jpg", "images/apartment/apartment_2.jpg", "images/apartment/apartment_4.jpg", "images/apartment/apartment_4.jpg", "images/apartment/apartment_4.jpg"], for_rent: true, for_sale: false },
//     { id: 9, title: 'My cool apartment', description: 'My apartment description', cityId: 16, owner: 7, price: 2500000, main_image: "images/apartment/apartment_8.jpg", images: ['https://ap.rdcpix.com/1759188762/861b901071ac8c0bbb7d4ee13c9296a3l-m0xd-w1020_h770_q80.jpg', 'https://ap.rdcpix.com/1759188762/861b901071ac8c0bbb7d4ee13c9296a3l-m0xd-w1020_h770_q80.jpg', 'https://ap.rdcpix.com/1759188762/861b901071ac8c0bbb7d4ee13c9296a3l-m0xd-w1020_h770_q80.jpg', 'https://ap.rdcpix.com/1759188762/861b901071ac8c0bbb7d4ee13c9296a3l-m0xd-w1020_h770_q80.jpg'], number_of_beds: 3, number_of_rooms: 4, address: 'Alenby 3 st', sqft: 7500, status: 2, for_rent: true, for_sale: false },
//     { id: 10, title: 'My nice apartment', description: 'My nice apartment description', cityId: 12, owner: 6, price: 2300000, number_of_beds: 4, number_of_rooms: 2, address: 'Alenby 3 st', main_image: "images/apartment/apartment_9.jpg", images: ["images/apartment/apartment_1.jpg", "images/apartment/apartment_2.jpg", "images/apartment/apartment_4.jpg", "images/apartment/apartment_4.jpg", "images/apartment/apartment_4.jpg"], for_rent: false, for_sale: true },
//     {
//         id: 11,
//         title: 'My cool apartment',
//         description: 'My apartment description',
//         cityId: 20,
//         owner: 1,
//         price: 30,
//         main_image: "images/apartment/apartment_1.jpg",
//         images: ['https://ap.rdcpix.com/1759188762/861b901071ac8c0bbb7d4ee13c9296a3l-m0xd-w1020_h770_q80.jpg', 'https://ap.rdcpix.com/1759188762/861b901071ac8c0bbb7d4ee13c9296a3l-m0xd-w1020_h770_q80.jpg', 'https://ap.rdcpix.com/1759188762/861b901071ac8c0bbb7d4ee13c9296a3l-m0xd-w1020_h770_q80.jpg', 'https://ap.rdcpix.com/1759188762/861b901071ac8c0bbb7d4ee13c9296a3l-m0xd-w1020_h770_q80.jpg'],
//         number_of_beds: 3,
//         number_of_rooms: 2,
//         address: 'Alenby 3 st',
//         sqft: 7500,
//         status: 2,
//         for_rent: true,
//         for_sale: false
//     },
//     { id: 12, title: 'My nice apartment', description: 'My nice apartment description', cityId: 7, owner: 2, price: 30, number_of_beds: 3, number_of_rooms: 4, address: 'Alenby 3 st', main_image: "images/apartment/apartment_1.jpg", images: ["images/apartment/apartment_1.jpg", "images/apartment/apartment_2.jpg", "images/apartment/apartment_4.jpg", "images/apartment/apartment_4.jpg", "images/apartment/apartment_4.jpg"], for_rent: true, for_sale: false },
//     {
//         id: 13,
//         title: 'My cool apartment',
//         description: 'My apartment description',
//         cityId: 8,
//         owner: 1,
//         price: 30,
//         main_image: "images/apartment/apartment_1.jpg",
//         images: ['https://ap.rdcpix.com/1759188762/861b901071ac8c0bbb7d4ee13c9296a3l-m0xd-w1020_h770_q80.jpg', 'https://ap.rdcpix.com/1759188762/861b901071ac8c0bbb7d4ee13c9296a3l-m0xd-w1020_h770_q80.jpg', 'https://ap.rdcpix.com/1759188762/861b901071ac8c0bbb7d4ee13c9296a3l-m0xd-w1020_h770_q80.jpg', 'https://ap.rdcpix.com/1759188762/861b901071ac8c0bbb7d4ee13c9296a3l-m0xd-w1020_h770_q80.jpg'],
//         number_of_beds: 3,
//         number_of_rooms: 5,
//         address: 'Alenby 3 st',
//         sqft: 7500,
//         status: 2,
//         for_rent: true,
//         for_sale: false
//     },
//     { id: 14, title: 'My nice apartment', description: 'My nice apartment description', cityId: 9, owner: 2, price: 30, number_of_beds: 3, number_of_rooms: 4, address: 'Alenby 3 st', main_image: "images/apartment/apartment_1.jpg", images: ["images/apartment/apartment_1.jpg", "images/apartment/apartment_2.jpg", "images/apartment/apartment_4.jpg", "images/apartment/apartment_4.jpg", "images/apartment/apartment_4.jpg"], for_rent: true, for_sale: false },
//     {
//         id: 15,
//         title: 'My cool apartment',
//         description: 'My apartment description',
//         cityId: 9,
//         owner: 1,
//         price: 30,
//         main_image: "images/apartment/apartment_1.jpg",
//         images: ["images/apartment/apartment_1.jpg", "images/apartment/apartment_2.jpg", "images/apartment/apartment_4.jpg", "images/apartment/apartment_4.jpg", "images/apartment/apartment_4.jpg"],
//         number_of_beds: 3,
//         number_of_rooms: 3,
//         address: 'Alenby 3 st',
//         sqft: 7500,
//         status: 2,
//         for_rent: true,
//         for_sale: false
//     },
//     { id: 16, title: 'My nice apartment', description: 'My nice apartment description', cityId: 10, owner: 2, price: 30, number_of_beds: 3, number_of_rooms: 4, address: 'Alenby 3 st', main_image: "images/apartment/apartment_1.jpg", images: ["images/apartment/apartment_1.jpg", "images/apartment/apartment_2.jpg", "images/apartment/apartment_4.jpg", "images/apartment/apartment_4.jpg", "images/apartment/apartment_4.jpg"], for_rent: true, for_sale: false },
//     {
//         id: 17,
//         title: 'My cool apartment',
//         description: 'My apartment description',
//         cityId: 19,
//         owner: 1,
//         price: 30,
//         main_image: "images/apartment/apartment_1.jpg",
//         images: ["images/apartment/apartment_1.jpg", "images/apartment/apartment_2.jpg", "images/apartment/apartment_4.jpg", "images/apartment/apartment_4.jpg", "images/apartment/apartment_4.jpg"],
//         number_of_beds: 3,
//         number_of_rooms: 2,
//         address: 'Alenby 3 st',
//         sqft: 7500,
//         status: 2,
//         for_rent: true,
//         for_sale: false
//     },
//     { id: 18, title: 'My nice apartment', description: 'My nice apartment description', cityId: 5, owner: 2, price: 30, number_of_beds: 3, number_of_rooms: 4, address: 'Alenby 3 st', main_image: "images/apartment/apartment_1.jpg", images: ["images/apartment/apartment_1.jpg", "images/apartment/apartment_2.jpg", "images/apartment/apartment_4.jpg", "images/apartment/apartment_4.jpg", "images/apartment/apartment_4.jpg"], for_rent: true, for_sale: false },
//     {
//         id: 19,
//         title: 'My cool apartment',
//         description: 'My apartment description',
//         cityId: 6,
//         owner: 1,
//         price: 30,
//         main_image: "images/apartment/apartment_1.jpg",
//         images: ["images/apartment/apartment_1.jpg", "images/apartment/apartment_2.jpg", "images/apartment/apartment_4.jpg", "images/apartment/apartment_4.jpg", "images/apartment/apartment_4.jpg"],
//         number_of_beds: 3,
//         number_of_rooms: 1,
//         address: 'Alenby 3 st',
//         sqft: 7500,
//         status: 2,
//         for_rent: true,
//         for_sale: false
//     },
//     {
//         id: 20,
//         title: 'My nice apartment',
//         description: 'My nice apartment description',
//         cityId: 2,
//         owner: 2,
//         price: 30,
//         number_of_beds: 3,
//         number_of_rooms: 1,
//         address: 'Alenby 3 st',
//         main_image: "images/apartment/apartment_1.jpg",
//         images: ["images/apartment/apartment_8.jpg", "images/apartment/apartment_2.jpg", "images/apartment/apartment_1.jpg", "images/apartment/apartment_4.jpg", "images/apartment/apartment_7.jpg"],
//         for_rent: true,
//         for_sale: false
//     }
// ];
// //
// // const cities = [{"Tel aviv":1,"New york":2,"New delhi":3,"Barcelona":4,"Madrid":5,"London":6,"Liverpool":7,"Babruysk":8,"Bacău":9,"Dublin":10,"Chicago":11,"Rio de Janeiro":12,"Sau Paulo":13,"Paris":14,"Roma":15,"Sidney":16,"Tokyo":17,"Moscow":18,"Mexico City":19,"Hong Kong":20,"Berlin":21}];
// const cities = [
//     {id: 1, label: 'Tel-Aviv', name: 'tel_aviv', description: 'Wonderful city', country: 'Israel', image: "images/cities/tel_aviv.jpg",},
//     {id: 2, label: 'New York', name: 'new_york', description: 'Wonderful city', country: 'United State', image: "images/cities/new_york.jpg"},
//     {id: 3, label: 'New Delhi', name: 'new_delhi', description: 'India', country: 'United State', image: "images/cities/new_delhi.jpg"},
//     {id: 4, label: 'Barcelona', name: 'barcelona', description: 'Wonderful city', country: 'Spain', image: "images/cities/barcelona.jpg"},
//     {id: 5, label: 'Madrid', name: 'madrid', description: 'Wonderful city', country: 'Spain', image: "images/cities/madrid.jpg"},
//     {id: 6, label: 'London', name: 'london', description: 'Wonderful city', country: 'United Kingdom', image: "images/cities/london.jpg"},
//     {id: 7, label: 'Liverpool', name: 'liverpool', description: 'Wonderful city', country: 'United Kingdom', image: "images/cities/liverpool.jpg"},
//     {id: 8, label: 'Babruysk', name: 'babruysk', description: 'Wonderful city', country: 'Belarus', image: "images/cities/babruysk.jpg"},
//     {id: 9, label: 'Bacău', name: 'bacău', description: 'Wonderful city', country: 'Romania', image: "images/cities/bacău.jpg"},
//     {id: 10, label: 'Dublin', name: 'dublin', description: 'Wonderful city', country: 'Irland', image: "images/cities/dublin.jpg"},
//     {id: 11, label: 'Chicago', name: 'chicago', description: 'Wonderful city', country: 'United State', image: "images/cities/chicago.jpg"},
//     {id: 12, label: 'Rio de Janeiro', name: 'rio_de_janeiro', description: 'Wonderful city', country: 'Brazil', image: "images/cities/rio_de_janeiro.png"},
//     {id: 13, label: 'Sau Paulo', name: 'sau_paulo', description: 'Wonderful city', country: 'Brazil', image: "images/cities/sau_paulo.jpg"},
//     {id: 14, label: 'Paris', name: 'paris', description: 'Wonderful city', country: 'France', image: "images/cities/paris.jpg"},
//     {id: 15, label: 'Roma', name: 'roma', description: 'Wonderful city', country: 'Italy', image: "images/cities/roma.jpg"},
//     {id: 16, label: 'Sidney', name: 'sidney', description: 'Wonderful city', country: 'Australia', image:"images/cities/sidney.jpg"},
//     {id: 17, label: 'Tokyo', name: 'tokyo', description: 'Wonderful city', country: 'Japan', image: "images/cities/tokyo.jpg"},
//     {id: 18, label: 'Moscow', name: 'moscow', description: 'Wonderful city', country: 'Russia', image: "images/cities/moscow.jpg"},
//     {id: 19, label: 'Mexico City', name: 'mexico_city', description: 'Wonderful city', country: 'Mexico', image: "images/cities/mexico_city.jpg"},
//     {id: 20, label: 'Hong Kong', name: 'hong_Kong', description: 'Wonderful city', country: 'China', image: "images/cities/hong_Kong.jpg"},
//     {id: 21, label: 'Berlin', name: 'berlin', description: 'Wonderful city', country: 'Germany', image: "images/cities/berlin.jpg"}
// ];
let apartments=[];
const getQuery = (query) => {
    let result = "";
    for(var q in query){
        result += `${q}=${query[q]}&`
    }
    console.log(result)
    return result;
}
const getApartmentsFromServer = (onSuccess, query) =>{
    fetch(`http://localhost:5000/apartments/?${getQuery(query)}`, {
            method: 'GET',
        }
    ).then(response => response.json()
    ).then(success => {
            apartments = success["apartments"];
            // console.log(apartments);
        onSuccess(apartments);
        }
    ).catch(error => console.log(error));

};
const getSingleApartment = async (id) =>{
    const response = await fetch(`http://localhost:5000/apartments/${id}`, {
        method: 'GET',
    });
    const apartment = await response.json();
    return apartment;
}

export {getSingleApartment, getApartmentsFromServer, apartments};

