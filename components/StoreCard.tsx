import styled from "styled-components";
import Image from "next/image";
import { StoreCardProps } from "../interfaces";
import { useShoppingCart } from "../utils/providers/contextApi";
import buyIcon from "../public/images/buyIcon.png";

const CardContainer = styled.div`
    width: 218px;
    min-height: 285px;
    max-height: 285px;
    height: 285px;
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const CardInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    margin-left: 14px;
    margin-top: 17px;
    margin-bottom: 12px;
    width: 100%;
`;
const TitleAndPrice = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

const Price = styled.div`
    display: flex;
    align-items: center;
    margin-left: 16px;
    margin-right: 26px;
    border-radius: 5px;
    background: #373737;
    color: #fff;
    font-size: 15px;
    font-weight: 700;
    padding: 0px 7px 0px 7px;
    height: 28px;
`;

const Title = styled.h2`
    color: #2c2c2c;
    font-family: "Montserrat", sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    height: 39px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
`;

const Subtitle = styled.p`
    color: #2c2c2c;
    font-size: 10px;
    font-weight: 300;
    line-height: 12px;
    margin-top: 8px;
    width: 180px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
`;

const BuyButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0px 0px 8px 8px;
    background: #0f52ba;
    width: 218px;
    height: 32px;
    color: #fff;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    margin-top: auto;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

    &:hover {
        background: #1b67da;
    }
`;

const StoreCard = ({
    name,
    brand,
    description,
    price,
    photo,
}: StoreCardProps) => {
    const { dispatch, state } = useShoppingCart();
    const cartItems = state.cartItems;

    console.log(cartItems);

    const existingItem = cartItems.find(
        (item) => item.name === name && item.brand === brand
    );

    const addToCart = () => {
        if (existingItem) {
            dispatch({
                type: "INCREASE_QUANTITY",
                payload: {
                    id: existingItem.id,
                    quantity: existingItem.quantity + 1,
                },
            });
        } else {
            dispatch({
                type: "ADD_TO_CART",
                payload: {
                    id: cartItems.length + 1,
                    brand,
                    name,
                    price,
                    description,
                    photo,
                    quantity: 1,
                },
            });
        }
    };

    return (
        <CardContainer>
            <Image
                src={photo}
                alt={"title"}
                height={138}
                width={100}
                style={{
                    marginTop: "18px",
                    width: "auto",
                    height: "auto",
                    minHeight: "138px",
                }}
            />
            <CardInfo>
                <TitleAndPrice>
                    <Title>{brand + " " + name}</Title>
                    <Price>{price}</Price>
                </TitleAndPrice>
                <Subtitle>{description}</Subtitle>
            </CardInfo>
            <BuyButton onClick={addToCart}>
                <Image
                    src={buyIcon}
                    alt={"title"}
                    width={12}
                    style={{
                        marginRight: "10px",
                    }}
                />
                COMPRAR
            </BuyButton>
        </CardContainer>
    );
};

export default StoreCard;
