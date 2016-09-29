var weirdo = {
    toString() {
        return "I'm a wierdo";
    },
    valueOf() {
        return 12415;
    }
}

var secondWeirdo = {
    valueOf() {
        return "Unknown"
    },
     toString() {
        return 5;
    },
}

console.log(weirdo * weirdo);
console.log("What are you? " + weirdo);
console.log(5 + secondWeirdo);
console.log(secondWeirdo - "fsas")

console.log(Number(weirdo));