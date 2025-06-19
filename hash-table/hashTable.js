class Node{
    constructor(key, value){
        this.value = value
        this.key = key
        this.next = null
    }
}


class LinkedList{
    #size
    constructor(){
        this.head = null
        this.tail = null
        this.#size = 0
    }

    append(key, value){
        const newNode = new Node(key, value)
        if(this.isEmpty()){
            this.#addWhenEmpty(newNode)
            return
        }

        let currentNode = this.head

        while(currentNode){
            if(currentNode.key == key){
                return `Chave já existente, chaves devem ser unicas`
            }

            currentNode = currentNode.next
        }
        const lastNode = this.tail
        lastNode.next = newNode
        this.tail = newNode
        this.#size++
    }

    #addWhenEmpty(newNode){
        this.head = newNode
        this.tail = newNode
        this.#size++
    }

    remove(key){
        if(this.isEmpty()){
            return null
        }

        let currentNode = this.head
        let previousNode = null

        if(currentNode.key == key){
            this.head = currentNode.next
            currentNode.next = null
            this.#size--
            return
        }

        while(currentNode){
            if(currentNode.key == key){
                break
            }

            previousNode = currentNode
            currentNode = currentNode.next
        }


        previousNode.next = currentNode.next
        currentNode.next = null
        this.#size--
    }


    isEmpty(){
        return this.head === null
    }

    getElement(key){
        if(this.isEmpty()){
            return null
        }

        let currentNode = this.head
        
        while(currentNode){
            if(currentNode.key == key){
                return currentNode.value
            }
            currentNode = currentNode.next
        }
    }

    printLinkedList(){

        if(this.isEmpty()){
            return null
        }

        let currentNode = this.head
        let combinedText = ''

        while(currentNode){
            if(currentNode.next == null){
                combinedText += currentNode.value + '---> null'
                break
            }

            combinedText += currentNode.value + '---> '
            currentNode = currentNode.next
        }

        console.log(combinedText)
    }
}

class HashTable{
    constructor(limite){
        this.limite = limite > 7 && !isNaN(limite)? limite : 97
        this.hashTable = []
    }
    
    hash(key){
        let hashValue = 0

        for(let i = 0; i < key.length; i++){
            hashValue += key[i].charCodeAt()
        }

        return hashValue % this.limite
    }

    insert(key, value){
        const index = this.hash(key)

        if(this.hashTable[index] == undefined){
            this.hashTable[index] = new LinkedList()
            this.hashTable[index].append(key, value)
            return true
        }

        return this.hashTable[index].append(key, value)
        
    }

    remove(key){
        const index = this.hash(key)

        if(this.hashTable[index].isEmpty()){
            return null
        }

        this.hashTable[index].remove(key)

        if(this.hashTable[index].isEmpty()){
            this.hashTable[index] = undefined
            return true
        }
    }

    get(key){
        const index = this.hash(key)

        if(this.hashTable[index].isEmpty()){
            return null
        }

        return this.hashTable[index].getElement(key)
    }
}

const teste = new HashTable()

teste.insert('robson', 99)
teste.insert('teste', 88)
console.log(teste.insert('robson', 77))

