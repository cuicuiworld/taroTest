import { Tabbar, TabbarItem } from '@nutui/nutui-react-taro';
import { Root } from '@gui-one/material-miniapp';
import { useMemo, useCallback } from 'react';
import { observer } from 'mobx-react';
import cls from 'classnames';
import { get, set, has } from 'lodash-es';
import { Workspace } from './workspace';
import { store, engine } from '../../models';
import './index.less';
store['1387290971963392'] = new Workspace(engine);
function blockcomponent1387290971963392(props) {
  const $appVars = engine.runtimeVariable;
  const workspace = useMemo(() => {
    return new Workspace(engine);
  }, []);
  let $pageVars = workspace.runtimeVariable;
  let extra = {
    blockProps: props,
  };
  const func_1387360128851968 = useCallback(
    (...args) => $pageVars.func_1387360128851968?.(args, extra),
    [extra],
  );
  const { var_1387360193216512 } = $pageVars;
  return (
    <Root
      style={props.style}
      className={cls('Root_7dn4i0zrkkq', props.className)}
    >
      <Tabbar
        onSwitch={func_1387360128851968}
        activeColor={'#81EEF5'}
        unactiveColor={'rgba(135,135,135,1)'}
        size={14}
        bottom={true}
        safeAreaInsetBottom={true}
        activeVisible={var_1387360193216512}
        className={'Tabbar_ersuh9v762o'}
      >
        <TabbarItem
          tabTitle={'首页'}
          icon={'-yemian-copy-copy-copy'}
          iconSize={14}
          iconClassPrefix={'icon'}
          iconFontClassName={'icon'}
          className={'TabbarItem_k88r7w24b1k'}
        />
        <TabbarItem
          tabTitle={'我的'}
          icon={'changyong_zhanghao-37'}
          iconClassPrefix={'icon'}
          iconFontClassName={'icon'}
          className={'TabbarItem_ohe7isrnwqa'}
        />
      </Tabbar>
    </Root>
  );
}
export default observer(blockcomponent1387290971963392);
