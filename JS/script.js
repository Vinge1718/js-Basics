//BACKEND LOGIC
function Client(name, initialDeposit){
  this.name = name;
  this.initialDeposit = initialDeposit;
}


//FRONT END LOGIC
$(document).ready(function(){
  $("form#clientDetails").submit(function(event){
    event.preventDefault();

    var clientName = $("input#clientName").val();
    var initialDeposit = parseInt($("input#initialDeposit").val());

    var client = new Client(clientName, initialDeposit);

    $("#customer").empty().prepend(clientName)
    $("#currentBalance span").empty().text(client.initialDeposit);
    $("#customerDetails, #currentBalance").show();

    $("input#clientName").val("");
    $("input#initialDeposit").val("");


  });

  $("form#depositForm").submit(function(event){
    event.preventDefault();

    var depositAmount = parseInt($("input#depositAmount").val());
    currentAmount = parseInt($("#initialBalance").text());

    $("#initialBalance").text(currentAmount + depositAmount);
    $("input#depositAmount").val("");
    $("#customerDetails, #currentBalance").show();
  });

  $("form#withdrawForm").submit(function(event){
    event.preventDefault();

    var withdrawnAmount = parseInt($("input#withdrawAmount").val());
    currentAmount = parseInt($("#initialBalance").text());
    $("#initialBalance").text(currentAmount - withdrawnAmount);
    $("input#withdrawAmount").val("");
    $("#customerDetails, #currentBalance").show();
  });
});
