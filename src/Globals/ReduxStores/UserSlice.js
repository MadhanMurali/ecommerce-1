import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        social_id_type: null,
        first_name: null,
        last_name: null,
        email_id: null,
        image_address: null,
        mobile_no: null,
        authorization_token: null,
        signed_in: false,
        previous_sign_in_method: null,
        previously_signed_in: false,
    },
    reducers: {
        updatePreviousState: (state, action) => {
            return {
                ...state,
                ...action.payload,
            }
        },
        login: (state, action) => {
            return {
                ...state,
                ...action.payload,
                signed_in : true,
            }
        },
        logout: (state) => {
            return {
                ...state,
                social_id_type: null,
                first_name: null,
                last_name: null,
                email_id: null,
                image_address: null,
                mobile_no: null,
                authorization_token: null,
                signed_in: false,
                previous_sign_in_method: null,
                previously_signed_in: false,
            }
        }
    }
});

export const { login, logout, updatePreviousState } = userSlice.actions;

export default userSlice.reducer;