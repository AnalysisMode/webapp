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

      @media (max-width: 900px) {
        flex-direction: column;
      }
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

      @media (max-width: 900px) {
        margin-top: 30px;
        text-align: center;
      }
    `,
    OuterCircle: Styled.div`
      border-radius: 50%;
      border: 3px solid ${(props) => props.theme.colors.primaryGreen};
    `,
    InnerCircle: Styled.div`
      border-radius: 50%;
      border: 20px solid ${(props) => props.theme.colors.darkerGreen};
    `,
    MostInnerCircle: Styled.div`
      border-radius: 50%;
      border: 14px solid ${(props) => props.theme.colors.dark['shade-1']};
    `,
    Image: Styled.div`
      background: url(${haystack});
      background-repeat: no-repeat;
      background-size: contain;
      border-radius: 50%;
      padding: 5px;
      width: 272px;
      height: 272px;

      @media (max-width: 900px) {
        width: 200px;
        height: 200px;
      }
    `,
    Subtitle: Styled.div`
      display: flex;
      margin-left: 40px;
      max-width: 480px;
      font-family: ${(props) => props.theme.font.family.title};
      font-size: ${(props) => props.theme.font.size.medium};
    `,
}
