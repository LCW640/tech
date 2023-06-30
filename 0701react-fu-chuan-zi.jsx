class App extends React.Component {
  state = {
    message: 'this is message',
  }
  render() {
    return (
      <div>
        <div>父组件</div>
        <FSon
          msg={this.state.message}
          age={20}
          isMan={true}
          cb={() => {
            console.log(1)
          }}
          child={<span>this is child</span>}
        />
        <CSon msg={this.state.message} />
      </div>
    )
  }
}
