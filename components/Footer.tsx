import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
    height: 34px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #eee;
    font-size: 0.8rem;
    color: #555;
    position: fixed;
    bottom: 0;
    width: 100%;
`;

const Footer = () => {
    return (
        <FooterContainer>
            MKS sistemas © Todos os direitos reservados
        </FooterContainer>
    );
};

export default Footer;
