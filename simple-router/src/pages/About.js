import React from 'react'
import PageHeader from '../component/PageHeader';
import { firebaseStorage } from '../config';
const About = () => {
    return (
        <div>
            <PageHeader title="ABout Me" subtittle="노가다 짓이라 말하면서 계속 코딩만 하는 변태" Background={firebaseStorage.Url + "About.jpg?alt=media&token=" + firebaseStorage.Token} />
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-10 mx-auto">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe nostrum ullam eveniet pariatur voluptates odit, fuga atque ea nobis sit soluta odio, adipisci quas excepturi maxime quae totam ducimus consectetur?</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius praesentium recusandae illo eaque architecto error, repellendus iusto reprehenderit, doloribus, minus sunt. Numquam at quae voluptatum in officia voluptas voluptatibus, minus!</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequuntur magnam, excepturi aliquid ex itaque esse est vero natus quae optio aperiam soluta voluptatibus corporis atque iste neque sit tempora!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About;