import nx from 'next-js-core2';

//load modules:
import Debug from './modules/debug';
import Flex from './modules/flex';
import FontStyle from './modules/font-style';
import Margin from './modules/margin';
import Overflow from './modules/overflow';
import Position from './modules/position';
import TextAlign from './modules/text-align';
import TextDecoration from './modules/text-decoration';
import WritingDirection from './modules/writing-direction';

// uiktis:
import AbsCenter from './uikits/abs-center';
import TransformCenter from './uikits/transfom-cener';


// generators:
import generateBlank from './generators/blank';
import generateBorderRadius from './generators/border-radius';
import generateBox from './generators/box';
import { genarateColor, genarateBgColor } from './generators/color';
import generateFontSize from './generators/font-size';
import generateLineHeight from './generators/font-size';
import { generateW1, generateWp } from './generators/width';


const styles = nx.mix(
  {},
  Debug, Flex, FontStyle, Margin, Overflow, Position, TextAlign, TextDecoration, WritingDirection,
  AbsCenter, TransformCenter
);


export {
  styles,
  generateBlank,
  generateBorderRadius,
  generateBox,
  genarateColor,
  genarateBgColor,
  generateFontSize,
  generateW1,
  generateWp
};
