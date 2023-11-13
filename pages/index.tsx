// index.tsx
import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ItemCard from "../components/ItemCard";
import styled from "styled-components";
import ShoppingCart from "../components/ShoppingCart";

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 22px;
    margin-top: 116px;
`;

const IndexPage = () => {
    const [isCartVisible, setIsCartVisible] = useState(false);

    const toggleCartVisibility = () => {
        setIsCartVisible(!isCartVisible);
    };

    return (
        <div>
            <Header toggleCartVisibility={toggleCartVisibility} />
            <Container>
                <ItemCard />
            </Container>
            <Footer />
            {isCartVisible && <ShoppingCart onClick={toggleCartVisibility} />}
        </div>
    );
};

export default IndexPage;
