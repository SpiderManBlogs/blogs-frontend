import React, {useState, useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import {query_post as query} from "../ajax";
import {message, Tag} from "antd";

const tag_color = ["magenta","red","volcano","orange","gold","lime","green","cyan","blue","geekblue","purple"];

const SMDetail = (props) => {

    const [data,setDate] = useState(null);
    const [backImage,setBackImage] = useState(null);
    const location = useLocation();

    useEffect(function () {
        let queryData = {
            id: location.state && location.state.id,
            type:'image'
        }
        query('/blogs/queryCard',queryData,(data) => {
            if (data.status === 1){
                setDate(data.data);
                getBase64(data.data.images);
            }else {
                message.error('查询失败:' + data.msg);
            }
        });
    },[]);

    const getBase64 = (id) => {
        query('/file/query',{ids:id},function (data) {
            if (data.status === 1){
                setBackImage(data.data);
            }else {
                message.error('查询封面失败:' + data.msg);
            }
        })
    }

    return <div className="s-content content">
        <main className="row content__page">
            {data ? <article className="column large-full entry format-standard">

                <div className="media-wrap entry__media">
                    <div className="entry__post-thumb">
                        {backImage ? backImage.map((image) => {
                            return <img src={image} alt=""/>
                        }):null}
                    </div>
                </div>

                <div className="content__page-header entry__header">
                    <h1 className="display-1 entry__title">{data.title}</h1>
                    <ul className="entry__header-meta">
                        <li className="author">By <span>{data.create}</span></li>
                        <li className="date">{data.createTime}</li>
                        <li className="cat-links">
                            <span>{data.classify && data.classify.name}</span>
                        </li>
                    </ul>
                </div>

                <div className="entry__content" dangerouslySetInnerHTML={{__html:data.content}}>
                </div>
                <p className="entry__tags">
                    <span>Post Tags</span>
                    <span className="entry__tag-list">
                            {data.tag && data.tag.map((tag, index) => {
                                return <Tag color={tag_color[index % 11]}>{tag}</Tag>
                            })}
                            </span>
                </p>
                <div className="entry__pagenav">
                    <div className="entry__nav">
                        <div className="entry__prev">
                            <a href="#0" rel="prev">
                                <span>上一篇</span>
                                Tips on Minimalist Design
                            </a>
                        </div>
                        <div className="entry__next">
                            <a href="#0" rel="next">
                                <span>下一篇</span>
                                {data.next}
                            </a>
                        </div>
                    </div>
                </div>
            </article>:null}
        </main>
    </div>
}

export default SMDetail;
