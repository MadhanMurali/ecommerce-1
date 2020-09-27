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
        logged_in: false,
    },
    reducers: {
        login: (state, action) => {
            return {
                ...state,
                ...action.payload,
                logged_in : true,
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
                logged_in: false,
            }
        }
    }
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;