let arr = [
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 2, 4, 4, 0],
    [0, 0, 0, 2, 0, 0],
    [0, 0, 1, 2, 4, 0]
]
let arr1 = [
    [-1, -1, 0, -9, -2, -2],
    [-2, -1, -6, -8, -2, -5],
    [-1, -1, -1, -2, -3, -4],
    [-1, -9, -2, -4, -4, -5],
    [-7, -3, -3, -2, -9, -9],
    [-1, -3, -1, -2, -4, -5]
]

const hourglass = (arr) => {
    let t1 = 0;
    let t2;
    for (let i = 0; i < (arr.length - 2); i++) {
        for (let j = 0; j < (arr.length - 2); j++) {

            for (let k = 0; k < 3; k++) {
                if (k == 1) {
                    t1 = t1 + arr[i + k][j + k]

                    continue;
                }
                for (let l = 0; l < 3; l++) {
                    t1 = t1 + arr[i + k][j + l]
                }
            }
            if (t2 === undefined) {
                t2 = t1
            } else {
                t2 = (t1 > t2) ? t1 : t2;
            }
            t1 = 0;
        }

    }
    return t2

}
console.log(hourglass(arr1));