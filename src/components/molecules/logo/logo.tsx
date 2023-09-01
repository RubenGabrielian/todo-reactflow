import React from "react"
import Image from "next/image"
import styled from "styled-components"
import { StyledLogoProps } from "./types"

const StyledLogo = styled.div<StyledLogoProps>`
  img {
    width: ${({width})=> width ? width + "px" : "100px"};
  }
`
export default function Logo ({width}:StyledLogoProps) {
    return (
        <StyledLogo width={width}>
            <Image src="/assets/logo.png" alt="Logo" width={width as  number} />
        </StyledLogo>
    )
}