import { StyleSheet } from 'react-native';
import base from './modules/base';
import blank from './modules/blank';
import color from './modules/color';
import margin from './modules/margin';
import padding from './modules/padding';
import position from './modules/position';
import textAlign from './modules/text-align';


export default StyleSheet.create(
  Object.assign(
    base,
    color,
    margin,
    padding,
    position,
    textAlign
  )
);

