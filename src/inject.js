import { register, unregister } from './store/register';
import { store } from './store/store';
import cloneDeep from 'lodash.clonedeep';

function injectStore(prototype, isComponent) {
  if (!prototype.mapStateToData) {
    return;
  }
  // 将store的值注入到data中
  if (isComponent) {
    const originInit = prototype.onInit;
    prototype.onInit = function (...args) {
      const data = prototype.mapStateToData(store.state);
      this.setData({
        ...data,
      });
      register(this, prototype.mapStateToData, cloneDeep(data));
      originInit && originInit.apply(this, args);
    };
  } else {
    const originOnload = prototype.onLoad;
    prototype.onLoad = function (...args) {
      const data = prototype.mapStateToData(store.state);

      this.setData({
        ...data,
      });
      register(this, prototype.mapStateToData, cloneDeep(data));
      originOnload && originOnload.apply(this, args);
    };
  }

  // 组件或者页面卸载时，取消注册
  if (isComponent) {
    const didUnmount = prototype.didUnmount;
    prototype.didUnmount = function (...args) {
      unregister(this.$id);
      didUnmount && didUnmount.apply(this, args);
    };
  } else {
    const onUnload = prototype.onUnload;
    prototype.onUnload = function (...args) {
      unregister(this.$id);
      onUnload && onUnload.apply(this, args);
    };
  }
}

function injectDispatch(prototype, isComponent) {
  if (!prototype.mapDispatchToMethods) {
    return;
  }
  if (isComponent) {
    if (!prototype.methods) {
      prototype.methods = {};
    }
    prototype.methods = { ...prototype.methods, ...prototype.mapDispatchToMethods(store.dispatch) };
    return;
  }
  Object.assign(prototype, prototype.mapDispatchToMethods(store.dispatch));
}

function pageInject() {
  const old_page = Page;
  Page = function (prototype) {
    injectStore(prototype, false);
    injectDispatch(prototype, false);
    old_page(prototype);
  };
}
function componentInject() {
  const old_component = Component;
  Component = function (prototype) {
    injectStore(prototype, true);
    injectDispatch(prototype, true);
    old_component(prototype);
  };
}

export function inject() {
  pageInject();
  componentInject();
}
