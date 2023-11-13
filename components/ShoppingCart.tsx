import styled from "styled-components";
import { OnClick } from "../interfaces/";

const CartContainer = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    height: 100%;
    width: 486px; /* ou qualquer largura desejada */
    background: #0f52ba;
    display: flex;
    flex-direction: column;
    padding: 20px;
    box-shadow: -5px 0px 15px rgba(0, 0, 0, 0.3);
    z-index: 1000; /* Certifique-se de que está em camadas acima do conteúdo principal */
`;

const CartTitle = styled.h2`
    color: #fff;
    font-size: 27px;
    font-weight: 700;
    width: 166px;
    margin-bottom: -10px;
    margin-left: 27px;
`;
const CartHeader = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 14px;
`;

const CloseButton = styled.button`
    background-color: black;
    color: white;
    border: none;
    border-radius: 50%;
    width: 38px;
    height: 38px;
    font-size: 20px;
    cursor: pointer;
    align-self: flex-end;
    margin-bottom: 16px;
    margin-right: 6px;
    font-weight: 400;
    line-height: 15px; /* 53.571% */
`;

const CartContent = styled.div`
    overflow-y: auto;
    flex-grow: 1;
`;

const TotalContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`;

const TotalLabel = styled.span`
    color: #fff;
    font-size: 27px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

const TotalValue = styled.span`
    color: #fff;
    font-family: "Montserrat", sans-serif;
    font-size: 27px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

const CheckoutButton = styled.button`
    background-color: black;
    color: #fff;
    width: 100%;
    height: 97px;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: 15px;
    cursor: pointer;
    border: none;
`;

const ShoppingCart = ({ onClick }: OnClick) => {
    return (
        <CartContainer>
            <CartHeader>
                <CartTitle>Carrinho de compras</CartTitle>
                <CloseButton onClick={onClick}>X</CloseButton>
            </CartHeader>
            <CartContent>
                {/* Lista de cartões */}
                {/* Exemplo de card */}
                {/* <CartItem title="Produto 1" price="R$ 50.00" /> */}
            </CartContent>
            <TotalContainer>
                <TotalLabel>Total:</TotalLabel>
                <TotalValue>R$ 150.00</TotalValue>
            </TotalContainer>
            <CheckoutButton>Finalizar Compra</CheckoutButton>
        </CartContainer>
    );
};

export default ShoppingCart;
