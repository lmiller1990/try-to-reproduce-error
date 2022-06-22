import React from 'react'
import { mount } from 'cypress/react'
import { UserMenu } from './UserMenu'

it('works', () => {
  mount(<UserMenu />)
})
