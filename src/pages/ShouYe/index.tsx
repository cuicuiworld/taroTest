import { Icon } from '@nutui/nutui-react-taro';
import {
  BlockComponent_1387365690187776,
  BlockComponent_1387290971963392,
} from '../../components';
import { View, Text } from '@tarojs/components';
import { Root, Swiper, SwiperItem, Image } from '@gui-one/material-miniapp';
import { useMemo, useCallback } from 'react';
import { observer } from 'mobx-react';
import cls from 'classnames';
import { get, set, has } from 'lodash-es';
import { Workspace } from './workspace';
import { store, engine } from '../../models';
import './index.less';
store['1387290944167936'] = new Workspace(engine);
function pageShouye(props) {
  const $appVars = engine.runtimeVariable;
  const workspace = useMemo(() => {
    return new Workspace(engine);
  }, []);
  let $pageVars = workspace.runtimeVariable;
  let extra = {};
  const func_1387360549470208 = useCallback(
    (...args) => $pageVars.func_1387360549470208?.(args, extra),
    [extra],
  );
  const func_1387645329096704 = useCallback(
    (...args) => $pageVars.func_1387645329096704?.(args, extra),
    [extra],
  );
  const func_1387779189178368 = useCallback(
    (...args) => $pageVars.func_1387779189178368?.(args, extra),
    [extra],
  );
  return (
    <Root
      style={props.style}
      className={cls('Root_kskebavc5sc', props.className)}
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
        loop={true}
        autoPlay={0}
        direction={'horizontal'}
        className={'Swiper_xypftuc835b'}
      >
        <SwiperItem className={'SwiperItem_qg7tkk46iks'}>
          <Image
            mode={'heightFix'}
            src={'personalImg/9/8f846a15-64a0-47e1-900d-d5cba7cdb9bc.png'}
            className={'Image_k195yrf58nt'}
          />
        </SwiperItem>
        <SwiperItem className={'SwiperItem_cen3keg5mys'}>
          <Image
            mode={'heightFix'}
            src={'personalImg/9/418accc8-077f-4fc3-bd0c-00eb5d4ef82c.png'}
            className={'Image_d5omeusoouj'}
          />
        </SwiperItem>
      </Swiper>
      <View className={'View_ermgqhgfgib'}>
        <View onClick={func_1387360549470208} className={'View_m32t0sxudpo'}>
          <Text children={'立即预约'} className={'Text_627ws44orvy'} />
        </View>
        <View className={'View_ioqsn9qpb6y'} />
        <View className={'View_ulenfneqh1m'}>
          <View onClick={func_1387645329096704} className={'View_dc6jmmj7k6b'}>
            <View className={'View_5462nm9j7dw'}>
              <Text children={'分享好礼'} className={'Text_gbbcqwdsffs'} />
              <Text
                children={'分享越多福利越多'}
                className={'Text_ie4vcjrvjl3'}
              />
            </View>
            <Icon
              classPrefix={'icon'}
              size={32}
              color={'rgba(129,238,245,1)'}
              fontClassName={'icon'}
              name={'gift1'}
              className={'Icon_m7thv5ewaub'}
            />
          </View>
          <View className={'View_tmqilqjedfj'} />
          <View onClick={func_1387779189178368} className={'View_1w68x83l3mu'}>
            <View className={'View_g8vlz76vozv'}>
              <Text children={'门店查询'} className={'Text_y82irbeiwsx'} />
              <Text children={'查看门店导航'} className={'Text_a4mh6j8j8s9'} />
            </View>
            <Icon
              classPrefix={'icon'}
              size={32}
              color={'rgba(129,238,245,1)'}
              fontClassName={'icon'}
              name={'map'}
              className={'Icon_2p71oabqhp8'}
            />
          </View>
        </View>
      </View>
      <View className={'View_y8ncbk977wx'}>
        <Text children={'美美知识库'} className={'Text_y0eamxepblb'} />
        <View className={'View_l9k462g7ar5'}>
          <Text children={'这是一段标题'} className={'Text_vwm8m7ywasy'} />
          <Image
            mode={'aspectFit'}
            src={'personalImg/9/8ce0272c-7a8c-4cb6-83d2-8002a29b4cba.png'}
            className={'Image_25246l4m4ig'}
          />
        </View>
        <View className={'View_pms4cabisxr'}>
          <Text children={'这是一段标题'} className={'Text_7gpg5ror3cg'} />
          <Image
            mode={'aspectFit'}
            src={'personalImg/9/7f30bad0-eaf3-4e56-bf5e-bc0a2a7a53b4.png'}
            className={'Image_fnfoo7rm489'}
          />
        </View>
        <View className={'View_p4q3atmzauj'}>
          <Text children={'这是一段标题'} className={'Text_os1r3wpox5i'} />
          <Image
            mode={'aspectFit'}
            src={'personalImg/9/a7e7a983-3f80-4d60-aded-34696c587fb6.png'}
            className={'Image_xckky0uu2uf'}
          />
        </View>
      </View>
      <BlockComponent_1387365690187776
        __pageId__={'1387365690187776'}
        className={'BlockComponent_f9r4al4dv2h'}
      />
      <BlockComponent_1387290971963392
        __pageId__={'1387290971963392'}
        className={'BlockComponent_2zqrbuth8wh'}
      />
    </Root>
  );
}
export default observer(pageShouye);
