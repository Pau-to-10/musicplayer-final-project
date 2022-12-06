import styled from "styled-components";

export const Column = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

export const IconBack = styled.button`
width: 50px;
border-style: none;
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`

export const WrapperNav = styled.div`
list-style: none;
display: flex;
justify-content: space-around;
align-items: center;
width: 100%;

.navbar {
    padding: 0;
    margin-top: 3px;
    font-size: 45px;
    cursor: pointer;
}

.navbar li a {
    color: #9bfab0;
}

.active {
    border-top: 7px solid #9bfab0;
    border-radius: 5px;
}
`






export const UserImg = styled.img`
width: 111.11px;
height: 111.14px;
border-radius: 54px;
`

export const BtnEdit = styled.button`
box-sizing: border-box;
width: 94.87px;
height: 28.01px;
color: white;
background: #64C27B;
border: 1px solid #000000;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 40.6599px;
`

export const IconFooter = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 0px;
gap: 63px;
width: 330.33px;
height: 28px;
`

export const Texto = styled.div`
font-family: 'Avenir Next';
font-style: normal;
font-weight: 700;
font-size: 10.8426px;
line-height: 15px;
color: white;
`