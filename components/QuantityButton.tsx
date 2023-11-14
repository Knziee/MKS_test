import styled from "styled-components";
import { QuantityProps } from "../interfaces/";
import { QuantityButtonProps } from "../interfaces/";

const QuantityContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 14px;
    margin-top: -12px;
`;

const QuantityTitle = styled.div`
    display: flex;
    font-size: 7px;
`;

const Quantity = styled.div`
    font-size: 10px;
    padding-left: 6px;
    padding-right: 6px;
    margin-top: 3px;
`;

const QuantityButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    border-radius: 4px;
    border: 0.3px solid #ebebeb;
    height: 19px;
    margin-top: 4px;
`;

const QuantityPlusMinus = styled.div<QuantityButtonProps>`
    display: flex;
    font-size: 12px;
    margin-top: 2.5px;
    cursor: pointer;
    ${(props) =>
        props.borderSide &&
        `
      border-${props.borderSide}: 1px solid #ebebeb;
    `}
    padding-left: ${(props) => props.paddingLeft};
    padding-right: ${(props) => props.paddingRight};
    height: 13px;
`;

const QuantityButton = ({
    quantity,
    onDecrease,
    onIncrease,
}: QuantityProps) => {
    return (
        <QuantityContainer>
            <QuantityTitle>Qtd:</QuantityTitle>
            <QuantityButtonContainer>
                <QuantityPlusMinus
                    borderSide="right"
                    paddingLeft="8px"
                    paddingRight="4px"
                    onClick={onDecrease}
                >
                    -
                </QuantityPlusMinus>
                <Quantity>{quantity}</Quantity>
                <QuantityPlusMinus
                    borderSide="left"
                    paddingLeft="4px"
                    paddingRight="8px"
                    onClick={onIncrease}
                >
                    +
                </QuantityPlusMinus>
            </QuantityButtonContainer>
        </QuantityContainer>
    );
};

export default QuantityButton;
