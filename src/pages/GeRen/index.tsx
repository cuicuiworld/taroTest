import { BlockComponent_1387290971963392 } from '../../components';
import { Grid, GridItem } from '@nutui/nutui-react-taro';
import { View, Text } from '@tarojs/components';
import {
  Root,
  FlexLayout,
  Swiper,
  Image,
  SwiperItem,
} from '@gui-one/material-miniapp';
import { useMemo, useCallback } from 'react';
import { observer } from 'mobx-react';
import cls from 'classnames';
import { get, set, has } from 'lodash-es';
import { Workspace } from './workspace';
import { store, engine } from '../../models';
import './index.less';
store['1387290962206720'] = new Workspace(engine);
function pageGeren(props) {
  const $appVars = engine.runtimeVariable;
  const workspace = useMemo(() => {
    return new Workspace(engine);
  }, []);
  let $pageVars = workspace.runtimeVariable;
  let extra = {};
  const func_1387560283398144 = useCallback(
    (...args) => $pageVars.func_1387560283398144?.(args, extra),
    [extra],
  );
  const func_1387364539744256 = useCallback(
    (...args) => $pageVars.func_1387364539744256?.(args, extra),
    [extra],
  );
  const func_1387560800534528 = useCallback(
    (...args) => $pageVars.func_1387560800534528?.(args, extra),
    [extra],
  );
  const func_1387561115656192 = useCallback(
    (...args) => $pageVars.func_1387561115656192?.(args, extra),
    [extra],
  );
  const func_1387561120432128 = useCallback(
    (...args) => $pageVars.func_1387561120432128?.(args, extra),
    [extra],
  );
  return (
    <Root
      style={props.style}
      className={cls('Root_w6gzxl8n7me', props.className)}
    >
      <View className={'View_t7pty10u8gw'}>
        <Image
          mode={'scaleToFill'}
          src={'personalImg/9/58b27689-f36d-4206-b88f-360c386a732c.png'}
          className={'Image_izbbn0sbjr3'}
        />
        <View className={'View_jit5aesvpxm'}>
          <Text children={'会员昵称'} className={'Text_jqvvt0n4496'} />
          <Text children={'普通文本'} className={'Text_dxkzq28ikmz'} />
        </View>
      </View>
      <View className={'View_7c76209v7yq'}>
        <Text children={'会员等级'} className={'Text_t4zv6q8rmet'} />
        <View className={'View_cy05xaz50ru'}>
          <Text children={'卡劵'} className={'Text_53o1xfkw016'} />
          <Text children={'0'} className={'Text_eluklejabo8'} />
        </View>
      </View>
      <View className={'View_xei6gdn1ydc'}>
        <Image
          mode={'scaleToFill'}
          src={'personalImg/9/c8dc7c7b-c426-4247-9941-f6c8cee4b224.png'}
          className={'Image_1w638n4atqo'}
        />
      </View>
      <FlexLayout
        gutter={0}
        justify={'start'}
        align={'top'}
        wrap={true}
        className={'FlexLayout_fcxw6syi8yn'}
      >
        <Text children={'普通文本'} className={'Text_ua1vpkg07kv'} />
      </FlexLayout>
      <Grid
        border={false}
        columnNum={3}
        center={true}
        direction={'vertical'}
        className={'Grid_3pinthswj83'}
      >
        <GridItem
          onClick={func_1387560283398144}
          icon={'signboard'}
          iconColor={'rgba(129,238,245,1)'}
          text={'完善资料'}
          iconClassPrefix={'icon'}
          iconFontClassName={'icon'}
          className={'GridItem_97jtwq0aevo'}
        />
        <GridItem
          onClick={func_1387364539744256}
          icon={'history'}
          iconColor={'rgba(129,238,245,1)'}
          text={'预约记录'}
          iconClassPrefix={'icon'}
          iconFontClassName={'icon'}
          className={'GridItem_wcq9zcoj8ib'}
        />
        <GridItem
          onClick={func_1387560800534528}
          iconColor={'rgba(129,238,245,1)'}
          icon={'inquiry-template'}
          text={'消费记录'}
          iconClassPrefix={'icon'}
          iconFontClassName={'icon'}
          className={'GridItem_79s3huojjtp'}
        />
        <GridItem
          onClick={func_1387561115656192}
          iconColor={'rgba(129,238,245,1)'}
          icon={'vip'}
          text={'会员权益'}
          iconClassPrefix={'icon'}
          iconFontClassName={'icon'}
          className={'GridItem_kvpti66ep4d'}
        />
        <GridItem
          onClick={func_1387561120432128}
          iconColor={'rgba(129,238,245,1)'}
          icon={'Customermanagement-fill'}
          text={'拓客记录'}
          iconClassPrefix={'icon'}
          iconFontClassName={'icon'}
          className={'GridItem_emyrwhbyqql'}
        />
        <GridItem
          iconColor={'rgba(129,238,245,1)'}
          icon={'service-fill'}
          text={'联系客服'}
          iconClassPrefix={'icon'}
          iconFontClassName={'icon'}
          className={'GridItem_ewchgbl5xyn'}
        />
      </Grid>
      <BlockComponent_1387290971963392
        __pageId__={'1387290971963392'}
        className={'BlockComponent_299zlqndqnm'}
      />
      <Swiper
        isCenter={true}
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
        height={'inherit'}
        className={'Swiper_9pom00n7pnh'}
      >
        <SwiperItem className={'SwiperItem_rf5cicxl8vz'}>
          <Image
            mode={'aspectFit'}
            src={'personalImg/9/c0f505f3-7f4c-4117-9131-f549fd31dc9f.png'}
            className={'Image_w09kdp6y7z3'}
          />
        </SwiperItem>
        <SwiperItem className={'SwiperItem_7skch9shthp'}>
          <Image
            mode={'aspectFit'}
            src={'personalImg/9/418accc8-077f-4fc3-bd0c-00eb5d4ef82c.png'}
            className={'Image_a00ajpikk5o'}
          />
        </SwiperItem>
      </Swiper>
    </Root>
  );
}
export default observer(pageGeren);
