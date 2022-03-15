import React, {useState, useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import {query_post as query,query_get as get} from "../ajax";
import {message, Tag,Carousel,Image,Progress,Button} from "antd";
import { PlayCircleOutlined,PauseCircleOutlined } from '@ant-design/icons';
import {SMMainInitPrettyPrint} from "./main"
import 'antd/dist/antd.css';
import {BASEURL,tag_color} from './GlobalStatic';
import './SMDetail.css'

var audioE = document.createElement("audio");
let videoE = null;
import DPlayer from 'dplayer';
import Hls from 'hls.js'

const SMDetail = (props) => {

    const [data,setDate] = useState(null);
    const [backImage,setBackImage] = useState(null);
    const [percent,setPercent] = useState(0);
    const [paused,setPaused] = useState(false);
    const location = useLocation();
    const [blogid,setBlogid] = useState(location.state && location.state.id);
    const type = location.state && location.state.type;

    useEffect(function () {
        let queryData = {
            id: blogid,
            type:type
        }
        query('/blogs/queryCard',queryData,(data) => {
            if (data.status === 1){
                setDate(data.data);
                getBase64(data.data.images);
                SMMainInitPrettyPrint();
                if (data.data.multimedia){
                    //存在多媒体时
                    if (type === 'audio'){
                        audioE.src = BASEURL+"/file/queryAudio?id=" + data.data.multimedia;
                        audioE.load();
                        //设置立即播放
                        audioE.autoplay = true;
                        //设置结束后重播
                        audioE.loop = true;
                        //监听播放
                        audioE.addEventListener('timeupdate', (event) => {
                            setPercent(audioE.currentTime.toFixed(2));
                        });
                    }else if (type === 'video'){
                        videoE = new DPlayer({
                            container: document.getElementById('dplayer'),
                            lang: 'zh-cn',
                            video: {
                                url: BASEURL + "/file/queryM3U8/" + data.data.multimedia + "/video_name.m3u8",
                                pic: BASEURL + '/file/queryImage/' + data.data.images,
                                type: 'customHls',
                                customType: {
                                    customHls: function (video, player) {
                                        const hls = new Hls();
                                        hls.loadSource(video.src);
                                        hls.attachMedia(video);
                                    },
                                },
                            },
                        });
                        // video.play() // 播放
                        // video.on('ended', function() {
                        //     // 监听函数
                        // })
                    }
                }
            }else {
                message.error('查询失败:' + data.msg);
            }
        });
        return () => {
            audioE.pause();
            videoE.destroy()
        }
    },[blogid]);

    const getBase64 = (id) => {
        query('/file/query',{ids:id},function (data) {
            if (data.status === 1){
                setBackImage(data.data);
            }else {
                message.error('查询封面失败:' + data.msg);
            }
        })
    }

    const nextOrPrevOnClick = (id) =>  {
        setBlogid(id);
    };

    const audioOnClick = () => {
        audioE.paused ? audioE.play() : audioE.pause();
        setPaused(audioE.paused);
    }

    return <div className="s-content content">
        <main className="row content__page">
            {data ? <article className="column large-full entry format-standard">

                <div className="media-wrap entry__media">
                    <div className="entry__post-thumb">
                        {
                            type !== 'video' ? (backImage ? type === 'image'
                                    ? <Image src={backImage[0]} preview={false} alt=""/>
                                    : <Carousel
                                        autoplay={true}
                                        dotPosition="bottom"
                                    >
                                        {backImage.map((image) => {
                                            return <Image src={image} preview={false} width="auto" height="auto"/>
                                        })}
                                    </Carousel> : null
                            ) : <div id="dplayer"/>
                        }

                    </div>
                </div>
                {type === 'audio' ? <div className="progressAudio">
                    <Progress  type="circle" percent={percent} />
                    <Button shape="circle" icon={paused ? <PlayCircleOutlined /> : <PauseCircleOutlined />} onClick={audioOnClick}/>
                </div>:null}

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
                            {data.prev ? <a onClick={nextOrPrevOnClick.bind(this,data.prev.id)} rel="prev">
                                <span>上一篇</span>
                                {data.prev.title}
                            </a> : <a>前面没有了</a>}
                        </div>
                        <div className="entry__next">
                            {data.next ? <a onClick={nextOrPrevOnClick.bind(this,data.next.id)} rel="next">
                                <span>下一篇</span>
                                {data.next.title}
                            </a> : <a>最后一篇了</a>}
                        </div>
                    </div>
                </div>
            </article>:null}
        </main>
    </div>
}

export default SMDetail;
