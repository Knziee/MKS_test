import styled from "styled-components";
import CartButton from "./CartButton";

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
`;

const MKS = styled.div`
    color: #fff;
    font-family: Montserrat;
    font-size: 40px;
    font-style: normal;
    font-weight: 600;
    line-height: 19px;
`;

const Sistemas = styled.div`
    color: #fff;
    font-family: Montserrat;
    font-size: 20px;
    font-style: normal;
    font-weight: 300;
    line-height: 19px;
    margin-left: 8px;
`;

const Header: React.FC = () => {
    return (
        <HeaderContainer>
            <LogoBox>
                <MKS>MKS</MKS>
                <Sistemas>Sistemas</Sistemas>
            </LogoBox>
            <CartButton />
        </HeaderContainer>
    );
};

export default Header;
