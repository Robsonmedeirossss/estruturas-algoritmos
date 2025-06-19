// insert(value), search, remove, find_min_node

class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    insert(value){
        const newNode = new Node(value);

        if(this.root === null){
            this.root = newNode;
            return true;
        }

        return this.#_insert(this.root, newNode);
    }

    #_insert(currentNode, newNode){
        if(newNode.value > currentNode.value){
            if(currentNode.right === null){
                currentNode.right = newNode;
                return true;
            }
            return this.#_insert(currentNode.right, newNode);
        }

        if(newNode.value < currentNode.value){
            if(currentNode.left === null){
                currentNode.left = newNode;
                return true;
            }
            return this.#_insert(currentNode.left, newNode);
        }

        return false
    }

    search(key){
        return this.#_search(this.root, key)
    }

    #_search(currentNode, key){
        if(!currentNode){
            return null
        }

        if(key > currentNode.value){
            return this.#_search(currentNode.right, key)
        }

        if(key < currentNode.value){
            return this.#_search(currentNode.left, key)
        }

        return true
    }

    remove(key){
        return this.root = this.#_remove(this.root, key)
    }

    #_remove(currentNode, key){
        if(!currentNode){
            return null
        }

        if(key > currentNode.value){
            currentNode.right = this.#_remove(currentNode.right, key)
            return currentNode
        }

        if(key < currentNode.value){
            currentNode.left = this.#_remove(currentNode.left, key)
            return currentNode
        }

        //achou

        if(!currentNode.left && !currentNode.right){
            return null 
        }

        if(!currentNode.right){
            currentNode = currentNode.left
            return currentNode
        }

        if(!currentNode.right){
            currentNode = currentNode.right
            return currentNode
        }

        const aux = this.#_findMinNode(currentNode.right)
        currentNode.value = aux.value
        this.#_remove(currentNode.right, aux.value)
        return currentNode
    }

    #_findMinNode(currentNode){
        while(currentNode && currentNode.left != null){
            currentNode = currentNode.left
        }

        return currentNode
    }

    printPreOrder(callback){
        this.#_printPreOrder(this.root, callback)
    }


    #_printPreOrder(node, callback){
        if(node !== null && typeof callback == 'function'){
            this.#_printPreOrder(node.left, callback)
            callback(node.value)
            this.#_printPreOrder(node.right, callback)
        }
    }

    imprimir(value){
        console.log('Valor ' + value)
    }
}

const bst = new BinarySearchTree()
console.log(bst.insert(45))
console.log(bst.insert(45))
console.log(bst.insert(55))
console.log(bst.insert(35))
console.log(bst.insert(30))
console.log(bst.insert(37))
console.log(bst.insert(36))
console.log(bst.insert(25))
/*console.log(bst)*/
console.log(bst.search(25))
console.log(bst.remove(35))
bst.printPreOrder(bst.imprimir)
