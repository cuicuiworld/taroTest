export const events = [
  {
    id: 1387559591018496,
    parentId: 1387365640478720,
    title: '生日_点击事件',
    async: false,
  },
  {
    id: 1387559425024000,
    parentId: 1387365640478720,
    title: '生日选择器_关闭事件',
    async: false,
  },
  {
    id: 1387557622046720,
    parentId: 1387365640478720,
    title: '性别选择_关闭事件',
    async: false,
  },
  {
    id: 1387557523775488,
    parentId: 1387365640478720,
    title: '性别_点击事件',
    async: false,
  },
  {
    id: 1387557518508032,
    parentId: 1387365640478720,
    title: '姓名_点击事件',
    async: false,
  },
];
export const eventflowDsls = {
  1387559591018496: {
    nodes: [
      {
        id: '496ed5ad-262f-4c06-bb50-0ea8694e7f13',
        shape: 'flow-start',
        data: {
          id: 'start',
          type: 'flow-start',
          env: {},
        },
      },
      {
        id: '4a07f84b-2210-42e3-bee2-9dc8279b1937',
        shape: 'flow-variable',
        data: {
          variableType: null,
          arguments: {
            1387559523180544: true,
          },
          id: '',
          type: 'flow-variable',
          env: '$pageVars',
          variableId: null,
          key: 1387559523180544,
        },
      },
    ],
    edges: [
      {
        id: '0d39414e-10d7-4b45-9f4f-ce7bc0e2d8c5',
        shape: 'flow-edge',
        data: {},
        source: {
          port: 'a73f950d-2bdb-40da-8327-78fc4f514b74',
          cell: '496ed5ad-262f-4c06-bb50-0ea8694e7f13',
        },
        target: {
          port: '47449311-a2d5-4843-aa9e-9287e1dfa776',
          cell: '4a07f84b-2210-42e3-bee2-9dc8279b1937',
        },
      },
    ],
  },
  1387559425024000: {
    nodes: [
      {
        id: 'fbc865c6-a98d-49bd-8e68-6aba76ac7e0a',
        shape: 'flow-start',
        data: {
          id: 'start',
          type: 'flow-start',
          env: {},
        },
      },
      {
        id: '9fd192ca-c8ef-44ff-a506-c407ece77c49',
        shape: 'flow-variable',
        data: {
          variableType: null,
          arguments: {
            1387559523180544: false,
          },
          id: '',
          type: 'flow-variable',
          env: '$pageVars',
          variableId: null,
          key: 1387559523180544,
        },
      },
    ],
    edges: [
      {
        id: 'a1005494-9845-4007-bf0c-15506bae6226',
        shape: 'flow-edge',
        data: {},
        source: {
          port: 'a8a692a2-7d4a-4905-9a43-6bf4fd900442',
          cell: 'fbc865c6-a98d-49bd-8e68-6aba76ac7e0a',
        },
        target: {
          port: 'a20fcdba-fe32-46b9-a60d-877c593ddd24',
          cell: '9fd192ca-c8ef-44ff-a506-c407ece77c49',
        },
      },
    ],
  },
  1387557622046720: {
    nodes: [
      {
        id: '7f4269c2-1d2c-49b4-97a8-602c1d35f565',
        shape: 'flow-start',
        data: {
          id: 'start',
          type: 'flow-start',
          env: {},
        },
      },
      {
        id: 'ad538f22-58eb-4bdf-ace3-dcf5232c088e',
        shape: 'flow-variable',
        data: {
          variableType: null,
          arguments: {
            1387557596561408: false,
          },
          id: '',
          type: 'flow-variable',
          env: '$pageVars',
          variableId: null,
          key: 1387557596561408,
        },
      },
    ],
    edges: [
      {
        id: '1107af1d-5a0d-41ad-b5c1-29da02725921',
        shape: 'flow-edge',
        data: {},
        source: {
          port: 'fa7c2177-3194-43c5-a431-45f806b18987',
          cell: '7f4269c2-1d2c-49b4-97a8-602c1d35f565',
        },
        target: {
          port: '7dd1ac4a-6d69-4fbb-b6f0-e716ba512b61',
          cell: 'ad538f22-58eb-4bdf-ace3-dcf5232c088e',
        },
      },
    ],
  },
  1387557523775488: {
    nodes: [
      {
        id: '54ce3c44-d41b-4b0d-963e-8d7611c32d27',
        shape: 'flow-start',
        data: {
          id: 'start',
          type: 'flow-start',
          env: {},
        },
      },
      {
        id: 'd2c66791-595c-453f-b7ee-c2f0d71afd08',
        shape: 'flow-variable',
        data: {
          variableType: null,
          arguments: {
            1387557596561408: true,
          },
          id: '',
          type: 'flow-variable',
          env: '$pageVars',
          variableId: null,
          key: 1387557596561408,
        },
      },
    ],
    edges: [
      {
        id: '1d50a436-5d08-46c8-903f-592f7c7f41b5',
        shape: 'flow-edge',
        data: {},
        source: {
          port: '87bc5df8-16b9-4f79-abfe-15205f34b27d',
          cell: '54ce3c44-d41b-4b0d-963e-8d7611c32d27',
        },
        target: {
          port: 'dc05da43-49ec-4751-9b7b-c4e0d4c5f97f',
          cell: 'd2c66791-595c-453f-b7ee-c2f0d71afd08',
        },
      },
    ],
  },
};
