import {
  avatar1Img,
  avatar2Img,
  avatar3Img,
  avatar4Img,
  avatar5Img,
  masterPaymentImg,
  paypalPaymentImg,
  rupayPaymentImg,
  visaPaymentImg,
} from "./images";
import { subtractHours } from "@/utils";

export const cardsData = [
  {
    id: 501,
    card_holder_name: "Sansa Stark",
    cardNo: 1234567895123647,
    expiry_date: "10/23",
    provider: visaPaymentImg,
  },
  {
    id: 502,
    card_holder_name: "Jon Snow",
    cardNo: 1234567981953452,
    expiry_date: "10/28",
    provider: masterPaymentImg,
  },
  {
    id: 503,
    card_holder_name: "Arya Stark",
    cardNo: 6457986452137985,
    expiry_date: "21/25",
    provider: rupayPaymentImg,
  },
  {
    id: 504,
    card_holder_name: "Petyr Baelish",
    cardNo: 7897892314651231,
    expiry_date: "30/31",
    provider: paypalPaymentImg,
  },
];

export const transactionHistoryData = [
  {
    asset: "King Group",
    date: "10/14/2023",
    amount: 359.69,
    type: "shopping",
    status: "cancelled",
  },
  {
    asset: "Rath-Hickle",
    date: "03/01/2023",
    amount: 350.3,
    type: "shopping",
    status: "paid",
  },
  {
    asset: "Weimann-Botsford",
    date: "03/14/2023",
    amount: 67.99,
    type: "food",
    status: "refunded",
  },
  {
    asset: "Prohaska LLC",
    date: "08/31/2023",
    amount: 21.49,
    type: "grocery",
    status: "paid",
  },
  {
    asset: "Rath-Conroy",
    date: "10/10/2023",
    amount: 463.61,
    type: "shopping",
    status: "cancelled",
  },
  {
    asset: "Balistreri, Toy and Padberg",
    date: "11/16/2023",
    amount: 333.31,
    type: "food",
    status: "paid",
  },
  {
    asset: "Kling and Sons",
    date: "10/14/2023",
    amount: 391.0,
    type: "shopping",
    status: "refunded",
  },
  {
    asset: "Sawayn-Streich",
    date: "04/04/2023",
    amount: 150.63,
    type: "grocery",
    status: "paid",
  },
  {
    asset: "Pacocha, Christiansen and Feil",
    date: "06/24/2023",
    amount: 24.81,
    type: "food",
    status: "refunded",
  },
  {
    asset: "Sipes, Olson and Dare",
    date: "04/30/2023",
    amount: 72.21,
    type: "restaurant",
    status: "paid",
  },
  {
    asset: "Dickinson-Daugherty",
    date: "01/02/2023",
    amount: 199.05,
    type: "restaurant",
    status: "cancelled",
  },
  {
    asset: "Shanahan, Kassulke and O'Hara",
    date: "07/23/2023",
    amount: 240.06,
    type: "shopping",
    status: "paid",
  },
  {
    asset: "Boehm-Metz",
    date: "08/29/2023",
    amount: 147.2,
    type: "food",
    status: "paid",
  },
  {
    asset: "O'Keefe, Hirthe and Leannon",
    date: "01/27/2023",
    amount: 125.14,
    type: "shopping",
    status: "cancelled",
  },
  {
    asset: "VonRueden, Leffler and Pacocha",
    date: "01/10/2023",
    amount: 167.64,
    type: "restaurant",
    status: "paid",
  },
];

export const notificationsData = [
  {
    id: 1,
    name: "Datacorp",
    avatar: avatar1Img,
    subText: "Caleb Flakelar commented on Admin",
    createdAt: subtractHours(new Date(), 1),
  },
  {
    id: 2,
    name: "Admin",
    avatar: avatar2Img,
    subText: "New user registered",
    createdAt: subtractHours(new Date(), 60),
  },
  {
    id: 3,
    name: "Cristina Pride",
    subText: "Hi, How are you? What about our next meeting",
    avatar: avatar3Img,
    createdAt: subtractHours(new Date(), 120),
  },
  {
    id: 4,
    name: "Datacorp",
    avatar: avatar4Img,
    subText: "Caleb Flakelar commented on Admin",
    createdAt: subtractHours(new Date(), 1440),
  },
  {
    id: 5,
    name: "Karen Robinson",
    subText: "Wow ! this admin looks good and awesome design",
    avatar: avatar5Img,
    createdAt: subtractHours(new Date(), 1820),
  },
];
