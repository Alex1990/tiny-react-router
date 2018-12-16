const React = window.React;

class Router extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // 获取初始 URL 信息
      location: props.history.getLocation(),
    };
  }

  componentDidMount() {
    this.props.history.add(this.changeLocation);
  }

  componentWillUnmount() {
    this.props.history.remove(this.changeLocation);
  }

  changeLocation = () => {
    // 更新 React State
    this.setState({ location: this.props.history.getLocation() });
  }

  render() {
    // routerMap 为 URL => View 映射关系配置
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
