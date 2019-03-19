import React from 'react'
import { create } from 'react-test-renderer'

import Pill from '../Components/Pills/Pill'

describe('Pill component', () => {
  test('it matches the snapshot', () => {
    const COMPONENT = create(<Pill text={'Test'} />)

    expect(COMPONENT.toJSON()).toMatchSnapshot()
  })
})
