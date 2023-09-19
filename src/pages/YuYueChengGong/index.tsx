import { Icon, Button } from '@nutui/nutui-react-taro';
import { View, Text } from '@tarojs/components';
import { Root } from '@gui-one/material-miniapp';
import { useMemo, useCallback } from 'react';
import { observer } from 'mobx-react';
import cls from 'classnames';
import { get, set, has } from 'lodash-es';
import { Workspace } from './workspace';
import { store, engine } from '../../models';
import './index.less';
store['1387991911161856'] = new Workspace(engine);
function pageYuyuechenggong(props) {
  const $appVars = engine.runtimeVariable;
  const workspace = useMemo(() => {
    return new Workspace(engine);
  }, []);
  let $pageVars = workspace.runtimeVariable;
  let extra = {};
  const func_1387993876094976 = useCallback(
    (...args) => $pageVars.func_1387993876094976?.(args, extra),
    [extra],
  );
  return (
    <Root
      style={props.style}
      className={cls('Root_ppk2mv5wcb7', props.className)}
    >
      <View className={'View_8cy6eeupvo1'}>
        <Icon
          classPrefix={'icon'}
          color={'rgba(80,227,194,1)'}
          size={80}
          fontClassName={'icon'}
          name={'success-fill'}
          className={'Icon_q3hcvy97j01'}
        />
        <Text children={'预约成功！'} className={'Text_o983adml845'} />
        <Text
          children={'您已成功预约，可在【我的】预约记录中查看'}
          className={'Text_0pdi2cby4tj'}
        />
      </View>
      <View className={'View_783avg9kvyf'}>
        <Button
          onClick={func_1387993876094976}
          shape={'round'}
          size={'normal'}
          color={'rgba(90,211,223,1)'}
          children={'返回首页'}
          plain={false}
          block={true}
          iconClassPrefix={'icon'}
          type={'info'}
          iconFontClassName={'icon'}
          className={'Button_k9a4e8s189x'}
        />
      </View>
    </Root>
  );
}
export default observer(pageYuyuechenggong);
