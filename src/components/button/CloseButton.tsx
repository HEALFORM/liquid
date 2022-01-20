import React from 'react'
import { FiX } from 'react-icons/fi'

import { IconButton } from '../button/IconButton'
import { Icon } from '../icon'

/**
 * A generic close button.
 */
export const CloseButton = () => <IconButton variant="tertiary" icon={<Icon as={FiX} />} />

CloseButton.displayName = 'CloseButton'
