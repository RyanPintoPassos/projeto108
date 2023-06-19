//https://teachablemachine.withgoogle.com/models/YuAcVWMAp/
function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true, video:false});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/YuAcVWMAp/model.json',{ probabilityThreshold: 0.7 } ,modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}


var Gato = 0;
var Cachorro = 0;
var Coelho = 0;
var resultado = '';
function gotResult(error, results) {
    
    if(error) {
        console.log(error);
    }else{
        console.log(results);
        //random_number_r = Math.floor(Math.random() * 255) + 1;
        //random_number_g = Math.floor(Math.ranbom() * 255) + 1;
        //random_number_b = Math.floor(Math.random() * 255) + 1;

        resultado = results[0].label;
        document.getElementById("result_label").innerHTML = 'Som detectado de - '+ results[0].label;
        //document.getElementById("resul_count").innerHTML = 'Gato detectado - '+gato ' Cachorro detectado - '+cachorro+ ' Coelho dectado - '+coelho;
        //document.getElementById("resul_label").style.color = "rgb("+"random_number_r+","+random_number_g+","+random_number_b+")";
        //document.getElementById("resul_count").style.color = "rgb("+"random_number_r+","+random_number_g+","+random_number_b+")";

        //img = document.getElementById('animal_image');
        var img = document.getElementById('animal_image');

        console.log(resultado);

        if(resultado =='Gato') {
            img.src = 'gato.gif';
            //img.setAttribute('src'.'https://c.tenor.com/WmefaP0mX8AAAAAC/happy-hearts.gif');
            gato = gato+1;
        } else if (resultado =='Cachorro') {
            img.src= 'cachoeeo.gif';
            cachorro = cachorro+1;

        } else if (resultado == 'Coelho') {
            img.src = 'coelho.gif';
            coelho = coelho+1;
    
        } else {
            img.src = 'jake.gif';
            console.log("else")
        
        }
            //https://c.tenor.com/MNS8EeEfVAIAAAAC/happiness-feliz.gif
        //https://c.tenor.com/PQhYXs7lLmsAAAAC/switch_dayz-dayz.gif
        //https://c.tenor.com/WmefaP0mX8AAAAAC/happy-hearts.gif

    }
}