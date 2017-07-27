import { StyleSheet } from 'react-native';
import base from './modules/base';
import blank from './modules/blank';
import color from './modules/color';
import fontSize from './modules/font-size';
import margin from './modules/margin';
import overflow from './modules/overflow';
import padding from './modules/padding';
import position from './modules/position';
import textAlign from './modules/text-align';
import width from './modules/width';


export default StyleSheet.create(
  Object.assign(
    base,
    color,
    fontSize,
    margin,
    overflow,
    padding,
    position,
    textAlign,
    width
  )
);

