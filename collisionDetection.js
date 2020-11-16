function detectionCollision(ball, gameObject) {
  //check collision with Paddle
  let bottomOfBall = ball.position.y + ball.size;
  let topOfBall = ball.position.y;

  let topOfObject = gameObject.position.y;
  let leftSideofObject = gameObject.position.x;
  let rightSideofObject = gameObject.position.x + gameObject.width;
  let bottomOfObject = gameObject.position.y + gameObject.height;

  if(bottomOfBall >= topOfObject
    && topOfBall <= bottomOfObject
    && ball.position.x >= leftSideofObject
    && ball.position.x <= rightSideofObject)
  {
    return true;
  }
  else {
    return false;
  }
}
