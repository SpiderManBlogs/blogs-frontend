import React, {useState,useEffect} from 'react'
import {query} from "../ajax";

const SMArticleAudio = (props) => {

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
        <article className="masonry__brick entry format-audio animate-this">

            <div className="entry__thumb">
                <a href="single-audio.html" className="entry__thumb-link">
                    <img src="images/thumbs/masonry/guitarist-600.jpg"
                         srcSet="images/thumbs/masonry/guitarist-600.jpg 1x, images/thumbs/masonry/guitarist-1200.jpg 2x"
                         alt=""/>
                </a>
            </div>

            <div className="entry__text">
                <div className="entry__header">
                    <h2 className="entry__title"><a href="single-audio.html">What Your Music Preference
                        Says About You and Your Personality.</a></h2>
                    <div className="entry__meta">
                                    <span className="entry__meta-cat">
                                        <a href="category.html">Lifestyle</a>
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

export default SMArticleAudio;
