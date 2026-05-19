//funcion para captura datos del formulaio y enviarlo en una alerta

//seleccionado los radio y checbox
//seleccionadmos el redio seleccionado po el usuario


function capturaDatos(){
    //seleccionando las entradas de datos
    let input_firstName=document.getElementById("firstName");
    let input_lastName=document.getElementById("lastName");
    let input_email=document.getElementById("email"); 
    let input_message=document.querySelector("textarea[name='message']");
    let input_queryType=document.querySelector("input[name='queryType']:checked");
let input_consent=document.getElementById("consent").ariaChecked;
    //accediend al valor de cada entrada de datos(.value)

    Swal.fire({
  title: "<strong>HTML <u>example</u></strong>",
  icon: "info",
  html: `
    <p><strong>Nombre:</strong> ${input_firstName.value}</p>
    <p><strong>Apellido:</strong> ${input_lastName.value}</p>
    <p><strong>Email:</strong> ${input_email.value}</p>
    <p><strong>Mensaje:</strong> ${input_message.value}</p>
    <p><strong>Tipo de Consulta:</strong> ${input_queryType.value}</p>
    <p><strong>Consentimiento para ser contactado:</strong> ${input_consent ? "Sí" : "No"}</p>
  `,
  showCloseButton: true,
  showCancelButton: true,
  focusConfirm: false,
  confirmButtonText: `
    <i class="fa fa-thumbs-up"></i> Great!
  `,
  confirmButtonAriaLabel: "Thumbs up, great!",
  cancelButtonText: `
    <i class="fa fa-thumbs-down"></i>
  `,
  cancelButtonAriaLabel: "Thumbs down"
});

console.log(input_firstname.value,input_lastname,input_email,input_message);       
}