class Graph{
    constructor(isDirectional = false){
        this.vertex = {},
        this.directional = isDirectional
    }

    addVertex(vertex){
        if(!this.vertex[vertex]){
            this.vertex[vertex] = [];
            return true;
        }

        return false;
    }

    addEdge(vertexOne, vertexTwo){
        if(!this.vertex[vertexOne] || !this.vertex[vertexTwo]){
            return false;
        }

        if(this.directional === true){
            this.vertex[vertexOne].push(vertexTwo);
            return true;
        }

        this.vertex[vertexOne].push(vertexTwo);
        this.vertex[vertexTwo].push(vertexOne);
    }
    
    removeEdge(vertexOne, vertexTwo){
        if(!this.vertex[vertexOne] || !this.vertex[vertexTwo]){
            return false
        }

        if(this.directional === true){
            this.vertex[vertexOne].forEach((edge, index) => {
                if(edge === vertexTwo){
                    this.vertex[vertexOne].splice(index, 1);
                    return true
                }
            });
            return false
        }

        this.vertex[vertexOne].forEach((edge, index) =>{
            if(edge === vertexTwo){
                this.vertex[vertexOne].splice(index, 1);
            }
        });

        this.vertex[vertexTwo].forEach((edge, index) =>{
            if(edge === vertexOne){
                this.vertex[vertexTwo].splice(index, 1);
            }
        });

    }

    removeVertex(vertex){

        if(!this.vertex[vertex]){
            return false
        }

        if(this.directional === true){
            delete this.vertex[vertex];
            return true
        }

        delete this.vertex[vertex];
        for(const prop in this.vertex){
            this.vertex[prop].forEach((item, index) => {
                if(item === vertex){
                    this.vertex[prop].splice(index, 1);
                }
            });
        }
    }

    getNeighbors(vertex){
        return this.vertex[vertex].join(" , ")
    }

    display(){
        for(const vertex in this.vertex){
            console.log(`
                Vértice: ${vertex} -> Arestas: ${this.vertex[vertex].join(" , ")} 
                `)
        }
    }
}

const grafo = new Graph();
grafo.addVertex("A");
grafo.addVertex("B");
grafo.addVertex("C");
grafo.addVertex("D");
grafo.addEdge("A", "B");
grafo.addEdge("A", "C");
grafo.addEdge("B", "C");
// grafo.removeVertex("C")

console.log(grafo)
grafo.display();



// grafo = {
//     A: ["B", "C"],
//     B: ["C"],
//     C: ["A"],
// }