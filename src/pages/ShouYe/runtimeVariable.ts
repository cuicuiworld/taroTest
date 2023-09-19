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
  func_1387360549470208 = (args, extra) => {
    this.workspace.initEventVariable(1387360549470208);
    const flowDsl = this.workspace.findEventDslById(1387360549470208);
    if (!flowDsl) {
      return undefined;
    }
    const logic = new Logic(flowDsl, this.workspace, extra);
    return logic.flow(args);
  };
  func_1387645329096704 = (args, extra) => {
    this.workspace.initEventVariable(1387645329096704);
    const flowDsl = this.workspace.findEventDslById(1387645329096704);
    if (!flowDsl) {
      return undefined;
    }
    const logic = new Logic(flowDsl, this.workspace, extra);
    return logic.flow(args);
  };
  func_1387779189178368 = (args, extra) => {
    this.workspace.initEventVariable(1387779189178368);
    const flowDsl = this.workspace.findEventDslById(1387779189178368);
    if (!flowDsl) {
      return undefined;
    }
    const logic = new Logic(flowDsl, this.workspace, extra);
    return logic.flow(args);
  };
}