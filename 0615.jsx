import React, { createCon } from 'react'

//1，创建context对象
const { Provider, Consumer } = createContext()

function ComC() {
  return <Consumer>{(value) => <div>{value}</div>}</Consumer>
}

function ComA() {
  return <Comc />
}

//2.提供数据
class App extends React.Component {
  state = {
    message: 'this is message',
  }
  render() {
    return (
      <Provider value={this.state.message}>
        <div className="app">
          <ComA />
        </div>
      </Provider>
    )
  }
}

export default App
