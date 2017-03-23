function imgSizeX(value){ // Modifie la taille de l'image en largeur
  $('#image').css({width: value});
}

function imgSizeY(value){ // Modifie la taille de l'image en hauteur
  $('#image').css({height: value});
}

function imgX(value){ // Déplace l'image sur l'axe X
  $('#image').css({left:value});
}

function imgY(value){ // Déplace l'image sur l'axe Y
  $('#image').css({top:value});
}

function imgRadius(value){  // Modifie le border-radius de l'image
  var value = value+'%'; // Ajouter le % à la valeur pour pouvoir l'utiliser dans la fonction css()
  $('#image').css({borderRadius:value});
}

function btnSizeX(value,input_name){  // Modifie la largeur du bouton entré en paramètre
  $(input_name).css({width: value});
}

function btnSizeY(value,input_name){  // Modifie la hauteur du bouton entré en paramètre
  $(input_name).css({height: value});
}

function btnX(value,input_name){  // Déplace le bouton entré en paramètre sur l'axe X
  $(input_name).css({left:value});
}

function btnY(value,input_name){  // Déplace le bouton entré en paramètre sur l'axe Y
  $(input_name).css({top:value});
}

function btnRadius(value,input_name){ // Modifie le border-radius du bouton entré en paramètre
  var value = value+'%';  // Ajouter le % à la valeur pour pouvoir l'utiliser dans la fonction css()
  $(input_name).css({borderRadius:value});
}

function get_element_style(element, id){  // Fonction trouvée sur internet qui retourne le style d'un élément (y comprit les propriétées par défaut). Il utilise le plugin
  var css = {};
  $('<iframe id="get-style-'+id+'" style="display:none"/>').appendTo('body');
  $('#get-style-'+id).contents().find('body').append('</'+element+'>');
  $el = $('#get-style-'+id).contents().find('body').find(element);
  var defaults_css = $el.getStyles();
  $('#get-style-'+id).remove();
  var element_css = $('#'+id).getStyles();
  for (var i in element_css) {
      if (element_css[i] !== defaults_css[i]) {
          css[i] = element_css[i];
      }
  }
  return css;
}

function changeColorBtn(valeur,name){ // Change la couleur du bouton passé en paramètre en fonction de la valeur contenue dans le select
  switch (valeur) {
    case "rouge":
      $(name).css({"background-color":"#FA5858"});
      $(name).css({"border-color":"#FF0000"});
      break;
    case "jaune":
      $(name).css({"background-color":"#F4FA58"});
      $(name).css({"border-color":"#FFFF00"});
      break;
    case "vert":
      $(name).css({"background-color":"#A9F5A9"});
      $(name).css({"border-color":"#58FA58"});
      break;
    case "bleu":
      $(name).css({"background-color":"#A9D0F5"});
      $(name).css({"border-color":"#A9BCF5"});
      break;
    case "noir":  // Le noir ne marche pas
      $(name).css({"background-color":"#2E2E2E"});
      $(name).css({"border-color":"#151515"});
      break;
    case "blanc":
      $(name).css({"background-color":"#E6E6E6"});
      $(name).css({"border-color":"#FAFAFA"});
      break;
  }
}

function changeColorText(valeur,name){  // Change la couleur du texte qui se trouve dans le bouton passé en paramètre en fonction de la valeur contenue dans le select
  switch (valeur) {
    case "noir":  // Le noir ne marche pas
      $(name).css({"color":"#151515"});
      break;
    case "blanc":
      $(name).css({"color":"#FAFAFA"});
      break;
    case "rouge":
      $(name).css({"color":"#FA5858"});
      break;
    case "jaune":
      $(name).css({"color":"#F4FA58"});
      break;
    case "vert":
      $(name).css({"color":"#A9F5A9"});
      break;
    case "bleu":
      $(name).css({"color":"#A9D0F5"});
      break;
  }
}

$('#formImg').find('input[name="image"]').on('change', function (e) { // Lorsque l'input type:file change:
  var files = $(this)[0].files;

  if (files.length > 0) { // Si le fichier n'est pas vide:
      var file = files[0],
          $image = $('#image');

      $image.css({display:''}); // On enlève le display: none
      $image.attr("src", window.URL.createObjectURL(file)); // On affiche l'image que l'on a selectionnée sur l'input type:file
  }
});

$('#formBouton input').change(function() {  // Choix du nombre de boutons
  switch ($('input[name=forme]:checked', '#formBouton').val()) {  // On vérifie la case coché
    case "1":
      $('#divParamBtn2').css({display:'none'});
      $('#divParamBtn3').css({display:'none'});
      $('#btn2').css({display:'none'});
      $('#btn3').css({display:'none'});
      break;
    case "2":
      $('#divParamBtn2').css({display:''});
      $('#divParamBtn3').css({display:'none'});
      $('#btn2').css({display:''});
      $('#btn3').css({display:'none'});
      break;
    case "3":
      $('#divParamBtn2').css({display:''});
      $('#divParamBtn3').css({display:''});
      $('#btn2').css({display:''});
      $('#btn3').css({display:''});
      break;
  }
});

$("#txtBtn1, #txtBtn2, #txtBtn3").keyup(function(){ // Lorsqu'on relache une touche sur la zone de texte:
    document.getElementById( $(this).attr('name') ).innerHTML = $(this).val(); // On cible le bouton grâce au name de la zone de texte, puis on affiche dans ce bouton la valeur de la zone de texte
});

$('#appliquerBtn1, #appliquerBtn2, #appliquerBtn3').click(function(){ // Lorsqu'on clic sur un bouton "Appliquer"
    var bouton = $(this).attr('name'); // On récupère le bouton (overlay) grâce au name du bouton "appliquer"
    var lien = $( $(this).attr('class') ).val(); // On récupère le lien en récupérant la valeur dans la zone de texte url, grâce à la class du bouton "appliquer"
    $(bouton).attr("href", lien); // On change l'attribut href du bouton (overlay)
    console.log( $( $(this).attr('name') ).attr("href") ); // Vérification du lien du bouton sur la console
    $( $(this).attr('class') ).css('background-color','#74DF00'); // On change la couleur de la zone de texte url en vert pour avoir une confirmation visuelle
});

$("#urlBtn1, #urlBtn2, #urlBtn3").keyup(function(){ // Lorsqu'on écrit dans la zone de texte url
    $(this).css('background-color','#A4A4A4'); // On change la couleur de cette zone pour prévenir l'utilisateur que le champ a été modifié
});

$('#valider').click(function(){ // Lorsqu'on clic sur le bouton "Valider"
  $(this).removeClass( "btn-primary" ).addClass( "btn-success" ); // On change la couleur pour avoir une confirmation visuelle

  var img_properties = get_element_style('img', 'image'); // On récupère le style de l'image sous forme d'objet (grâce à la fonction trouvée sur internet et au plugin)
  console.log("style de l'image:"); // On l'affiche dans la console
  console.log(img_properties);
  var btn1_properties = get_element_style('btn', 'btn1'); // On récupère le style du bouton 1 sous forme d'objet
  console.log("style du btn1:"); // On l'affiche dans la console
  console.log(btn1_properties);
  var btn2_properties = get_element_style('btn', 'btn2'); // On récupère le style du bouton 2 sous forme d'objet
  console.log("style du btn2:"); // On l'affiche dans la console
  console.log(btn2_properties);
  var btn3_properties = get_element_style('btn', 'btn3'); // On récupère le style du bouton 3 sous forme d'objet
  console.log("style du btn3:");  // On l'affiche dans la console
  console.log(btn3_properties);

  var all_properties = {  // On insère les 4 objets dans un tableau associatif
    "style_image" : img_properties,
    "style_btn1" : btn1_properties,
    "style_btn2" : btn2_properties,
    "style_btn3" : btn3_properties
  }
  console.log("objet style:");
  console.log(all_properties);

  //ici: AJAX
  //Il faut envoyer all_properties

});
