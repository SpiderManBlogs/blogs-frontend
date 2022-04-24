import React, {useState, useEffect} from 'react'
import {query_post as query} from '../ajax/index'
import SMArticle from "../article/SMArticle";
import {useNavigate} from 'react-router-dom'
import 'antd/dist/antd.css';

const SMContent = (props) => {

    const [data, setDate] = useState({listdata: {pageThis: 0}});
    const navigate = useNavigate();

    useEffect(function () {
        let queryData = {
            pageThis: data.pageThis
        }
        query('/blogs/queryList', queryData, (data) => {
            setDate(data);
        });
    }, [props.listdata]);

    const rowClick = (page) => {
        navigate('/blogs/home', {state: {...page}});
    }

    const rows = () => {
        let rowArray = [];
        if(!data.count){
            return rowArray;
        }
        let sumPage = Math.ceil(data.count/data.pageSize);
        let pageThis = data.pageThis+1;
        if(pageThis !== 1){
            rowArray.push(<li><a className="pgn__prev" onClick={rowClick(pageThis-1)} >Prev</a></li>);
        }
        for (let i = 1; i <=sumPage;i++) {
            if(pageThis === i){
                rowArray.push(<li><a className="pgn__num current">{i}</a></li>);
            }else{
                rowArray.push(<li><a className="pgn__num" onClick={rowClick(i)} >{i}</a></li>);
            }
        }
        if(pageThis !== sumPage){
            rowArray.push(<li><a className="pgn__next" onClick={rowClick(pageThis+1)} >Next</a></li>);
        }
        return rowArray;
    }

    return (
        <div className="s-content">
            <SMArticle listdata={data.data}/>
            <div className="row">
                <div className="column large-full">
                    <nav className="pgn">
                        <ul>
                            {rows().map((item, index) => {
                                return item;
                            })}
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default SMContent;
