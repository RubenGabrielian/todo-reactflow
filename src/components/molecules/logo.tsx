import logo from "../../../public/assets/logo.png"
import styled from "styled-components"

const StyledLogo = styled.div`
  img {
    width: ${({width})=> width ? width : "100px"};
  }
`

export default function Logo ({width}) {
    return (
        <StyledLogo width={width}>
            <img src={logo.src} alt=""/>
        </StyledLogo>
    )
}