let graphAdj;

const initGraph = (maxVertex) => {
     graphAdj = new Array(maxVertex);

    for (let i = 0; i < graphAdj.length; i++) {
       graphAdj[i] = new Array(maxVert);
    }

   for (let i = 0; i < graphAdj.length; i++) {
        for (let j = 0; j < graphAdj[i].length; j++) {
           graphAdj[i][j] = 0;
        }
   }
}


const printGraph = () => {
    let graphline = " ";
    let i, j;
    for (i = 0; i < graphAdj.length; i++) {
        for (j = 0; j < graphAdj[i].length; j++) {
           graphline += graphAdj[i][j];
           graphline += " "
           if (j === graphAdj.length - 1) {
              console.log(graphline);
              graphline = ' ';
           }
        }
    }
}

const insertGraph = (a, b) => {
    for (let i = 0; i < graphAdj.length; i++) {
        for (let j = 0; j < graphAdj[i].length; j++) {
            if (i === a && j === b) {
              graphAdj[i][j] = 1;
              graphAdj[j][i] = 1;
            }
        }
    }
 }

/*
    Push a node into stack.
    If our stack isn’t empty, pop the top of the stack, mark visited as true
    Then get all vertices linking to it.
*/
 const dfs = (node) => { 
    stack.push(node);
    while (!stack.isEmpty()) {
       node = stack.pop();
       if (visited[node] == false) {
          visited[node] = true;
          console.log(`we visited ${node}`)
          for (let j = 0; j < graphAdj[node].length; j++) {
             if (graphAdj[node][j] === 1){
                 stack.push(j);
              }
           }
      }
    }
}

/**
 enqueue a node, mark as visited.
 dequeue (visit) all edges of the node and mark as visited and enqueue.
 repeat the process while queue is not empty.
 */

const bfs = (node) => { 
    visited[node] = true;
    queue.equeue(node); 
    while (!queue.isEmpty()) {
        let visiting = queue.dequeue();
        console.log(`we visited ${visiting}`)
        for (let j = 0; j < graphAdj[visiting].length; j++) {
            if ((graphAdj[visiting][j] === 1) && (visited[j] === false)) {  
                visited[j] = true;
                queue.equeue(j);
           }
        }
    }
 }