import React, {useState,useEffect} from 'react'

import {SMArticleSaying,SMArticleLink} from './index'

const SMArticle = (props) => {

    return (
        <div>{
            props.listdata && props.listdata.map((item, index)=>{
                switch (item.type) {
                    case 'link':
                        return (
                            <SMArticleLink blogid={item.blogid}/>
                        )
                    case 'saying':
                        return (
                            <SMArticleSaying blogid={item.blogid}/>
                        )
                }
            })
        }</div>
    )
}

export default SMArticle;
