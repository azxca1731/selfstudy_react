import React from 'react';
import PageHeader from '../component/PageHeader';
import PostPrev from '../component/PostPrev';
//6개정도만 보여줄것
const Home = () => {
    return (
        <div>
            <PageHeader title="너도 할 수 있다" subtittle="리액트 노예 계속해서 리액트만한다." />
            <div className="container">
                <div className="row">
                    <div class="col-lg-8 col-md-10 mx-auto">
                        <PostPrev postTitle="진짜 노예 생활 시작" postSubtitle="그게 너일지 몰랐지?" />
                        <PostPrev postTitle="리액트 하기전에는 더 노잼" postSubtitle="정적인 페이지 왜이리 노잼이냐...." />
                        <PostPrev postTitle="퍼그는 극혐이야" postSubtitle="좀 익스프레스는 좋은거 같긴한데... 나머진..." />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home;