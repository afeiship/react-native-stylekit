import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default {
  transformCenterX: {
    left: '50%',
    transform: [
      {
        translateX: -0.5 * width
      }
    ]
  },
  transformCenterY: {
    top: '50%',
    transform: [
      {
        translateY: -0.5 * height
      }
    ]
  },
  transformCenterXY: {
    top: '50%',
    left: '50%',
    transform: [
      {
        translateX: -0.5 * width
      },
      {
        translateY: -0.5 * height
      }
    ]
  }
}
