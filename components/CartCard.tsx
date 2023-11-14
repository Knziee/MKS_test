import styled from "styled-components";
import Image from "next/image";
import QuantityButton from "./QuantityButton";
import { StoreCardProps } from "../interfaces/";
import { useShoppingCart } from "../utils/providers/contextApi";

const CardContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 16px;
`;

const Card = styled.div`
    width: 385px;
    height: 95px;
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    display: flex;
    align-items: center;
    background: #fff;
    margin-top: 5px;
`;

const Price = styled.div`
    display: flex;
    align-items: center;
    margin-left: 18px;
    margin-right: 26px;
    border-radius: 5px;
    color: #000;
    font-size: 15px;
    font-weight: 700;
    padding: 0px 7px 0px 7px;
    height: 28px;
`;

const Title = styled.h2`
    color: #2c2c2c;
    font-size: 13px;
    font-weight: 400;
    line-height: 19px;
    height: 39px;
    width: 113px;
`;

const CloseButton = styled.div`
    background-color: black;
    color: white;
    border: none;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    font-size: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: -12px;
    font-weight: 400;

    @media (max-width: 490px) {
        margin-left: -8px;
        padding: 2px 6px 2px 6px;
    }
`;

const CartCard = ({ name, brand, price, photo, quantity }: StoreCardProps) => {
    const { dispatch, state } = useShoppingCart();
    const cartItems = state.cartItems;

    const existingItem = cartItems.find(
        (item) => item.name === name && item.brand === brand
    );

    const handleIncrease = () => {
        if (existingItem) {
            dispatch({
                type: "INCREASE_QUANTITY",
                payload: {
                    id: existingItem.id,
                    quantity: existingItem.quantity + 1,
                },
            });
        }
        console.log("Increase");
    };

    const handleDecrease = () => {
        if (existingItem && existingItem.quantity > 1) {
            dispatch({
                type: "DECREASE_QUANTITY",
                payload: {
                    id: existingItem.id,
                    quantity: existingItem.quantity - 1,
                },
            });
        } else {
            dispatch({
                type: "REMOVE_FROM_CART",
                payload: {
                    id: existingItem.id,
                },
            });
        }
    };

    const handleRemove = () => {
        if (existingItem) {
            dispatch({
                type: "REMOVE_FROM_CART",
                payload: {
                    id: existingItem.id,
                },
            });
        }
    };

    return (
        <div>
            <CardContainer>
                <Card>
                    <Image
                        src={photo}
                        alt={"photo"}
                        height={61}
                        width={60}
                        style={{
                            marginLeft: "21px",
                            marginRight: "21px",
                        }}
                    />
                    <Title>{brand + " " + name}</Title>
                    <QuantityButton
                        quantity={quantity}
                        onDecrease={handleDecrease}
                        onIncrease={handleIncrease}
                    />
                    <Price>{price}</Price>
                </Card>
                <CloseButton onClick={handleRemove}>X </CloseButton>
            </CardContainer>
        </div>
    );
};

export default CartCard;
