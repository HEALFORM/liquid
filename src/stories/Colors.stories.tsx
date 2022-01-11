import { Meta, Story } from '@storybook/react'
import React from 'react'

import { Flex, Grid, Heading, Text, VStack } from '../components'
import colors from '../styles/modules/colors'
import { LiquidBorder, LiquidShadow } from '../styles/theme'
import { LiquidFontWeight } from '../styles/theme/typography'
import { colorContrast } from '../utils/color'

const meta: Meta = {
  title: 'Tokens/Colors',
  parameters: {
    controls: { disable: true },
  },
}

export default meta

const PALETTE_COLORS: Array<keyof typeof colors> = [
  'blue',
  'seagrass',
  'violet',
  'yellow',
  'turquoise',
  'orange',
  'green',
  'red',
  'gray',
]

export const Default: Story = () => {
  const palettes = PALETTE_COLORS.map(color => ({
    color,
    palette: Object.entries(colors[color]).map(([shade, hex]) => ({ shade, hex })),
  }))
  return (
    <VStack spacing={4}>
      {palettes.map(value => (
        <VStack spacing={4} key={value.color}>
          <Heading
            alignSelf="flex-start"
            bgClip="text"
            bgGradient={`linear(to right, ${value.color}.500, ${value.color}.700)`}
          >
            {value.color}
          </Heading>
          <Grid autoFit gap={4}>
            {value.palette.map(p => (
              <Flex
                borderRadius={LiquidBorder.Lg}
                color={colorContrast(p.hex)}
                position="relative"
                key={p.shade}
                p={2}
                height={100}
                fontWeight={LiquidFontWeight.Semibold}
                sx={{ transition: 'all 0.3s, transform 0.2s' }}
                _hover={{ cursor: 'pointer', boxShadow: LiquidShadow.Lg, opacity: 0.8, transform: 'translateY(-5px)' }}
                bg={`${value.color}.${p.shade}`}
              >
                <Text>{p.shade}</Text>
                <Text position="absolute" bottom={2} right={2}>
                  ({p.hex})
                </Text>
              </Flex>
            ))}
          </Grid>
        </VStack>
      ))}
    </VStack>
  )
}
