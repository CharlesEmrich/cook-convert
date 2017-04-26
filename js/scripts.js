function KGtoLB(kg) {
  return (kg * 2.20462).toFixed(2);
}

function LBtoKG(lb) {
  return (lb * 0.4535).toFixed(2);
}

function LtoGAL(l) {
  return (l * 0.264172).toFixed(2);
}

function GALtoL(gal) {
  return (gal * 3.78541).toFixed(2);
}

function CtoF (c) {
  return ((c * 1.8 + 32)).toFixed(2);
}

function FtoC (f) {
  return ((f - 32) * (5/9)).toFixed(2);
}

$(function() {
  $("#kg-lb-form").submit(function(event) {
    $("#kg-lb-output").text(
      KGtoLB($("#kg-lb-input").val()
    ));
    event.preventDefault();
  });

  $("#gal-l-form").submit(function(event) {
    $("#gal-l-output").text(
      GALtoL($("#gal-l-input").val()
    ));
    event.preventDefault();
  });

  $("#c-f-form").submit(function(event) {
    $("#c-f-output").text(
      CtoF($("#c-f-input").val()
    ));
    event.preventDefault();
  });
});
