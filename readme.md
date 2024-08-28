# mini-apps-store

mini-apps-store是一个适用于小程序开发的全局状态管理库，具体实现参考了react-redux。解决了小程序开发过程中不同组件或者页面间状态共享的问题

## 适用范围

适用于页面和组件为以下结构的小程序

```javascript
//页面
Page({
	data:{},
	onLoad(){
		//onload
	}
	onUnload(){
		// onUnload
	}
})
```

```javascript
//组件
Component({
  data: {},
  onInit() {
    //onInit
  },
  didUnmount() {
    //didUnmount
  },
  methods: {
    // methods
  },
});
```

其他类型暂不支持，可以提issue给我

## Installation

npm install mini-apps-store

## Usage

使用方法，大致和react-redux使用方法一致，参考下面例子
step1 创建reducer文件

```javascript
//testReducer.js
import { AddCountAction } from '../actions/testAction';

const initObj = {
  count: 1,
};

const testReducer = (state = initObj, action) => {
  switch (action.type) {
    case AddCountAction:
      // 此处必须这样写，或者深度复制，具体原因用过redux的都知道
      return { ...state, count: state.count + action.payload };
    default:
      return state;
  }
};

export default testReducer;
```

step2 创建action文件

```javascript
export const AddCountAction = 'addCount';

export function addCount(count) {
  return {
    type: AddCountAction,
    payload: count,
  };
}
```

step3 注册reducer，生成全局store

```javascript
// app.js内，此处建议写在app.js或者小程序启动的js文件内

import { createStore, combineReducer } from 'mini-apps-store';
import testReducer from '/reducers/testReducer';
// 一定要在小程序启动之前完成
// 生成一个总的reducer
const rootReducer = combineReducer({
  test: testReducer,
});
// 生成store
createStore(rootReducer);

App({
  onLaunch(options = {}) {},
  getSystemInfo() {},
  onShow(options) {},
  onHide() {},
  onError(error) {},
});
```

step4 在组件或者页面内应用
pageA

```html
<view>{testObj.count}</view> <button onTap="add">点我加1</button>
```

```javascript
import { addCount } from '/actions/testAction';
Page({
  data: {},
  mapStateToData(state) {
    return {
      testObj: state.test,
    };
  },
  mapDispatchToMethods(dispatch) {
    return {
      // 此处会自动往当前页面或者组件注入add方法，也可以在页面或者组件内 使用this.add进行调用
      add: () => dispatch(addCount(1)),
    };
  },
});
```

componentA

```html
<view>{testObj.count}</view> <button onTap="add">点我加1</button>
```

```javascript
import { addCount } from '/actions/testAction';
Component({
  data: {},
  mapStateToData(state) {
    return {
      testObj: state.test,
    };
  },
  mapDispatchToMethods(dispatch) {
    return {
      // 此处会自动往当前页面或者组件注入add方法，也可以在页面或者组件内 使用this.add进行调用
      add: () => dispatch(addCount(1)),
    };
  },
});
```

这个样子就实现了 pageA和componentA内的状态的共享，共享了testReducer内的state，在任何一个地方dispatch(addCount(1))都会引起pageA和componentA的变化。

## api

同时也提供了一个api，可以满足在小程序内组件代码，页面代码，纯js代码等各处调用dispatch

```javascript
import { store } from 'mini-apps-store';
import { addCount } from '/actions/testAction';

store.dispatch(addCount(1));
```
