const React = window.React;
const ReactDOM = window.ReactDOM;
const TinyHistory = window.TinyHistory;
const { Router, Route } = window.tinyReactRouter;

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.linkRef = React.createRef();
    console.log('home page location', props.location);
  }

  handleClick = (e) => {
    e.preventDefault();
    this.props.history.push(this.linkRef.current.getAttribute('href'));
  }

  render() {
    return (
      <div>
        <h1>Home page</h1>
        <p>
          <a ref={this.linkRef} href="/about" onClick={this.handleClick}>About</a>
        </p>
      </div>
    );
  }
}

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log('about page location', props.location);
  }

  handleClick = () => {
    this.props.history.push('/');
  }

  render() {
    return (
      <div>
        <h1>About page</h1>
        <p>
          <button onClick={this.handleClick}>Return home</button>
        </p>
      </div>
    );
  }
}

const routerMap = {
  '/': Home,
  '/about': About,
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.history = new TinyHistory();
  }

  render() {
    return (
      <Router
        history={this.history}
        routerMap={routerMap}
      />
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
