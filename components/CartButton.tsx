import styled from "styled-components";
import Image from "next/image";
import { CartButtonProps } from "../interfaces/";
import { useShoppingCart } from "../utils/providers/contextApi";
import cartIcon from "../public/images/CartIcon.png";

const Background = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
    align-items: center;
    height: 45px;
    width: 90px;
    background: #ffffff;
    border-radius: 8px;
    margin-right: 60px;
    cursor: pointer;

    @media (max-width: 490px) {
        margin-right: 16px;
    }
`;

const Items = styled.div`
    font-size: 18px;
    font-weight: 700;
`;

const Icon = styled.div`
    margin-left: -15px;
    margin-bottom: -5px;
`;

function CartButton({ openCart }: CartButtonProps) {
    const { state } = useShoppingCart();
    const cartItems = state.cartItems;

    const totalQuantity = cartItems.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.quantity;
    }, 0);

    return (
        <Background onClick={openCart}>
            <Icon>
                <Image src={cartIcon} alt="Cart Icon" />
            </Icon>
            <Items>{totalQuantity}</Items>
        </Background>
    );
}

export default CartButton;
