module.exports = {
  extends: 'standard',
  root: true,
  parser: 'babel-eslint',
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  },
  globals: {
    Image: true,
    TimelineLite: true,
    TimelineMax: true,
    TweenLite: true,
    TweenMax: true,
    Back: true,
    Bounce: true,
    Circ: true,
    Cubic: true,
    Ease: true,
    EaseLookup: true,
    Elastic: true,
    Expo: true,
    Linear: true,
    Power0: true,
    Power1: true,
    Power2: true,
    Power3: true,
    Power3: true,
    Power4: true,
    Quad: true,
    Quart: true,
    Quint: true,
    RoughEase: true,
    Sine: true,
    SlowMo: true,
    SteppedEase: true,
    Strong: true,
    Draggable: true,
    SplitText: true,
    VelocityTracker: true,
    CSSPlugin: true,
    ThrowPropsPlugin: true,
    BezierPlugin: true
  }
}
