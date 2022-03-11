import { Icon } from '@chakra-ui/react'
import React from 'react'

import { colorOptions } from '../../theme/colors.theme'
import { Box, Code, Text, Table, Thead, Tbody, Tr, Th, Td } from './../../index'
import * as Icons from './index'

const icons = Object.values(Icons)

export default {
  title: 'Components/Icons',
  component: Icon,
  argTypes: {
    color: {
      table: {
        defaultValue: { summary: 'currentColor' },
        type: {
          summary: `${colorOptions.join('|')}`,
        },
      },
      control: {
        type: 'select',
        options: colorOptions,
      },
    },
  },
}

export const Base = args => (
  <>
    <Box as="code" display="block" pb={4}>
      There are {icons.length} icons
    </Box>
    <Table>
      <Thead>
        <Tr>
          <Th w="10%" />
          <Th>
            <kbd>Icon</kbd> prop
          </Th>
          <Th>Component</Th>
        </Tr>
      </Thead>
      <Tbody>
        {icons
          .map((icon, index) => (
            <Tr key={index}>
              <Td>
                <Icon as={icon} {...args} />
              </Td>
              <Td>
                <Text as="kbd">{icon.displayName}</Text>
              </Td>
              <Td>
                <Code py={1} px={2}>
                  {`<${icon.displayName} />`}
                </Code>
              </Td>
            </Tr>
          ))
          .sort()}
      </Tbody>
    </Table>
  </>
)
Base.argTypes = {
  as: { table: { disable: true }, control: { disable: true } },
}
