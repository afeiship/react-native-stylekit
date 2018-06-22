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
import {StyleSheet} from 'react-native';

import {$config} from 'components';

const {STYLE_CONFIG} = $config;

const _styles = nx.mix(
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

export const sk = (inString) => {
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

