const React = window.React;

class Router extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: props.history.getLocation(),
    };
  }

  componentDidMount() {
    const { history } = this.props;
    history.listen(this.handleLocationChange);
  }

  componentWillUnmount() {
    const { history } = this.props;
    history.unlisten(this.handleLocationChange);
  }

  getCurrentComponent() {
    const { routerMap } = this.props;
    return routerMap[location.pathname] || null;
  }

  handleLocationChange = () => {
    this.setState({ location: this.props.history.getLocation() });
  }

  render() {
    const currentComponent = this.getCurrentComponent();
    return React.createElement(currentComponent, {
      history: this.props.history,
      location: this.state.location,
    });
  }
}

window.tinyReactRouter = { Router };
