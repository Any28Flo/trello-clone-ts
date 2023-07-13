import {ReactNode} from "react";
import {ColumnContainer, ColumnTitle} from "../../styles/styles";

type ColumnProps = {
    title: string,
    children?: ReactNode; // best, accepts everything React can render
}
export const Column = ({title, children}: ColumnProps) => {
    return (
        <ColumnContainer>
            <ColumnTitle>
                {title}
            </ColumnTitle>
            {children}
        </ColumnContainer>
    );
};