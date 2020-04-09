import Styled from 'styled-components'

export default Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: ${({ theme }) => theme.layout.width}px;
  margin: 0 auto;
  padding: 0 20px;
`
