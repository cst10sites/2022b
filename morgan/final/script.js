document.addEventListener('DOMContentLoaded', () => {
	const grid = document.querySelector(".grid") //tries to use " and not '
	let squares = Array.from(document.querySelectorAll(".grid div"))
	const scoreDisplay = document.querySelector("#score")
	const startBtn = document.querySelector("#startBtn")
	const width = 10
	let nextRandom = 0
	let timerId
	let score = 0
	var kateSpeed = 75
	var karlSpeed = 150
	const colors = [
		"blue",
		"lime",
		"pink",
		"yellow",
		"cyan",
		"red",
		"orange"
	]
	console.log(squares)
	//The Tetrominoes
	const jTetromino = [
	[0, width, width+1, width+2],
	[1, 2, width+1, width*2+1],
	[width, width+1, width+2, width*2+2],
	[1, width+1, width*2+1, width*2]
	]
	
	const sTetromino = [
	[1, 2, width, width+1],
	[1, width+1, width+2, width*2+2],
	[width+1, width+2, width*2, width*2+1],
	[0, width, width+1, width*2+1]
	]
	
	const tTetromino = [
	[1,width,width+1,width+2],
	[1,width+1,width+2,width*2+1],
	[width,width+1,width+2,width*2+1],
	[1,width,width+1,width*2+1]
	]
	
	const oTetromino = [
	[0,1,width,width+1],
	[1,2,width+1,width+2],
	[width*2+1,width*2+2, width+1, width+2],
	[width*2, width*2+1, width, width+1]
	]
	
	const iTetromino = [
	[width, width+1, width+2, width+3],
	[2, width+2, width*2+2, width*3+2],
	[width*2, width*2+1, width*2+2, width*2+3],
	[1, width+1, width*2+1, width*3+1]
	]
	
	const zTetromino = [
	[0, 1, width+1, width+2],
	[2, width+1, width+2, width*2+1],
	[width, width+1, width*2+1, width*2+2],
	[1, width+1, width, width*2]
	]
	
	const lTetromino = [
	[2, width, width+1, width+2],
	[1, width+1, width*2+1, width*2+2],
	[width, width+1, width+2, width*2],
	[1, 0, width+1, width*2+1]
	]
	
	const theTetrominoes = [jTetromino, sTetromino, tTetromino, oTetromino, iTetromino, zTetromino, lTetromino]
	let currentPosition = 4
	let currentRotation = 0
	
	let random = Math.floor(Math.random()*theTetrominoes.length)
	console.log(random)
	let current = theTetrominoes[random][currentRotation]
	
	function playTrombone() {
		var vineBoom = new Audio('Trombone.mp3');
		vineBoom.play();
	}
	
	function playPop() {
		var cottonEyeJoe = new Audio('Pop.mp3');
		cottonEyeJoe.play();
	}
	
	
	//draw the tetromino
	function draw() {
		current.forEach(index => {
			squares[currentPosition + index].classList.add("tetromino")
			squares[currentPosition + index].style.backgroundColor = colors[random]
		})
	}
	//draw the tetromino
	function undraw() {
		current.forEach(index => {
			squares[currentPosition + index].classList.remove("tetromino")
			squares[currentPosition + index].style.backgroundColor = ""
		})
	}
	
	//make tetromino move down
	//timerId = setInterval(moveDown, 500)
	
	//assign functions to keyCodez
	function control(e) {
		if (e.keyCode === 37){
			moveLeft()
		}
		else if (e.keyCode === 38){
			rotateClockwise()
		}
		else if (e.keyCode === 39){
			moveRight()
		}
		else if (e.keyCode === 40){
			moveDown()
		}
		/*else if (e.keyCode === 69){
			rotateCounterclockwise()
		}*/
	
	}
	
	
	document.addEventListener("keyup", control)
	
	
	
	function moveDown() {
		undraw()
		currentPosition += width
		draw()
		freeze()
		
	}
	//let it go function(try to make a delay)
	function freeze() {
		if(current.some(index => squares[currentPosition + index + width].classList.contains("taken"))){
			current.forEach(index => squares[currentPosition + index].classList.add("taken"))
			//another tetromino bites the dust
			random = nextRandom
			nextRandom = Math.floor(Math.random() * theTetrominoes.length)
			current = theTetrominoes[random][currentRotation]
			currentPosition = 4
			playPop()
			draw()
			displayShape()
			addScore()
			gameOver()
		}
	}
	//move tetromino left
	function moveLeft() {
		undraw()
		const isAtLeftEdge = current.some(index=>(currentPosition + index) % width === 0)
		if(!isAtLeftEdge) currentPosition -= 1
			if(current.some(index => squares[currentPosition + index].classList.contains("taken"))){
				currentPosition += 1
		}
		draw()
	}
	//move tetromino right
	function moveRight() {
		undraw()
		const isAtRightEdge = current.some(index=>(currentPosition + index) % width === width - 1)
		if(!isAtRightEdge) currentPosition += 1
			if(current.some(index => squares[currentPosition + index].classList.contains("taken"))){
				currentPosition -= 1
		}
		draw()
	}
	//rotate tetromino clockwise
	function rotateClockwise() {
		undraw()
		currentRotation++
		if(currentRotation === current.length){
			currentRotation = 0
		}
		current = theTetrominoes[random][currentRotation]
		draw()
	}
	//rotate tetromino counterclockwise
	/*function rotateCounterclockwise() {
		undraw()
		currentRotation--
		if(currentRotation === 0){
			currentRotation = 3
		}
		current = theTetrominoes[random][currentRotation]
		draw()
	}*/

	//show next tetromino
	const displaySquares = document.querySelectorAll(".mini-grid div")
	const displayWidth = 4
	let displayIndex = 0
	
	//the tetrominoes w/ out rotations
	const  upNextTetrominoes = [
    [0, displayWidth, displayWidth+1, displayWidth+2],
	[1, 2, displayWidth, displayWidth+1],
	[1,displayWidth,displayWidth+1,displayWidth+2],
	[0,1,displayWidth,displayWidth+1],
	[displayWidth, displayWidth+1, displayWidth+2, displayWidth+3],
	[0, 1, displayWidth+1, displayWidth+2],
	[2, displayWidth, displayWidth+1, displayWidth+2] //lTetromino
	]

	//display shape in mini-grid
	function displayShape() {
		displaySquares.forEach(square => {
			square.classList.remove("tetromino")
			square.style.backgroundColor = ""
		})
		upNextTetrominoes[nextRandom].forEach(index =>{
			displaySquares[displayIndex + index].classList.add("tetromino")
			displaySquares[displayIndex + index].style.backgroundColor = colors[nextRandom]
		}) 
	}
	//add functionallity to start button
	startBtn.addEventListener("click", () => {
		if (timerId){
			clearInterval(timerId)
			timerId = null
		} else {
			draw()
			timerId = setInterval(moveDown, 420) //defines speed
			nextRandom = Math.floor(Math.random()*theTetrominoes.length)
			displayShape()
		}
	})
	
	//add score
	function addScore() {
		for (let i = 0; i < 199; i +=width) {
			const row = [i, i+1, i+2, i+3, i+4, i+5, i+6, i+7, i+8, i+9]

			if(row.every(index => squares[index].classList.contains('taken'))) {
				score +=10
				playPop()
				scoreDisplay.innerHTML = score
				row.forEach(index => {
					squares[index].classList.remove('taken')
					squares[index].classList.remove('tetromino')
					squares[index].style.backgroundColor = ''
				})
			const squaresRemoved = squares.splice(i, width)
			squares = squaresRemoved.concat(squares)
			squares.forEach(cell => grid.appendChild(cell))
			}
		}
	}

	//game over
	function gameOver(){
		if(current.some(index => squares[currentPosition + index].classList.contains("taken"))){
			scoreDisplay.innerHTML = "Game Over! Your score is " + score + " !"
			clearInterval(timerId)
			playTrombone()
		}
	}
	
	

	//setInterval(freeze, 250);





})
