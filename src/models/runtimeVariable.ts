import { observable, action } from 'mobx';
import { get, set, has, isArray, isString } from 'lodash-es';
import { Logic } from "@gui-one/runtime";
import { commonEventflowDsls } from "../commonEvents";
export class RuntimeVariable {
  @observable
  loading = {};

  /** 页面变量开始 */

  /** 页面变量结束 */

  /** 存放初始的事件流变量 */
  @observable
  initRuntimeEventVariable: any = {};

  /** 存放临时的事件流变量 */
  @observable
  runtimeEventVariable: any = {};

  // 初始化事件流变量
  initEventVariable = (eventId: number) => {
    const initData = this.initRuntimeEventVariable[eventId];
    if (initData) {
      Object.entries(JSON.parse(JSON.stringify(initData))).forEach(([key, value]) => {
        this.runtimeEventVariable[key] = value;
      });
    }
  };
  @action.bound
  setLoading(path: string | number, value: any) {
    return set(this.loading, path, value);
  }
  @action.bound
  getPath(path: string | string[]) {
    if (isArray(path)) {
      const [id, ...other] = path;
      return ['var_' + id, ...other];
    }
    return 'var_' + path;
  }
  @action.bound
  getVariable(path: string | string[]) {
    return get(this, this.getPath(path));
  }
  @action.bound
  setVariable(path: string | string[], value: any) {
    return set(this, this.getPath(path), value);
  }
  @action.bound
  hasVariable(path: string | string[]): boolean {
    return !!this[this.getPath(path)] || has(this, this.getPath(path));
  }
}