class filaCircular{

    constructor(limite){
        this.filaCircular = []
        this.posicaoAtual = 0
        this.limite = (limite > 0 && !isNaN(limite)) ? limite : 5
    }

    adicionar(elemento){
        if(this.estaCheia() && this.filaCircular[this.posicaoAtual + 1] == undefined){
            this.filaCircular.shift()
            this.filaCircular.push(elemento)
            this.posicaoAtual = this.filaCircular.length - 1
            return
        }

        if(this.filaCircular[this.posicaoAtual + 1] != undefined){
            const restanteDaFila = this.limite - (this.posicaoAtual + 1)
            this.filaCircular.splice(this.posicaoAtual + 1, restanteDaFila, elemento)
            this.posicaoAtual = this.filaCircular.length - 1
            return
        }

        this.filaCircular.push(elemento)
        this.posicaoAtual = this.filaCircular.length - 1
    }

    avancar(){
        if(this.filaCircular[this.posicaoAtual + 1] == undefined){
            console.log('Não pode avançar, nenhum elemento a frente')
            return
        }
        this.posicaoAtual++
        console.log(`Avançou 1, sua posição atual é: ${this.posicaoAtual}`)
    }

    retroceder(){   
        if(this.filaCircular[this.posicaoAtual - 1] == undefined){
            console.log('Não pode retroceder')
            return
        }
        
        this.posicaoAtual--
        console.log(`Retornou 1, sua posição atual é: ${this.posicaoAtual}`)
    }

    estaCheia(){
        return this.filaCircular.length == this.limite
    }

    estaVazia(){
        return this.filaCircular.length == 0
    }

    get elementoAtual(){
        if(this.estaVazia()){
            return 'Fila vazia'
        }

        return this.filaCircular[this.posicaoAtual]
    }

    get viewFila(){
        return this.filaCircular
    }
}

const fila = new filaCircular()

function saveForm(event){
    event.preventDefault()

    const formData = new FormData(event.target)

    const name = formData.get('name-history-browsing')

    const achou = fila.filaCircular.find((item) => item == name)

    if(achou){
        return alert('Url já existente na fila')
    }

    fila.adicionar(name)

    console.log(fila)

    attFila(fila)
    marcarElementoAtual()
}

function listenerFila(item){
    return `
    <span id="${item}">${item} | </span>
   `
}

function attFila(fila){
    
    let textConcat = ''
    
    for( const item of fila.filaCircular){
        textConcat += listenerFila(item)
    }

    document.getElementById('browsing-history-content').innerHTML = textConcat
}

const buttonIconLeft = document.getElementById('button-icon-left')
const buttonIconRigth = document.getElementById('button-icon-rigth')

buttonIconLeft.addEventListener('click', () => {
    fila.retroceder()
    
    marcarElementoAtual()
})

buttonIconRigth.addEventListener('click', () => {
    fila.avancar()

    marcarElementoAtual()
    
})

function marcarElementoAtual(){
    const achou = fila.filaCircular.find((name) => name == fila.filaCircular[fila.posicaoAtual])

    if(!achou){
        return
    }

    const itemMarcado = document.querySelector('.item-marcado')
    if(itemMarcado){
        itemMarcado.classList.remove('item-marcado')
    }

    document.getElementById(`${achou}`).classList.add('item-marcado')
}


