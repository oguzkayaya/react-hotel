
import styled, { css } from 'styled-components'

const Button = styled.button`
  background: rgb(0, 165, 154);
  border-radius: 5px;
  border: none;
  color: #fff;
  padding: 1em 3em;
  cursor: pointer;
  transition: all 250ms;
  width: 100%;

  &:hover {
      background: rgb(2, 134, 125);
  }

  ${props => props.primary && css`
      background: #579ee0;

      &:hover {
          background: #0085ff;
      }
  `}

  ${props => props.cancel && css`
      background: #ee7d8b;

      &:hover {
          background: #d95565;
      }
  `}
`;

export default Button;