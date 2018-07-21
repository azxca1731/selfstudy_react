import React from 'react';

const Videodetail = ({ video }) => {
    //render가 비동기라 props비동기 처리를 해줘야함
    if (!video) {
        return <div>Loading...</div>;
    }

    const videoId = video.id.videoId;
    //const url = 'https://www.youtube.com/embed/' + videoID;
    const url = `https://www.youtube.com/embed/${videoId}`;
    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url}></iframe>
            </div>
            <div className="deatails">
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    )
}
export default Videodetail;