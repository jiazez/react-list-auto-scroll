# react-list-auto-scroll

##### 列表无缝轮播组件

```bash
# npm & yarn
$ yarn add react-list-auto-scroll
```

参数|说明|类型
---|---|---
marH|每一项之间的margin|number
data|数据|any[]
itemRender|自定义渲染列表|
len|可视区包含行数|number
height|容器高度|number


```jsx
import { Scroll } from 'react-list-auto-scroll';

<Scroll 
  marH={20} 
  data={[1,2,3,4,5,6]} 
  itemRender={(item,index)=><div className="item">{item}</div>} 
  len={3} 
  height={200} 
/>
```