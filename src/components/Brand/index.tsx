// libs
import React from 'react'
import { A } from 'hookrouter'
import Styled from 'styled-components'

import amLogoGreen from '../../assets/am_green_logo.png'

export default () => {
    return (
        <Brand.Wrapper href="/">
            <Brand.LogoWrapper>
                <Brand.Logo src={amLogoGreen} />
            </Brand.LogoWrapper>
            <Brand.TitleWrapper>
                <Brand.BrandTitle>Vaccine Research</Brand.BrandTitle>
                <Brand.BrandName>
                    <Brand.Bold>Analysis</Brand.Bold>
                    Mode
                </Brand.BrandName>
            </Brand.TitleWrapper>
        </Brand.Wrapper>
    )
}

const Brand = {
    Wrapper: Styled(A)`
    display: flex;
    flex-direction: row;
    align-items: center;
  `,
    LogoWrapper: Styled.div`
    display: flex;
    margin-right: 10px;
  `,
    Logo: Styled.img`
    width: 56px;
    height: 40px;
    `,
    TitleWrapper: Styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    color: ${(props) => props.theme.colors.primaryGreen};
    `,
    BrandName: Styled.span`
    display: flex;
    text-transform: uppercase;
    `,
    BrandTitle: Styled.span`
    display: flex;
    `,
    Bold: Styled.b`
    `,
}
