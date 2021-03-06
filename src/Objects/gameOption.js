
const option = () => {
  const gameOptions = {

    // platform speed range, in pixels per second
    platformSpeedRange: [200, 200],

    // mountain speed, in pixels per second
    cloudSpeed: 30,

    // spawn range, how far should be the rightmost platform from the right edge
    // before next platform spawns, in pixels
    spawnRange: [80, 300],

    // platform width range, in pixels
    platformSizeRange: [100, 400],

    // a height range between rightmost platform and next platform to be spawned
    platformHeightRange: [-5, 5],

    // a scale to be multiplied by platformHeightRange
    platformHeighScale: 20,

    // platform max and min height, as screen height ratio
    platformVerticalLimit: [0.4, 0.8],

    // player gravity
    playerGravity: 700,

    // player jump force
    jumpForce: 300,

    // player starting X position
    playerStartPosition: 200,

    // consecutive jumps allowed
    jumps: 3,

    // % of probability a coin appears on the platform
    dimPercent: 60,

    starPercent: 60,

    // % of probability a fire appears on the platform
    firePercent: 50,

    treePercent: 55,

    bushPercent: 45,

    stonePercent: 35,

    mashroomPercent: 40,

    waterPercent: 100,
  };

  return gameOptions;
};


export default option;