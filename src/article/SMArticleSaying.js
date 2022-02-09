import React, {useState,useEffect} from 'react'
import {query_post as query} from "../ajax";


const SMArticleSaying = (props) => {

    const [data,setDate] = useState({article:{}});

    useEffect(function () {

        let queryData = {
            id: props.blogid,
            type:'saying'
        }
        query('/blogs/queryCard',queryData,(data) => {
            setDate(data.data);
        });
    },[props.article]);

    return (
        <article className="masonry__brick entry format-quote animate-this">
            <div className="entry__thumb">
                <blockquote>
                    <p>{data.saying}</p>
                    <cite>{data.provenance}</cite>
                </blockquote>
            </div>

        </article>
    )
}

export default SMArticleSaying;
