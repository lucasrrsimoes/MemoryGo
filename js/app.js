document.addEventListener("DOMContentLoaded", () => {

    preencheListItemParMemoria();

    const container = document.querySelectorAll('.container-card');

    //shuffle(listItemParMemoria);
    //shuffle(listItemParMemoria);
    //shuffle(listItemParMemoria);

    for(var item of listItemParMemoria) {
        
        var elDiv = document.createElement('div');
        elDiv.classList.add('gray');
        
        var elDivFlipCard = document.createElement('div');
        elDivFlipCard.classList.add('flip-card');

        elDivFlipCardInner = document.createElement('div');
        elDivFlipCardInner.classList.add('flip-card-inner');

        elDivFlipCardFront = document.createElement('div');
        elDivFlipCardFront.classList.add('flip-card-front');

        elDivFlipCardBack = document.createElement('div');
        elDivFlipCardBack.classList.add('flip-card-back');     
        
        elImgFront = document.createElement('img');
        elImgFront.src = 'img\\img_avatar.png';
        elImgFront.alt = 'Avatar'
        elImgFront.style = 'width:300px;height:300px;';

        if (item.termo == '') {
            elTextBack = document.createElement('p');
            elTextBack.innerText = item.definicao;
        } else {
            elTextBack = document.createElement('h2');
            elTextBack.innerText = item.termo;
        }
        
        elDiv.appendChild(elDivFlipCard);
        elDivFlipCard.appendChild(elDivFlipCardInner);

        if (item.termo == '') {
            elDivFlipCard.id = 'b'+item.codigo;
        } else {
            elDivFlipCard.id = 'a'+item.codigo;
        } 

        elDivFlipCardInner.appendChild(elDivFlipCardFront);
        elDivFlipCardInner.appendChild(elDivFlipCardBack);
        elDivFlipCardFront.appendChild(elImgFront);
        elDivFlipCardBack.appendChild(elTextBack);


        container[0].appendChild(elDiv); 
    }


    const flipCard = document.querySelectorAll('.flip-card');
    for(var i of flipCard){
        i.addEventListener('click', function(){

            if (!this.classList.contains('finded')) {
                this.classList.toggle('flip-card-click');                

                flipCount++;
                if (flipCount == 3) {
                    flipCount = 0;
                    desviraCartas();
                } else {
                    if (idCartaVirada == undefined) {
                        idCartaVirada = this;
                    } else {
                        if (idCartaVirada.id == this.id){
                            idCartaVirada = undefined;          
                            flipCount = 0;
                            desviraCartas();
                            return;
                        }

                        if (idCartaVirada.id.substring(1) == this.id.substring(1)) {
                            flipCount = 0;
                            idCartaVirada.classList.add('flip-card-click');
                            idCartaVirada.classList.add('finded');
                            this.classList.add('flip-card-click');
                            this.classList.add('finded');
                        }
                        idCartaVirada = undefined;                
                    }  
                } 
            }                 
        })
    }
});

var idCartaVirada;
var flipCount = 0;

function desviraCartas(){
    const flipCards = document.querySelectorAll('.flip-card');
    for(var card of flipCards){
        if (!card.classList.contains('finded')) {
            if (card.classList.contains('flip-card-click')) {
                card.classList.remove('flip-card-click');            
            }
        }
    }
}


function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }

function itemParMemoria() {
    this.codigo = 0;
    this.termo = '';
    this.definicao = '';
    this.encontrou = false;
}

var listItemParMemoria = [];

function preencheListItemParMemoria () {
    //TERMO
    var item = new itemParMemoria();
    item.codigo = 1;
    item.termo = 'Princípio do SUS: INTEGRALIDADE';
    item.definicao = '';
    listItemParMemoria.push(item);  
	
    var item = new itemParMemoria();
    item.codigo = 2;
    item.termo = 'Princípio do SUS: EQUIDADE';
    item.definicao = '';
    listItemParMemoria.push(item);  	
	
    var item = new itemParMemoria();
    item.codigo = 3;
    item.termo = 'Princípio do SUS: UNIVERSALIZAÇÃO';
    item.definicao = '';
    listItemParMemoria.push(item);  		
	
    var item = new itemParMemoria();
    item.codigo = 4;
    item.termo = 'Princípio Organizativo: REGIONALIZAÇÃO';
    item.definicao = '';
    listItemParMemoria.push(item);  
	
    var item = new itemParMemoria();
    item.codigo = 5;
    item.termo = 'Princípio Organizativo: HIERARQUIZAÇÃO';
    item.definicao = '';
    listItemParMemoria.push(item);  
	
    var item = new itemParMemoria();
    item.codigo = 6;
    item.termo = 'Princípio Organizativo: DESCENTRALIZAÇÃO';
    item.definicao = '';
    listItemParMemoria.push(item);
	
/*     var item = new itemParMemoria();
    item.codigo = 7;
    item.termo = 'Princípio Organizativo: POPULAR';
    item.definicao = '';
    listItemParMemoria.push(item);	
	
    var item = new itemParMemoria();
    item.codigo = 8;
    item.termo = 'Responsabilidade da União';
    item.definicao = '';
    listItemParMemoria.push(item);		

    var item = new itemParMemoria();
    item.codigo = 9;
    item.termo = 'Responsabilidade dos Estados';
    item.definicao = '';
    listItemParMemoria.push(item);	
	 
    var item = new itemParMemoria();
    item.codigo = 10;
    item.termo = 'Responsabilidades do Município';
    item.definicao = '';
    listItemParMemoria.push(item); */

    //DEFINIÇÃO
    var item = new itemParMemoria();
    item.codigo = 1;
    item.termo = '';
    item.definicao = 'Princípio que considera as pessoas como um todo, atendendo a todas as suas necessidades.';
    listItemParMemoria.push(item);  
	
    var item = new itemParMemoria();
    item.codigo = 2;
    item.termo = '';
    item.definicao = 'Princípio que tem como objetivo diminuir as desigualdades.';
    listItemParMemoria.push(item);  	
	
    var item = new itemParMemoria();
    item.codigo = 3;
    item.termo = '';
    item.definicao = 'Princípio que visa que a saúde é um direito de cidadania de todas as pessoas e cabe ao Estado assegurar este direito, sendo que o acesso às ações e serviços deve ser garantido a todas as pessoas, independentemente de sexo, raça, ocupação ou outras características sociais ou pessoais.';
    listItemParMemoria.push(item);  		
	
    var item = new itemParMemoria();
    item.codigo = 4;
    item.termo = '';
    item.definicao = 'É um processo de articulação entre os serviços que já existem, visando o comando unificado dos mesmos.';
    listItemParMemoria.push(item);  
	
    var item = new itemParMemoria();
    item.codigo = 5;
    item.termo = '';
    item.definicao = 'Deve proceder à divisão de níveis de atenção e garantir formas de acesso a serviços que façam parte da complexidade requerida pelo caso, nos limites dos recursos disponíveis numa dada região.';
    listItemParMemoria.push(item);  
	
    var item = new itemParMemoria();
    item.codigo = 6;
    item.termo = '';
    item.definicao = 'Visa redistribuir poder e responsabilidade entre os três níveis de governo.';
    listItemParMemoria.push(item);
	
/*     var item = new itemParMemoria();
    item.codigo = 7;
    item.termo = '';
    item.definicao = 'Nesse princípio a sociedade deve participar no dia-a-dia do sistema. Para isto, devem ser criados os Conselhos e as Conferências de Saúde, que visam formular estratégias, controlar e avaliar a execução da política de saúde.';
    listItemParMemoria.push(item);	
	
    var item = new itemParMemoria();
    item.codigo = 8;
    item.termo = '';
    item.definicao = 'O principal financiador da rede pública de saúde. Historicamente, o Ministério da Saúde aplica metade de todos os recursos gastos no país em saúde pública em todo o Brasil, e estados e municípios, em geral, contribuem com a outra metade dos recursos';
    listItemParMemoria.push(item);		

    var item = new itemParMemoria();
    item.codigo = 9;
    item.termo = '';
    item.definicao = 'Possuem secretarias específicas para a gestão de saúde. O gestor deve aplicar recursos próprios, inclusive nos municípios, e os repassados pela União. Além de ser um dos parceiros para a aplicação de políticas nacionais de saúde, formula suas próprias políticas de saúde. Ele coordena e planeja o SUS em nível estadual, respeitando a normatização federal.';
    listItemParMemoria.push(item);	
	 
    var item = new itemParMemoria();
    item.codigo = 10;
    item.termo = '';
    item.definicao = 'Responsáveis pela execução das ações e serviços de saúde no âmbito do seu território.  O gestor deve aplicar recursos próprios e os repassados pela União e pelo estado. O município formula suas próprias políticas de saúde e também é um dos parceiros para a aplicação de políticas nacionais e estaduais de saúde.';
    listItemParMemoria.push(item); */

}