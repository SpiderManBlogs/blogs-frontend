import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import {query_post as query} from "../ajax";
import {message, Tag,Carousel,Image } from "antd";

import {BASEURL,tag_color} from '../base/GlobalStatic';

const SMArticleImage = (props) => {

    const [data,setDate] = useState(null);

    useEffect(function () {

        let queryData = {
            id: props.blogid,
            type:'image'
        }
        query('/blogs/queryCard',queryData,(data) => {
            if (data.status === 1){
                setDate(data.data);
            }else {
                message.error('查询失败:' + data.msg);
            }
        });
    },[]);

    const navigate = useNavigate();
    const linktoDetail = (id) => {
        navigate('/detail',{state:{id:id,type:props.type}});
    }

    return (
        data ? <article className="masonry__brick entry format-standard animate-this">

            {props.type === 'image' ? <div className="entry__thumb">
                <a onClick={linktoDetail.bind(this, data.id)} className="entry__thumb-link">
                    <Image src={BASEURL + "/file/queryImage/" + data.images[0]}/>
                </a>
            </div> : <Carousel
                autoplay={true}
                dotPosition="bottom"
                dots={true}
            >
                {data.images.map((image) => {
                    return <Image src={BASEURL + "/file/queryImage/" + image} preview={false}/>
                })}
            </Carousel>}

            <div className="entry__text">
                <div className="entry__header">
                    <h2 className="entry__title"><a onClick={linktoDetail.bind(this,data.id)}>{data.title}</a></h2>
                    <div className="entry__meta">
                        <span className="entry__meta-date" >{data.createTime}</span>

                        <span className="entry__meta-cat" >
                                        <a href="category.html">{data.classify && data.classify.defdocname}</a>
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
