import { Box } from '@chakra-ui/react'
import tokens from '@healform/design-tokens/dist/js/tokens'
import { lighten } from 'polished'
import React from 'react'

import { Body } from '../Body'
import { Link } from './Link'

export default {
  title: 'Typography/Link',
  component: Link,
  argTypes: {
    children: {
      description: 'Inner element or text for element',
      table: {
        type: { summary: 'text|node' },
      },
    },
    variant: {
      name: 'Variant',
      type: { name: 'string', required: false },
      description: 'Visual variant',
      table: {
        type: { summary: 'primary|reverse' },
      },
      control: {
        type: 'radio',
        options: ['inherit', 'primary', 'reverse'],
        labels: {
          inherit: 'Inherit',
          primary: 'Primary',
          reverse: 'Reverse',
        },
      },
    },
    size: {
      name: 'Size',
      type: { name: 'string', required: false },
      description: 'Different sizes of text',
      table: {
        type: { summary: 'one|two' },
      },
      control: {
        type: 'radio',
        options: ['one', 'two'],
        labels: {
          one: 'One',
          two: 'Two',
        },
      },
    },
    href: {
      description: 'Target address',
    },
    isExternal: {
      description: 'Use when link is external',
      table: {
        type: {
          detail: 'Adding the `isExternal` prop will also add an icon & appropriate HTML attributes. ',
        },
        defaultValue: { summary: 'false' },
      },
    },
  },
}

const Template = args => <Link {...args} />

export const Base = Template.bind({})
Base.args = { children: 'Link text', href: '#' }

export const ParagraphLink = () => (
  <Body>
    Die erste Kryosauna in Kassel, Baunatal und Warburg gilt als eine moderne Ganzkörperkälteanwendung bei{' '}
    <Link rel="noopener" target="_blank" href="https://healform.de/">
      HEALFORM
    </Link>
    , für diverse Möglichkeiten der Anwendung.
  </Body>
)

export const LongParagraphLink = () => (
  <Body>
    Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a
    group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence
    of ideas among sentences is what constitutes a paragraph. A paragraph is defined as “a group of sentences or a
    single sentence that forms a unit” (Lunsford and Connors 116). Length and appearance do not determine whether a
    section in a paper is a paragraph. For instance, in some styles of writing, particularly journalistic styles, a
    paragraph can be just one sentence long.{' '}
    <Link href="#" variant={'primary'}>
      Ultimately, a paragraph is a sentence or group of sentences that support one main idea.
    </Link>{' '}
    In this handout, we will refer to this as the “controlling idea,” because it controls what happens in the rest of
    the paragraph.
  </Body>
)

export const SizeOneLink = Template.bind({})
SizeOneLink.args = { children: 'Link text', href: '#', size: 'one' }

export const SizeTwoLink = Template.bind({})
SizeTwoLink.args = { children: 'Link text', href: '#', size: 'two' }

export const ExternalLink = Template.bind({})
ExternalLink.args = { children: 'Link text', href: '#', isExternal: true }

export const SizeOneExternalLink = Template.bind({})
SizeOneExternalLink.args = {
  children: 'Link text',
  href: '#',
  size: 'one',
  isExternal: true,
}

export const SizeTwoExternalLink = Template.bind({})
SizeTwoExternalLink.args = {
  children: 'Link text',
  href: '#',
  size: 'two',
  isExternal: true,
}

export const SizeTwoExternalLongLink = Template.bind({})
SizeTwoExternalLongLink.args = {
  children: 'This is a very long link that should wrap when it needs to.',
  href: '#',
  size: 'two',
  isExternal: true,
  maxWidth: '100px',
}

export const ReverseLink = Template.bind({})
ReverseLink.args = { children: 'Link text', href: '#', variant: 'reverse' }
ReverseLink.parameters = {
  backgrounds: { default: 'dark' },
}

export const SizeOneReverseLink = Template.bind({})
SizeOneReverseLink.args = {
  children: 'Link text',
  href: '#',
  size: 'one',
  variant: 'reverse',
}
SizeOneReverseLink.parameters = {
  backgrounds: { default: 'dark' },
}

export const SizeSevenReverseLink = Template.bind({})
SizeSevenReverseLink.args = {
  children: 'Link text',
  href: '#',
  size: 'two',
  variant: 'reverse',
}
SizeSevenReverseLink.parameters = {
  backgrounds: { default: 'dark' },
}

export const ReverseExternalLink = Template.bind({})
ReverseExternalLink.args = {
  children: 'Link text',
  href: '#',
  isExternal: true,
  variant: 'reverse',
}

ReverseExternalLink.parameters = {
  backgrounds: { default: 'dark' },
}

export const ParagraphLinkReverse = () => (
  <Body color="gray.50">
    Create consistency for the entire incident response lifecycle with{' '}
    <Link variant="reverse" rel="noopener" target="_blank" href="https://firehydrant.io/">
      FireHydrant
    </Link>
    , the incident management platform for teams of all sizes.
  </Body>
)

ParagraphLinkReverse.parameters = {
  backgrounds: { default: 'dark' },
}

export const LongParagraphLinkReverse = () => (
  <Body color="gray.50">
    Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a
    group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence
    of ideas among sentences is what constitutes a paragraph. A paragraph is defined as “a group of sentences or a
    single sentence that forms a unit” (Lunsford and Connors 116). Length and appearance do not determine whether a
    section in a paper is a paragraph. For instance, in some styles of writing, particularly journalistic styles, a
    paragraph can be just one sentence long.{' '}
    <Link variant="reverse" href="#" isExternal>
      Ultimately, a paragraph is a sentence or group of sentences that support one main idea.
    </Link>{' '}
    In this handout, we will refer to this as the “controlling idea,” because it controls what happens in the rest of
    the paragraph.
  </Body>
)

LongParagraphLinkReverse.parameters = {
  backgrounds: { default: 'dark' },
}

export const SizeOneReverseExternalLink = Template.bind({})
SizeOneReverseExternalLink.args = {
  children: 'Link text',
  href: '#',
  size: 'one',
  variant: 'reverse',
  isExternal: true,
}

SizeOneReverseExternalLink.parameters = {
  backgrounds: { default: 'dark' },
}

export const SizeTwoReverseExternalLink = Template.bind({})
SizeTwoReverseExternalLink.args = {
  children: 'Link text',
  href: '#',
  size: 'two',
  variant: 'reverse',
  isExternal: true,
}

SizeTwoReverseExternalLink.parameters = {
  backgrounds: { default: 'dark' },
}

export const SizeTwoReverseExternalLongLink = Template.bind({})
SizeTwoReverseExternalLongLink.args = {
  children: 'This is a very long link that should wrap when it needs to.',
  href: '#',
  size: 'two',
  isExternal: true,
  variant: 'reverse',
  maxWidth: '100px',
}

SizeTwoReverseExternalLongLink.parameters = {
  backgrounds: { default: 'dark' },
}

export const InheritExample = () => (
  <Box textAlign={'center'} p={3} bg={lighten(0.3, tokens.colors.secondary.value)}>
    <Body noMargin>
      🎉 Das neue HEALFORM ist da: komplett re-designed und alles neu. Entdeckt die neuen Funktionen.&nbsp;
      <a href={'/features'}>
        <Link variant={'inherit'} href={'/features'}>
          Was ist neu →
        </Link>
      </a>
    </Body>
  </Box>
)
