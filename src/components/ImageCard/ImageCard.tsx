import { Box, BoxProps } from '@chakra-ui/react'
import React from 'react'

import { Body } from '../Body'
import { Button } from '../Button'
import { Headline } from '../Headline'
import { Image } from '../Image'

export interface ImageCardProps extends BoxProps {
  /**
   * Render an image for the card at the top.
   */
  image?: string
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

export const ImageCard = ({ ...props }: ImageCardProps) => {
  return (
    <Box w="full" flexDirection="column" overflow="hidden" display="flex" borderRadius="lg">
      <Box w="full" display="flex" flexShrink={0} justifyContent="flex-start" position="absolute" alignItems="center">
        <Box w="full" p={3} color="white">
          <Body variant="highlight" noMargin textTransform="uppercase" opacity="0.667">
            Neu
          </Body>
          <Headline size="four">{props.title}</Headline>
        </Box>
      </Box>
      <Box
        display="flex"
        width="full"
        height="auto"
        flex="1 1 auto"
        flexDirection="column"
        placeContent="inherit"
        alignItems="inherit"
        overflowY="auto"
        textAlign="left"
      >
        <Box w="full" h="200px" borderRadius="lg" overflow="hidden" maxW="100%">
          <Image objectFit="cover" w="full" src="https://nextui.org/images/card-example-5.jpeg" />
        </Box>
      </Box>
      <Box
        position="absolute"
        backdropFilter="saturate(180%) blur(10px)"
        background="whiteAlpha.100"
        borderTopStyle="solid"
        borderTopWidth="1px"
        borderTopColor="whiteAlpha.300"
        bottom={0}
        h="auto"
        display="flex"
        w="full"
        p={3}
        alignItems="center"
        color="white"
        borderBottomLeftRadius="lg"
        borderBottomRightRadius="lg"
      >
        Servus
      </Box>
    </Box>
  )
}
