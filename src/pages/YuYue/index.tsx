import { Text, View } from '@tarojs/components';
import {
  Dialog,
  ActionSheet,
  CellGroup,
  Cell,
  TextArea,
  Button,
} from '@nutui/nutui-react-taro';
import { Root, Image } from '@gui-one/material-miniapp';
import { useMemo, useCallback } from 'react';
import { observer } from 'mobx-react';
import cls from 'classnames';
import { get, set, has } from 'lodash-es';
import { Workspace } from './workspace';
import { store, engine } from '../../models';
import './index.less';
store['1387357693820928'] = new Workspace(engine);
function pageYuyue(props) {
  const $appVars = engine.runtimeVariable;
  const workspace = useMemo(() => {
    return new Workspace(engine);
  }, []);
  let $pageVars = workspace.runtimeVariable;
  let extra = {};
  const func_1387362578341888 = useCallback(
    (...args) => $pageVars.func_1387362578341888?.(args, extra),
    [extra],
  );
  const func_1387362560368640 = useCallback(
    (...args) => $pageVars.func_1387362560368640?.(args, extra),
    [extra],
  );
  const func_1387362529984512 = useCallback(
    (...args) => $pageVars.func_1387362529984512?.(args, extra),
    [extra],
  );
  const func_1387359965003776 = useCallback(
    (...args) => $pageVars.func_1387359965003776?.(args, extra),
    [extra],
  );
  const func_1387361042350080 = useCallback(
    (...args) => $pageVars.func_1387361042350080?.(args, extra),
    [extra],
  );
  const func_1387361472946176 = useCallback(
    (...args) => $pageVars.func_1387361472946176?.(args, extra),
    [extra],
  );
  const func_1387361506385920 = useCallback(
    (...args) => $pageVars.func_1387361506385920?.(args, extra),
    [extra],
  );
  const func_1387993948405760 = useCallback(
    (...args) => $pageVars.func_1387993948405760?.(args, extra),
    [extra],
  );
  const { var_1387362479185920, var_1387359882731520, var_1387360958595072 } =
    $pageVars;
  return (
    <Root
      style={props.style}
      className={cls('Root_0jdrqdy9bjr', props.className)}
    >
      <Dialog
        footerDirection={'horizontal'}
        visible={var_1387362479185920}
        noFooter={false}
        textAlign={'center'}
        title={'选择顾问'}
        message={'弹窗内容'}
        cancelAutoClose={true}
        onOk={func_1387362578341888}
        cancelText={'取消'}
        noCancelBtn={false}
        closeOnClickOverlay={true}
        lockScroll={true}
        okText={'确定'}
        noOkBtn={false}
        mask={true}
        className={'Dialog_ap1bqotavkw'}
      >
        <View className={'View_nu0g1jmmyt0'}>
          <Image
            mode={'scaleToFill'}
            src={'personalImg/9/bc4f09a0-64c5-4459-8788-feb58ae5a28d.png'}
            className={'Image_6e7l6gfz8s5'}
          />
          <View className={'View_2aa8vidlb4m'}>
            <Text children={'顾问姓名'} className={'Text_evrkmc7lg09'} />
            <Text
              children={'等级\n关于顾问的介绍说明在此展示说明'}
              className={'Text_iz5xhfbx10j'}
            />
          </View>
        </View>
        <View className={'View_jyk8kg9ysgx'}>
          <Image
            mode={'scaleToFill'}
            src={'personalImg/9/bc4f09a0-64c5-4459-8788-feb58ae5a28d.png'}
            className={'Image_c35fkfihclo'}
          />
          <View className={'View_gak3usscqa2'}>
            <Text children={'顾问姓名'} className={'Text_e71obkanve1'} />
            <Text
              children={'等级\n关于顾问的介绍说明在此展示说明'}
              className={'Text_lmroary46ty'}
            />
          </View>
        </View>
        <View className={'View_0unbmg0e8wk'}>
          <Image
            mode={'scaleToFill'}
            src={'personalImg/9/bc4f09a0-64c5-4459-8788-feb58ae5a28d.png'}
            className={'Image_puaqx2si3jy'}
          />
          <View className={'View_80zquk4cxao'}>
            <Text children={'顾问姓名'} className={'Text_iwbdmdloz1p'} />
            <Text
              children={'等级\n关于顾问的介绍说明在此展示说明'}
              className={'Text_dxjars5c3dk'}
            />
          </View>
        </View>
        <View className={'View_775enpxmzy4'}>
          <Image
            mode={'scaleToFill'}
            src={'personalImg/9/bc4f09a0-64c5-4459-8788-feb58ae5a28d.png'}
            className={'Image_gn65i1q35j8'}
          />
          <View className={'View_hi7zwqimm99'}>
            <Text children={'顾问姓名'} className={'Text_vonne96l4gj'} />
            <Text
              children={
                '等级\n关于顾问的介绍说明在此展示说明关于顾问的介绍说明在此展示说明'
              }
              className={'Text_x7apwxxc647'}
            />
          </View>
        </View>
      </Dialog>
      <ActionSheet
        visible={var_1387359882731520}
        onChoose={func_1387362560368640}
        cancelText={'取消'}
        menuItems={[
          {
            subname: '900米',
            name: '门店名称（某某点）',
          },
          {
            subname: '12.3km',
            name: '门店名称',
          },
          {
            subname: '22.6km',
            name: '门店名称',
          },
          {
            name: '选项4',
          },
          {
            name: '选项5',
          },
          {
            name: '选项6',
          },
          {
            name: '选项7',
          },
          {
            name: '选项8',
          },
          {
            name: '选项9',
          },
        ]}
        title={'选择预约门店'}
        className={'ActionSheet_ga1h4kl15r9'}
      />
      <ActionSheet
        visible={var_1387360958595072}
        onChoose={func_1387362529984512}
        cancelText={'取消'}
        menuItems={[
          {
            name: '项目名称',
          },
          {
            name: '项目名称',
          },
          {
            name: '项目名称',
          },
        ]}
        title={'选择项目'}
        className={'ActionSheet_olherwdu2p9'}
      />
      <Text
        children={'* 时间选择方式及组件待确认'}
        className={'Text_xptzfb7jser'}
      />
      <CellGroup className={'CellGroup_w3gzftdsoll'}>
        <Cell
          isLink={true}
          onClick={func_1387359965003776}
          title={'预约门店'}
          desc={'门店名称'}
          className={'Cell_l9g4rcp1tnz'}
        />
        <Cell
          isLink={true}
          onClick={func_1387361042350080}
          title={'预约项目'}
          desc={'项目名称'}
          className={'Cell_rvp958qg2sf'}
        />
        <Cell
          isLink={true}
          onClick={func_1387361472946176}
          title={'服务顾问'}
          desc={'人员名称'}
          className={'Cell_or817hd7rsk'}
        />
        <Cell
          isLink={true}
          onClick={func_1387361506385920}
          title={'到店时间'}
          desc={'到店时间'}
          className={'Cell_7eeha96cuev'}
        />
      </CellGroup>
      <View className={'View_bn7nn30yn7b'}>
        <Text children={'留言'} className={'Text_ecvs5whntr3'} />
        <TextArea
          limitShow={true}
          textAlign={'left'}
          placeholder={'请输入'}
          title={'文本'}
          autosize={true}
          className={'TextArea_2o4axwb7j1z'}
        />
      </View>
      <View className={'View_ohaer1cirz6'}>
        <Button
          onClick={func_1387993948405760}
          shape={'round'}
          size={'normal'}
          color={'rgba(90,211,223,1)'}
          children={'确认预约'}
          plain={false}
          block={true}
          iconClassPrefix={'icon'}
          type={'info'}
          iconFontClassName={'icon'}
          className={'Button_45f7hquh6mg'}
        />
      </View>
    </Root>
  );
}
export default observer(pageYuyue);
