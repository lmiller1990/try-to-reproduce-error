import Alert from './Alert'
import React from 'react'
import { mount } from 'cypress/react'
import { FunctionComponent } from 'react'
​
const alertMsg = 'expected test message'
​
const Message: FunctionComponent<React.PropsWithChildren<unknown>> = () => {
  return <div>{alertMsg}</div>
}
​
const alert = (
  <Alert type="info" title="A title" id="alert" message={<Message />} />
)
​
it('Alert accessibility', () => {
  mount(alert, true)
  cy.get('[id=alert]').should('include.text', alertMsg)
})