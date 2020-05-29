/**
 * @param {number[][]} M
 * @return {number}
 */
const findCircleNum = function(M) {
     let visited = new Array(M.length)
      visited.fill(0)
        let count = 0
        let queue = []
        for (let i = 0; i < M[0].length; i++) {
            if (visited[i] === 0) {
                queue.push(i)

                while (queue.length > 0) {
                    let s = queue.shift()
                    // console.log('s=',s)
                    visited[s] = 1
                    for (let j = 0; j < M.length; j++) {
                        if (M[s][j] === 1 && visited[j] === 0)
                            queue.push(j)
                    }
                } //while

                count++
            } // if
        } // for
        return count
    }

    /*

Input: 
[[1,1,0],
 [1,1,0],
 [0,0,1]]
Output: 2

Input: 
[[1,1,0],
 [1,1,1],
 [0,1,1]]
Output: 1

Note:
N is in range [1,200].
M[i][i] = 1 for all students.
If M[i][j] = 1, then M[j][i] = 1.

*/