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
      </div>
    );
  }
}

class AddOption extends React.Component {
  render () {
    return (
      <div>
        Render AddOption component here
      </div>
    );
  }
}

const jsx = (
  <div>
    <Header />
    <Action />
    <Options />
    <AddOption />
  </div>
);

ReactDOM.render(jsx, document.getElementById('app'));
