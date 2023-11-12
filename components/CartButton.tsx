import styled from "styled-components";

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

const Icon = styled.div`
    display: flex;
    /* width: 100%;
    height: 300px;
    img {
        width: 100px;
        height: 100px;
        object-fit: cover;
    } */
`;

const Items = styled.div`
    font-family: Montserrat;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
`;

const CartButton: React.FC = () => {
    return (
        <Background>
            <Icon>
                <img src="../public/images/CartIcon.png" alt="Cart" />
            </Icon>
            <Items>0</Items>
        </Background>
    );
};

export default CartButton;
