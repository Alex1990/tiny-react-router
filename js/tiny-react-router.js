const React = window.React;

const RouterContext = React.createContext();

class Router extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // 获取初始 URL 信息
      location: props.history.getLocation(),
    };
  }

  componentDidMount() {
    const { history } = this.props;
    history.add(this.changeLocation);
    history.bindPopState();
  }

  componentWillUnmount() {
    const { history } = this.props;
    history.remove(this.changeLocation);
    history.unbindPopState();
  }

  changeLocation = () => {
    // 更新 React State
    this.setState({ location: this.props.history.getLocation() });
  }

  render() {
    return (
      <RouterContext.Provider
        value={{
          history: this.props.history,
          location: this.state.location,
        }}
      >
        {this.props.children}
      </RouterContext.Provider>
    );
  }
}

class Route extends React.Component {
  render() {
    return (
      <RouterContext.Consumer>
        {context => {
          const { location } = context;
          const { path, component } = this.props;
          const componentProps = { ...context };
          const isMatched = path === location.pathname;
          const currentComponent = isMatched
            ? React.createElement(component, componentProps)
            : null;

          return currentComponent;
        }}
      </RouterContext.Consumer>
    );
  }
}

window.tinyReactRouter = { Router, Route };
