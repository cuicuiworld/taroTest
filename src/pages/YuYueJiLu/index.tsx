import { BlockComponent_1387365690187776 } from '../../components';
import { Dialog } from '@nutui/nutui-react-taro';
import { Text, View } from '@tarojs/components';
import { Root } from '@gui-one/material-miniapp';
import { useMemo, useCallback } from 'react';
import { observer } from 'mobx-react';
import cls from 'classnames';
import { get, set, has } from 'lodash-es';
import { Workspace } from './workspace';
import { store, engine } from '../../models';
import './index.less';
store['1387363029508096'] = new Workspace(engine);
function pageYuyuejilu(props) {
  const $appVars = engine.runtimeVariable;
  const workspace = useMemo(() => {
    return new Workspace(engine);
  }, []);
  let $pageVars = workspace.runtimeVariable;
  let extra = {};
  const func_1387364489863168 = useCallback(
    (...args) => $pageVars.func_1387364489863168?.(args, extra),
    [extra],
  );
  const func_1387364242038784 = useCallback(
    (...args) => $pageVars.func_1387364242038784?.(args, extra),
    [extra],
  );
  const { var_1387364474306560 } = $pageVars;
  return (
    <Root
      style={props.style}
      className={cls('Root_j0wgtzdo4v2', props.className)}
    >
      <Text children={'查询范围限制'} className={'Text_8h34hheakeq'} />
      <Dialog
        footerDirection={'horizontal'}
        visible={var_1387364474306560}
        noFooter={false}
        textAlign={'center'}
        title={'操作确认'}
        message={'弹窗内容'}
        cancelAutoClose={true}
        onOk={func_1387364489863168}
        cancelText={'取消'}
        noCancelBtn={false}
        closeOnClickOverlay={true}
        lockScroll={false}
        okText={'确定'}
        noOkBtn={false}
        mask={true}
        className={'Dialog_4abezi3y3ra'}
      >
        <Text
          children={'亲爱的会员，是否确认取消预约？'}
          className={'Text_rvm6du9ce9y'}
        />
      </Dialog>
      <View className={'View_8xy06l3am5s'}>
        <View className={'View_rsvwcw320as'}>
          <Text children={'门店名称'} className={'Text_g4qjvp4kprk'} />
          <Text children={'预约成功'} className={'Text_qrtd08ro7d4'} />
        </View>
        <View className={'View_xp452k2kd5q'}>
          <View className={'View_6we2y8dmhld'}>
            <Text children={'预约项目：'} className={'Text_q6v2pzt9k1x'} />
            <Text children={'专属顾问：'} className={'Text_r0thsvgqkjb'} />
            <Text children={'到店时间：'} className={'Text_25zqojckept'} />
            <Text children={'备注：'} className={'Text_zyf0u1bhf6p'} />
          </View>
          <View className={'View_tgzih1ucuxv'}>
            <Text children={'项目名称'} className={'Text_4oit3l7c8zi'} />
            <Text children={'顾问'} className={'Text_nscyhgy427a'} />
            <Text
              children={'2023-10-11 14:00'}
              className={'Text_dxe3bqip5x7'}
            />
            <Text
              children={'这是一段备注说明这是一段备注说明这是一段备注说明'}
              className={'Text_8s0b5ew6mw1'}
            />
          </View>
        </View>
        <View className={'View_5s26wbh4lyo'}>
          <Text
            children={'2022-09-03 12:33:00'}
            className={'Text_r5vtrbs3kk2'}
          />
          <Text
            onClick={func_1387364242038784}
            children={'取消预约'}
            className={'Text_knjn4hq0cik'}
          />
        </View>
      </View>
      <View className={'View_evkm49stixv'}>
        <View className={'View_sz128lf584u'}>
          <Text children={'门店名称'} className={'Text_tdtf8js4tin'} />
          <Text children={'已取消'} className={'Text_myotytg7zfq'} />
        </View>
        <View className={'View_5m5il51o943'}>
          <View className={'View_o783vbtul6o'}>
            <Text children={'预约项目：'} className={'Text_0ip3kkvmtkg'} />
            <Text children={'专属顾问：'} className={'Text_ocdluiypneo'} />
            <Text children={'到店时间：'} className={'Text_gfrl1z3nqz5'} />
            <Text children={'备注：'} className={'Text_wxf0wrywvu1'} />
          </View>
          <View className={'View_l25lecgxahn'}>
            <Text children={'项目名称'} className={'Text_b1nxyb3w5vl'} />
            <Text children={'顾问'} className={'Text_nmcjsebnkz3'} />
            <Text
              children={'2023-10-11 14:00'}
              className={'Text_rt6345697nw'}
            />
            <Text className={'Text_wpfm9t12lqo'} />
          </View>
        </View>
        <View className={'View_wxhjd8diqyb'}>
          <Text
            children={'2022-09-03 12:33:00'}
            className={'Text_aicrbmyeey4'}
          />
        </View>
      </View>
      <View className={'View_5lbtqx29u5o'}>
        <View className={'View_a0imxw8fje9'}>
          <Text children={'门店名称'} className={'Text_npkkj8b7b4r'} />
          <Text children={'已完成'} className={'Text_kcr574h161h'} />
        </View>
        <View className={'View_xmiqsv6rtx3'}>
          <View className={'View_yy7sg856162'}>
            <Text children={'预约项目：'} className={'Text_fd01hbnx9pu'} />
            <Text children={'专属顾问：'} className={'Text_z2wop6u9t69'} />
            <Text children={'到店时间：'} className={'Text_osgkcryt6v9'} />
            <Text children={'备注：'} className={'Text_uf0pe3vst4e'} />
          </View>
          <View className={'View_tx2ryihu8kp'}>
            <Text children={'项目名称'} className={'Text_7jkkaad3ylc'} />
            <Text children={'顾问'} className={'Text_pamwj5czh3y'} />
            <Text
              children={'2023-10-11 14:00'}
              className={'Text_9lb8vg82t1a'}
            />
            <Text className={'Text_h176r00e473'} />
          </View>
        </View>
        <View className={'View_kcr7g8hln1q'}>
          <Text
            children={'2022-09-03 12:33:00'}
            className={'Text_hw4nfdqd0ad'}
          />
        </View>
      </View>
      <BlockComponent_1387365690187776
        __pageId__={'1387365690187776'}
        className={'BlockComponent_yt8tx63kyg7'}
      />
    </Root>
  );
}
export default observer(pageYuyuejilu);
