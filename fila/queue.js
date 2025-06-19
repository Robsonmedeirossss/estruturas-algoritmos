class Fila{
    
    constructor(limite){
        this.fila = []
        this.limite = (limite && limite > 0) ? limite : null
    }

    adicionar(elemento){
        if(this.fila.length < this.limite || this.limite === null){
            this.fila.push(elemento)
            return `Item ${elemento} adicionado com sucesso`
        }
        return 'Limite da fila atingido'
    }

    remover(){
        if(this.vazia()){
            return 'Não pode remover de uma lista vazia'
        }

        return this.fila.shift()
    }

    listar(){
        for(const elemento of this.fila){
            console.log(elemento)
        }
    }

    vazia(){
        return this.fila.length == 0
    }

    cheia(){
        if(this.limite != null){
            return this.fila.length >= this.limite
        }

        return false
    }

    get primeiroElemento(){
        return this.fila[0] || null
    }

    get ultimoElemento(){
        return this.fila[this.fila.length - 1] || null
    }

    get tamanho(){
        return this.fila.length
    }

}

const queue = new Fila()
console.log(queue)

console.log(queue.adicionar(2))
console.log(queue.adicionar(7))
console.log(queue.adicionar(8))
console.log(queue.adicionar(9))
console.log(queue.adicionar(1))

console.log(queue.ultimoElemento)
console.log(queue.primeiroElemento)

queue.remover()
queue.remover()
queue.remover()
queue.remover()
queue.remover()
console.log(queue.tamanho)

console.log(queue.primeiroElemento, queue.ultimoElemento)

console.log(queue.adicionar(2))
console.log(queue.adicionar(7))
console.log(queue.adicionar(8))
console.log(queue.adicionar(9))
console.log(queue.adicionar(1))

console.log(queue.cheia())