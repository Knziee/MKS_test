import styled from "styled-components";
import CartButton from "./CartButton";
import { HeaderProps } from "../interfaces/";

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 101px;
    background: #0f52ba;
    padding: 0 20px;
`;

const LogoBox = styled.div`
    display: flex;
    margin-left: 65px;
    cursor: pointer;

    @media (max-width: 490px) {
        margin-left: 0;
    }
`;

const MKS = styled.div`
    color: #fff;
    font-size: 40px;
    font-weight: 600;
    line-height: 14px;
`;

const Sistemas = styled.div`
    color: #fff;
    font-size: 20px;
    font-weight: 300;
    margin-left: 8px;
`;

function Header({ toggleCartVisibility }: HeaderProps) {
    return (
        <HeaderContainer>
            <LogoBox>
                <MKS>MKS</MKS>
                <Sistemas>Sistemas</Sistemas>
            </LogoBox>
            <CartButton openCart={toggleCartVisibility} />
        </HeaderContainer>
    );
}

export default Header;
