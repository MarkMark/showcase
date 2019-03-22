import React from 'react'

import { storiesOf } from '@storybook/react'
import { MemoryRouter } from 'react-router'

import '../scss/showcase.scss'

import Btn from '../Components/Button/Btn'
import Mobile from '../Components/Devices/Mobile'
import Tablet from '../Components/Devices/Tablet'
import Laptop from '../Components/Devices/Laptop'
import LineBreak from '../Components/LineBreaks/LineBreak'
import Pill from '../Components/Pills/Pill'
import Expertise from '../Components/Expertise/Expertise'
import Thumb from '../Components/Thumb/Thumb'

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

storiesOf('Line break', module).add('LineBreak', () => <LineBreak />)

// TODO:
storiesOf('Thumbnails', module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .add('Thumb', () => <Thumb />)

storiesOf('Pills', module)
  .add('Pill', () => <Pill />)
  .add('Expertise', () => (
    <Expertise
      expertise={[
        'Example',
        'Example 1',
        'Example 2',
        'Example 3',
        'Example 4'
      ]}
    />
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

storiesOf('Devices/Tablets', module)
  .add('Dark', () => <Tablet />)
  .add('Dark landscape', () => <Tablet landscape={true} />)
  .add('Light', () => <Tablet shade={'light'} />)
  .add('Light landscape', () => <Tablet shade={'light'} landscape={true} />)

storiesOf('Devices/Laptops', module)
  .add('Dark', () => <Laptop />)
  .add('Dark no shadow', () => <Laptop shadow={false} />)
  .add('Light', () => <Laptop shade={'light'} />)
  .add('Light no shadow', () => <Laptop shade={'light'} shadow={false} />)
