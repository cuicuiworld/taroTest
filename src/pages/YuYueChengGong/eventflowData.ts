export const events = [
  {
    id: 1387993876094976,
    parentId: 1387991911161856,
    title: '按钮_点击事件',
    async: false,
  },
];
export const eventflowDsls = {
  1387993876094976: {
    nodes: [
      {
        id: '4717967a-b340-4644-abef-75965a9434c0',
        shape: 'flow-start',
        data: {
          id: 'start',
          type: 'flow-start',
          env: {},
        },
      },
      {
        id: 'fa0297a1-33c3-49e7-8c94-db36d05f6348',
        shape: 'flow-func',
        data: {
          runtimeArguments: {},
          arguments: {
            0: {
              url: '/ShouYe',
            },
            1: {},
          },
          id: '58omd81p3tl',
          type: 'flow-func',
          env: {},
          functionKey: 'redirectTo',
        },
      },
    ],
    edges: [
      {
        id: '7dffc6d5-220c-4fbe-a5aa-e89494222991',
        shape: 'flow-edge',
        data: {},
        source: {
          port: '95b5730a-bbe7-44c2-82d6-06467925c7f4',
          cell: '4717967a-b340-4644-abef-75965a9434c0',
        },
        target: {
          port: 'cd49c0f2-498a-4d38-90e9-ebee46bd21f4',
          cell: 'fa0297a1-33c3-49e7-8c94-db36d05f6348',
        },
      },
    ],
  },
};
