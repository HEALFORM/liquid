import { css } from '@emotion/react'
import styled from '@emotion/styled'
import theme from '@healform/design-tokens/dist/js/theme'

const baseStyles = () => css`
  display: block;
  width: 100%;
  border: 0;
  border-top: 2px solid ${theme.colors.gray['100'].value};
  margin-top: ${theme.spacings.lg.value};
  margin-bottom: ${theme.spacings.lg.value};
`

export const Hr = styled('hr')(baseStyles)
