import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'app',
    initialState: {
        logging_in: false,
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
                logging_in: false,
            }
        }
    }
});

export const { update, reset } = userSlice.actions;

export default userSlice.reducer;