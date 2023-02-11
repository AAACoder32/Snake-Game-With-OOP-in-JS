class SnakeGame {

  constructor() {
    this.blockX = 10;
    this.blockY = 10;
    this.pos = { x: 5, y: 8 };
    this.foodPos = {
      x: Math.floor(Math.random() * 36),
      y: Math.floor(Math.random() * 40)
    };
    this.snakeArr = [];
    this.snakeArr.push(this.pos);
    this.snakeArr.push(this.pos);
    this.snakeArr.push(this.pos);
    
    this.score = 0;
  }

  update(key) {

    if (this.pos.x === this.foodPos.x && this.pos.y === this.foodPos.y) {
      this.#placeFood();
      this.snakeArr.push(this.pos);
      this.score++;
    }
    for (let i = this.snakeArr.length - 1; i > 0; i--) {
      this.snakeArr[i] = { ...this.snakeArr[i - 1] };
    }

    this.#control(key);
    if (this.#gameover()) {
      this.pos = { x: 5, y: 10 };
      this.#placeFood();
      this.snakeArr = [];
      this.snakeArr.push(this.pos);
      this.snakeArr.push(this.pos);
      this.snakeArr.push(this.pos);
      this.score = 0;
    }
  }

  draw(ctx) {
    
    for (let i = 0; i < this.snakeArr.length; i++) {
      if(i==0) ctx.fillStyle = 'red';
      else ctx.fillStyle = '#098567';
      ctx.fillRect(this.snakeArr[i].x * this.blockX, this.snakeArr[i].y * this.blockY, this.blockX, this.blockY);
      ctx.fill();
    }

    ctx.fillStyle = 'blue';
    ctx.fillRect(this.foodPos.x * this.blockX, this.foodPos.y * this.blockY, this.blockX, this.blockY);
    ctx.fill();
  }

  #placeFood() {
    this.foodPos = {
      x: Math.floor(Math.random() * 36),
      y: Math.floor(Math.random() * 40)
    };
  }

  #control(key) {
    if (key[0] === 1) {
      this.pos.x -= 1;
    } else if (key[1] === 1) {
      this.pos.y -= 1;
    } else if (key[2] === 1) {
      this.pos.x += 1;
    } else {
      this.pos.y += 1;
    }
  }

  #gameover() {
    let headPos = { ...this.snakeArr[0] };
    if (headPos.x < 0 || headPos.x > 36 || headPos.y < 0 || headPos.y > 40) {
      return true;
    }

    for (let i = 1; i < this.snakeArr.length; i++) {
      let bodyPos = { ...this.snakeArr[i] };
      if (headPos.x === bodyPos.x && headPos.y === bodyPos.y) {
        return true;
      }
    }

    return false;
  }
  
  getScore(){
    return this.score;
  }
}