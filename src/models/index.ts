import { Engine } from '@gui-one/runtime';
        import { RuntimeVariable } from './runtimeVariable';
        
        export const engine = new Engine();
        engine.runtimeVariable = new RuntimeVariable()
        export const store = {
          $appVars: engine.runtimeVariable
        };
        