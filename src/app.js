class DecisionTreeApp extends React.Component {
  render() {
    return (
      <div>
      <Header />
      <Action />
      <Options />
      <AddOption />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Decision Tree</h1>
        <h2>For binary life decisions, put your trust in a computer</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button>What should I do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  render () {
    return (
      <div>
        Render Options component here
        <Option />
      </div>
    );
  }
}

class Option extends React.Component {
  render () {
    return (
      <div>
        Option component here
      </div>
    );
  }
}

class AddOption extends React.Component {
  render () {
    return (
      <div>
        AddOption component here
      </div>
    );
  }
}

ReactDOM.render(<DecisionTreeApp />, document.getElementById('app'));
