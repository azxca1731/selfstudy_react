import React from 'react';
const PostParagraph = ({ title, upp, image, imagedes, underp }) => {
    return (
        <div className="PostParagraph">
            <h2 class="section-heading">{title}</h2>
            <p>{upp}</p>
            <img class="img-fluid" src={image} alt="" />
            <span class="caption text-muted">{imagedes}</span>
            <p>{underp}</p>
        </div>
    )
}
export default PostParagraph;