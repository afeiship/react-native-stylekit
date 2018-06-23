# react-native-stylekit
> Style toolkit for react native.

## config:
```js
import {
  $binder,
  styles,
  generateBlank,
  generateBorderRadius,
  generateBox,
  genarateColor,
  genarateBgColor,
  generateFontSize,
  generateW1,
  generateWp
} from 'react-native-stylekit';

// YOUR CONFIG:
const STYLE_CONFIG = {
  blank: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 18, 20, 30],
  borderRadius: [1, 2, 3, 4, 5],
  box: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 18, 20, 30],
  color: {
    c: '#ccc',
    d: '#ddd',
    e: '#eee',
    f: '#fff',
    0: '#000',
    3: '#333',
    6: '#666',
    9: '#999',
    gold: '#A78845'
  },
  fontSize: [8, 10, 12, 14, 16, 18, 20, 22, 14, 16, 28, 30],
  w1: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20],
  wp: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
};

// Create dyanmic styles:
const _styles = Object.assign(
  styles,
  generateBlank(STYLE_CONFIG.blank),
  generateBlank(STYLE_CONFIG.borderRadius),
  genarateColor(STYLE_CONFIG.color),
  genarateBgColor(STYLE_CONFIG.color),
  generateFontSize(STYLE_CONFIG.fontSize),
  generateW1(STYLE_CONFIG.w1),
  generateWp(STYLE_CONFIG.wp),
  generateBox(STYLE_CONFIG.box, 'p'),
  generateBox(STYLE_CONFIG.box, 'px'),
  generateBox(STYLE_CONFIG.box, 'py'),
  generateBox(STYLE_CONFIG.box, 'pt'),
  generateBox(STYLE_CONFIG.box, 'pr'),
  generateBox(STYLE_CONFIG.box, 'pb'),
  generateBox(STYLE_CONFIG.box, 'pl'),
  generateBox(STYLE_CONFIG.box, 'm'),
  generateBox(STYLE_CONFIG.box, 'mx'),
  generateBox(STYLE_CONFIG.box, 'my'),
  generateBox(STYLE_CONFIG.box, 'mt'),
  generateBox(STYLE_CONFIG.box, 'mr'),
  generateBox(STYLE_CONFIG.box, 'mb'),
  generateBox(STYLE_CONFIG.box, 'ml'),
);


// export to your project: $style, $sk
export const $sk = (inString) => {
  return $binder(_styles)(inString);
};

export default _styles;
```

## usage:
```jsx
// Use $style
<View style={[$style.cRed, $style.m_10]}/>

// Use $sk
<View style={$sk('cRed m_10')}/>

// Or you can use $sk
<View style={$sk('cRed m-10')}/>
```



## resources:
+ https://github.com/maskzh/react-native-stylekit
+ https://github.com/VinceBT/react-native-flex-helper

