import { BlockComponent_1387556904796160 } from '../../components';
import {
  ActionSheet,
  DatePicker,
  CellGroup,
  Cell,
} from '@nutui/nutui-react-taro';
import { Root } from '@gui-one/material-miniapp';
import { useMemo, useCallback } from 'react';
import { observer } from 'mobx-react';
import cls from 'classnames';
import { get, set, has } from 'lodash-es';
import { Workspace } from './workspace';
import { store, engine } from '../../models';
import './index.less';
store['1387365640478720'] = new Workspace(engine);
function pageWanshanziliao(props) {
  const $appVars = engine.runtimeVariable;
  const workspace = useMemo(() => {
    return new Workspace(engine);
  }, []);
  let $pageVars = workspace.runtimeVariable;
  let extra = {};
  const func_1387557622046720 = useCallback(
    (...args) => $pageVars.func_1387557622046720?.(args, extra),
    [extra],
  );
  const func_1387559425024000 = useCallback(
    (...args) => $pageVars.func_1387559425024000?.(args, extra),
    [extra],
  );
  const func_1387557523775488 = useCallback(
    (...args) => $pageVars.func_1387557523775488?.(args, extra),
    [extra],
  );
  const func_1387559591018496 = useCallback(
    (...args) => $pageVars.func_1387559591018496?.(args, extra),
    [extra],
  );
  const { var_1387557596561408, var_1387559523180544 } = $pageVars;
  return (
    <Root
      style={props.style}
      className={cls('Root_ls4dh4j37mh', props.className)}
    >
      <ActionSheet
        visible={var_1387557596561408}
        onChoose={func_1387557622046720}
        cancelText={'取消'}
        onCancel={func_1387557622046720}
        menuItems={[
          {
            name: '女',
          },
          {
            name: '男',
          },
        ]}
        title={'性别'}
        className={'ActionSheet_mdzetb024ri'}
      />
      <DatePicker
        visible={var_1387559523180544}
        onCloseDatePicker={func_1387559425024000}
        isShowChinese={false}
        threeDimensional={true}
        minuteStep={1}
        type={'date'}
        className={'DatePicker_tbvuj6n0lh4'}
      />
      <CellGroup className={'CellGroup_7btdilubgo4'}>
        <Cell
          descTextAlign={'right'}
          isLink={false}
          center={false}
          title={'姓名'}
          desc={<BlockComponent_1387556904796160 />}
          className={'Cell_3rj9pr3nkf6'}
        />
        <Cell
          descTextAlign={'right'}
          isLink={true}
          onClick={func_1387557523775488}
          title={'性别'}
          desc={'性别'}
          className={'Cell_dq9wyx5vy0y'}
        />
        <Cell
          descTextAlign={'right'}
          isLink={false}
          center={false}
          title={'手机号'}
          desc={<BlockComponent_1387556904796160 />}
          className={'Cell_yxjcizep8p5'}
        />
        <Cell
          descTextAlign={'right'}
          isLink={true}
          onClick={func_1387559591018496}
          title={'生日'}
          desc={'生日'}
          className={'Cell_htw9yfrgtvr'}
        />
      </CellGroup>
    </Root>
  );
}
export default observer(pageWanshanziliao);
