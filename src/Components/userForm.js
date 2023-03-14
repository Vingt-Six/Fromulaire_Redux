import { useDispatch } from "react-redux";
import { addNewPerson } from "../features/formSlice";

function Form() {
    const dispatch = useDispatch()

    return(
        <div>
            <form onSubmit={(e) => {
                e.preventDefault();
                dispatch(addNewPerson({
                    nom: e.target[0].value,
                    prénom: e.target[1].value, 
                    age: e.target[2].value}))}}>
                <label>nom</label>
                <input type="text" />
                <label>prénom</label>
                <input type="text" />
                <label>age</label>
                <input type="number" />
                <button type="submit">Ajouter</button>
            </form>
        </div>
    )
}

export default Form