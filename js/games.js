let rockPlayer = document.querySelector('#rock--player')
let rockCpu = document.querySelector('#rock--com')
let paperPlayer = document.querySelector('#paper--player')
let paperCpu = document.querySelector('#paper--com')
let scissorsPlayer = document.querySelector('#scissors--player')
let scissorsCpu = document.querySelector('#scissors--com')

class Game {
    constructor() {
        this.cpuChoice
        this.playerChoice
        this.result
    }

    getCpuChoice() {
        const choices = ['rock', 'paper', 'scissors'];
        const randomNumber = Math.floor(Math.random() * 3);
        return choices[randomNumber];
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
                this.result = 'Player Win'
                console.log(this.result);
                break
        }
    }
}

let start = new Game
function main() {
    rockPlayer.addEventListener('click', function () {
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
    })

    paperPlayer.addEventListener('click', function () {
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
    })

    scissorsPlayer.addEventListener('click', function () {
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
    })

}
main()


console.log();