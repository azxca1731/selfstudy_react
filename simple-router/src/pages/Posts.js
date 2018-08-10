import React from 'react';
import PageHeader from '../component/PageHeader';
import PostParagraph from '../component/PostParagraph';
//포스트 예시 나중에 바꿀것
const Posts = () => {
    return (
        <div>
            <PageHeader title="포스트 예시" subtittle="여려가지의 포스트 파라그래프를 연달아 하는것으로 한다" Background="" />
            <div className="container">
                <div className="row">
                    <div class="col-lg-8 col-md-10 mx-auto">
                        <PostParagraph title="이렇게 된다" upp="진짜 기나긴 하루 끝에 자고 싶다." underp="바로 연속으로 할려면 이렇겡!" />
                        <PostParagraph upp="이러면 연속으로 쓰이고 그리고 패러그래프도 나뉜다." />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Posts;