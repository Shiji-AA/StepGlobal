import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Slices/AuthSlice";
import recruiterReducer from '../Slices/RecruiterSlice'
import adminReducer from '../Slices/AdminSlice'
import { persistReducer, persistStore } from "redux-persist"; 
import storage from "redux-persist/lib/storage";



const persistConfig={
    storage,
    key:"auth"
}

const persistConfigRecruiter = {
    storage,
    key:"recruiter"
}

const persistConfigAdmin = {
    storage,
    key:"admin"
}

const persistedAuthreducer=persistReducer(persistConfig,authReducer)
const persistedRecruiterreducer=persistReducer(persistConfigRecruiter,recruiterReducer);
const persistedAdminreducer=persistReducer(persistConfigAdmin,adminReducer)

export const store= configureStore({
    reducer:{
        auth :persistedAuthreducer,
        recruiter:persistedRecruiterreducer,
        admin:persistedAdminreducer,
    }
})

export const persistor=persistStore(store)