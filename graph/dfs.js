const airports = 'PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM'.split(' ');

const routes = [
    ['PHX', 'LAX'],
    ['PHX', 'JFK'],
    ['JFK', 'OKC'],
    ['JFK', 'HEL'],
    ['JFK', 'LOS'],
    ['MEX', 'LAX'],
    ['MEX', 'BKK'],
    ['MEX', 'LIM'],
    ['MEX', 'EZE'],
    ['LIM', 'BKK'],
];


function Graph (uvList) {
  this.adjacencyList = new Map();
  this.uvList = uvList
}

Graph.prototype.addNode = function(vertex) {
  this.adjacencyList.set(vertex, [])
}

Graph.prototype.addEdge = function(u, v) {
  this.adjacencyList.get(u).push(v)
  // this.adjacencyList.get(v).push(u)
}

let nVertex = airports.length
let uvList = routes

let g = new Graph(uvList)
airports.forEach((v) => {
  g.addNode(v)
})

function dfs(start, visited = new Set()) {
  console.log(start)
  visited.add(start)
  const destinations = adjacencyList.get(start)
  for (const destination of destinations) {
    if (destination === 'BKK') { 
      console.log(`DFS found Bangkok`)
      return
    }
    if (!visited.has(destination)) {
      dfs(destination, visited)
    }
  }
}


function bfs(start) {
  const visited = new Set()
  const queue = [start]
  while (queue.length > 0) {
    const airport = queue.shift()
    const destinations = adjacencyList.get(airport)
    for (const destination of destinations) {
      if (destination === 'BKK')  {
        console.log(`BFS found Bangkok!`)
      }
      if (!visited.has(destination)) {
        visited.add(destination)
        queue.push(destination)
      }
    }
  }
}

bfs('PHX')
dfs('PHX')

routes.forEach(route => g.addEdge(...route))
console.log(g.adjacencyList)