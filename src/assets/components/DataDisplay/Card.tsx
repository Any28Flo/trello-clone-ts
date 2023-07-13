import {JSX} from "react";
import {CardContainer} from "../../styles/styles";

type CardType = {
    title: string
}
export const Card: ({title}: CardType) => JSX.Element = ({title}: CardType) => {
    return <CardContainer>{title}</CardContainer>
};