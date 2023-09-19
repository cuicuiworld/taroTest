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
  var_1387359882731520 = false;
  @observable
  var_1387360958595072 = false;
  @observable
  var_1387362479185920 = false;
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
  func_1387359965003776 = (args, extra) => {
    this.workspace.initEventVariable(1387359965003776);
    const flowDsl = this.workspace.findEventDslById(1387359965003776);
    if (!flowDsl) {
      return undefined;
    }
    const logic = new Logic(flowDsl, this.workspace, extra);
    return logic.flow(args);
  };
  func_1387361042350080 = (args, extra) => {
    this.workspace.initEventVariable(1387361042350080);
    const flowDsl = this.workspace.findEventDslById(1387361042350080);
    if (!flowDsl) {
      return undefined;
    }
    const logic = new Logic(flowDsl, this.workspace, extra);
    return logic.flow(args);
  };
  func_1387361472946176 = (args, extra) => {
    this.workspace.initEventVariable(1387361472946176);
    const flowDsl = this.workspace.findEventDslById(1387361472946176);
    if (!flowDsl) {
      return undefined;
    }
    const logic = new Logic(flowDsl, this.workspace, extra);
    return logic.flow(args);
  };
  func_1387361506385920 = (args, extra) => {
    this.workspace.initEventVariable(1387361506385920);
    const flowDsl = this.workspace.findEventDslById(1387361506385920);
    if (!flowDsl) {
      return undefined;
    }
    const logic = new Logic(flowDsl, this.workspace, extra);
    return logic.flow(args);
  };
  func_1387362529984512 = (args, extra) => {
    this.workspace.initEventVariable(1387362529984512);
    const flowDsl = this.workspace.findEventDslById(1387362529984512);
    if (!flowDsl) {
      return undefined;
    }
    const logic = new Logic(flowDsl, this.workspace, extra);
    return logic.flow(args);
  };
  func_1387362560368640 = (args, extra) => {
    this.workspace.initEventVariable(1387362560368640);
    const flowDsl = this.workspace.findEventDslById(1387362560368640);
    if (!flowDsl) {
      return undefined;
    }
    const logic = new Logic(flowDsl, this.workspace, extra);
    return logic.flow(args);
  };
  func_1387362578341888 = (args, extra) => {
    this.workspace.initEventVariable(1387362578341888);
    const flowDsl = this.workspace.findEventDslById(1387362578341888);
    if (!flowDsl) {
      return undefined;
    }
    const logic = new Logic(flowDsl, this.workspace, extra);
    return logic.flow(args);
  };
  func_1387993948405760 = (args, extra) => {
    this.workspace.initEventVariable(1387993948405760);
    const flowDsl = this.workspace.findEventDslById(1387993948405760);
    if (!flowDsl) {
      return undefined;
    }
    const logic = new Logic(flowDsl, this.workspace, extra);
    return logic.flow(args);
  };
}