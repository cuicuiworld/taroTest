
        import Taro from '@tarojs/taro';
        export const fetchPost = (url, data: any, headers: any) => {
          const header = {
            'content-type': 'application/json',
            ...(headers ? headers : {})
          }
          return Taro.request({ url, method: 'POST', data: data, header });
        };
  