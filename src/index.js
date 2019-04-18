//导入
import fetch from './fetch.js'

//使用
const data=fetch.get('/v1/post/home-list',
{
    cursor: 0,
    limit: 10
})
console.log('data-------------------：',data);