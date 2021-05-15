import * as shape from 'd3-shape';
import { Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

export const getPath = (height: number, centerWidth: number, borderLeftRight: boolean = false) => {
  const circleWidth = centerWidth + 16;
  const left = shape
    .line()
    .x((d) => d.x)
    .y((d) => d.y)([
    { x: 0, y: 0 },
    { x: width, y: 0 },
  ]);
  const tab = shape
    .line()
    .x((d) => d.x)
    .y((d) => d.y)
    .curve(shape.curveBasis)([
    { x: 0 - 10, y: 0 }, // end left
    { x: 0 - 10, y: 0 },
    { x: 0 - 10, y: height },
    { x: 0 - 10, y: height },
    { x: 0 - 10, y: height },
    { x: 0, y: height },
    { x: 0, y: height },
    { x: 0, y: height },

    { x: 0, y: borderLeftRight ? 20 : 0 }, // border left
    { x: 0, y: borderLeftRight ? 20 : 0 },
    { x: 0 + (borderLeftRight ? 2: 0), y: borderLeftRight ? 10 : 0 },
    { x: 0 + (borderLeftRight ? 10: 0 ), y: borderLeftRight ? 2: 0 },
    { x: 0 + (borderLeftRight ? 20 : 0), y: 0 },
    { x: 0 + (borderLeftRight ? 20: 0), y: 0 },

    { x: (width - circleWidth) / 2 - 20, y: 0 }, // border center left
    { x: (width - circleWidth) / 2 - 20, y: 0 },
    { x: (width - circleWidth) / 2 - 10, y: 2 },
    { x: (width - circleWidth) / 2 - 2, y: 10 },
    { x: (width - circleWidth) / 2, y: 20 },

    { x: (width - circleWidth) / 2 + 10, y: 30 }, // border center bottom lelf
    { x: (width - circleWidth) / 2 + 20, y: 36 },

    { x: (width - circleWidth) / 2 + 40, y: 40 }, // border center bottom center

    { x: (width - circleWidth) / 2 + circleWidth - 20, y: 36 }, // border center bottom right
    { x: (width - circleWidth) / 2 + circleWidth - 10, y: 30 },

    { x: (width - circleWidth) / 2 + circleWidth, y: 20 }, // border center right
    { x: (width - circleWidth) / 2 + circleWidth + 2, y: 10 },
    { x: (width - circleWidth) / 2 + circleWidth + 10, y: 2 },
    { x: (width - circleWidth) / 2 + circleWidth + 20, y: 0 },
    { x: (width - circleWidth) / 2 + circleWidth + 20, y: 0 },

    { x: width - (borderLeftRight ? 20 : 0), y: 0 }, //border right
    { x: width - (borderLeftRight ? 20 : 0), y: 0 },
    { x: width - (borderLeftRight ? 10 : 0 ), y: borderLeftRight ? 2 : 0 },
    { x: width - (borderLeftRight ? 2 : 0), y: borderLeftRight ? 10 : 0 },
    { x: width, y: borderLeftRight ? 20 : 0 },
    { x: width, y: borderLeftRight ? 20 : 0},
    { x: width, y: 0 },
    { x: width, y: 0 },

    { x: width, y: height }, // end left
    { x: width, y: height },
    { x: width, y: height },
    { x: width + 10, y: height },
    { x: width + 10, y: height },
    { x: width + 10, y: height },
    { x: width + 10, y: 0 },
    { x: width + 10, y: 0 },
  ]);
  const right = shape
    .line()
    .x((d) => d.x)
    .y((d) => d.y)([
    { x: width + circleWidth, y: 0 },
    { x: width * 2, y: 0 },
    { x: width * 2, y: height },
    { x: 0, y: height },
    { x: 0, y: 0 },
  ]);
  return `${left} ${tab} ${right}`;
};
