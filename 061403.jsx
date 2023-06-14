import React from 'react'

//子组件a
function SonA(props) {
  return (
    <div>
      SonA
      {props.msg}
    </div>
  )
}
//子组件b
function Sonb(props) {
  return (
    <div>
      SonB
      <button onClick={() => props.changeMsg('new message')}>changeMsg</button>
    </div>
  )
}

//父组件
class App extends React.Component {
  //父组件提供状态数据
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
        {/* 接收数据的组件 */}
        <SonA msg={this.state.message} />
        {/* 修改数据的组件 */}
        <SonB msg={this.state.changeMsg} />
      </>
    )
  }
}

export default App
