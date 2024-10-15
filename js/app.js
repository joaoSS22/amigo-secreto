let amigos = [];

function adicionar(){
    let amigo = document.getElementById('nome-amigo').value;
    let lista = document.getElementById('lista-amigos');
        if (amigo == '') {
                alert('Insira um nome no campo');
                return
        }

        if (amigos.includes(amigo)) {
                alert('Este nome ja esta na lista');
                return
        }else {
                amigos.push(amigo);
         }

    
    if (lista.textContent == '') {
        lista.textContent = amigo;
        }else{
        lista.textContent = lista.textContent +' , ' + amigo; 
        }
    document.getElementById('nome-amigo').value = '';
    

    }

    function sortear(){
        embaralha(amigos);
        let sorteio = document.getElementById('lista-sorteio');

        if (sorteio.innerHTML !== '') {
            sorteio.innerHTML = '';
        }

        if (amigos.length <= 3) {
            alert('Insira 4 ou mais nomes para o sorteio');
            return
        }

        for (let i = 0; i < amigos.length ; i++) {

            if (i == amigos.length - 1) {
                sorteio.innerHTML = sorteio.innerHTML +  amigos[i] + '-->' + amigos[0] + '<br>';
            } else {
                sorteio.innerHTML = sorteio.innerHTML + amigos[i] + '-->' + amigos[i +1] + '<br>';
            }
            
        }
    }

    function reiniciar() {
        amigos = []
        document.getElementById('lista-sorteio').textContent = '';
        document.getElementById('lista-amigos').textContent = '';
    }

    function embaralha(lista) {

        for (let indice = lista.length; indice; indice--) {
    
            const indiceAleatorio = Math.floor(Math.random() * indice);
    
            // atribuição via destructuring
            [lista[indice - 1], lista[indiceAleatorio]] = 
                [lista[indiceAleatorio], lista[indice - 1]];
        }
    }
    


