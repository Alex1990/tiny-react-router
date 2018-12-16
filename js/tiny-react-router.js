const React = window.React;

class Router extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: props.history.getLocation(),
    };
  }

  changeLocation = () => {
    this.setState({ location: this.props.history.getLocation() });
  }

  render() {
    const { routerMap } = this.props;
    const currentComponent = routerMap[location.pathname] || null;

    return React.createElement(currentComponent, {
      history: this.props.history,
      location: this.state.location,
      changeLocation: this.changeLocation,
    });
  }
}

window.tinyReactRouter = { Router };
