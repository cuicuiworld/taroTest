export const events = [
  {
    id: 1387360128851968,
    parentId: 1387290971963392,
    title: '标签栏_切换页签事件',
    async: false,
  },
];
export const eventflowDsls = {
  1387360128851968: {
    nodes: [
      {
        id: 'd3d9d0fd-8235-4a6c-a3d9-df9fddaada6c',
        shape: 'flow-start',
        data: {
          id: 'start',
          type: 'flow-start',
          env: {},
        },
      },
      {
        id: '8caeabe8-f9c0-4112-8783-3cd671310e56',
        shape: 'flow-branch',
        data: {
          arguments: {
            conditions: [
              {
                condition: {
                  children: [
                    {
                      id: 'ogtdilv0akh',
                      value: '0',
                      operator: 'equal',
                      target: {
                        $$__type: 'binding',
                        $$__body: {
                          mode: 'oneWay',
                          code: '$argument.1',
                          type: 'number',
                        },
                      },
                    },
                  ],
                  id: 'f1osp6icbiz',
                  logic: '&&',
                },
                title: '首页',
              },
              {
                condition: {
                  children: [
                    {
                      id: 'ogtdilv0akh',
                      value: '1',
                      operator: 'equal',
                      target: {
                        $$__type: 'binding',
                        $$__body: {
                          mode: 'oneWay',
                          code: '$argument.1',
                          type: 'number',
                        },
                      },
                    },
                  ],
                  id: 'f1osp6icbiz',
                  logic: '&&',
                },
                title: '个人',
              },
            ],
          },
          id: '',
          type: 'flow-branch',
          env: {},
        },
      },
      {
        id: '9e85c596-9f53-425d-95b2-0f948c5a6829',
        shape: 'flow-func',
        data: {
          runtimeArguments: {},
          arguments: {
            0: {
              url: '/ShouYe',
            },
          },
          id: 'zyc6xnf92ew',
          type: 'flow-func',
          env: {},
          functionKey: 'reLaunch',
        },
      },
      {
        id: '1d0f48c9-e2f6-4a0f-8f6b-c91cd9c9f7d9',
        shape: 'flow-func',
        data: {
          runtimeArguments: {},
          arguments: {
            0: {
              url: '/GeRen',
            },
          },
          id: 'zyc6xnf92ew',
          type: 'flow-func',
          env: {},
          functionKey: 'reLaunch',
        },
      },
    ],
    edges: [
      {
        id: 'fb47f51b-c5dc-4495-9872-0748552288b5',
        shape: 'flow-edge',
        data: {},
        source: {
          port: '07acb00d-4849-407d-9044-92f0c42255cd',
          cell: 'd3d9d0fd-8235-4a6c-a3d9-df9fddaada6c',
        },
        target: {
          port: '7a02f6b8-46ae-4336-b457-0bd9e2563eab',
          cell: '8caeabe8-f9c0-4112-8783-3cd671310e56',
        },
      },
      {
        id: 'ecfddc61-19b0-444b-9bee-6ab62c67a7b2',
        shape: 'flow-edge',
        data: {
          arguments: '首页',
        },
        source: {
          port: 'c19be53b-fcf0-4e90-b807-fbe4d3daad14',
          cell: '8caeabe8-f9c0-4112-8783-3cd671310e56',
        },
        target: {
          port: '3356e8f7-e960-40ac-9606-c25b9cd4b3a5',
          cell: '9e85c596-9f53-425d-95b2-0f948c5a6829',
        },
      },
      {
        id: 'b4754e16-ed4f-446c-ad72-7ef5aecf140a',
        shape: 'flow-edge',
        data: {
          arguments: '个人',
        },
        source: {
          port: 'e197d8fa-f557-4840-9066-5b0ec624bf00',
          cell: '8caeabe8-f9c0-4112-8783-3cd671310e56',
        },
        target: {
          port: '3356e8f7-e960-40ac-9606-c25b9cd4b3a5',
          cell: '1d0f48c9-e2f6-4a0f-8f6b-c91cd9c9f7d9',
        },
      },
    ],
  },
};
