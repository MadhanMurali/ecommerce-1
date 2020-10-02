import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'app',
    initialState: {
        previously_requested_page: null,
        signing_in: false,
    },
    reducers: {
        update: (state, action) => {
            return {
                ...state,
                ...action.payload
            }
        },
        reset: (state) => {
            return {
                ...state,
                previously_requested_page: null,
                signing_in: false,
            }
        }
    }
});

export const { update, reset } = userSlice.actions;

export default userSlice.reducer;