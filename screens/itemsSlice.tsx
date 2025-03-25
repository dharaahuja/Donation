import { createSlice } from "@reduxjs/toolkit";

export class DonationItem {
    id: string;
    title: string;
    secondaryText: string;
    image: string;

   constructor() {
    this.id = '1'
    this.title = ''
    this.secondaryText = ''
    this.image = ''
   }
}

// export interface DonationItem {
//     id: string,
//     title: string,
// }

export interface ItemsState { 
    cartList: DonationItem[];
}

const initialState: ItemsState = {
    cartList: [],
}

const toDoSlice = createSlice({
    name: 'donation',
    initialState,
    reducers: {
        add_dontion: (state, action) => {
            console.log(action.type)
            state.cartList.push(action.payload);
        },
        remove_donation: (state, action) => {
            state.cartList = state.cartList.filter((i)=> {
                i.id != action.payload.id
            })
        }
    }
})

export const { add_dontion, remove_donation } = toDoSlice.actions;
export default toDoSlice;

// const ADD_DONATION = 'ADD_DONATION'
// const REMOVE_DONATION = 'REMOVE_DONATION'

// export const addDonation = (item: DonationItem) => {
//     return {
//         type: ADD_DONATION,
//         payload: item
//     }
// }

// export const removeDaonation = (item: DonationItem) => {
//     return {
//         type: REMOVE_DONATION,
//         payload: item
//     }
// }

// Reducer accepts the action and state as arguments and returns the next state of the application
// (previousState, action) => newState

// export const reducer = (state = initialState, action: any) => {
//     switch (action.type) {
//         case ADD_DONATION: 
//             return {
//                 ...state,
//                 cartList: [...state.cartList, action.payload]
//             }
//         case REMOVE_DONATION:
//             return {
//                 ...state,
//                 cartList: state.cartList.filter((i)=> {
//                     i.id != action.payload.id
//                 })
//             }
//     }
// }
