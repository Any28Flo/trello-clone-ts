import { ReactNode } from "react";
import { ColumnContainer, ColumnTitle } from "../../styles/styles";
import { AddNewItem } from '../Item/AddNewItem';

type ColumnProps = {
    title: string,
    children?: ReactNode; // best, accepts everything React can render
}
export const Column = ({ title, children }: ColumnProps) => {
    const handleAdd = () => {
        console.log("handle ")
    }

    return (
        <ColumnContainer>
            <ColumnTitle>
                {title}
            </ColumnTitle>
            {children}
            <AddNewItem
                onAdd={() => handleAdd()}
                toggleButtonText="+ Add another task"
                dark
            />
        </ColumnContainer>
    );
};