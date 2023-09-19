import { observable, action, flow } from 'mobx';
import { get, set, has, isArray, isString } from 'lodash-es';
import { Workspace } from './workspace';
import { Logic } from "@gui-one/runtime";
export class RuntimeVariable {
  @observable
  loading = {};
  @observable
  workspace: Workspace;

  /** 页面变量开始 */
  @observable
  var_1387364474306560 = false;
  /** 页面变量结束 */

  constructor(workspace: Workspace) {
    this.workspace = workspace;
  }
  @action
  setLoading(path: string, value: any) {
    return set(this.loading, path, value);
  }
  @action
  getPath(path: string | string[]) {
    if (isArray(path)) {
      const [id, ...other] = path;
      return ['var_' + id, ...other];
    }
    return 'var_' + path;
  }
  @action
  getVariable(path: string | string[]) {
    return get(this, this.getPath(path));
  }
  @action
  setVariable(path: string | string[], value: any) {
    return set(this, this.getPath(path), value);
  }
  @action
  hasVariable(path: string | string[]): boolean {
    return has(this, this.getPath(path));
  }
  func_1387364242038784 = (args, extra) => {
    this.workspace.initEventVariable(1387364242038784);
    const flowDsl = this.workspace.findEventDslById(1387364242038784);
    if (!flowDsl) {
      return undefined;
    }
    const logic = new Logic(flowDsl, this.workspace, extra);
    return logic.flow(args);
  };
  func_1387364489863168 = (args, extra) => {
    this.workspace.initEventVariable(1387364489863168);
    const flowDsl = this.workspace.findEventDslById(1387364489863168);
    if (!flowDsl) {
      return undefined;
    }
    const logic = new Logic(flowDsl, this.workspace, extra);
    return logic.flow(args);
  };
}