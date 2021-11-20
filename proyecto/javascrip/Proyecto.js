const dell = document.querySelector('button')
dell.addEventListener('click', BSC)



const div = document.getElementById ("divv");
var idp = 1;
var long = 0;



let url = 'https://richardalf.github.io/Mi_Proyecto_web/proyecto/datos.json';


function mostrar(){
    document.getElementById('divv').style.display ='block';
}

function BSC(){
     
    fetch(url)
    .then(function(response){
        return response.json();
    })

    .then(function(data){
        console.log(data.names);
        long=data.names.length;
        console.log("lenght:" + long);

        var res= data.names.filter(item=>item.id===idp);
        console.log(res);
        var imagen=document.getElementById('imga');
        imagen.src=res[0].img;
        var p1=document.getElementById('name');
        p1.innerHTML="<b>Nombre: </b>"+res[0].nombre;
        var p2=document.getElementById('aut');
        p2.innerHTML="<b>Autor: </b>"+res[0].autor;
        var p3=document.getElementById('text');
        p3.innerHTML="<b>Descripción: </b>"+res[0].descripcion;
        var p4=document.getElementById('calf');
        p4.innerHTML="<b>Calificación: </b>"+res[0].calificacion;
        var p5=document.getElementById('tipe');
        p5.innerHTML="<b>Tipo: </b>"+res[0].Tipo;
        var link=document.getElementById('des');
        //link.href=res[0].linkk;
        link.innerHTML="Página del libro";
        link.setAttribute("href",res[0].linkk);
        link.target="_blanck";

         
    })

    .catch(function(error){
        console.log(error);           
    });
    
    
    if (idp >= long){
        idp=1;
    }else{
        //idp++;
        idp = 1 + Math.floor(Math.random()*20);
    }
}















