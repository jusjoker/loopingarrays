const myArray = [];

for (let i = 1000; i >= 0; i -= 2) {
    myArray.push(i);
    console.log(i);
}

const secondArray = [];

for (let i = 0; i <= 10000; i++) {
    secondArray.push(i);
    if (i = 2500) {
        alert("A quarter of the way there!")
    }
    if (i = 5000) {
        alert("Halfway there!")
    }
    if (i = 10000) {
        alert("The loop is done!")
    }
}

const favoriteShows = ["Demon Slayer", "The Uncanny Counter", "Stranger Things", "Gravity Falls", "SpongeBob Squarepants"]

for (let i = 0; i < 1; i++) {
    favoriteShows.push(i);
    console.log(`My #1 favorite tv show is ${favoriteShows[0]}.`)
    console.log(`My #2 favorite tv show is ${favoriteShows[1]}.`)
    console.log(`My #3 favorite tv show is ${favoriteShows[2]}.`)
    console.log(`My #4 favorite tv show is ${favoriteShows[3]}.`)
    console.log(`My #5 favorite tv show is ${favoriteShows[4]}.`)
}