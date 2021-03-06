import _ from 'lodash';
import React, { Component } from 'react';
import ReactDom from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'
import API_KEY from './api';



//새 컴포넌트 생성 컴포넌트는 html생성
class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        }

        this.videoSearch('자희');
    }

    videoSearch = (term) => {
        YTSearch({ key: API_KEY, term: term }, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            })
            //= this.setState({ videos: videos})
        })
    }

    render() {
        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
        const { videos, selectedVideo } = this.state;
        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video={selectedVideo} />
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
                    videos={videos} />
            </div>
        )
    }
}
//컴포넌트 삽입 및 페이지 반영 
ReactDom.render(<App />, document.querySelector('.container'));