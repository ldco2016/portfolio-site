class DecisionTreeApp extends React.Component {
  render() {
    const title = 'Decision Tree';
    const subtitle = 'For binary life decisions, put your trust in a computer';
    const options = ['Thing One','Thing Two','Thing Four'];

    return (
      <div>
      <Header title={title} subtitle={subtitle} />
      <Action />
      <Options options={options} />
      <AddOption />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {

    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
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
        {
          this.props.options.map((option) => <Option key={option} optionText={option} />)
        }
      </div>
    );
  }
}

class Option extends React.Component {
  render () {
    return (
      <div>
        {this.props.optionText}
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
