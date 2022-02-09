import React, {useState,useEffect} from 'react'
import {query_post as query} from "../ajax";


const SMArticleImages = (props) => {

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
        <article className="masonry__brick entry format-gallery animate-this">

            <div className="entry__thumb slider">
                <div className="slider__slides">
                    <div className="slider__slide">
                        <img src="images/thumbs/masonry/gallery/slide-1-600.jpg"
                             srcSet="images/thumbs/masonry/gallery/slide-1-600.jpg 1x, images/thumbs/masonry/gallery/slide-1-1200.jpg 2x"
                             alt=""/>
                    </div>
                    <div className="slider__slide">
                        <img src="images/thumbs/masonry/gallery/slide-2-600.jpg"
                             srcSet="images/thumbs/masonry/gallery/slide-2-600.jpg 1x, images/thumbs/masonry/gallery/slide-2-1200.jpg 2x"
                             alt=""/>
                    </div>
                    <div className="slider__slide">
                        <img src="images/thumbs/masonry/gallery/slide-3-600.jpg"
                             srcSet="images/thumbs/masonry/gallery/slide-3-600.jpg 1x, images/thumbs/masonry/gallery/slide-3-1200.jpg 2x"
                             alt=""/>
                    </div>
                </div>
            </div>

            <div className="entry__text">
                <div className="entry__header">
                    <h2 className="entry__title"><a href="single-gallery.html">The Best Tropical Leaves
                        Images.</a></h2>
                    <div className="entry__meta">
                                    <span className="entry__meta-cat">
                                        <a href="category.html">Vacation</a>
                                    </span>
                        <span className="entry__meta-date">
                                        <a href="single-standard.html">Apr 23, 2019</a>
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

export default SMArticleImages;
