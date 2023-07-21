# Scroll

This is an example component.

```jsx
import { Scroll } from 'react-list-auto-scroll';
import './index.less';

export default () => {
  return <Scroll marH={20} data={[1,2,3,4,5,6]} itemRender={(item,index)=><div className="item">{item}</div>} len={3} height={200} />
}
```
