function computerPlay() {
    let hand = ["Rock", "Paper", "Scissors"];
    let random = hand[Math.floor(Math.random()*hand.length)];
    return random;
}
