import React from 'react'
import { Granted,Rejected,Request,Save,Patients,Hospitals,Drivers } from "../Screens/ContactDetails";


export const initialState = {
    grant:Granted,
    request:Request,
    save:Save,
    reject:Rejected,
    drivers:Drivers,
    patients:Patients,
    hospitals:Hospitals
    
}



export const reducer = (state=initialState,action) => {

    
    return state
}

