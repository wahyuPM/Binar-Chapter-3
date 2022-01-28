let rockPlayer = document.querySelector('#rock--player')
let rockCpu = document.querySelector('#rock--com')
let paperPlayer = document.querySelector('#paper--player')
let paperCpu = document.querySelector('#paper--com')
let scissorsPlayer = document.querySelector('#scissors--player')
let scissorsCpu = document.querySelector('#scissors--com')
let resultGames = document.querySelector('.winner')
let winnerPlayer = document.querySelector('#winner-player')
let versus = document.querySelector('.versus')
let refreshBtn = document.querySelector('.refresh-button')

class Game {
    constructor() {
        this.cpuChoice = null
        this.playerChoice = null
        this.result = null
    }

    getCpuChoice() {
        const choices = ['rock', 'paper', 'scissors'];
        const randomNumber = Math.floor(Math.random() * 3);
        return choices[randomNumber];
    }

    toggleClass(toggleDnone, animateResult) {
        window.setTimeout(function () {
            versus.classList.toggle(toggleDnone)
            resultGames.classList.toggle(toggleDnone)
            resultGames.classList.toggle(animateResult)
        }, 300)
    }

    play(playerChoice) {
        this.cpuChoice = this.getCpuChoice()
        this.playerChoice = playerChoice
        console.log(`player menggunakan : ${this.playerChoice}`);
        console.log(`com menggunakan : ${this.cpuChoice}`);

        switch (playerChoice + this.cpuChoice) {
            case 'rockscissors':
            case 'paperrock':
            case 'scissorspaper':
                this.result = 'Player 1 Win'
                this.toggleClass('d-none', 'show')
                winnerPlayer.textContent = this.result
                console.log(this.result);
                break
            case 'rockpaper':
            case 'paperscissors':
            case "scissorsrock":
                this.result = "Com Win"
                this.toggleClass('d-none', 'show')
                winnerPlayer.textContent = this.result
                console.log(this.result);
                break
            case 'rockrock':
            case 'paperpaper':
            case "scissorsscissors":
                this.result = "Draw"
                this.toggleClass('d-none', 'show')
                winnerPlayer.textContent = this.result
                console.log(this.result);
                break
        }
    }
}

let start = new Game
function main() {
    rockPlayer.addEventListener('click', function () {
        if (start.playerChoice !== null) {
            alert('silahkan tekan tombol reset')
        } else {
            start.play('rock');
            if (start.playerChoice === 'rock' && start.cpuChoice === 'rock') {
                rockPlayer.classList.add('active')
                rockCpu.classList.add('active')
            } else if (start.playerChoice === 'rock' && start.cpuChoice === 'paper') {
                rockPlayer.classList.add('active')
                paperCpu.classList.add('active')
            } else if (start.playerChoice === 'rock' && start.cpuChoice === 'scissors') {
                rockPlayer.classList.add('active')
                scissorsCpu.classList.add('active')
            }
        }
    })

    paperPlayer.addEventListener('click', function () {
        if (start.playerChoice !== null) {
            alert('silahkan tekan tombol reset')
        } else {
            start.play('paper')
            if (start.playerChoice === 'paper' && start.cpuChoice === 'paper') {
                paperPlayer.classList.add('active')
                paperCpu.classList.add('active')
            } else if (start.playerChoice === 'paper' && start.cpuChoice === 'rock') {
                paperPlayer.classList.add('active')
                rockCpu.classList.add('active')
            } else if (start.playerChoice === 'paper' && start.cpuChoice === 'scissors') {
                paperPlayer.classList.add('active')
                scissorsCpu.classList.add('active')
            }
        }
    })

    scissorsPlayer.addEventListener('click', function () {
        if (start.playerChoice !== null) {
            alert('silahkan tekan tombol reset')
        } else {
            start.play('scissors')
            if (start.playerChoice === 'scissors' && start.cpuChoice === 'scissors') {
                scissorsPlayer.classList.add('active')
                scissorsCpu.classList.add('active')
            } else if (start.playerChoice === 'scissors' && start.cpuChoice === 'rock') {
                scissorsPlayer.classList.add('active')
                rockCpu.classList.add('active')
            } else if (start.playerChoice === 'scissors' && start.cpuChoice === 'paper') {
                scissorsPlayer.classList.add('active')
                paperCpu.classList.add('active')
            }
        }
    })

    let removeClass = (activeClass) => {
        scissorsPlayer.classList.remove(activeClass)
        scissorsCpu.classList.remove(activeClass)
        paperPlayer.classList.remove(activeClass)
        paperCpu.classList.remove(activeClass)
        rockPlayer.classList.remove(activeClass)
        rockCpu.classList.remove(activeClass)
        start.toggleClass('d-none', 'show')
    }

    refreshBtn.addEventListener('click', function () {
        if (start.result !== null) {
            start.playerChoice = null
            start.cpuChoice = null
            start.result = null
            removeClass('active')
        }
    })
}
main()