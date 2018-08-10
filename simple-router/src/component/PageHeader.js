import React from 'react';
const PageHeader = ({ title, subtittle, Background }) => {
    //나중에 여기에 사진을 넣어서 원하는 말을 쓸 수 있게
    return (
        <header className="masthead" style={{ backgroundImage: `url(${Background})` }}>
            <div className="overlay"></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-10 mx-auto">
                        <div className="site-heading">
                            <h1>{title}</h1>
                            <span className="subheading">{subtittle}</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default PageHeader;