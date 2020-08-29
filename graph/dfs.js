   /**
     * Depth-First graph searching algorithm.
     * Returns whether there's a path between two nodes in a graph.
     * Time complexity: O(|V|^2).
     *
     * @param {Array} graph Adjacency matrix, which represents the graph.
     * @param {Number} start Start node.
     * @param {Number} goal Target node.
     * @return {Boolean} Returns true if path between two nodes exists.
     *
     * const graph = [[1, 1, 0, 0, 1, 0],
     *              [1, 0, 1, 0, 1, 0],
     *              [0, 1, 0, 1, 0, 0],
     *              [0, 0, 1, 0, 1, 1],
     *              [1, 1, 0, 1, 0, 0],
     *              [0, 0, 0, 1, 0, 0]];
     * const pathExists = dfs(graph, 1, 5); // true
     */

const graph = [
  [1, 1, 0, 0, 1, 0],
  [1, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 0],
  [0, 0, 1, 0, 1, 1],
  [1, 1, 0, 1, 0, 0],
  [0, 0, 0, 1, 0, 0]
];     
const dfs = (graph, current, goal) => {
  let stack = []
  let visited = []
  stack.push(current)
  visited[current] = true
  while(stack.length) {
    let node = stack.pop()
    console.log('node: ', node)
    if(node === goal)
      return true
    for(let i = 0; i < graph[node].length; i++) {
      console.log(graph[node][i])
      if (graph[node][i] && !visited[i]) {
        stack.push(i);
        visited[i] = true;
      }
    }
  }
  return false;
}

var gfg = new Array(10); 
for (var i = 0; i < gfg.length; i++) { 
  gfg[i] = new Array(10); 
} 
v = 0
for (var i = 0; i < 10; i++) { 
  for (var j = 0; j < 10; j++) { 
      gfg[i][j] = v++; 
  } 
} 
let s =[[]]
let a = [0,1]
let b = [2,3]
s.push =a
s.push = b
console.log(gfg)