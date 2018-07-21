import React from 'react';
import ReactDom from 'react-dom';
import SearchBar from './components/search_bar';
import API_KEY from './api';


//새 컴포넌트 생성 컴포넌트는 html생성
const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    )

}
//컴포넌트 삽입 및 페이지 반영 
ReactDom.render(<App />, document.querySelector('.container'));