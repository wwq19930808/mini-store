import { getInstanceMap } from './register';
import isEqual from 'lodash.isequal';
import cloneDeep from 'lodash.clonedeep';
import { inject } from '../inject';
import { store } from './store';

/**
 * @description 创建 store，并在页面和组件注入
 **/
const createStore = (reducer) => {
  inject();
  store.state = reducer(store.state, { type: '@py_init' });
  store.getState = () => {
    return cloneDeep(store.state);
  };
  store.dispatch = (action) => {
    store.state = reducer(store.state, action);
    const instanceMap = getInstanceMap();
    for (const value of instanceMap.values()) {
      const { instance, mapStateToData, originData } = value;
      const data = cloneDeep(mapStateToData(store.state));
      if (isEqual(data, originData)) {
        continue;
      }
      value.originData = data;
      instance.setData({ ...data });
    }
  };
};

export { store, createStore };
