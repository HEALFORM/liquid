import { css } from '@emotion/react';
import theme from '@healform/design-tokens/dist/js/theme';
import styled from '@emotion/styled';

const baseStyles = () => css`
  display: block;
  width: 100%;
  border: 0;
  border-top: 1px solid ${theme.colors.gray["200"].value};
  margin-top: ${theme.spacings.lg.value};
  margin-bottom: ${theme.spacings.lg.value};
`;

export const Hr = styled('hr')(baseStyles);
