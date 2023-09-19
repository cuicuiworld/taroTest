import { Text, View } from '@tarojs/components';
import { Root } from '@gui-one/material-miniapp';
import { useMemo, useCallback } from 'react';
import { observer } from 'mobx-react';
import cls from 'classnames';
import { get, set, has } from 'lodash-es';
import { Workspace } from './workspace';
import { store, engine } from '../../models';
import './index.less';
store['1387560366768128'] = new Workspace(engine);
function pageXiaofeijilu(props) {
  const $appVars = engine.runtimeVariable;
  const workspace = useMemo(() => {
    return new Workspace(engine);
  }, []);
  let $pageVars = workspace.runtimeVariable;
  let extra = {};
  return (
    <Root
      style={props.style}
      className={cls('Root_m9t211ybe0m', props.className)}
    >
      <Text children={'查询范围限制'} className={'Text_9u4qtfnn4vj'} />
      <View className={'View_g8o82d2ytp3'}>
        <View className={'View_h7c8o3j8jis'}>
          <View className={'View_4i7227xlzr9'}>
            <Text children={'消费项目'} className={'Text_j61mysargxw'} />
            <Text children={'10月25  20:22'} className={'Text_301y3lj8v00'} />
          </View>
          <View className={'View_y5v1wxvm4if'}>
            <Text children={'+-88.00'} className={'Text_2g5bh3w1agp'} />
            <Text children={'扣款方式'} className={'Text_l7s023p40e0'} />
          </View>
        </View>
      </View>
    </Root>
  );
}
export default observer(pageXiaofeijilu);
