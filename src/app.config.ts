export default defineAppConfig({
  window: {},
  tabBar: {
    list: [
      {
        pagePath: 'pages/ShouYe/index',
        text: '首页',
        iconPath: 'assets/images/iconPath_0.png',
        selectedIconPath: 'assets/images/selectedIconPath_0.png',
      },
      {
        pagePath: 'pages/GeRen/index',
        text: '我的',
        iconPath: 'assets/images/iconPath_1.png',
        selectedIconPath: 'assets/images/selectedIconPath_1.png',
      },
    ],
    selectedColor: '#81EEF5',
  },
  requiredBackgroundModes: [],
  requiredPrivateInfos: [],
  permissionList: [],
  pluginsList: [],
  pages: [
    'pages/StartPage_wxfe363f10829817cb/index',
    'pages/ShouYe/index',
    'pages/GeRen/index',
    'pages/YuYue/index',
    'pages/YuYueJiLu/index',
    'pages/WanShanZiLiao/index',
    'pages/XiaoFeiJiLu/index',
    'pages/TuoKeJiLu/index',
    'pages/HuiYuanQuanYi/index',
    'pages/YaoQingYouLi/index',
    'pages/MenDianLieBiao/index',
    'pages/YuYueChengGong/index',
  ],
});
