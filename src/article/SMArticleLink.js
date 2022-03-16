import React, {useState,useEffect} from 'react'
import {query_post as query} from "../ajax";
import {SMContentInit} from "../base/main";


const SMArticleLink = (props) => {

    const [data,setDate] = useState({article:{}});

    useEffect(function () {

        let queryData = {
            id: props.blogid,
            type:'link'
        }
        query('/blogs/queryCard',queryData,(data) => {
            setDate(data.data);
            SMContentInit();
        });
    },[props.article]);

    return (
        <article className="masonry__brick entry format-link">

            <div className="entry__thumb">
                <div className="link-wrap">
                    <h2>{data.sketch}</h2>
                    <cite>
                        <a target="_blank" href={data.url}>{data.url}</a>
                    </cite>
                </div>
            </div>

        </article>
    )
}

export default SMArticleLink;
