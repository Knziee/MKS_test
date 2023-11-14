import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import StoreCard from "../components/StoreCard";
import ShoppingCart from "../components/ShoppingCart";
import getProducts from "./api/productsApi";

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 22px;
    margin-top: 116px;
    flex-wrap: wrap;
    max-width: 1000px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 80px;

    @media (max-width: 490px) {
        margin-top: 60px;
    }
`;

const HomePage = () => {
    const [isCartVisible, setIsCartVisible] = useState(false);

    const toggleCartVisibility = () => {
        setIsCartVisible(!isCartVisible);
    };

    const {
        data: products,
        isLoading,
        isError,
    } = getProducts({
        page: 1,
        rows: 10,
        sortBy: "id",
        orderBy: "ASC",
    });

    return (
        <div>
            <Header toggleCartVisibility={toggleCartVisibility} />
            <Container>
                {isLoading ? (
                    <p>Loading...</p>
                ) : isError ||
                  !Array.isArray(products?.products) ||
                  products.products.length === 0 ? (
                    <p>Error loading products</p>
                ) : (
                    products.products.map((product) => (
                        <div key={product.id}>
                            <StoreCard
                                name={product.name}
                                brand={product.brand}
                                description={product.description}
                                price={
                                    "R$" + parseFloat(product.price).toFixed()
                                }
                                photo={product.photo}
                            />
                        </div>
                    ))
                )}
            </Container>
            <Footer />
            {isCartVisible && <ShoppingCart openCart={toggleCartVisibility} />}
        </div>
    );
};

export default HomePage;
