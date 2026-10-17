// Edit the villa's details here.
export const PHONE_DISPLAY = '074 030 0767'
export const PHONE_TEL = '+94740300767'
export const WHATSAPP = '94740300767'
export const ADDRESS = 'Walawwa Villa, Walawwaththa, Kathaluwa, Ahangama, Galle, Sri Lanka'
export const MAP_URL = 'https://maps.app.goo.gl/MygQeiW4GjBUf6YS9'
export const BOOKING_URL = 'https://www.booking.com/hotel/lk/walawwa-villa-kathaluwa.html?aid=899371&label=hotel_details&sid=7e17314a66caea8031f403c2c58d92b7&dest_id=12927192&dest_type=hotel&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1792256815&srpvid=53a47854f81507ec&type=total&ucfs=1&'
export const AGODA_URL = 'https://www.agoda.com/search?searchdatetype=default&lt=15&numberofchildren=0&gsite=mapresults&partnercurrency=USD&roomid=991942608&masterroomid=991942608&pricetotal=18462.21&pricetax=2124.35&pricefee=0.00&rateplan=79613539-56c1-a82a-11de-5a027762998d&usercountry=LK&currency=LKR&userdevice=desktop&verif=false&mcid=3038&booking_source=cpc&adtype=0&mpt=RE5RaWVmQ3ZPdWJYbmMzZFM3RkhLU0U5YXpFZlFvVisyRjNSYmJ0cm9WdjJZcDg0azRubzRnenRaT0svMDB6ZktvTU1sa0pRNExBSGdyd0c&original_rr=LK&clicktype=hotel&lang=en&pkgid=Breakfast_NoDinner_false&los=1&adults=2&rooms=1&checkin=2026-11-01&checkout=2026-11-02&selectedproperty=61787144&city=19931&cid=1917614&pslc=1&ds=N8xd%2BwvVkkXrknCS'
export const BLUEPILLOW_URL = 'https://www.bluepillow.com/search/67a24145905c444f2d0ab968?utm_campaign=hotel&begin=2026-11-01&end=2026-11-02&childrens=0&goback=false&currency=LKR&language=en&chngback=true&block_id=-b,wiQ4qm7fof3KC0JiAabWp9c1EuxQ52_rm3pvXRyG87M,-bpag-Hotel&total=20069.39&prid=domestic&country=LK'
export const BOOKING_PLATFORMS = [
  ['Booking.com', BOOKING_URL],
  ['Agoda', AGODA_URL],
  ['Bluepillow', BLUEPILLOW_URL],
]

export const NAV = [
  ['about', 'The villa'], ['rooms', 'Rooms'], ['amenities', 'Amenities'],
  ['gallery', 'Gallery'], ['contact', 'Book'],
]
export const ROOMS = [
  { img: 'rooms/room1.jpg', name: 'Master suite', text: 'Spacious bedroom with private bathroom and veranda.' },
  { img: 'rooms/room2.jpg', name: 'Deluxe room', text: 'Quiet room with garden view and air conditioning.' },
  { img: 'rooms/room3.jpg', name: 'Family room', text: 'Extra space for families and small groups.' },
]
export const AMENITIES = [
  ['Near the beach', 'Walk or take a short tuk-tuk ride'],
  ['Air conditioning', 'In all bedrooms'],
  ['Free Wi-Fi', 'Throughout the villa'],
  ['Home-cooked meals', 'Sri Lankan breakfast and dinner on request'],
  ['Garden and veranda', 'Shaded space to relax'],
  ['Free parking', 'On the property'],
]
export const GALLERY = [1, 2, 3, 4, 5, 6].map(n => `gallery/${n}.jpg`)
