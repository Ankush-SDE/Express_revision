function squarePattern(n) {
    for (let i = 1; i <= n; i++) {
        let row = "";
        for (let k = 1; k <= n; k++) {
            row += "* ";
        }
        console.log(row);
    }
}

squarePattern(4);
