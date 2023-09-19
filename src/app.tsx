import { Component } from 'react';
import { Provider } from 'mobx-react';
import Taro from '@tarojs/taro';
import { ConfigProvider } from '@nutui/nutui-react-taro';
import { RuntimeRegistry } from '@gui-one/runtime';
import { navigateTo, reLaunch, redirectTo } from '@gui-one/function-miniapp';
import * as _blockComponents from './components';
import * as _flowComponents from './flowComponents';
import customFuncs from './customFuncs';
import { store, engine } from './models';
import { RuntimeVariable } from './models/runtimeVariable';
import { files } from './files';
import { fetchPost } from './fetch';
import './custom-variables.scss';
import '@nutui/nutui-react-taro/dist/style.css';
import './app.scss';
import './animate.css';
import './assets/fonts/font_3540167_pcgdq9np25.css';

engine.application.userInterface = {
  call: '/gui/method/callMethod',
  uploadFiles: '/gui/common/uploadFiles',
  param: '/gui/commonQuery/method_compileList',
  uploadImg: '/gui/common/uploadImg',
  uploadImgs: '/gui/common/uploadImgs',
};
engine.application.mode = 'miniapp';
engine.application.iconSymbolUrl =
  '//at.alicdn.com/t/c/font_3540167_pcgdq9np25.js';
engine.application.serverHost = 'https://gateway.51grp.com/';
engine.application.touristappid = 'wxfe363f10829817cb';
engine.application.currentDomainInfo = {};
engine.application.productId = 49;
engine.application.userId = 9;
engine.runtimeVariable = new RuntimeVariable();
engine.sourceCode.files = files;

RuntimeRegistry.registerBlockComponents(_blockComponents);
RuntimeRegistry.registerFlowComponents(_flowComponents);
RuntimeRegistry.registerInternalFunctions({ navigateTo, reLaunch, redirectTo });
RuntimeRegistry.registerCustomNodeFunctions(customFuncs);
window['goOssPrefix'] = engine.application.userInterface.aliImgUrl;
window['__DESINGER_ENGINE__'] = engine;

window['gui-one-fetch'] = fetchPost;

class App extends Component {
  // onLaunch() {
  //   console.log('App-onLaunch')
  // }
  onLaunch() {
    engine.application.platform = Taro.getEnv();
    engine.application.miniAppAccountInfo = Taro.getAccountInfoSync();
    (async () => {
      if (fetchPost) {
        const result = await fetchPost(
          engine.application.serverHost + 'wechat/domainConfig/get',
          {
            wechatId: engine.application.touristappid,
          },
        );
        const ossResult = await fetchPost(
          engine.application.serverHost + 'wechat/envParamConfig/get',
          {
            wechatId: engine.application.touristappid,
          },
        );
        if (ossResult?.data?.code === 100 && ossResult?.data?.data?.length) {
          ossResult?.data?.data?.forEach((item) => {
            if (engine.application.currentDomainInfo) {
              engine.application.currentDomainInfo[item?.env + 'OSS'] =
                item?.minioMapping;
            }
          });
        }
        if (result?.data?.code === 100 && result?.data?.data?.length) {
          result?.data?.data?.forEach((item) => {
            if (engine.application.currentDomainInfo) {
              engine.application.currentDomainInfo[item?.type] = item?.domain;
            }
          });
          engine.application.loaded = true;
          console.log(
            'currentDomainInfo',
            engine.application.currentDomainInfo,
          );
          window['gui-one-domain'] = engine.application.currentDomainInfo;
        }
      }
      const app = Taro.getApp();
      console.log('项目初始化完毕', app, app.config.pages);
      Taro.reLaunch({
        url: '/' + app.config.pages[1],
      });
    })();
  }

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  // this.props.children 就是要渲染的页面
  render() {
    return (
      <ConfigProvider theme={{}}>
        <Provider store={store}>{this.props.children}</Provider>
      </ConfigProvider>
    );
  }
}

export default App;
