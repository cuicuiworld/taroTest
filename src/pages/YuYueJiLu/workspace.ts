import { Engine, IWorkspace } from '@gui-one/runtime';
import { eventflowDsls, events } from './eventflowData';
import { RuntimeVariable } from './runtimeVariable';
import { commonEventflowDsls, commonEvents } from '../../commonEvents';

export class Workspace implements IWorkspace {
  engine: Engine;

  eventflowDsls = { ...commonEventflowDsls, ...eventflowDsls };

  /** 存放运行时的页面变量 */
  runtimeVariable: RuntimeVariable;

  /** 存放初始的事件流变量 */
  initRuntimeEventVariable: any = {};

  /** 存放临时的事件流变量 */
  runtimeEventVariable: any = {};

  constructor(engine: Engine) {
    this.engine = engine;
    this.runtimeVariable = new RuntimeVariable(this);
  }

  // 初始化事件流变量
  initEventVariable = (eventId: number) => {
    const initData = this.initRuntimeEventVariable[eventId];
    if (initData) {
      Object.entries(JSON.parse(JSON.stringify(initData))).forEach(
        ([key, value]) => {
          this.runtimeEventVariable[key] = value;
        },
      );
    }
  };

  findEventDslById(id: string | number) {
    return this.eventflowDsls[id];
  }

  findEventById(id: number) {
    return [...events, ...commonEvents].find((event) => {
      const eventId = event.id;
      return eventId + '' === id + '';
    });
  }
}
