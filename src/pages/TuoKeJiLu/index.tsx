import { View, Text } from '@tarojs/components';
import { Root, Image } from '@gui-one/material-miniapp';
import { useMemo, useCallback } from 'react';
import { observer } from 'mobx-react';
import cls from 'classnames';
import { get, set, has } from 'lodash-es';
import { Workspace } from './workspace';
import { store, engine } from '../../models';
import './index.less';
store['1387561072771072'] = new Workspace(engine);
function pageTuokejilu(props) {
  const $appVars = engine.runtimeVariable;
  const workspace = useMemo(() => {
    return new Workspace(engine);
  }, []);
  let $pageVars = workspace.runtimeVariable;
  let extra = {};
  return (
    <Root
      style={props.style}
      className={cls('Root_0g52t7txvua', props.className)}
    >
      <Image
        mode={'widthFix'}
        src={'personalImg/9/80dfbaf8-caae-4578-b8c1-0bb7700d834a.png'}
        className={'Image_z2x410ubrnk'}
      />
      <View className={'View_vym30dqsdht'}>
        <View className={'View_yo9qpn63660'}>
          <Text children={'已分享好友数'} className={'Text_605ws2t5h86'} />
          <Text children={'30'} className={'Text_nhwkwd58b9r'} />
        </View>
        <View className={'View_1kg0fiqywsi'}>
          <Text children={'已获现金'} className={'Text_8979a218mkv'} />
          <Text children={'30'} className={'Text_ioqo2ihqgcr'} />
        </View>
      </View>
      <View className={'View_8xqn1wkon77'}>
        <View className={'View_s7juq7b14tb'}>
          <Text children={'微信用户'} className={'Text_144rntof2q9'} />
          <Text children={'132****9099'} className={'Text_dmy3m4tle10'} />
          <Text
            children={'2023-10-11 12:22:00'}
            className={'Text_09e9sucerym'}
          />
        </View>
      </View>
    </Root>
  );
}
export default observer(pageTuokejilu);
