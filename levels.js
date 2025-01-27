const level1 = [
  [0,0,0,0,0,0,0,0,1,0],
  [1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1]
]

const level2 =
[
  [0,1,0,1,0,1,0,1,0,1],
  [1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1]

]

function buildLevel(level) {
  let bricks = []

  level1.forEach((row, rowIndex) => {
    row.forEach((brick, brickIndex) => {
      if(brick == 1)
      {
        let position = {
          x : 80 * brickIndex,
          y : 75 + 24 * rowIndex
        };
        bricks.push(new Brick(game, position));
      }
    });
  });

  return bricks;
}
