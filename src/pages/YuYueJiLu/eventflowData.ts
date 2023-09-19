export const events = [
  {
    id: 1387364489863168,
    parentId: 1387363029508096,
    title: '取消确认_确定点击事件',
    async: false,
  },
  {
    id: 1387364242038784,
    parentId: 1387363029508096,
    title: '取消预约_点击事件',
    async: false,
  },
];
export const eventflowDsls = {
  1387364489863168: {
    nodes: [
      {
        id: 'f8163df3-31a4-4786-82f2-2193a8a22dec',
        shape: 'flow-start',
        data: {
          id: 'start',
          type: 'flow-start',
          env: {},
        },
      },
      {
        id: '57efa844-ee3c-4c20-b6b5-319069ae8ce7',
        shape: 'flow-variable',
        data: {
          variableType: null,
          arguments: {
            1387364474306560: false,
          },
          id: '',
          type: 'flow-variable',
          env: '$pageVars',
          variableId: null,
          key: 1387364474306560,
        },
      },
    ],
    edges: [
      {
        id: '71c1097e-6a29-4ada-b01e-63e0ff7a1526',
        shape: 'flow-edge',
        data: {},
        source: {
          port: '90b5d77a-0829-45eb-8ab2-b31c7ac469d6',
          cell: 'f8163df3-31a4-4786-82f2-2193a8a22dec',
        },
        target: {
          port: '2a85992a-81fe-43b1-9c2c-b4a8afc05590',
          cell: '57efa844-ee3c-4c20-b6b5-319069ae8ce7',
        },
      },
    ],
  },
  1387364242038784: {
    nodes: [
      {
        id: '5c38b13c-42c6-49d2-b9c3-840afc0fad02',
        shape: 'flow-start',
        data: {
          id: 'start',
          type: 'flow-start',
          env: {},
        },
      },
      {
        id: '053c798c-4542-45a1-82d5-5f711908c211',
        shape: 'flow-variable',
        data: {
          variableType: null,
          arguments: {
            1387364474306560: true,
          },
          id: '',
          type: 'flow-variable',
          env: '$pageVars',
          variableId: null,
          key: 1387364474306560,
        },
      },
    ],
    edges: [
      {
        id: 'a04e6fe5-8841-418e-81da-dee8f8216c11',
        shape: 'flow-edge',
        data: {},
        source: {
          port: 'c39fda1b-ce14-48b1-8047-f0fe2f28df4b',
          cell: '5c38b13c-42c6-49d2-b9c3-840afc0fad02',
        },
        target: {
          port: 'e567b6f2-ab01-4b0e-bc7e-f642543a8514',
          cell: '053c798c-4542-45a1-82d5-5f711908c211',
        },
      },
    ],
  },
};
