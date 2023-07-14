import {useState} from "react";

import {NewItemFormContainer} from "../../styles/styles";
import {NewItemButton} from "../../styles/styles";
import {NewItemInput} from "../../styles/styles";


type NewItemFormType = {
    onAdd: (text:string) => void
}
export const NewItemForm = ({onAdd} : NewItemFormType) => {
    const [text, setText] = useState("");

    return (
        <NewItemFormContainer>
            <NewItemInput value={text} onChange={e => setText(e.target.value) }/>
            <NewItemButton onClick={() => onAdd(text)} >
                Create
            </NewItemButton>
        </NewItemFormContainer>
    );
};