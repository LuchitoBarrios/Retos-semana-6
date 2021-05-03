let arreglo = [];

btn1.addEventListener('click',function(){
    let task = document.getElementById("form1").value;
    arreglo.push(task);
    console.log(arreglo);
})
