//BACKEND LOGIC
function Client(name, innitialDeposit){
  this.name = name[];
  this.innitialDeposit = innitialDeposit;
}


//FRONT END LOGIC
$(document).ready(function(){
  $("form#clientDetails").submit.function(event){
    event.preventDefault();

    var clientName = $("input#clientName").val();
    var innitialDeposit = parseInt($("input#innitialDeposit").val());
    var client = new Client(clientName, innitialDeposit);



  }
});
