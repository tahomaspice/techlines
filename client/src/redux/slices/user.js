import {createSlice} from '@reduxjs/toolkit';

export const initialState = {
    loading: false,
    error: null,
    userInfo: JSON.parse(localStorage.getItem('userInfo')) ?? null,
    
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setLoading: (state) => {
            state.loading = true;
        },
        
        userLogin: (state, {payload}) => {
            state.userInfo = payload;
            state.loading = false;
            state.error = null;            
        },

        userLogout: (state) => {
            state.userInfo = null;
            state.loading = false;
            state.error = null;
        },
        
        setError: (state, {payload}) => {
            state.error = payload;
            state.loading = false;
        },

        updateUserProfile: (state, {payload}) => {
            state.userInfo = payload;
            state.updateSuccess = true;
            state.loading = false;
            state.error = null;
        },

        resetUpdate: (state) => {
            state.updateSuccess = false;
        },

    },
});


export const {setLoading, setError, userLogin, userLogout, updateUserProfile, resetUpdate} = userSlice.actions;
export default userSlice.reducer;

export const userSelector = (state) => state.user;