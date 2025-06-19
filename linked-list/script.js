class Node {
    constructor(value){
        this.value = value
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

    append(value){
        const newNode = new Node(value)
        if(this.isEmpty()){
            this.#addWhenEmpty(newNode)
            return
        }
        const lastNode = this.tail
        lastNode.next = newNode
        this.tail = newNode
        this.#size++       
    }

    inserAt(value, index){
        if(index < 1 || index > this.#size + 1){
            return
        }

        const newNode = new Node(value)
        
        if(this.isEmpty()){
            this.#addWhenEmpty(newNode)
            return
        }
        
        let currentNode = this.head
        let previousNode = null                             

        for(let i = 0; i < index - 1; i++){       
            previousNode = currentNode
            currentNode = currentNode.next
        }

        previousNode.next = newNode
        newNode.next = currentNode
        this.#size++

    }

    prepend(value){
        const newNode = new Node(value)
        if(this.isEmpty()){
            this.#addWhenEmpty(newNode)
            return
        }

        const firstNode = this.head
        newNode.next = firstNode
        this.head = newNode
        this.#size++
    }

    #addWhenEmpty(newNode){
        this.head = newNode
        this.tail = newNode
        this.#size++
    }
    
    isEmpty(){
        return this.head == null
    }

    removeFromStart(){
        if(this.isEmpty()){
            return
        }
        const firstNode = this.head
        this.head = firstNode.next
        firstNode.next = null
        this.#size--
    }

    removeAt(index){
        if(this.isEmpty()){
            return
        }

        if(index < 1 || index > this.#size + 1){
            return
        }

        if(index == 1){
            this.removeFromStart()
            return
        }

        let currentNode = this.head
        let previousNode = null

        for(let i = 0; i < index - 1; i++){       // 4   8  5   6
            previousNode = currentNode
            currentNode = currentNode.next
        }

        previousNode.next = currentNode.next
        currentNode.newNode = null
        this.#size--
    }

    removeFromEnd(){

        if(this.isEmpty()){
            return
        }

        let currentNode = this.head
        let previousNode = null

        while(currentNode.next != null){
            previousNode = currentNode        //  4  5   9  8  9
            currentNode = currentNode.next
        }

        previousNode.next = null
        this.tail = previousNode
        this.#size--
    }

    printLinkedList(){
         let currentNode = this.head
         let combinedOutput = ''

         while(currentNode){
            if(currentNode.next == null){
                combinedOutput += currentNode.value + '--->null'
                break;
            }
            combinedOutput += currentNode.value + '--->'
            currentNode = currentNode.next
         }

         console.log(combinedOutput)
    }

    indexOf(value){
        let contador = 0
        let currentNode = this.head

        while(currentNode){
            contador++
            if(currentNode.value == value){
                return contador
            }
            currentNode = currentNode.next
        }

        return -1
    }

    lastIndexOf(value){
        let currentNode = this.head
        let index = 0

        for(let i = 0; i < this.#size; i ++){
            if(currentNode.value == value){
                index = i
            }
            currentNode = currentNode.next
        }
        return index
    }
}

const lista = new LinkedList()
lista.append(4)
lista.append(5)
lista.prepend(99)
lista.prepend(77)


const listLinkedList = node => {
    return `<div class="wrapper-node">
            <div class="node">${node.value}</div>
            <span class="line"></span>
        </div>`
}

const updateLinkedList = lista => {
    let combinedOutput = ''
    let currentNode = lista.head

    while(currentNode){
        combinedOutput += listLinkedList(currentNode)
        currentNode = currentNode.next
    }

    document.querySelector('.container-linked-list').innerHTML = combinedOutput
}

updateLinkedList(lista)


const containerInit = document.querySelector('.card-options')
const containerAddNode = document.querySelector('.container-linked-list-add')
const containerRemoveNode = document.querySelector('.container-linked-list-remove')

const clearInputs = () => {
    document.querySelectorAll('.input').forEach(Element => {
        Element.value = ''
    });

    document.querySelectorAll('.input')[0].focus()
}

const optionCardInit = event => {
    event.preventDefault()

    const formData = new FormData(event.target)

    const optionInit = formData.get('option')


    if(optionInit    == 'add'){
        containerInit.classList.add('none')
        containerAddNode.classList.remove('none')
        return
    }

    containerInit.classList.add('none')
    containerRemoveNode.classList.remove('none')
}

const addNode = event => {
    event.preventDefault()

    const formData = new FormData(event.target)

    const optionOperation = formData.get('optionAdd')
    const valueNode = formData.get('valueNode')
    const indexNode = formData.get('indexNode')

    if(optionOperation == 'addStart'){
        lista.prepend(valueNode)
        updateLinkedList(lista)
        clearInputs()
        return
    }

    if(optionOperation == 'addMiddle'){
        lista.inserAt(valueNode, indexNode)
        updateLinkedList(lista)
        clearInputs()
        return
    }

    lista.append(valueNode)
    updateLinkedList(lista)
    clearInputs()
}


const removeNode = event => {
    event.preventDefault()

    const formData = new FormData(event.target)

    const  optionOperation = formData.get('optionRemove')
    const indexNode = formData.get('indexNode')


    if(optionOperation == 'removeStart'){
        lista.removeFromStart()
        updateLinkedList(lista)
        clearInputs()
        return
    }

    if(optionOperation == 'removeMiddle'){
        lista.removeAt(indexNode)
        updateLinkedList(lista)
        clearInputs()
        return
    }

    lista.removeFromEnd()
    updateLinkedList(lista)
}


