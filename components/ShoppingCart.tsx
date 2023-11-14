import styled, { keyframes } from "styled-components";
import { CartButtonProps } from "../interfaces/";
import CartCard from "./CartCard";
import { useShoppingCart } from "../utils/providers/contextApi";

const slideInAnimation = keyframes`
    from {
        transform: translateX(100%);
    }
    to {
        transform: translateX(0);
    }
`;

const CartContainer = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    height: 100%;
    width: 486px;
    background: #0f52ba;
    display: flex;
    flex-direction: column;
    box-shadow: -5px 0px 15px rgba(0, 0, 0, 0.3);
    z-index: 1000;
    animation: ${slideInAnimation} 0.3s ease;

    @media (max-width: 490px) {
        width: 360px;
    }
`;

const Cart = styled.div`
    padding: 37px 47px 47px 47px;
`;

const CartTitle = styled.h2`
    color: #fff;
    font-size: 27px;
    font-weight: 700;
    width: 166px;
    margin-bottom: -10px;
`;
const CartHeader = styled.div`
    display: flex;
    justify-content: space-between;
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
    margin-right: -26px;
    font-weight: 400;
    line-height: 15px;
`;

const CartContent = styled.div`
    overflow-y: auto;
    flex-grow: 1;
    margin-top: 70px;
    margin-right: -20px;
    max-height: 60vh;
`;

const CheckoutContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
`;

const TotalContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: auto;
    color: #fff;
    font-size: 27px;
    font-weight: 700;
    margin: 0px 63px 32px 47px;
`;

const CheckoutButton = styled.div`
    background-color: black;
    color: #fff;
    width: 100%;
    height: 97px;
    font-size: 28px;
    font-weight: 700;
    line-height: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: none;
`;

const EmptyCartMessage = styled.h2`
    color: #fff;
    font-size: 14px;
    font-weight: 700;
    width: 166px;
`;

const ShoppingCart = ({ openCart }: CartButtonProps) => {
    const { state } = useShoppingCart();
    const cartItems = state.cartItems;

    const total = cartItems.reduce((acc, item) => {
        console.log("acc", acc);
        console.log("item", item);

        const itemPrice = parseFloat(item.price.replace("R$", ""));

        return acc + (itemPrice || 0) * (item.quantity || 0);
    }, 0);

    return (
        <CartContainer>
            <Cart>
                <CartHeader>
                    <CartTitle>Carrinho de compras</CartTitle>
                    <CloseButton onClick={openCart}>X</CloseButton>
                </CartHeader>
                <CartContent>
                    {cartItems.length === 0 ? (
                        <EmptyCartMessage>Carrinho vazio :c</EmptyCartMessage>
                    ) : (
                        cartItems.map((items) => (
                            <div key={items.id}>
                                <CartCard
                                    name={items.name}
                                    brand={items.brand}
                                    description={items.description}
                                    price={items.price}
                                    photo={items.photo}
                                    quantity={items.quantity}
                                />
                            </div>
                        ))
                    )}
                </CartContent>
            </Cart>
            <CheckoutContainer>
                <TotalContainer>
                    <div>Total:</div>
                    <div>{"R$" + total}</div>
                </TotalContainer>
                <CheckoutButton>Finalizar Compra</CheckoutButton>
            </CheckoutContainer>
        </CartContainer>
    );
};

export default ShoppingCart;
