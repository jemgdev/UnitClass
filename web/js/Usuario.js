$(document).ready(function(){
    listadousuarios();

    function listadousuarios(){
        var funcion = "listadoUsuarios";
        
    $.post("../GestionUsuario", {funcion}, (response) => {
        const usuarios = JSON.parse(response);      
        let template = "";
        usuarios.forEach(u => {
        let actual = new Date();
        let nacimiento = Date.parse(u.fecha_nacimiento);
        let resta = actual.getTime()-nacimiento;
        template += `
            <div usuarioid=${u.id_usuario} class="col-12 col-sm-6 col-md-4 d-flex align-items-stretch">
                                  <div class="card bg-light">
                                            <div class="card-header text-muted border-bottom-0">`
                                            if (u.nombre_tipo_us === "Root"){
                                                template += `<h1 class="badge badge-warning">${u.nombre_tipo_us}</h1>`;
                                            } 
                                            if (u.nombre_tipo_us ===("Docente")){
                                                template += `<h1 class="badge badge-danger">${u.nombre_tipo_us}</h1>`;
                                            } 
                                            if(u.nombre_tipo_us ===("Estudiante")){
                                                template += `<h1 class="badge badge-primary">${u.nombre_tipo_us}</h1>`;
                                            }
                                            template += `
                                            </div>
                                            <div class="card-body pt-0">
                                                <div class="row">
                                                    <div class="col-7">
                                                        <h2 class="lead"><b>${u.nombre_us}</b></h2>
                                                        <br>
                                                        <ul class="ml-4 mb-0 fa-ul text-muted">
                                                            <li class="small-box-footer"><span class="fa-li"><i class="fas fa-lg fa-id-card"></i></span> DNI: ${u.dni_us}</li>
                                                            <li class="small-box-footer"><span class="fa-li"><i class="fas fa-lg fa-birthday-cake"></i></span> Edad: ${Math.round(resta/(1000*60*60*24)/365)} </li>
                                                            <li class="small-box-footer"><span class="fa-li"><i class="fas fa-lg fa-at"></i></span> Correo: ${u.correo_us}</li>
                                                            <li class="small-box-footer"><span class="fa-li"><i class="fas fa-lg fa-smile-wink"></i></span> Sexo: ${u.sexo_us}</li>
                                                        </ul>
                                                    </div>
                                                    <div class="col-5 text-center">

                                                        <img src="../img/${u.avatar}" alt="" class="img-circle img-fluid">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="card-footer">
                                                <div class="text-right">
                                                    <button class="borrar-usuario btn btn-danger m-1" type="button" data-toggle="modal" data-target="#confirmar">
                                                        <i class="fas fa-window-close mr-1"></i>Eliminar
                                                    </button>

                                                    <button class="descender btn btn-secondary m-1" type="button" data-toggle="modal" data-target="#confirmar">
                                                        <i class="fas fa-sort-amount-down mr-1"></i>Descender
                                                    </button>

                                                </div>
                                            </div>
                                        </div>
                                    </div>           
                                        `
                        });           
            $("#usuarios").html(template);
         });
    };
});
