import { createSlice } from "@reduxjs/toolkit";

export interface DonationItem {
    id: string,
    title: string,
}

export interface ItemsState { 
    cartList: DonationItem[];
}

const initialState: ItemsState = {
    cartList: [],
}

const ADD_DONATION = 'ADD_DONATION'
const REMOVE_DONATION = 'REMOVE_DONATION'

export const addDonation = (item: DonationItem) => {
    return {
        type: ADD_DONATION,
        payload: item
    }
}

export const removeDaonation = (item: DonationItem) => {
    return {
        type: REMOVE_DONATION,
        payload: item
    }
}

// Reducer accepts the action and state as arguments and returns the next state of the application
// (previousState, action) => newState

export const reducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ADD_DONATION: 
            return {
                ...state,
                cartList: [...state.cartList, action.payload]
            }
        case REMOVE_DONATION:
            return {
                ...state,
                cartList: state.cartList.filter((i)=> {
                    i.id != action.payload.id
                })
            }
    }
}

// const donationListSlice = createSlice({
//     name: 'cart',
//     initialState,
//     reducers: {
//         // addItemToCart: (state, payload: DonationItem) => {
//         //     state.cartList.push(payload)
//         // },
//         // removeItemFromCart: (state, payload: DonationItem) => {
//         //     //state.cartList.remove (payload);
//         // }
//     }
// })