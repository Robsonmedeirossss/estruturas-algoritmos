class Pilha{

    constructor(limite){
        this.pilha = []
        this.limite = limite  || undefined
    }

    adicionar(elemento){
        if(this.pilha.length < this.limite || this.limite === undefined){
            this.pilha.push(elemento)
            return `Item ${elemento} adicionado na pilha`
        }

        return 'Limite máximo atingido'
    }

    remover(){
        if(this.vazia()){
            return 'Não pode remover de uma pilha vazia'
        }
        return this.pilha.pop()
    }

    listar(){
        for(const elemento of this.pilha){
            console.log(elemento)
        }
    }

    zerar(){
        this.pilha.length = 0
    }

    vazia(){
        return this.pilha.length === 0
    }

    get ultimoElemento(){
        return this.pilha[this.pilha.length - 1] || null
    }

    get tamanho(){
        return this.pilha.length
    }
}

const minhaPilha = new Pilha()
console.log(minhaPilha.remover())
console.log(minhaPilha.adicionar(5))
console.log(minhaPilha.adicionar(2))
console.log(minhaPilha.adicionar(1))
console.log(minhaPilha.remover())
minhaPilha.listar()
minhaPilha.listar()
minhaPilha.zerar()
minhaPilha.listar()
console.log(minhaPilha.vazia())
console.log(minhaPilha.adicionar(1))
console.log(minhaPilha.adicionar(2))
console.log(minhaPilha.ultimoElemento)