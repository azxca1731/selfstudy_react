import React from 'react';
import PageHeader from '../component/PageHeader';
export const Whoops404 = ({ location }) => {
    return (
        <div className="whoops-404">
            <PageHeader title="잘못된 접근입니다!" />
            <div class="col-lg-8 col-md-10 mx-auto">
                <h1>'{location.pathname}'경로의 자원을 찾을 수 없습니다.</h1>
            </div>
        </div>
    )
}
export default Whoops404;