import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

addDecorator(withInfo)
addDecorator(storyFn => (
  <div style={{ textAlign: 'center', padding: '16px' }}>{storyFn()}</div>
))

function loadStories() {
  require('../src/stories')
}

configure(loadStories, module)
