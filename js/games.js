let rockPlayer = document.querySelector('#rock--player')
let rockCpu = document.querySelector('#rock--com')


function getCpuChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

class Game {
    constructor() {
        this.cpuChoice
        this.playerChoice
        this.result
    }

    play(playerChoice) {
        getCpuChoice()
        this.cpuChoice = getCpuChoice()
        this.playerChoice = playerChoice

        console.log(this.playerChoice, this.cpuChoice,);
    }
}


function main() {
    let start = new Game
    rockPlayer.addEventListener('click', function () {
        start.play('rock');
        if (start.playerChoice === 'rock' && start.cpuChoice === 'rock') {
            rockPlayer.classList.add('active')
            rockCpu.classList.add('active')
        } else {
            rockPlayer.classList.add('active')
        }
    })

}

main()


console.log();