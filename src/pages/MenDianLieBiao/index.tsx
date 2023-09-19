import { BlockComponent_1387365690187776 } from '../../components';
import { View, Text } from '@tarojs/components';
import { Dialog, Icon } from '@nutui/nutui-react-taro';
import { Root } from '@gui-one/material-miniapp';
import { useMemo, useCallback } from 'react';
import { observer } from 'mobx-react';
import cls from 'classnames';
import { get, set, has } from 'lodash-es';
import { Workspace } from './workspace';
import { store, engine } from '../../models';
import './index.less';
store['1387774715314176'] = new Workspace(engine);
function pageMendianliebiao(props) {
  const $appVars = engine.runtimeVariable;
  const workspace = useMemo(() => {
    return new Workspace(engine);
  }, []);
  let $pageVars = workspace.runtimeVariable;
  let extra = {};
  const func_1387774715322369 = useCallback(
    (...args) => $appVars.func_1387774715322369?.(args, extra, workspace),
    [extra],
  );
  const { var_1387774715338753 } = $pageVars;
  return (
    <Root
      style={props.style}
      className={cls('Root_sr78se1l0nb', props.className)}
    >
      <Dialog
        footerDirection={'horizontal'}
        visible={var_1387774715338753}
        noFooter={false}
        textAlign={'center'}
        title={'操作确认'}
        message={'弹窗内容'}
        cancelAutoClose={true}
        onOk={func_1387774715322369}
        cancelText={'取消'}
        noCancelBtn={false}
        closeOnClickOverlay={true}
        lockScroll={false}
        okText={'确定'}
        noOkBtn={false}
        mask={true}
        className={'Dialog_5bsenxyb8oi'}
      >
        <Text
          children={'亲爱的会员，是否确认取消预约？'}
          className={'Text_ksj7qsesylg'}
        />
      </Dialog>
      <View className={'View_3xld7epkpkw'}>
        <Text children={'门店名称名称'} className={'Text_8lxjprzccyx'} />
        <Text children={'详细地址说明'} className={'Text_r3ch7yzc9ge'} />
        <View className={'View_eqpjgz6ffik'}>
          <Icon
            classPrefix={'icon'}
            color={'rgba(80,227,194,1)'}
            size={24}
            fontClassName={'icon'}
            name={'phone1'}
            className={'Icon_axfuqgpx6db'}
          />
          <Text children={'13207113900'} className={'Text_rjoh75iawjh'} />
        </View>
      </View>
      <BlockComponent_1387365690187776
        __pageId__={'1387365690187776'}
        className={'BlockComponent_oa3dl6fyltp'}
      />
    </Root>
  );
}
export default observer(pageMendianliebiao);
