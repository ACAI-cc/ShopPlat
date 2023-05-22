import { v4 as uuidv4 } from 'uuid';//as区别名

// 随机生成字符串，但游客身份持久存储
export const getUUID = () =>{
    // 先获取，没有再生成
    let uuid_token = localStorage.getItem('UUIDTOKEN');
    if (!uuid_token) {
        // 没有uuid，生成后再存储
        uuid_token = uuidv4();
        localStorage.setItem('UUIDTOKEN',uuid_token);
    }
    return uuid_token
}