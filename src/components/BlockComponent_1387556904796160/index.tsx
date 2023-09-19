import { Input } from '@nutui/nutui-react-taro';
import { Root } from '@gui-one/material-miniapp';
import { useMemo, useCallback } from 'react';
import { observer } from 'mobx-react';
import cls from 'classnames';
import { get, set, has } from 'lodash-es';
import { Workspace } from './workspace';
import { store, engine } from '../../models';
import './index.less';
store['1387556904796160'] = new Workspace(engine);
function blockcomponent1387556904796160(props) {
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
      className={cls('Root_8012d2q8bgy', props.className)}
    >
      <Input
        border={false}
        maxlength={140}
        placeholderStyle={{
          padding: '0px 0px 0px 0px',
          margin: '0px 0px 0px 0px',
          height: '40px',
        }}
        inputAlign={'right'}
        placeholder={'请输入'}
        iconClassPrefix={'icon'}
        type={'text'}
        rows={1}
        iconFontClassName={'icon'}
        className={'Input_tv72bg7045b'}
      />
    </Root>
  );
}
export default observer(blockcomponent1387556904796160);
