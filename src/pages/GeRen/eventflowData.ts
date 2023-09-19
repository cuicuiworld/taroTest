export const events = [
  {
    id: 1387561120432128,
    parentId: 1387290962206720,
    title: '拓客记录_点击事件',
    async: false,
  },
  {
    id: 1387561115656192,
    parentId: 1387290962206720,
    title: '会员权益_点击事件',
    async: false,
  },
  {
    id: 1387560800534528,
    parentId: 1387290962206720,
    title: '消费记录_点击事件',
    async: false,
  },
  {
    id: 1387560283398144,
    parentId: 1387290962206720,
    title: '完善资料_点击事件',
    async: false,
  },
  {
    id: 1387364539744256,
    parentId: 1387290962206720,
    title: '预约记录_点击事件',
    async: false,
  },
];
export const eventflowDsls = {
  1387561120432128: {
    nodes: [
      {
        id: '5fb63eb8-2a50-4724-85e4-68db73a06f74',
        shape: 'flow-start',
        data: {
          id: 'start',
          type: 'flow-start',
          env: {},
        },
      },
      {
        id: 'b064b793-f2ea-48fb-8013-21e2f2f04a5f',
        shape: 'flow-func',
        data: {
          runtimeArguments: {},
          arguments: {
            0: {
              url: '/TuoKeJiLu',
            },
            1: {},
          },
          id: '3gopvg5y15j',
          type: 'flow-func',
          env: {},
          functionKey: 'navigateTo',
        },
      },
    ],
    edges: [
      {
        id: '9bd84022-7681-4247-8c1c-dfef5b1c71c0',
        shape: 'flow-edge',
        data: {},
        source: {
          port: '7f2fbff4-3cea-43ce-b2ce-1ebae63bf389',
          cell: '5fb63eb8-2a50-4724-85e4-68db73a06f74',
        },
        target: {
          port: '654e6a52-9b1c-4817-a4ab-0bcafd0d1a00',
          cell: 'b064b793-f2ea-48fb-8013-21e2f2f04a5f',
        },
      },
    ],
  },
  1387561115656192: {
    nodes: [
      {
        id: 'f41b53e0-c8bc-4d77-b417-2fbe2ad11164',
        shape: 'flow-start',
        data: {
          id: 'start',
          type: 'flow-start',
          env: {},
        },
      },
      {
        id: 'bee8d70a-059d-40b6-b787-000de87c7419',
        shape: 'flow-func',
        data: {
          runtimeArguments: {},
          arguments: {
            0: {
              url: '/HuiYuanQuanYi',
            },
            1: {},
          },
          id: '3gopvg5y15j',
          type: 'flow-func',
          env: {},
          functionKey: 'navigateTo',
        },
      },
    ],
    edges: [
      {
        id: '699b31ea-9117-41f3-b3c6-23f3bb3831d2',
        shape: 'flow-edge',
        data: {},
        source: {
          port: '7b6c413f-307a-4b34-8a9c-d5bc4e423cc7',
          cell: 'f41b53e0-c8bc-4d77-b417-2fbe2ad11164',
        },
        target: {
          port: '654e6a52-9b1c-4817-a4ab-0bcafd0d1a00',
          cell: 'bee8d70a-059d-40b6-b787-000de87c7419',
        },
      },
    ],
  },
  1387560800534528: {
    nodes: [
      {
        id: '4f0c14b4-2c17-4ac2-ac27-c5c765cb4dd7',
        shape: 'flow-start',
        data: {
          id: 'start',
          type: 'flow-start',
          env: {},
        },
      },
      {
        id: 'f6af7dfc-2348-4174-b900-9dc17b2ab424',
        shape: 'flow-func',
        data: {
          runtimeArguments: {},
          arguments: {
            0: {
              url: '/XiaoFeiJiLu',
            },
            1: {},
          },
          id: '3gopvg5y15j',
          type: 'flow-func',
          env: {},
          functionKey: 'navigateTo',
        },
      },
    ],
    edges: [
      {
        id: 'c0e62ce4-dac6-4a4a-8658-112ca87d4d09',
        shape: 'flow-edge',
        data: {},
        source: {
          port: 'afbf1286-78ec-479e-bef9-292e93b0c917',
          cell: '4f0c14b4-2c17-4ac2-ac27-c5c765cb4dd7',
        },
        target: {
          port: '654e6a52-9b1c-4817-a4ab-0bcafd0d1a00',
          cell: 'f6af7dfc-2348-4174-b900-9dc17b2ab424',
        },
      },
    ],
  },
  1387560283398144: {
    nodes: [
      {
        id: 'd8e530a3-5bb2-45a3-bbaa-dd6fae49edf7',
        shape: 'flow-start',
        data: {
          id: 'start',
          type: 'flow-start',
          env: {},
        },
      },
      {
        id: '7609e2f6-f8bf-4e4a-9446-f046088cdb21',
        shape: 'flow-func',
        data: {
          runtimeArguments: {},
          arguments: {
            0: {
              url: '/WanShanZiLiao',
            },
            1: {},
          },
          id: '3gopvg5y15j',
          type: 'flow-func',
          env: {},
          functionKey: 'navigateTo',
        },
      },
    ],
    edges: [
      {
        id: '83069cef-530f-4981-ba05-35863bb6aaeb',
        shape: 'flow-edge',
        data: {},
        source: {
          port: 'bdccceef-3b33-493d-9e3a-d37704223a20',
          cell: 'd8e530a3-5bb2-45a3-bbaa-dd6fae49edf7',
        },
        target: {
          port: '654e6a52-9b1c-4817-a4ab-0bcafd0d1a00',
          cell: '7609e2f6-f8bf-4e4a-9446-f046088cdb21',
        },
      },
    ],
  },
  1387364539744256: {
    nodes: [
      {
        id: '42c7b15e-c98d-4e29-b0c2-638b391b5b88',
        shape: 'flow-start',
        data: {
          id: 'start',
          type: 'flow-start',
          env: {},
        },
      },
      {
        id: '7fc0503c-b2d3-432a-acd4-c0a089b9fbc2',
        shape: 'flow-func',
        data: {
          runtimeArguments: {},
          arguments: {
            0: {
              url: '/YuYueJiLu',
            },
            1: {},
          },
          id: '3gopvg5y15j',
          type: 'flow-func',
          env: {},
          functionKey: 'navigateTo',
        },
      },
    ],
    edges: [
      {
        id: 'bdb1dcba-12e0-4d53-b7d0-fc3320390101',
        shape: 'flow-edge',
        data: {},
        source: {
          port: 'a0491b4a-cf7b-4599-a4c3-f03d5d259da2',
          cell: '42c7b15e-c98d-4e29-b0c2-638b391b5b88',
        },
        target: {
          port: '654e6a52-9b1c-4817-a4ab-0bcafd0d1a00',
          cell: '7fc0503c-b2d3-432a-acd4-c0a089b9fbc2',
        },
      },
    ],
  },
};
