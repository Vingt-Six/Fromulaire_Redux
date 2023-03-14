import { configureStore } from "@reduxjs/toolkit";
import formulaire from '../features/formSlice'

export default configureStore({
    reducer: {
        form: formulaire
    }
})