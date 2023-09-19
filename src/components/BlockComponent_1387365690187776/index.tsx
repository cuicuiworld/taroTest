import { View, Text } from '@tarojs/components';
import { Root } from '@gui-one/material-miniapp';
import { useMemo, useCallback } from 'react';
import { observer } from 'mobx-react';
import cls from 'classnames';
import { get, set, has } from 'lodash-es';
import { Workspace } from './workspace';
import { store, engine } from '../../models';
import './index.less';
store['1387365690187776'] = new Workspace(engine);
function blockcomponent1387365690187776(props) {
  const $appVars = engine.runtimeVariable;
  const workspace = useMemo(() => {
    return new Workspace(engine);
  }, []);
  let $pageVars = workspace.runtimeVariable;
  let extra = {
    blockProps: props,
  };
  return (
    <Root
      style={props.style}
      className={cls('Root_g1mpg1yn1id', props.className)}
    >
      <View className={'View_wsibnzf6ft6'}>
        <Text children={' '} className={'Text_mxcbfa2cqe1'} />
        <Text children={'美美到底'} className={'Text_3ijxvkbriif'} />
        <Text children={' '} className={'Text_p91kd7vot2s'} />
      </View>
    </Root>
  );
}
export default observer(blockcomponent1387365690187776);
