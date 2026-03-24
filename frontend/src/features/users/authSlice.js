import {createSlice} from '@reduxjs/toolkit';

const initailState = {
    userInfo: null
};

export const userSlice = createSlice({
    name: 'authUser',
    initailState,
    reducers: {
        createUser: (state, action) => {
            state.userInfo = action.payload;
        }
    }

});
export const {createUser} = userSlice.actions;
export default userSlice.reducer;