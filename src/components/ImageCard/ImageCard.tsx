import { Box, BoxProps, Text, Flex, Spacer } from '@chakra-ui/react'
import React from 'react'

import { Body } from '../Body'
import { Button } from '../Button'
import { Headline } from '../Headline'

export interface ImageCardProps extends BoxProps {
  /**
   * Render an image for the card at the top.
   */
  image?: string
  /**
   *
   */
  keyword: string
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
    <Box
      w="full"
      flexDirection="column"
      overflow="hidden"
      display="flex"
      borderRadius="lg"
      m={0}
      position="relative"
      boxSizing="border-box"
      height="auto"
    >
      <Box
        w="full"
        display="flex"
        flexShrink={0}
        justifyContent="flex-start"
        position="absolute"
        alignItems="center"
        top={4}
        overflow="hidden"
        pl={4}
      >
        <Box w="full" color="white" ml={0}>
          <Text variant="highlight" textTransform="uppercase" opacity="0.667" fontSize="sm" fontWeight="bold">
            {props.keyword}
          </Text>
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
        <Box w="full" h="500px" borderRadius="lg" overflow="hidden" maxW="100%">
          <Box as="img" objectFit="cover" src={props.image} w="full" h="full" />
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
        <Flex minWidth="max-content" alignItems="center" gap="2" flexGrow={1}>
          <Box>
            <Body size="two" noMargin>
              {props.description}
            </Body>
          </Box>
          <Spacer />
          <Button colorScheme="white" variant="outline" size="sm">
            {props.buttonText}
          </Button>
        </Flex>
      </Box>
    </Box>
  )
}
