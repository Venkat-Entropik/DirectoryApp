import {createSlice} from "@reduxjs/toolkit";

let userdata= localStorage.getItem("addperdata") !== null ? JSON.parse(localStorage.getItem("addperdata")) :[];

export const addPersonSlice=createSlice({
    name:"addperson",
    initialState:{
        addperdata:userdata,
    },

    reducers:{
            addpersondata(state, action){
                state.addperdata.push(action.payload)
                 localStorage.setItem("addperdata", JSON.stringify(state.addperdata))   
            },
            deletepesron(state,action){
                state.addperdata.splice(action.payload,1)
                localStorage.setItem("addperdata", JSON.stringify(state.addperdata))  
            }
    },

    

})

export default addPersonSlice.reducer;
export const {addpersondata,deletepesron} =addPersonSlice.actions