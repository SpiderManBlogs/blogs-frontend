import axios from "axios";
import { Alert } from 'antd';
import ReactDOM from 'react-dom';

const baseUrl = "http://localhost:8080/blogs_web"

const saveaxios = axios.create({
    baseURL: baseUrl,
    timeout: 5000,
    headers: {'Content-Type': 'application/json','Accept':'*/*','Accept-Encoding':'gzip, deflate, br','Connection':'keep-alive'}
})

export function save(url,data,callback) {
    saveaxios.post(url, data)
        .then(function (response) {
            callback && callback(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
}
