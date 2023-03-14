import { createSlice } from "@reduxjs/toolkit";

const formulaire = createSlice({
    name: "form",
    initialState: {
        value: [
            {
                nom: "Bona",
                prénom: "Marouane",
                age: 23
            },
        ]
    },
    reducers: {
        addNewPerson: (state, action) => {
            // state.value = [...state.value, action.payload]
            state.value.push(action.payload)
        }
    }
})

export const { addNewPerson } = formulaire.actions
export default formulaire.reducer