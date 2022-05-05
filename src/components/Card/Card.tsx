import { Box, AspectRatio, Image, Stack, useColorModeValue, BoxProps } from '@chakra-ui/react'
import React from 'react'
import { FiChevronRight } from 'react-icons/fi'

import { Body } from '../Body'
import { Button } from '../Button'
import { Headline } from '../Headline'
import { Link } from '../Link'

export interface CardProps extends BoxProps {
  /**
   * Render an image for the card at the top.
   */
  image?: string
  /**
   * Render an image for the card at the top.
   */
  imageRatio?: 'square' | 'rectangle'
  /**
   *
   */
  title: string
  /**
   *
   */
  description?: string
  /**
   *
   */
  url?: string
  /**
   *
   */
  buttonText?: string
}

export const Card = ({ ...props }: CardProps) => {
  function renderSwitch(imageRatio: any) {
    switch (imageRatio) {
      case 'square':
        return 1
      case 'rectangle':
        return 16 / 9
    }
  }

  return (
    <Box>
      {props.image && (
        <AspectRatio ratio={renderSwitch(props.imageRatio)} mb={3}>
          <Image src={props.image} loading="lazy" borderRadius="lg" />
        </AspectRatio>
      )}
      <Stack spacing={4}>
        <Stack spacing={1}>
          <Headline size="three" noMargin as="h4">
            {props.title}
          </Headline>
          <Body>{props.description}</Body>
        </Stack>
        {props.url && (
          <Box>
            <Link
              href={props.url}
              _hover={{
                textDecoration: 'none',
              }}
            >
              <Button variant="link" rightIcon={<FiChevronRight />} color={useColorModeValue('black', 'white')}>
                {props.buttonText}
              </Button>
            </Link>
          </Box>
        )}
      </Stack>
    </Box>
  )
}

Card.defaultProps = {
  imageRatio: 'rectangle',
}
