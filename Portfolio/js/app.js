
//doc --> apunta al inicio del documento HTML <html>
var doc = $(document);
//ready --> cuando se HA CARGADO EL HTML COMPLETO: 
// - recursos del HEAD: css, fuentes, scripts js, fontawesonne ...
// - del BODY: TODO EL HTML + imágenes ..., 
// SE EJECUTARÁ LA FUNCION iniciar 
doc.ready(iniciar);

function iniciar() {
    console.log('Hola Mundo, bienvenidos a JQUERY ...');
    var xforma = $("header nav a#formacion");
    var xQSomos = $("header nav a#qSomos");
    xforma.click(cargarForma);
    xQSomos.click(cargarQSomos);
}

function cargarForma(){
    console.log('clickeado formacion ...');
//cargar el fichero /html/formacion.html en la <main>
    $("main").load("html/formacion.html");
    $("head").children().last().remove();
    $("head")
    .append ("<link rel='stylesheet' href='../css/formacion.css'>");
    
}

function cargarQSomos(){
    console.log('clickeado formacion ...');
//cargar el fichero /html/formacion.html en la <main>
    $("main").load("html/qsomos.html");
    $("head").children().last().remove();
    $("head")
        .append ("<link rel='stylesheet' href='../css/qsomos.css'>");

}
