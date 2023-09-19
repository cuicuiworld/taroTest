export const events = [
  {
    id: 1387779189178368,
    parentId: 1387290944167936,
    title: '门店_点击事件',
    async: false,
  },
  {
    id: 1387645329096704,
    parentId: 1387290944167936,
    title: '分享_点击事件',
    async: false,
  },
  {
    id: 1387360549470208,
    parentId: 1387290944167936,
    title: '立即预约_点击事件',
    async: false,
  },
];
export const eventflowDsls = {
  1387779189178368: {
    nodes: [
      {
        id: '0sekn6ouxoz',
        shape: 'flow-start',
        data: {
          id: 'start',
          type: 'flow-start',
          env: {},
        },
      },
      {
        id: 'rskrmne43y7',
        shape: 'flow-func',
        data: {
          runtimeArguments: {},
          arguments: {
            0: {
              url: '/MenDianLieBiao',
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
        id: 'uowov5jkwhw',
        shape: 'flow-edge',
        data: {},
        source: {
          port: '8c2b1329-89bb-45f3-bb62-92545a3d6ef4',
          cell: '0sekn6ouxoz',
        },
        target: {
          port: '654e6a52-9b1c-4817-a4ab-0bcafd0d1a00',
          cell: 'rskrmne43y7',
        },
      },
    ],
  },
  1387645329096704: {
    nodes: [
      {
        id: '4b24ea85-b739-4307-919f-707b46e6ba8e',
        shape: 'flow-start',
        data: {
          id: 'start',
          type: 'flow-start',
          env: {},
        },
      },
      {
        id: '9ff04f18-026b-450e-96c1-ac9fb500e7ad',
        shape: 'flow-func',
        data: {
          runtimeArguments: {},
          arguments: {
            0: {
              url: '/YaoQingYouLi',
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
        id: 'd84557cc-b8fc-49e3-b82a-aa3a015f7294',
        shape: 'flow-edge',
        data: {},
        source: {
          port: '8c2b1329-89bb-45f3-bb62-92545a3d6ef4',
          cell: '4b24ea85-b739-4307-919f-707b46e6ba8e',
        },
        target: {
          port: '654e6a52-9b1c-4817-a4ab-0bcafd0d1a00',
          cell: '9ff04f18-026b-450e-96c1-ac9fb500e7ad',
        },
      },
    ],
  },
  1387360549470208: {
    nodes: [
      {
        id: '946e5b1b-31f6-48c8-acdc-0ba533e1029a',
        shape: 'flow-start',
        data: {
          id: 'start',
          type: 'flow-start',
          env: {},
        },
      },
      {
        id: '57b45187-4bec-4aab-a0a1-68a59841fc6f',
        shape: 'flow-func',
        data: {
          runtimeArguments: {},
          arguments: {
            0: {
              url: '/YuYue',
            },
            1: {},
          },
          id: 'vmofocmx1f8',
          type: 'flow-func',
          env: {},
          functionKey: 'navigateTo',
        },
      },
    ],
    edges: [
      {
        id: '48c62c3b-45f7-487e-8e21-b80bb7ffde13',
        shape: 'flow-edge',
        data: {},
        source: {
          port: '9ba8715e-6c8f-4a43-9860-dbf4c50d269f',
          cell: '946e5b1b-31f6-48c8-acdc-0ba533e1029a',
        },
        target: {
          port: '847ce76f-138e-4f5a-a5dc-51ec0d8c934a',
          cell: '57b45187-4bec-4aab-a0a1-68a59841fc6f',
        },
      },
    ],
  },
};
