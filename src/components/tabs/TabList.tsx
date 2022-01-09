import { LayoutGroup } from 'framer-motion'
import React, { CSSProperties, FC } from 'react'
import { TabList as BaseTabList } from 'reakit/Tab'
import { variant } from 'styled-system'

import { LiquidBorder } from '../../styles/theme'
import { Box, BoxProps } from '../primitives/Box'
import { TabsAlign, TabsOrientation, TabsVariant, useTabs } from './Tabs.context'

export interface TabListProps extends BoxProps {
  readonly ariaLabel: string
}

const variants = [
  variant<{}, TabsVariant>({
    variants: {
      line: {
        borderBottom: LiquidBorder.Sm,
        borderRight: LiquidBorder.Sm,
        borderBottomColor: 'tabs.list.borderColor',
        borderRightColor: 'tabs.list.borderColor',
      },
      rounded: {},
    },
  }),
  variant<{}, TabsOrientation>({
    prop: 'variantOrientation',
    variants: {
      horizontal: {
        mb: 3,
        borderRight: LiquidBorder.None,
        flexDirection: 'row',
      },
      vertical: {
        borderBottom: LiquidBorder.None,
        mr: 3,
        flexDirection: 'column',
      },
    },
  }),
]
const getAlign = (align: TabsAlign): CSSProperties['justifyContent'] => {
  switch (align) {
    default:
    case 'start':
      return 'flex-start'
    case 'center':
      return 'center'
    case 'end':
      return 'flex-end'
  }
}

export const TabList: FC<TabListProps> = ({ children, ariaLabel, sx, ...props }) => {
  const { tabs, variant, stretch, align, orientation } = useTabs()
  return (
    <LayoutGroup>
      <BaseTabList
        aria-label={ariaLabel}
        as={Box}
        display="flex"
        textAlign={stretch ? 'center' : undefined}
        justifyContent={getAlign(align)}
        {...tabs}
        {...{ variant, variantOrientation: orientation }}
        _variants={variants}
        sx={
          stretch
            ? {
                '& .tab': {
                  flex: 1,
                },
                ...sx,
              }
            : sx
        }
        {...props}
      >
        {children}
      </BaseTabList>
    </LayoutGroup>
  )
}

TabList.displayName = 'Tab.List'

export default TabList
