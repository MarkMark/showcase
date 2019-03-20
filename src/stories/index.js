import React from 'react'

import { storiesOf } from '@storybook/react'
import { MemoryRouter } from 'react-router'

import '../scss/showcase.scss'

import Btn from '../Components/Button/Btn'
import Mobile from '../Components/Devices/Mobile'

storiesOf('Buttons', module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .add('Primary', () => <Btn />)
  .add('Primary custom text', () => <Btn text="Click me!" />)
  .add('Flat', () => <Btn classes={'a-buttonFlat'} />)
  .add('Flat custom text', () => (
    <Btn classes={'a-buttonFlat'} text="Click me!" />
  ))

storiesOf('Devices/Mobiles', module)
  .add('Dark', () => <Mobile />)
  .add('Dark no notch', () => <Mobile notch={false} />)
  .add('Dark landscape', () => <Mobile landscape={true} />)
  .add('Light', () => <Mobile shade={'light'} />)
  .add('Light no notch', () => <Mobile shade={'light'} notch={false} />)
  .add('Light no notch landscape', () => (
    <Mobile shade={'light'} notch={false} landscape={true} />
  ))
