import React from 'react'

import {SMArticleSaying, SMArticleLink, SMArticleImage, SMArticleImages, SMArticleAudio, SMArticleVideo} from './index'

const SMArticle = (props) => {

    return (
        <div className="masonry-wrap">
            <div className="masonry">
                <div className="grid-sizer"/>
                {props.listdata && props.listdata.map((item, index) => {
                        let blogid = item.blogid;
                        switch (item.type) {
                            case 'link':
                                return (
                                    <SMArticleLink blogid={blogid}/>
                                )
                            case 'saying':
                                return (
                                    <SMArticleSaying blogid={blogid}/>
                                )
                            case 'image':
                                return (
                                    <SMArticleImage blogid={blogid}/>
                                )
                            case 'images':
                                return (
                                    <SMArticleImages blogid={blogid}/>
                                )
                            case 'audio':
                                return (
                                    <SMArticleAudio blogid={blogid}/>
                                )
                            case 'video':
                                return (
                                    <SMArticleVideo blogid={blogid}/>
                                )
                        }
                    })
                }</div>
        </div>
    )
}

export default SMArticle;
