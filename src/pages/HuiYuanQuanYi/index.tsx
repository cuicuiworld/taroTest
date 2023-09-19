import { Icon } from '@nutui/nutui-react-taro';
import { View, Text } from '@tarojs/components';
import { Root, Swiper, SwiperItem, Image } from '@gui-one/material-miniapp';
import { useMemo, useCallback } from 'react';
import { observer } from 'mobx-react';
import cls from 'classnames';
import { get, set, has } from 'lodash-es';
import { Workspace } from './workspace';
import { store, engine } from '../../models';
import './index.less';
store['1387561091915776'] = new Workspace(engine);
function pageHuiyuanquanyi(props) {
  const $appVars = engine.runtimeVariable;
  const workspace = useMemo(() => {
    return new Workspace(engine);
  }, []);
  let $pageVars = workspace.runtimeVariable;
  let extra = {};
  return (
    <Root
      style={props.style}
      className={cls('Root_zdyprq821fk', props.className)}
    >
      <Swiper
        isCenter={false}
        initPage={0}
        paginationBgColor={'#fff'}
        isStopPropagation={true}
        touchable={true}
        autoplay={true}
        duration={500}
        isPreventDefault={true}
        paginationVisible={true}
        paginationColor={'#fff'}
        loop={false}
        autoPlay={0}
        direction={'horizontal'}
        className={'Swiper_c123xwy3rqx'}
      >
        <SwiperItem className={'SwiperItem_2oqx3octrui'}>
          <Image
            mode={'aspectFit'}
            src={'personalImg/9/f2384737-f580-438e-a312-e83dcb1767eb.png'}
            className={'Image_j5hmjvlvy9r'}
          />
        </SwiperItem>
        <SwiperItem className={'SwiperItem_svzl7h4uvx8'}>
          <Image
            mode={'widthFix'}
            src={'personalImg/9/8ed8178f-a65a-4582-a55c-f87bcdc4f5ae.png'}
            className={'Image_e2u4nxvlw1c'}
          />
        </SwiperItem>
        <SwiperItem className={'SwiperItem_kbjaambrn3h'}>
          <Image
            mode={'heightFix'}
            src={'personalImg/9/febc2f02-35de-4e39-9146-0b45d8509f8d.png'}
            className={'Image_is8nyy55yd5'}
          />
        </SwiperItem>
      </Swiper>
      <View className={'View_yytnzugg7lx'}>
        <View className={'View_paxnien1bkb'}>
          <View className={'View_l4v61b1r6ln'}>
            <Icon
              classPrefix={'icon'}
              color={'rgba(255,255,255,1)'}
              size={28}
              fontClassName={'icon'}
              name={'gift'}
              className={'Icon_0y7h05dphgd'}
            />
          </View>
          <View className={'View_zfi27m0ptsl'}>
            <Text className={'Text_m3r9hhqvd4h'} />
          </View>
          <View className={'View_h1vl0mos2di'}>
            <Text children={'· 生日礼遇'} className={'Text_039xdpid5oj'} />
            <Text children={'生日专属折扣券'} className={'Text_e9wdfe0q7x3'} />
            <Text children={'100现金抵用券'} className={'Text_pum5w5hndlg'} />
            <Text children={'祝福花束'} className={'Text_qv46wzbppln'} />
          </View>
        </View>
        <View className={'View_clgh9ggafbe'}>
          <View className={'View_abizt7gd6tc'}>
            <Icon
              classPrefix={'icon'}
              color={'rgba(255,255,255,1)'}
              size={28}
              fontClassName={'icon'}
              name={'vip'}
              className={'Icon_ko2wckwd3y6'}
            />
          </View>
          <View className={'View_wbwzszc6212'}>
            <Text className={'Text_is2ucmcerfx'} />
          </View>
          <View className={'View_3ht7qw30u87'}>
            <Text children={'· 等级专属折扣'} className={'Text_v7s5j37vdwo'} />
            <Text
              children={'综合消费可享9折优惠'}
              className={'Text_vqerx6ah0xk'}
            />
          </View>
        </View>
        <View className={'View_ao5fmorsuvp'}>
          <View className={'View_wkkleeya9wp'}>
            <Icon
              classPrefix={'icon'}
              color={'rgba(255,255,255,1)'}
              size={28}
              fontClassName={'icon'}
              name={'shenqingjilu'}
              className={'Icon_hfutm8gnzrv'}
            />
          </View>
          <View className={'View_je3aebcoisv'}>
            <Text className={'Text_kh76hjsbvcs'} />
          </View>
          <View className={'View_lvjeaupiris'}>
            <Text children={'· 节日礼遇'} className={'Text_xsejxdj6m42'} />
            <Text
              children={'每年可享专属节日特定礼'}
              className={'Text_91e7i6w9ww6'}
            />
          </View>
        </View>
        <View className={'View_ds5ngcel4l7'}>
          <View className={'View_p6sznz9q9qn'}>
            <Icon
              classPrefix={'icon'}
              color={'rgba(255,255,255,1)'}
              size={28}
              fontClassName={'icon'}
              name={'jewelry'}
              className={'Icon_4pbo4q6adgt'}
            />
          </View>
          <View className={'View_bfik3yw8n4o'}>
            <Text className={'Text_tptq3gy7zrf'} />
          </View>
          <View className={'View_2g82ss1ockd'}>
            <Text children={'· 专属服务'} className={'Text_zahnnl3wwjw'} />
            <Text children={'优先预定'} className={'Text_xrqrpmdoxyx'} />
          </View>
        </View>
      </View>
    </Root>
  );
}
export default observer(pageHuiyuanquanyi);
