import React, {useState,useEffect} from 'react'
import {query_post as query} from "../ajax";
import {message, Tag} from "antd";

const tag_color = ["magenta","red","volcano","orange","gold","lime","green","cyan","blue","geekblue","purple"];

const SMArticleImage = (props) => {

    const [data,setDate] = useState(null);

    const [backImage,setBackImage] = useState(null);

    useEffect(function () {

        let queryData = {
            id: props.blogid,
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

    return (
        data ? <article className="masonry__brick entry format-standard animate-this">

            <div className="entry__thumb">
                <a href="single-standard.html" className="entry__thumb-link">
                    {backImage ? backImage.map((image) => {
                        return <img src={image} alt=""/>
                    }):null}
                </a>
            </div>

            <div className="entry__text">
                <div className="entry__header">
                    <h2 className="entry__title"><a href="single-standard.html">{data.title}</a></h2>
                    <div className="entry__meta">
                        <span className="entry__meta-date" >{data.createTime}</span>

                        <span className="entry__meta-cat" >
                                        <a href="category.html">{data.classify && data.classify.name}</a>
                                    </span>
                        <span className="entry__meta-date" >{data.tag && data.tag.map((tag, index) => {
                            return <Tag color={tag_color[index % 11]}>{tag}</Tag>
                        })}</span>

                    </div>
                </div>
                <div className="entry__excerpt">
                    <p>{data.describe}</p>
                </div>
            </div>

        </article> : <article className="masonry__brick entry format-standard animate-this"><div className="entry__text">
            <div className="entry__header">
                <h2 className="entry__title">查询错误</h2>
            </div>
        </div></article>
    )
}

export default SMArticleImage;
