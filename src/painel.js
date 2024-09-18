const botaoAvancar = document.getElementById('btn-avancar')
const botaoVoltar = document.getElementById('btn-voltar')

const imagensPainel = document.querySelectorAll('.imagem-painel')

let imagemAtual = 0

botaoAvancar.addEventListener('click', () => {
    const totalDeImagem = imagensPainel.length - 1
    if (imagemAtual === totalDeImagem) {
        return
    }

    imagemAtual++
    
    imagensPainel.forEach(imagemMostrar => {
        imagemMostrar.classList.remove('mostrar')
    })

    imagensPainel[imagemAtual].classList.add('mostrar')
})

botaoVoltar.addEventListener('click', () => {
    if(imagemAtual === 0){
        return
    }

    imagemAtual--
    
    imagensPainel.forEach(imagemMostrar => {
        imagemMostrar.classList.remove('mostrar')
    })

    imagensPainel[imagemAtual].classList.add('mostrar')
})