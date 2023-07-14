import { useState } from "react";

import { NewItemFormContainer } from "../../styles/styles";
import { NewItemButton } from "../../styles/styles";
import { NewItemInput } from "../../styles/styles";

import { useFocus } from "../../utils/useFocus";

type NewItemFormType = {
    onAdd: (text: string) => void
}
export const NewItemForm = ({ onAdd }: NewItemFormType) => {
    const [text, setText] = useState("");

    const inputRef = useFocus();

    return (
        <NewItemFormContainer>
            <NewItemInput
                ref={inputRef}
                value={text}
                onChange={e => setText(e.target.value)} />
            <NewItemButton onClick={() => onAdd(text)} >
                Create
            </NewItemButton>
        </NewItemFormContainer>
    );
};