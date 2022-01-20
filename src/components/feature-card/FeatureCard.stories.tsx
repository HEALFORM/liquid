import { css } from '@emotion/react'
import React from 'react'

import BodyLarge from './../bodylarge'
import Headline from './../headline'
import SubHeadline from './../subheadline'
import { FeatureCard, FeatureCardProps } from './FeatureCard'

export default {
  component: FeatureCard,
  title: 'Components/Card/Feature',
}

const cardStyles = () => css`
  min-height: 120px;
  max-width: 90vw;
  max-height: 90vh;
  margin-bottom: 1rem;
  width: 600px;
`

export const Base = (args: FeatureCardProps) => (
  <>
    <FeatureCard css={cardStyles} {...args}>
      <SubHeadline as={'h5'}>Pathogenese</SubHeadline>
      <Headline size={'one'} as={'h2'}>
        Patienten berichten über diverse Anwendungsmöglichkeiten
      </Headline>
      <BodyLarge>
        Wir distanzieren uns von jeglichen Heilaussagen oder Versprechungen. Alle Aussagen sind im Sinne des
        Heilmittelwerbegesetzes zu verstehen.
      </BodyLarge>
    </FeatureCard>
  </>
)
