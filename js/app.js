const React = window.React;
const ReactDOM = window.ReactDOM;
const tinyHistory = window.tinyHistory;
const { Router, Route } = window.tinyReactRouter;

// 首页

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.linkRef = React.createRef();
    console.log('home page location', props.location);
  }

  handleClick = (e) => {
    e.preventDefault();
    // 更新 URL
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

// 关于页

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log('about page location', props.location);
  }

  handleClick = () => {
    // 更新 URL
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

class App extends React.Component {
  render() {
    return (
      <Router history={tinyHistory}>
        <h1>A tiny react router</h1>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
