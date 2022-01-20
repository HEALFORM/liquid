import { css } from '@emotion/react'
import theme from '@healform/design-tokens/dist/js/theme'
import { action } from '@storybook/addon-actions'
import React, { Fragment } from 'react'

import Card, { CardContent, CardFooter, CardHeader, CardImage } from '.'
import Body from '../body'
import { Button } from '../button'
import ButtonGroup from '../button-group'
import Headline from '../headline'

export default {
  component: Card,
  subcomponents: { CardContent, CardFooter, CardHeader, CardImage },
  title: 'Components/card',
}

const cardStyles = () => css`
  width: 400px;
  min-height: 120px;
  max-width: 90vw;
  max-height: 90vh;
  margin-bottom: 1rem;
`

const squareStyles = () => css`
  width: 150px;
  min-height: 150px;
  max-width: 90vw;
  max-height: 90vh;
`

const contentStyles = () => css`
  background: ${theme.colors.gray['300'].value};
  width: 100%;
  height: 118px;
`

const Header = () => (
  <Headline size="three" as="h2" noMargin>
    Card heading
  </Headline>
)

const Content = () => <Body>This is some text showing in my card</Body>

export const Base = () => <Card css={cardStyles} />

export const Spacings = () => (
  <>
    <Card css={squareStyles}>
      <CardContent spacing={'small'}>
        <div css={contentStyles} />
      </CardContent>
    </Card>
    <Card css={squareStyles}>
      <CardContent spacing={'medium'}>
        <div css={contentStyles} />
      </CardContent>
    </Card>
  </>
)

export const WithHeader = () => (
  <Fragment>
    <Card css={cardStyles}>
      <CardImage src={'https://www.healform.de/img/healform_neu_3_wallpaper.jpg'} />
      <CardContent>
        <CardHeader>
          <Header />
        </CardHeader>
        <Content />
      </CardContent>
    </Card>

    <Card css={cardStyles}>
      <CardContent>
        <CardHeader onClose={action('CloseButton clicked')} closeButtonLabel="Close">
          <Header />
        </CardHeader>
        <Content />
      </CardContent>
    </Card>

    <Card css={cardStyles}>
      <CardImage />
      <CardContent spacing={'medium'}>
        <CardHeader onClose={action('CloseButton clicked')} closeButtonLabel="Close">
          <Header />
        </CardHeader>
        <Content />
      </CardContent>
    </Card>
  </Fragment>
)

export const WithFooter = () => (
  <Fragment>
    <Card css={cardStyles}>
      <CardContent>
        <Content />
        <CardFooter>
          <ButtonGroup>
            <Button>Cancel</Button>
            <Button variant="primary">Confirm</Button>
          </ButtonGroup>
        </CardFooter>
      </CardContent>
    </Card>

    <Card css={cardStyles}>
      <CardContent>
        <Content />
        <CardFooter align="left">
          <ButtonGroup align="left">
            <Button>Cancel</Button>
            <Button variant="primary">Confirm</Button>
          </ButtonGroup>
        </CardFooter>
      </CardContent>
    </Card>
  </Fragment>
)

export const WithFooterLink = () => (
  <Fragment>
    <Card css={cardStyles}>
      <CardContent>
        <Content />
        <CardFooter align={'left'}>
          <Button>Learn more</Button>
        </CardFooter>
      </CardContent>
    </Card>
  </Fragment>
)

export const Complete = () => (
  <Fragment>
    <Card css={cardStyles}>
      <CardImage src={'https://www.healform.de/img/healform_neu_3_wallpaper.jpg'} />
      <CardContent>
        <CardHeader>
          <Header />
        </CardHeader>
        <Content />
        <CardFooter align="left">
          <ButtonGroup align="left">
            <Button variant="primary">Confirm</Button>
            <Button>Cancel</Button>
          </ButtonGroup>
        </CardFooter>
      </CardContent>
    </Card>
  </Fragment>
)
