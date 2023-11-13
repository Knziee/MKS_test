// components/Card.js
import styled from "styled-components";
import Image from "next/image";
import cartIcon from "../public/images/CartIcon.png";
import buyIcon from "../public/images/buyIcon.png";

const CardContainer = styled.div`
    width: 218px;
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
    font-style: normal;
    font-weight: 700;
    padding: 0px 7px 0px 7px;
    height: 28px;
`;

const Title = styled.h2`
    color: #2c2c2c;
    font-family: "Montserrat", sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 19px;
    height: 39px;
`;

const Subtitle = styled.p`
    color: #2c2c2c;
    font-size: 10px;
    font-style: normal;
    font-weight: 300;
    line-height: 12px;
    margin-top: 8px; /* Adicione a margem superior desejada */
    width: 180px;
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
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); /* Adiciona sombra na parte inferior */
`;

const Card = () => {
    return (
        <CardContainer>
            <Image
                src={cartIcon}
                alt={"title"}
                height={138}
                style={{
                    marginTop: "18px",
                }}
            />
            <CardInfo>
                <TitleAndPrice>
                    <Title>{"Apple iPhoneX 128GB"}</Title>
                    <Price>RS399</Price>
                </TitleAndPrice>
                <Subtitle>
                    {"Redesigned from scratch and completely revised."}
                </Subtitle>
            </CardInfo>
            <BuyButton onClick={() => console.log("teste")}>
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

export default Card;
