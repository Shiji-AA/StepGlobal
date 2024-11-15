import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    recruiterdata: null, 
};

const recruiterSlice = createSlice({
    name: "recruiter",
    initialState,
    reducers: {
        setRecruiterInfo: (state, action) => {
            state.recruiterdata = action.payload;
        },
        logout:(state)=>{
            localStorage.removeItem("recruiterToken")
            state.recruiterdata = null;
        },
    },
});

export const { setRecruiterInfo ,logout} = recruiterSlice.actions;
export default recruiterSlice.reducer;