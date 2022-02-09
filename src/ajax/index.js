import axios from "axios";
import {BASEURL} from '../base/GlobalStatic';

const saveaxios = axios.create({
    baseURL: BASEURL,
    timeout: 5000,
    headers: {'Content-Type': 'application/json','Accept':'*/*','Accept-Encoding':'gzip, deflate, br','Connection':'keep-alive'}
})

/**
 * 保存接口 post调用
 * @param url 接口地址 /开头
 * @param data 参数
 * @param callback 成功后回调
 */
export function save(url,data,callback) {
    saveaxios.post(url, data)
        .then(function (response) {
            callback && callback(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
}

/**
 * 查询接口 post调用
 * @param url 接口地址 /开头
 * @param data 参数
 * @param callback 成功后回调
 */
export function query_post(url,data,callback){
    saveaxios.post(url, data)
        .then(function (response) {
            callback && callback(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
}

/**
 * 查询接口 get调用
 * @param url 接口地址 /开头
 * @param data 参数
 * @param callback 成功后回调
 */
export function query_get(url,data,callback){
    saveaxios({url:url,params:data})
        .then(function (response) {
            callback && callback(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
}
