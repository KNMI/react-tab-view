import { Tabs, Tab } from '../lib/index' // 'react-tab-view'
import ReactDOM from 'react-dom'
import React, { Component, PropTypes } from 'react'

class TestComponent extends Component {

   constructor(props) {
      super(props)
      this.state = { value: 'reactjs'}
    }

    handleChange (e) {
      this.setState({value: e})
      console.log(e)
    }

  render () {

    const headers = [{'text': 'heading 1', 'isDisabled': false},
      {'text': 'heading 2', 'isDisabled': false},
      {'text': 'heading 3', 'isDisabled': true}];

    return (
      <div>
        <Tabs headers={headers}>
          <Tab>
            <div>
              <p>This is the first tab</p>
              <p>with some content</p>
            </div>
            <div>
              <p>and some more content</p>
            </div>
          </Tab>
          <Tab>
            <p>This is the second tab</p>
          </Tab>
          <Tab>
            <p>This is the third tab</p>
          </Tab>
        </Tabs>
      </div>
    )
  }
}

ReactDOM.render(
  <TestComponent />,
  document.getElementById('root')
)
