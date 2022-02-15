import React from 'react'

import { Body, Box } from '../index'

export function SpacePalette({ spaces, children, ...rest }) {
  return (
    <Box my={4} {...rest}>
      {children}
      {Object.entries(spaces).map(([space, value], index) => {
        return (
          <Box as="figure" display="inline-block" mr={2} key={index}>
            <Box role="img" w={value + ''} h={value + ''} bg="blue.100" mb={1} />
            <figcaption>
              <code>{`${space}`}</code>
              <br />
              <Body size="two">({`${value}`})</Body>
            </figcaption>
          </Box>
        )
      })}
    </Box>
  )
}

export function RadiiPalette({ radii, children, ...rest }) {
  return (
    <Box my={4} {...rest}>
      {children}
      {Object.entries(radii).map(([radius, value], index) => {
        return (
          <Box as="figure" display="inline-block" mr={2} key={index}>
            <Box role="img" w="48px" h="48px" bg="blue.100" mb={1} borderRadius={radius} />
            <figcaption>
              <code>{`${radius}`}</code>
              <br />
              <Body size="two">({`${value}`})</Body>
            </figcaption>
          </Box>
        )
      })}
    </Box>
  )
}
