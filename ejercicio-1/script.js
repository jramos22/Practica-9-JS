function color(event) {//Esta funcion genera el color aleatorio y se lo da a los parrafos
    let b ='';
    for (let i = 0; i < 4; i++) {
        a = Math.floor(Math.random() * (256 - 0) + 0);
        a = a.toString();
        if(i==0){
            b='rgb(';
        }else if (i==1) {
            b= b + a + ',';
        }else if (i==2) {
            b= b + a + ',';
        }else if (i==3) {
            b= b + a + ')';
        }else{

        }
        
    }
    b = b.toString();
    event.currentTarget.style.color = b;
}
//Esta funcion devuevle el color Original a los parrafos
function colordefault(event){
    event.currentTarget.style.color = 'black';
}

//Este ciclo aplica los estilos a los estilos mediante los eventos 'mouseover' y mouseout respectivamente
let parrafos = document.querySelectorAll('.contenedor p');
for (let j = 0; j < parrafos.length; j++) {
    parrafos[j].addEventListener('mouseover', color);
    parrafos[j].addEventListener('mouseout', colordefault);
    
}



