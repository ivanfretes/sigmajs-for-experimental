
import Graph from "graphology";
import Sigma from "sigma";
import ForceSupervisor from "graphology-layout-force/worker";

// Retrieve the html document for sigma container
const container = document.getElementById("sigma-container") as HTMLElement;

// Create the spring layout and start it

// Create a sample graph
const graph = new Graph();
graph.addNode("n1", { x: 0, y: 0, size: 20, color: '#0043ff' });


// Create the spring layout and start it
const layout = new ForceSupervisor(graph, { isNodeFixed: (_, attr) => attr.highlighted });
layout.start();

// State for drag'n'drop
let draggedNode: string | null = null;
let isDragging = false;

const renderer = new Sigma(graph, container, {
  enableEdgeClickEvents: true,
});


const fisrtChildren = () => {
   graph.addNode("n2", { 
      x: Math.random() * -2, 
      y: Math.random() * 2, 
      size: 10, 
      color: '#7dabdb' 
   });
   graph.addNode("n3", { 
      x: Math.random() * 2, 
      y: Math.random() * 2, 
      size: 10, 
      color: '#7dabdb' 
   });
   graph.addNode("n4", { 
      x: 0, 
      y: 2, 
      size: 10, 
      color: '#7dabdb' 
   });
   graph.addEdge("n1", "n2");
   graph.addEdge("n1", "n3");
   graph.addEdge("n1", "n4");
}

const secondChildren = () => {
   for (let index = 5; index < 50; index++) {
      const randomX = Math.random();
      const randomY = Math.random();
      const sentidoX = randomX < .5 ? randomX * -1 : randomX;
      const sentidoY = randomY < .5 ? randomY * -1 : randomY;

      graph.addNode(`n${index}`, { 
         x: index * sentidoX, 
         y: index * sentidoY, 
         size: 10, 
         color: '#cc88dd',
         label: `n${index}`
      });
      graph.addEdge("n4", `n${index}`);  
   }
}


const thirdChildren = () => {
   console.log('test')
   graph.addNode("n51", { x: -4, y: 6, size: 10, color: '#2cd5bd' });
   graph.addNode("n52", { x: 0, y: 6, size: 10, color: '#2cd5bd' });
   graph.addEdge("n5", "n51");
   graph.addEdge("n5", "n52");
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
