import styled from "styled-components";
import Image from "next/image";
import cartIcon from "../public/images/CartIcon.png";
import { OnClick } from "../interfaces/";

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
`;

const Items = styled.div`
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
`;

const Icon = styled.div`
    margin-left: -15px;
    margin-bottom: -5px;
`;

const CartButton: React.FC<OnClick> = ({ onClick }) => {
    return (
        <Background onClick={onClick}>
            <Icon>
                <Image src={cartIcon} alt="Cart Icon" />
            </Icon>{" "}
            <Items>0</Items>
        </Background>
    );
};

export default CartButton;
