const quickSort = (xs, compare = (a, b) => a - b) => 
    xs.length === 0
        ? xs
        : [
            ...quickSort(xs.slice(1).filter(x => 0 < compare(xs[0], x))),
            xs[0],
            ...quickSort(xs.slice(1).filter(x => 0 >= compare(xs[0], x))),
        ]

console.log(quickSort([4,2,3,1,5,6,3])) // [1, 2, 3, 3, 4, 5, 6]
