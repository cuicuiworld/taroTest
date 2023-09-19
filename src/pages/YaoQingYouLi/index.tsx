import { Root, Image } from '@gui-one/material-miniapp';
import { useMemo, useCallback } from 'react';
import { observer } from 'mobx-react';
import cls from 'classnames';
import { get, set, has } from 'lodash-es';
import { Workspace } from './workspace';
import { store, engine } from '../../models';
import './index.less';
store['1387645178241024'] = new Workspace(engine);
function pageYaoqingyouli(props) {
  const $appVars = engine.runtimeVariable;
  const workspace = useMemo(() => {
    return new Workspace(engine);
  }, []);
  let $pageVars = workspace.runtimeVariable;
  let extra = {};
  return (
    <Root
      style={props.style}
      className={cls('Root_ie621l1p1ot', props.className)}
    >
      <Image
        mode={'widthFix'}
        src={'personalImg/9/005c9acd-2d0e-4c28-a759-59f4da80026d.png'}
        className={'Image_omdxu2f73g6'}
      />
    </Root>
  );
}
export default observer(pageYaoqingyouli);
