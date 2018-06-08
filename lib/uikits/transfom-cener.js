import { Dimensions } from 'react-native';

//basic calc values:
const { width, height } = Dimensions.get('window');
const _width = -0.5 * width;
const _height = -0.5 * height;

export default {
  transformCenterX: {
    left: '50%',
    transform: [{ translateX: _width }]
  },
  transformCenterY: {
    top: '50%',
    transform: [{ translateY: _height }]
  },
  transformCenterXY: {
    top: '50%',
    left: '50%',
    transform: [{ translateX: _width }, { translateY: _height }]
  }
}
