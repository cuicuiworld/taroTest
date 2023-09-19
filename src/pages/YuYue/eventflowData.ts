export const events = [
  {
    id: 1387993948405760,
    parentId: 1387357693820928,
    title: '按钮_点击事件',
    async: false,
  },
  {
    id: 1387362578341888,
    parentId: 1387357693820928,
    title: '顾问选择_确定点击事件',
    async: false,
  },
  {
    id: 1387362560368640,
    parentId: 1387357693820928,
    title: '门店选择_选中',
    async: false,
  },
  {
    id: 1387362529984512,
    parentId: 1387357693820928,
    title: '项目选择_选中',
    async: false,
  },
  {
    id: 1387361506385920,
    parentId: 1387357693820928,
    title: '时间_点击事件',
    async: false,
  },
  {
    id: 1387361472946176,
    parentId: 1387357693820928,
    title: '顾问_点击事件',
    async: false,
  },
  {
    id: 1387361042350080,
    parentId: 1387357693820928,
    title: '项目_点击事件',
    async: false,
  },
  {
    id: 1387359965003776,
    parentId: 1387357693820928,
    title: '门店_点击事件',
    async: false,
  },
];
export const eventflowDsls = {
  1387993948405760: {
    nodes: [
      {
        id: 'e51f3627-2e97-4ab9-90b6-bb3a290fa16d',
        shape: 'flow-start',
        data: {
          id: 'start',
          type: 'flow-start',
          env: {},
        },
      },
      {
        id: 'fe0c9477-f82a-400d-a719-6d79a73d6434',
        shape: 'flow-func',
        data: {
          runtimeArguments: {},
          arguments: {
            0: {
              url: '/YuYueChengGong',
            },
            1: {},
          },
          id: 'v954up5wmxc',
          type: 'flow-func',
          env: {},
          functionKey: 'redirectTo',
        },
      },
    ],
    edges: [
      {
        id: '93583bc9-194c-49f9-966b-fa3354097b3a',
        shape: 'flow-edge',
        data: {},
        source: {
          port: '15259f34-d448-46b0-9534-8d87779379ef',
          cell: 'e51f3627-2e97-4ab9-90b6-bb3a290fa16d',
        },
        target: {
          port: '50a8c8f1-515d-40f3-8e03-292bfc5c5391',
          cell: 'fe0c9477-f82a-400d-a719-6d79a73d6434',
        },
      },
    ],
  },
  1387362578341888: {
    nodes: [
      {
        id: '63a8add6-6fb3-4be4-a8e6-5aa830acb0f0',
        shape: 'flow-start',
        data: {
          id: 'start',
          type: 'flow-start',
          env: {},
        },
      },
      {
        id: 'e9b2d790-55c4-45a4-aa7d-f663a0c57a44',
        shape: 'flow-variable',
        data: {
          variableType: null,
          arguments: {
            1387362479185920: false,
          },
          id: '',
          type: 'flow-variable',
          env: '$pageVars',
          variableId: null,
          key: 1387362479185920,
        },
      },
    ],
    edges: [
      {
        id: '59e0cf7d-d41f-43ef-98a2-4818c7cea8f4',
        shape: 'flow-edge',
        data: {},
        source: {
          port: 'a63aefe5-4efc-4b72-b5da-9aecdb161c99',
          cell: '63a8add6-6fb3-4be4-a8e6-5aa830acb0f0',
        },
        target: {
          port: '532942bd-324a-4e12-a3b2-5f51b71a38c2',
          cell: 'e9b2d790-55c4-45a4-aa7d-f663a0c57a44',
        },
      },
    ],
  },
  1387362560368640: {
    nodes: [
      {
        id: '0f1574e1-29a0-4c91-bf9f-afc785eff33d',
        shape: 'flow-start',
        data: {
          id: 'start',
          type: 'flow-start',
          env: {},
        },
      },
      {
        id: '12460e3d-d952-45ef-99c0-d70437d7f175',
        shape: 'flow-variable',
        data: {
          variableType: null,
          arguments: {
            1387359882731520: false,
          },
          id: '',
          type: 'flow-variable',
          env: '$pageVars',
          variableId: null,
          key: 1387359882731520,
        },
      },
    ],
    edges: [
      {
        id: '0bfbf3ad-1249-483e-a7d3-a608ff920740',
        shape: 'flow-edge',
        data: {},
        source: {
          port: '5e226e7d-ba32-4c90-be57-05e5a8337826',
          cell: '0f1574e1-29a0-4c91-bf9f-afc785eff33d',
        },
        target: {
          port: 'bc43053d-e9c9-4f94-bfea-e0b76f376f1f',
          cell: '12460e3d-d952-45ef-99c0-d70437d7f175',
        },
      },
    ],
  },
  1387362529984512: {
    nodes: [
      {
        id: 'ba43ef49-ff39-4ae8-bc32-87cccfd68deb',
        shape: 'flow-start',
        data: {
          id: 'start',
          type: 'flow-start',
          env: {},
        },
      },
      {
        id: 'b85e7547-b88d-4d17-a41d-355f3a74e333',
        shape: 'flow-variable',
        data: {
          variableType: null,
          arguments: {
            1387360958595072: false,
          },
          id: '',
          type: 'flow-variable',
          env: '$pageVars',
          variableId: null,
          key: 1387360958595072,
        },
      },
    ],
    edges: [
      {
        id: 'f2862641-7c10-4bba-8880-311bc106917c',
        shape: 'flow-edge',
        data: {},
        source: {
          port: 'c2531ca8-bd44-4b01-be7f-a07d53c243f0',
          cell: 'ba43ef49-ff39-4ae8-bc32-87cccfd68deb',
        },
        target: {
          port: '952f5408-6bbb-4267-b5f7-f8ff13ebb3fc',
          cell: 'b85e7547-b88d-4d17-a41d-355f3a74e333',
        },
      },
    ],
  },
  1387361472946176: {
    nodes: [
      {
        id: 'eac91d6a-2db1-4f9c-8f97-dff2faa8af63',
        shape: 'flow-start',
        data: {
          id: 'start',
          type: 'flow-start',
          env: {},
        },
      },
      {
        id: '160a2af7-094b-484b-b89c-8a7ee24a2764',
        shape: 'flow-variable',
        data: {
          variableType: null,
          arguments: {
            1387362479185920: true,
          },
          id: '',
          type: 'flow-variable',
          env: '$pageVars',
          variableId: null,
          key: 1387362479185920,
        },
      },
    ],
    edges: [
      {
        id: '97770b3c-4f58-466b-833b-0261b2f8e386',
        shape: 'flow-edge',
        data: {},
        source: {
          port: 'e471b481-297b-401d-aa47-52835d41562d',
          cell: 'eac91d6a-2db1-4f9c-8f97-dff2faa8af63',
        },
        target: {
          port: 'c5f64e54-11eb-4c5d-8847-6f6de8f4f2c0',
          cell: '160a2af7-094b-484b-b89c-8a7ee24a2764',
        },
      },
    ],
  },
  1387361042350080: {
    nodes: [
      {
        id: '79995d58-03b6-4324-91ca-94cf7415d06c',
        shape: 'flow-start',
        data: {
          id: 'start',
          type: 'flow-start',
          env: {},
        },
      },
      {
        id: '444251a5-3aa3-4c90-a3fe-2ae02d410411',
        shape: 'flow-variable',
        data: {
          variableType: null,
          arguments: {
            1387360958595072: true,
          },
          id: '',
          type: 'flow-variable',
          env: '$pageVars',
          variableId: null,
          key: 1387360958595072,
        },
      },
    ],
    edges: [
      {
        id: '90268c26-5869-47cc-a593-8748f5ca480e',
        shape: 'flow-edge',
        data: {},
        source: {
          port: 'd8acc23f-a4b2-4d40-b31a-d37e021c6075',
          cell: '79995d58-03b6-4324-91ca-94cf7415d06c',
        },
        target: {
          port: '339805e4-a265-45ba-b783-541f6edae2b6',
          cell: '444251a5-3aa3-4c90-a3fe-2ae02d410411',
        },
      },
    ],
  },
  1387359965003776: {
    nodes: [
      {
        id: 'f7500328-6b28-4086-9a31-34aa9fcf1f63',
        shape: 'flow-start',
        data: {
          id: 'start',
          type: 'flow-start',
          env: {},
        },
      },
      {
        id: '4d87e4dd-15e5-4e14-8e8b-200d13e7f9ae',
        shape: 'flow-variable',
        data: {
          variableType: null,
          arguments: {
            1387359882731520: true,
          },
          id: '',
          type: 'flow-variable',
          env: '$pageVars',
          variableId: null,
          key: 1387359882731520,
        },
      },
    ],
    edges: [
      {
        id: 'eb27f2b5-8943-4942-a137-0c7e98019e60',
        shape: 'flow-edge',
        data: {},
        source: {
          port: 'dbc4c43a-a6e9-4a42-ad46-d2a6c00363bd',
          cell: 'f7500328-6b28-4086-9a31-34aa9fcf1f63',
        },
        target: {
          port: '9aafe375-3903-4f01-8059-79f1bc60d068',
          cell: '4d87e4dd-15e5-4e14-8e8b-200d13e7f9ae',
        },
      },
    ],
  },
};
