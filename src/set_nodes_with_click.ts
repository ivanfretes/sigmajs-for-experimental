
import Graph from "graphology";
import Sigma from "sigma";

// Retrieve the html document for sigma container
const container = document.getElementById("sigma-container") as HTMLElement;


// Create a sample graph
const graph = new Graph();
graph.addNode("n1", { x: 0, y: 0, size: 20, color: '#0043ff' });


// Create the spring layout and start it
//const layout = new ForceSupervisor(graph, { isNodeFixed: (_, attr) => attr.highlighted });
//layout.start();

const renderer = new Sigma(graph, container, {
  enableEdgeClickEvents: true,
});

const fisrtChildren = () => {
   graph.addNode("n2", { x: -2, y: 2, size: 10, color: '#7dabdb' });
   graph.addNode("n3", { x: 2, y: 2, size: 10, color: '#7dabdb' });
   graph.addNode("n4", { x: 0, y: 2, size: 10, color: '#7dabdb' });
   graph.addEdge("n1", "n2");
   graph.addEdge("n1", "n3");
   graph.addEdge("n1", "n4");
}

const secondChildren = () => {
   for (let index = 5; index < 100; index++) {
      const randomX = Math.random();
      const randomY = Math.random();
      const sentidoX = randomX < .5 ? randomX * -1 : randomX;
      const sentidoY = randomY < .5 ? randomY * -1 : randomY;

      graph.addNode(`n${index}`, { 
//         x: index * sentidoX, 
//        y: index * sentidoY, 
         size: 10, 
         color: '#cc88dd' 
      });
      graph.addEdge("n4", `n${index}`);  
   }
}


const thirdChildren = () => {
   graph.addNode("n6", { x: -4, y: 6, size: 10, color: '#2cd5bd' });
   graph.addNode("n7", { x: 0, y: 6, size: 10, color: '#2cd5bd' });
   graph.addEdge("n5", "n5");
   graph.addEdge("n5", "n6");
   graph.addEdge("n5", "n7");
}

renderer.addListener('clickNode',(e) => {
   if (e.node == 'n1'){
      fisrtChildren()
   } else if(e.node == 'n4'){
      secondChildren()
   } else if(e.node == 'n5'){
      thirdChildren()
   }
})
