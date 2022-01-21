import { Meta, Story } from '@storybook/react'
import React from 'react'

import { Body } from '../body'
import { Button } from '../button'
import { Headline } from '../headline'
import Modal from './Modal'
import { ModalProps } from './Modal'

const meta: Meta<ModalProps> = {
  title: 'Components/Modal',
  component: Modal,
  argTypes: {
    overlay: { table: { disable: true }, control: { disable: true } },
    disclosure: { table: { disable: true }, control: { disable: true } },
  },
  args: {
    showOnCreate: true,
  },
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const Template: Story<ModalProps> = args => (
  <Modal {...args} disclosure={<Button>Open</Button>}>
    {({ hide }) => (
      <>
        <Modal.Header>
          <Headline as={'h5'}>Hello Liquid</Headline>
        </Modal.Header>
        <Modal.Body>
          <Body>How are you doing?</Body>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={() => {
              alert('Great')
              hide()
            }}
            variant="tertiary"
          >
            Cool
          </Button>
          <Button
            onClick={() => {
              alert('Anw...')
              hide()
            }}
            variant="tertiary"
          >
            Sad
          </Button>
        </Modal.Footer>
      </>
    )}
  </Modal>
)

export const Default = Template.bind({})

Default.args = {
  ariaLabel: 'Modal example',
}

export const WithCustomization = Template.bind({})

WithCustomization.args = {
  ariaLabel: 'Modal example',
  bgGradient: ['linear(to top, yellow.600, yellow.500)', 'linear(to top, cyan.600, cyan.500)'],
  color: 'white',
  width: ['100%', '300px'],
}

export const WithLongContent: Story<ModalProps> = args => (
  <Modal {...args} disclosure={<Button>Open</Button>}>
    <Modal.Header>
      <Headline as={'h5'}>Hello Liquid</Headline>
    </Modal.Header>
    <Modal.Body spacing={4}>
      <Body>I have something very long to tell you...</Body>
      <Body>
        But first, you can change how the modal will be scrolled by using the <code>scrollBehavior</code> prop.
      </Body>
      <Body>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias dolorem explicabo, hic libero minima
        repellendus. Aut corporis deleniti expedita ipsa libero possimus temporibus voluptatem voluptatibus? Dolorem eum
        iure laborum minima.
      </Body>
      <Body>
        Accusantium aliquid amet commodi delectus deserunt distinctio dolorem est excepturi explicabo fugit laborum
        maiores modi molestias mollitia nesciunt nisi officia optio quas qui quos similique, sit sunt tempore ut vero.
      </Body>
      <Body>
        Consequatur dicta doloremque ea enim ex explicabo, facilis, id inventore itaque labore minima neque pariatur
        perferendis, quasi totam! Consequatur harum ipsum laborum minus quasi ratione ullam velit. Asperiores explicabo,
        modi.
      </Body>
      <Body>
        Accusamus aliquam animi beatae consectetur debitis dolorem error esse est expedita fugiat id illum, impedit ipsa
        ipsam iusto libero molestias, necessitatibus obcaecati officia praesentium provident quaerat quia quidem
        quisquam vero.
      </Body>
      <Body>
        Expedita iure reiciendis sapiente soluta voluptate. Aspernatur, consequuntur dignissimos dolorem eaque enim hic
        illum iure laudantium libero magnam minima minus officia praesentium quisquam, quos repellat soluta veniam,
        voluptas voluptates voluptatum?
      </Body>
      <Body>
        Expedita iure reiciendis sapiente soluta voluptate. Aspernatur, consequuntur dignissimos dolorem eaque enim hic
        illum iure laudantium libero magnam minima minus officia praesentium quisquam, quos repellat soluta veniam,
        voluptas voluptates voluptatum?
      </Body>
      <Body>
        Expedita iure reiciendis sapiente soluta voluptate. Aspernatur, consequuntur dignissimos dolorem eaque enim hic
        illum iure laudantium libero magnam minima minus officia praesentium quisquam, quos repellat soluta veniam,
        voluptas voluptates voluptatum?
      </Body>
      <Body>
        Expedita iure reiciendis sapiente soluta voluptate. Aspernatur, consequuntur dignissimos dolorem eaque enim hic
        illum iure laudantium libero magnam minima minus officia praesentium quisquam, quos repellat soluta veniam,
        voluptas voluptates voluptatum?
      </Body>
      <Body>
        Expedita iure reiciendis sapiente soluta voluptate. Aspernatur, consequuntur dignissimos dolorem eaque enim hic
        illum iure laudantium libero magnam minima minus officia praesentium quisquam, quos repellat soluta veniam,
        voluptas voluptates voluptatum?
      </Body>
    </Modal.Body>
  </Modal>
)

WithLongContent.args = {
  ...Default.args,
}
