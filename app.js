//Titulo de bienvenida

let container = document.getElementById("titulo")

container.innerHTML = "Bienvenido, cargue los productos"

//Parrafo del formulario
let parrafo = document.getElementById("parrafo")
parrafo.innerHTML = "Aqui podras cargar todos los producto de tu tienda, y se veran en el listado"

//Traemos el formulario y datos
let formulario = document.getElementById("formulario")
//Traemos el padre donde se van a ver los elementos cargados
let listaProductos = document.getElementById("listaProducto")

//Accion y funcion
formulario.addEventListener('submit', datosForm)

class Producto {
    constructor(tipo, marca, genero, precio) {
        this.id = listProductos.length + 1
        this.tipo = tipo
        this.marca = marca
        this.genero = genero
        this.precio = Number(precio)
    }
}

const listProductos = []


function datosForm(e) {
    e.preventDefault();

    let datos = e.target

    let tr = document.createElement("tr")
    tr.innerHTML = `<td>${listProductos.length+1}</td><td>${datos.children[0].value}</td><td>${datos.children[1].value}</td><td>${datos.children[2].value}</td><td>${datos.children[3].value}</td>`
    listaProductos.appendChild(tr)
    listProductos.push(new Producto(formulario.children[0].value, formulario.children[1].value, formulario.children[2].value, formulario.children[3].value))
    localStorage.setItem("Stock", JSON.stringify(listProductos))
    console.log(...listProductos)
    swal({
        title: `Producto ${listProductos.length} agregado`,
        timer: 1000,
        buttons: false,
    });

}

//refresh

let refresh = document.getElementById("refresh")
refresh.onclick = () => swal({
        title: "Estas Seguro de empezar de nuevo?",
        text: "Una vez borrado no podras volver atras",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
    .then((willDelete) => {
        if (willDelete) {
            swal("Planilla renovada", {
                icon: "success",
            }) + location.reload()
        } else {
            swal("OK, Seguimos ingresando productos")
        }
    });



//exporta tabla a excel
const $btnExportar = document.querySelector("#btnExportar"),
    $tabla = document.querySelector("#tabla")

$btnExportar.addEventListener("click", function () {
    // Aquí exportar la tabla
    let tableExport = new TableExport($tabla, {
        exportButtons: false, 
        filename: "Pedido opticaflex", //Nombre del archivo de Excel
        sheetname: "Pedido", //Título de la hoja
    })
    let datos = tableExport.getExportData()
    let preferenciasDocumento = datos.tabla.xlsx
    tableExport.export2file(preferenciasDocumento.data, preferenciasDocumento.mimeType, preferenciasDocumento.filename, preferenciasDocumento.fileExtension, preferenciasDocumento.merges, preferenciasDocumento.RTL, preferenciasDocumento.sheetname);
})

