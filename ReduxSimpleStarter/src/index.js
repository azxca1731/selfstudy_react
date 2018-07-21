import React, { Component } from 'react';
import ReactDom from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';

import API_KEY from './api';



//새 컴포넌트 생성 컴포넌트는 html생성
class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: []
        }

        YTSearch({ key: API_KEY, term: 'surfboards' }, (videos) => {
            this.setState({ videos })
            //= this.setState({ videos: videos})
        })
    }
    render() {
        return (
            <div>
                <SearchBar />
            </div>
        )
    }
}
//컴포넌트 삽입 및 페이지 반영 
ReactDom.render(<App />, document.querySelector('.container'));