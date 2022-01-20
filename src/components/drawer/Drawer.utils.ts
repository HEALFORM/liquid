import { MotionProps } from 'framer-motion'

import { LiquidRadius } from '../../styles/theme'
import { CommonAnimations } from '../../utils/motion'
import { DrawerPlacement, DrawerProps } from './Drawer'

export const getPropsBasedOnPlacement = (
  placement: DrawerPlacement,
  dimensions: Pick<DrawerProps, 'width' | 'minWidth'>,
): Partial<DrawerProps> => {
  const X_MIN_WIDTH = '240px'
  switch (placement) {
    case 'top':
      return {
        m: 0,
        width: '100%',
        height: 'auto',
        maxHeight: '90%',
        borderTopLeftRadius: [0, 0],
        borderTopRightRadius: [0, 0],
        borderBottomLeftRadius: LiquidRadius.Xl,
        borderBottomRightRadius: LiquidRadius.Xl,
      }
    case 'bottom':
      return {
        mt: 'auto',
        width: '100%',
        height: 'auto',
        maxHeight: '90%',
        borderTopLeftRadius: LiquidRadius.Xl,
        borderTopRightRadius: LiquidRadius.Xl,
        borderBottomLeftRadius: [0, 0],
        borderBottomRightRadius: [0, 0],
      }
    case 'right':
      return {
        m: 0,
        width: dimensions?.width ?? 'auto',
        minWidth: dimensions?.minWidth ?? X_MIN_WIDTH,
        height: '100%',
        alignSelf: 'flex-end',
        borderTopLeftRadius: LiquidRadius.Xl,
        borderBottomLeftRadius: LiquidRadius.Xl,
        borderTopRightRadius: [0, 0],
        borderBottomRightRadius: [0, 0],
      }
    case 'left':
      return {
        m: 0,
        width: dimensions?.width ?? 'auto',
        minWidth: dimensions?.minWidth ?? X_MIN_WIDTH,
        height: '100%',
        alignSelf: 'flex-start',
        borderTopRightRadius: LiquidRadius.Xl,
        borderBottomRightRadius: LiquidRadius.Xl,
        borderTopLeftRadius: [0, 0],
        borderBottomLeftRadius: [0, 0],
      }
  }
}

export const getAnimationPropsBasedOnPlacement = (placement: DrawerPlacement): Partial<MotionProps> => {
  switch (placement) {
    case 'top':
      return CommonAnimations.SlideFromTop
    case 'bottom':
      return CommonAnimations.SlideFromBottom
    case 'right':
      return CommonAnimations.SlideFromRight
    case 'left':
      return CommonAnimations.SlideFromLeft
  }
}
