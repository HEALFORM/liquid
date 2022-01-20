import React, {FC, Ref, HTMLAttributes} from 'react';
import theme from '@healform/design-tokens/dist/js/theme';
import styled from "@emotion/styled";
import {css} from '@emotion/react';
import isPropValid from "@emotion/is-prop-valid";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The ref to the HTML DOM element.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref?: Ref<any>;
}

const baseStyles = () => css`
  border-radius: ${theme.radius.lg.value};
  width: 100%;
  overflow: hidden;
  background: ${theme.colors.white.value};
  border: 1px solid ${theme.colors.gray["200"].value};
  display: flex;
  flex-direction: column;
`;

export const Card: FC<CardProps> = styled('div', {
  shouldForwardProp: (prop) => isPropValid(prop as string)})<CardProps>(baseStyles);
