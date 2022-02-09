import React, {useState,useEffect} from 'react'
import {query_post as query} from "../ajax";


const SMArticleVideo = (props) => {

    const [data,setDate] = useState({article:{}});

    useEffect(function () {

        let queryData = {
            id: props.blogid,
            type:'link'
        }
        query('/blogs/queryCard',queryData,(data) => {
            setDate(data.data);
        });
    },[props.article]);

    return (
        <article className="masonry__brick entry format-video animate-this">

            <div className="entry__thumb video-image">
                <a href="" data-lity className="entry__thumb-link">
                    <img src="images/thumbs/masonry/cookies-600.jpg"
                         srcSet="images/thumbs/masonry/cookies-600.jpg 1x, images/thumbs/masonry/cookies-1200.jpg 2x"
                         alt=""/>
                </a>
            </div>

            <div className="entry__text">
                <div className="entry__header">
                    <h2 className="entry__title"><a href="single-video.html">No Sugar Oatmeal
                        Cookies.</a></h2>
                    <div className="entry__meta">
                                    <span className="entry__meta-cat">
                                        <a href="category.html">Lifestyle</a>
                                        <a href="category.html">Health</a>
                                    </span>
                        <span className="entry__meta-date">
                                        <a href="single-standard.html">Apr 24, 2019</a>
                                    </span>
                    </div>
                </div>
                <div className="entry__excerpt">
                    <p>
                        Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id
                        et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi
                        officia aute incididunt velit sint in aliqua...
                    </p>
                </div>
            </div>

        </article>
    )
}

export default SMArticleVideo;
