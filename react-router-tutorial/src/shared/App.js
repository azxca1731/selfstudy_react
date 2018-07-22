import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, About, Posts } from 'pages';
import Menu from 'components/Menu'

class App extends Component {

  state = {
    SplitMe: null
  }

  showSplitMe = () => {
    import('components/SplitMe')
      .then(({ default: Component }) => {
        // 불러오고 난 다음엔 컴포넌트를 state 에 집어넣습니다.
        this.setState({
          SplitMe: Component
        });
      });
  }

  render() {
    const { SplitMe } = this.state;


    return (
      <div>
        <Menu />
        {SplitMe && <SplitMe />}
        <button onClick={this.showSplitMe}>ClickMe</button>
        <hr />
        <Route exact path="/" component={Home} />
        <Switch>
          <Route path="/about/:name" component={About} />
          <Route path="/about" component={About} />
        </Switch>
        <Route path="/posts" component={Posts} />

      </div>
    );
  }
}

export default App;