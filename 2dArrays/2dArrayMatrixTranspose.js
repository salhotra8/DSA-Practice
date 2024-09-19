function rotateMatrixClockWise(M) {
    let n = M.length, depth = ~~(n / 2);

    for (let i = 0; i < depth; i++) {
        for (let j = i; j < n - i - 1; j++) {
            let tmp = M[i][j];
            M[i][j] = M[n - j - 1][i];
            M[n - j - 1][i] = M[n - i - 1][n - j - 1];
            M[n - i - 1][n - j - 1] = M[j][n - i - 1];
            M[j][n - i - 1] = tmp;
        }
    }

};



function rotateMatrixAnticlockWise(M) {
    let n = M.length, depth = ~~(n / 2);
    for (let i = 0; i < depth; i++) {
        for (let j = i; j < n - i - 1; j++) {
            let tmp = M[i][j];
            M[i][j] = M[j][n - i - 1];
            M[j][n - i - 1] = M[n - i - 1][n - j - 1];
            M[n - i - 1][n - j - 1] = M[n - j - 1][i]
            M[n - j - 1][i] = tmp;
        }

    }

};