document.addEventListener("DOMContentLoaded", () => {

    preencheListItemParMemoria();

    const container = document.querySelectorAll('.container-card');

    shuffle(listItemParMemoria);
    shuffle(listItemParMemoria);
    shuffle(listItemParMemoria);

    var i;
    i = 1;
    for(var item of listItemParMemoria) {
        item.sequencia = i;
        i++;
    }

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
        
        elTextFrontId = document.createElement('h2');
        elTextFrontId.classList.add('card-number'); 
        elTextFrontId.innerText = item.sequencia;
        
        //elImgFront = document.createElement('img');
        //elImgFront.src = 'img\\img_avatar.png';
        //elImgFront.alt = 'Avatar'
        //elImgFront.style = 'width:300px;height:300px;';

        if (item.termo) {
            elTextBack = document.createElement('p');
            elTextBack.innerText = item.texto;
        } else {
            elTextBack = document.createElement('h2');
            elTextBack.innerText = item.texto;
        }
        
        elDiv.appendChild(elDivFlipCard);
        elDivFlipCard.appendChild(elDivFlipCardInner);

        elDivFlipCard.id = item.codigo

        elDivFlipCardInner.appendChild(elDivFlipCardFront);
        elDivFlipCardInner.appendChild(elDivFlipCardBack);
        //elDivFlipCardFront.appendChild(elImgFront);
        elDivFlipCardFront.appendChild(elTextFrontId);
        elDivFlipCardBack.appendChild(elTextBack);


        container[0].appendChild(elDiv); 
    }


    const flipCard = document.querySelectorAll('.flip-card');
    for(var i of flipCard){
        i.addEventListener('mouseover', function(){              
            if (listItemParMemoria.find(x => x.codigo == this.id).audiodescricao != '' && !this.classList.contains('flip-card-click')) {
                var audioplayer = document.getElementById('audioplay');
                audioplayer.src = 'mp3/carta'+listItemParMemoria.find(x => x.codigo == this.id).sequencia+'.m4a';

                if (document.getElementById("enableAudioDescricao").checked) {
                    audioplayer.play();
                }                
            }
        })

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

                        if (listItemParMemoria.find(x => x.codigo == idCartaVirada.id).par == listItemParMemoria.find(x => x.codigo == this.id).par){
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
            
            if (listItemParMemoria.find(x => x.codigo == this.id).audiodescricao != '' && this.classList.contains('flip-card-click')) {
                var audioplayer = document.getElementById('audioplay');
                audioplayer.src = listItemParMemoria.find(x => x.codigo == this.id).audiodescricao
                if (document.getElementById("enableAudioDescricao").checked) {
                    audioplayer.play();
                } 
            }   
            
            if (listItemParMemoria.find(x => x.codigo == this.id).videolibras != '' && this.classList.contains('flip-card-click')) {
                var videoplayer = document.getElementById('videoplay');
                videoplayer.src = listItemParMemoria.find(x => x.codigo == this.id).videolibras
                if (document.getElementById("enableVideoDescricao").checked) {
                    videoplayer.play();
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
    this.par = 0;
    this.termo = false;
    this.definicao = false;
    this.texto = '';
    this.audiodescricao = '';
    this.videolibras = '';
    this.encontrou = false;
    this.virou = false;
    this.sequencia = 0;
}

var listItemParMemoria = [];

function preencheListItemParMemoria () {
    var item = new itemParMemoria();
    item.codigo = 1;
    item.par = 1;
    item.termo = true;
    item.definicao = false;
    item.texto = 'Princípio do SUS: INTEGRALIDADE';
    item.audiodescricao = 'mp3/termo1.m4a';
    item.videolibras = 'mp4/video1.mov';
    item.encontrou = false;
    item.virou = false;
    listItemParMemoria.push(item);
    
    var item = new itemParMemoria();
    item.codigo = 2;
    item.par = 1;
    item.termo = false;
    item.definicao = true;
    item.texto = 'Princípio que considera as pessoas como um todo, atendendo a todas as suas necessidades.';
    item.audiodescricao = 'mp3/definicao1.m4a';
    item.videolibras = 'mp4/video2.mov';
    item.encontrou = false;
    item.virou = false;
    listItemParMemoria.push(item);
    
    var item = new itemParMemoria();
    item.codigo = 3;
    item.par = 2;
    item.termo = true;
    item.definicao = false;
    item.texto = 'Princípio do SUS: EQUIDADE';
    item.audiodescricao = 'mp3/termo2.m4a';
    item.videolibras = 'mp4/video3.mov';
    item.encontrou = false;
    item.virou = false;
    listItemParMemoria.push(item);
    
    var item = new itemParMemoria();
    item.codigo = 4;
    item.par = 2;
    item.termo = false;
    item.definicao = true;
    item.texto = 'Princípio que tem como objetivo diminuir as desigualdades.';
    item.audiodescricao = 'mp3/definicao2.m4a';
    item.videolibras = 'mp4/video4.mov';
    item.encontrou = false;
    item.virou = false;
    listItemParMemoria.push(item);
    
    var item = new itemParMemoria();
    item.codigo = 5;
    item.par = 3;
    item.termo = true;
    item.definicao = false;
    item.texto = 'Princípio do SUS: UNIVERSALIZAÇÃO';
    item.audiodescricao = 'mp3/termo3.m4a';
    item.videolibras = 'mp4/video1.mov';
    item.encontrou = false;
    item.virou = false;
    listItemParMemoria.push(item);
    
    var item = new itemParMemoria();
    item.codigo = 6;
    item.par = 3;
    item.termo = false;
    item.definicao = true;
    item.texto = 'Princípio que visa que a saúde é um direito de cidadania de todas as pessoas e cabe ao Estado assegurar este direito, sendo que o acesso às ações e serviços deve ser garantido a todas as pessoas, independentemente de sexo, raça, ocupação ou outras características sociais ou pessoais.';
    item.audiodescricao = 'mp3/definicao3.m4a';
    item.videolibras = 'mp4/video2.mov';
    item.encontrou = false;
    item.virou = false;
    listItemParMemoria.push(item);
    
    var item = new itemParMemoria();
    item.codigo = 7;
    item.par = 4;
    item.termo = true;
    item.definicao = false;
    item.texto = 'Princípio Organizativo: REGIONALIZAÇÃO';
    item.audiodescricao = 'mp3/termo4.m4a';
    item.videolibras = 'mp4/video3.mov';
    item.encontrou = false;
    item.virou = false;
    listItemParMemoria.push(item);
    
    var item = new itemParMemoria();
    item.codigo = 8;
    item.par = 4;
    item.termo = false;
    item.definicao = true;
    item.texto = 'É um processo de articulação entre os serviços que já existem, visando o comando unificado dos mesmos.';
    item.audiodescricao = 'mp3/definicao4.m4a';
    item.videolibras = 'mp4/video4.mov';
    item.encontrou = false;
    item.virou = false;
    listItemParMemoria.push(item);
    
    var item = new itemParMemoria();
    item.codigo = 9;
    item.par = 5;
    item.termo = true;
    item.definicao = false;
    item.texto = 'Princípio Organizativo: HIERARQUIZAÇÃO';
    item.audiodescricao = 'mp3/termo5.m4a';
    item.videolibras = 'mp4/video1.mov';
    item.encontrou = false;
    item.virou = false;
    listItemParMemoria.push(item);
    
    var item = new itemParMemoria();
    item.codigo = 10;
    item.par = 5;
    item.termo = false;
    item.definicao = true;
    item.texto = 'Deve proceder à divisão de níveis de atenção e garantir formas de acesso a serviços que façam parte da complexidade requerida pelo caso, nos limites dos recursos disponíveis numa dada região.';
    item.audiodescricao = 'mp3/definicao5.m4a';
    item.videolibras = 'mp4/video2.mov';
    item.encontrou = false;
    item.virou = false;
    listItemParMemoria.push(item);
    
    var item = new itemParMemoria();
    item.codigo = 11;
    item.par = 6;
    item.termo = true;
    item.definicao = false;
    item.texto = 'Princípio Organizativo: DESCENTRALIZAÇÃO';
    item.audiodescricao = 'mp3/termo6.m4a';
    item.videolibras = 'mp4/video3.mov';
    item.encontrou = false;
    item.virou = false;
    listItemParMemoria.push(item);
    
    var item = new itemParMemoria();
    item.codigo = 12;
    item.par = 6;
    item.termo = false;
    item.definicao = true;
    item.texto = 'Visa redistribuir poder e responsabilidade entre os três níveis de governo.';
    item.audiodescricao = 'mp3/definicao6.m4a';
    item.videolibras = 'mp4/video4.mov';
    item.encontrou = false;
    item.virou = false;
    listItemParMemoria.push(item);
    
    var item = new itemParMemoria();
    item.codigo = 13;
    item.par = 7;
    item.termo = true;
    item.definicao = false;
    item.texto = 'Princípio Organizativo: POPULAR';
    item.audiodescricao = 'mp3/termo7.m4a';
    item.videolibras = 'mp4/video1.mov';
    item.encontrou = false;
    item.virou = false;
    listItemParMemoria.push(item);
    
    var item = new itemParMemoria();
    item.codigo = 14;
    item.par = 7;
    item.termo = false;
    item.definicao = true;
    item.texto = 'Nesse princípio a sociedade deve participar no dia-a-dia do sistema. Para isto, devem ser criados os Conselhos e as Conferências de Saúde, que visam formular estratégias, controlar e avaliar a execução da política de saúde.';
    item.audiodescricao = 'mp3/definicao7.m4a';
    item.videolibras = 'mp4/video2.mov';
    item.encontrou = false;
    item.virou = false;
    listItemParMemoria.push(item);
    
    var item = new itemParMemoria();
    item.codigo = 15;
    item.par = 8;
    item.termo = true;
    item.definicao = false;
    item.texto = 'Responsabilidade da União';
    item.audiodescricao = 'mp3/termo8.m4a';
    item.videolibras = 'mp4/video3.mov';
    item.encontrou = false;
    item.virou = false;
    listItemParMemoria.push(item);
    
    var item = new itemParMemoria();
    item.codigo = 16;
    item.par = 8;
    item.termo = false;
    item.definicao = true;
    item.texto = 'O principal financiador da rede pública de saúde. Historicamente, o Ministério da Saúde aplica metade de todos os recursos gastos no país em saúde pública em todo o Brasil, e estados e municípios, em geral, contribuem com a outra metade dos recursos';
    item.audiodescricao = 'mp3/definicao8.m4a';
    item.videolibras = 'mp4/video4.mov';
    item.encontrou = false;
    item.virou = false;
    listItemParMemoria.push(item);
    
    var item = new itemParMemoria();
    item.codigo = 17;
    item.par = 9;
    item.termo = true;
    item.definicao = false;
    item.texto = 'Responsabilidade dos Estados';
    item.audiodescricao = 'mp3/termo9.m4a';
    item.videolibras = 'mp4/video1.mov';
    item.encontrou = false;
    item.virou = false;
    listItemParMemoria.push(item);
    
    var item = new itemParMemoria();
    item.codigo = 18;
    item.par = 9;
    item.termo = false;
    item.definicao = true;
    item.texto = 'Possuem secretarias específicas para a gestão de saúde. O gestor deve aplicar recursos próprios, inclusive nos municípios, e os repassados pela União. Além de ser um dos parceiros para a aplicação de políticas nacionais de saúde, formula suas próprias políticas de saúde. Ele coordena e planeja o SUS em nível estadual, respeitando a normatização federal.';
    item.audiodescricao = 'mp3/definicao9.m4a';
    item.videolibras = 'mp4/video2.mov';
    item.encontrou = false;
    item.virou = false;
    listItemParMemoria.push(item);
    
    var item = new itemParMemoria();
    item.codigo = 19;
    item.par = 10;
    item.termo = true;
    item.definicao = false;
    item.texto = 'Responsabilidades do Município';
    item.audiodescricao = 'mp3/termo10.m4a';
    item.videolibras = 'mp4/video3.mov';
    item.encontrou = false;
    item.virou = false;
    listItemParMemoria.push(item);
    
    var item = new itemParMemoria();
    item.codigo = 20;
    item.par = 10;
    item.termo = false;
    item.definicao = true;
    item.texto = 'Responsáveis pela execução das ações e serviços de saúde no âmbito do seu território.  O gestor deve aplicar recursos próprios e os repassados pela União e pelo estado. O município formula suas próprias políticas de saúde e também é um dos parceiros para a aplicação de políticas nacionais e estaduais de saúde.';
    item.audiodescricao = 'mp3/definicao10.m4a';
    item.videolibras = 'mp4/video4.mov';
    item.encontrou = false;
    item.virou = false;
    listItemParMemoria.push(item);    
}