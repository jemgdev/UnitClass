$(document).ready(function () {
    var funcion = "";
    var idUsuario = $("#idUsuario").val();
    listarMisCursos()

    function listarMisCursos() {
        funcion = "listarMisCursos";
        $.post("../GestionMisCursos", {funcion, idUsuario}, (response) => {
            const misCursos = JSON.parse(response);
            let template = "";
            misCursos.forEach(miCurso => {
                template += `
                    <div idCurso = ${miCurso.id_curso} class="col-md-3" style="float:left">
                        <div class="card mb-2">
                            <img class="card-img-top" src="../img/imagenCardSlide/${miCurso.banner}" alt="Card image cap" width="100%">

                            <div class="card-body">
                                <h3 class="card-title">${miCurso.nombre}</h3>
                                <br>
                                <hr>
                                <p class="card-text text-justify">${miCurso.detalle_curso}</p> 
                            </div>
                            <div class="card-footer">
                                <button class="ver btn btn-dark">Ver</button>
                            </div>
                        </div>
                    </div>`;
            })
            $("#cursos").html(template);
            
        })
    }
    
    $(document).on("click", ".ver", (e) => {
        const elemento = $(this)[0].activeElement.parentElement.parentElement.parentElement;
        const idCurso = $(elemento).attr("idCurso");
        console.log(idCurso);
        
        
    })
})

