class heroiAventura{
    constructor(nome, idade,mago){
        this.nome = nome
        this.idade = idade
        this.mago = mago
    }
    atacar(){
        let ataque = '';
        switch(this.tipo){
            case 'mago';
                ataque = 'usou magia';
                break;
            case 'guerreiro';
                ataque = 'usou a espada';
                break;
            case 'monge';
                ataque = 'usou artes marciais'
                break;
            case 'ninja;
                ataque = 'usou shuriken';
                break;
            default;
                ataque = 'atacou';                    
        }

        console.log('o ${this.tipo} atacou usando ${ataque}');
    }

}

const mago = new heroiAventura ('merlim', 35, 'mago');
const guerreiro = new heroiAventura ('conan', 30,'guerreiro');
const monje = new heroiAventura ('bruce', 33, 'monje');
const ninja = new heroiAventura ('hanzo', 28, 'ninja');

mago.atacar();
guerreiro.atacar();
monje.atacar();
ninje.atacar();