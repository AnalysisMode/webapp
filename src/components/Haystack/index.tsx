// libs
import React from 'react'
import Styled from 'styled-components'

// components
import haystack from '../../assets/haystack.png'

export default () => {
    return (
        <Haystack.Wrapper>
            <Haystack.Left>
                <Haystack.OuterCircle>
                    <Haystack.InnerCircle>
                        <Haystack.MostInnerCircle>
                            <Haystack.Image></Haystack.Image>
                        </Haystack.MostInnerCircle>
                    </Haystack.InnerCircle>
                </Haystack.OuterCircle>
            </Haystack.Left>
            <Haystack.Right>
                <Haystack.Subtitle>
                    For a computer, it’s like finding a needle in a haystack. But humans can spot a
                    pattern in seconds.
                </Haystack.Subtitle>
            </Haystack.Right>
        </Haystack.Wrapper>
    )
}

const Haystack = {
    Wrapper: Styled.div`
      margin-top: 60px;
      display: flex;
      flex-direction: row;
      align-items: center;
    `,
    Left: Styled.div`
      display: flex;
      justify-content: flex-end;
      flex: 1;
    `,
    Right: Styled.div`
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      flex: 1;
    `,
    OuterCircle: Styled.div`
      background: ${(props) => props.theme.colors.primaryGreen};
      border-radius: 50%;
      height: 400px;
      width: 400px;
      position: relative;

      @media (max-width: 900px) {
        transform: scale(0.75);
      }
    `,
    InnerCircle: Styled.div`
      position: absolute;
      background: ${(props) => props.theme.colors.darkerGreen};
      border-radius: 50%;
      height: 394px;
      width: 394px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    `,
    MostInnerCircle: Styled.div`
      position: absolute;
      background: ${(props) => props.theme.colors.dark['shade-1']};
      border-radius: 50%;
      height: 354px;
      width: 354px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    `,
    Image: Styled.div`
      position: absolute;
      background: url(${haystack});
      border-radius: 50%;
      padding: 5px;
      height: 334px;
      width: 334px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-repeat: no-repeat;
      background-size: contain;
    `,
    Subtitle: Styled.div`
      display: flex;
      margin-left: 40px;
      max-width: 480px;
      font-family: ${(props) => props.theme.font.family.title};
      font-size: ${(props) => props.theme.font.size.medium};
    `,
}
