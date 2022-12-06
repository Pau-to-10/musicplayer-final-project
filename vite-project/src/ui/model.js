import styled from "styled-components";

export const Container = styled.div`
width: 100%;
margin:20px auto;
display: grid;
grid-gap: 20px;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: repeat(4, auto);
`

export const Header = styled.header`
color: #fff;
grid-area: header;
align-items: center;
justify-content: center;

& > h1 {
    margin-left: 2%;
}
`

export const Main = styled.main`
grid-area: contenido;
`

export const Sidebar = styled.aside`
grid-area: aside;
display: flex;
align-items: center;
justify-content: center;
`

export const Widget = styled.main`
grid-area: ${props => props.className === "widget-1" ? "widget-1" : "widget-2"}; 
display: flex;
align-items: center;
justify-content: center;
`

export const Down = styled.footer`
padding: 20px;
color: #fff;
grid-area: abajo;
`
