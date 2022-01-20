import { FC } from 'react';
import styled from "@emotion/styled";
import { css } from '@emotion/react';

export interface CardImageProps {
  /**
   * Direction to align the content. Either left/right
   */
  src?: string;
}

const baseStyles = ({ src = 'https://picsum.photos/1000/1000' }: CardImageProps) => css`
  background-image: url("${src}");
  height: 250px;
  background-size: cover;
  background-position: center center;
`;

export const CardImage: FC<CardImageProps> = styled('div')<CardImageProps>(baseStyles);
