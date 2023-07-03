import React from 'react'

function SonA(props) {
  return (
    <div>
      SonA
      {props.msg}
    </div>
  )
}

function SonB(props) {
  return (
    <div>
      SonB
      <button onClick={() => props.changeMsg('new message')}>changeMsg</button>
    </div>
  )
}

class App extends React.Component {
  state = {
    message: 'this is message',
  }
  changeMsg = (newMsg) => {
    this.setState({
      message: newMsg,
    })
  }

  render() {
    return (
      <>
        <SonA msg={this.state.message} />

        <SonB changeMsg={this.changeMsg} />
      </>
    )
  }
}

export default App
