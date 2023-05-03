import CustomerModel from "../models/customer-models";

const URL_API ="https://645284d6bce0b0a0f7492760.mockapi.io/"
const refRegistro = document.querySelector('#');
const refListar = document.querySelector('#');
const refBuscar = document.querySelector('#');

/* const myHeaders = new Headers({
    "content-Type": "application/json"
}); */
const getCustomers = async() => {
    try{
        const respuesta = await fetch(`${URL_API}/customers`);
        if(respuesta.status ===200){
            const datos = await respuesta.json();
            viewDataHtml(datos);
        }else if(respuesta.status === 401) {
            console.log('La url no es correcta');
        }else if(respuesta.status ===404){
            console.log('El cliente que buscas no existe');
        }else{
            console.log('se presento un error en la peticion consulte el administrador');
        }
    }catch(error){
        console.log(error);
    }
}
function saveCustomer(){
    CustomerModel.createdAt = '2023-02-02';
    CustomerModel.nombres = 'Campers 2023';
    CustomerModel.apellidos = 'xxxxx';
    CustomerModel.email = 'xxxxxx';
    CustomerModel.fechaNacimiento = ' 1980-05-06';
    postCustomer(CustomerModel);
}
function VerOcultar(divsvisible){
    console.log(divsvisible);
}
refListar.addEventListener("click",getCustomers);
refRegistro.addEventListener("click", (e)=>{
    VerOcultar(['#reg',['#listar','#buscar']]);
    e.preventDefault();
    e.stopImmediatePropagation();

});
document.querySelectorAll('tabOpcion').forEach((val,id)=>{
    val.addEventListener("click")
})
val-addEventListener("click",(e)=>{
    let datos = JSON.parse
})
function viewDataHtml(dataCustomer){
    console.log(dataCustomer);
}