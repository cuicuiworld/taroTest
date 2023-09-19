
      import React, { useEffect, memo } from 'react';
      import Taro from '@tarojs/taro'
      import { Toast } from '@nutui/nutui-react-taro';
      import { View } from '@tarojs/components';
      import { observer } from 'mobx-react';
      import { engine } from '../../models';

      function HomePage(props) {
        console.log('进入启动页', props, engine)
        useEffect(() => {
          console.log('监听加载变化', engine)
          if (engine.application?.loaded) {
            const app = Taro.getApp()
            console.log('启动页加载完毕', app )
            Taro.reLaunch({
              url: '/' + app.config.pages[1]
            })
          }
        }, [engine?.application?.loaded])

        return (
            <>
                {!engine?.application?.loaded ? (
                    <View
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            paddingTop: '10px',
                            paddingBottom: '10px',
                            width: '100%',
                            height: '100%'
                        }}
                    >
                      <Toast
                        visible={engine?.application?.loaded}
                        msg={'加载中'}
                        type="loading"
                        duration={0}
                      />
                    </View>
                ) : null}
            </>
        );
      }
      export default memo(observer(HomePage))
    