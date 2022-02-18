import React from 'react'

import { BodyLarge } from '../BodyLarge'
import { Headline } from '../Headline'
import { SubHeadline } from '../SubHeadline'
import { FeatureCard, FeatureCardProps } from './FeatureCard'

export default {
  title: 'Recipes/FeatureCard',
  component: FeatureCard,
}

export const Base = (args: FeatureCardProps) => (
  <>
    <FeatureCard {...args} style={{ minHeight: '120px', maxWidth: '90vw', width: '600px' }}>
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
