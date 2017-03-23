<?php include'includes/header.php' ?>

<div class="row">
    <div class="col-sm-4" id="divForm" >
        <form id="formImg">
            <div class="form-group">
                <label for="file">Télécharger le fichier</label>
                <input id="uploadFile" type="file"  class="form-control" accept="image/*" />
            </div><br/>
            
            
            <!--la forme d'image -->
            <div class="form-group">
                <label for="radio">La forme d'image : (hauteur x longeur) : </label>
                <div style="margin-left: 34%">
                    <label class="radio">
                        <input  name="formes" id="forme1" type="radio"  value="1">Carré(500 x 500)
                    </label>
                    <label class="radio">
                        <input  name="formes" id="forme2" type="radio"  value="2">Rectangle(600 x 440)
                    </label>
                    <label class="radio">
                        <input  name="formes" id="forme3" type="radio"  value="3">Ronde
                    </label>
                </div>
            </div><br/>


            <!-- Ajouter des boutons -->
            <div class="form-group">
                <label for="file">Ajouter / Supprimer des boutons</label>
                <a id='addBtn' class="btn btn-primary">Ajouter</a>
                <a id='removeButton' class="btn btn-primary">Supprimer</a>
            </div>


            <!--Ajouter le bouton fermer -->
            <div class="form-group">
                <label for="checkbox">Ajouter un bouton "Fermer"
                    <span class="glyphicon glyphicon-remove-circle"></span> : </label>
                <input name="addClsBox" id="addClsBox" type="checkbox"  value="option1" /> 
            </div>
            
            
            
            <!-- bouton submit -->
            <br/><button type="submit" class="btn btn-success">Submit</button>
        </form>
    </div>
    
    

    <div class="col-sm-8" >
        <div id="divImage" onchange="readURL(event)">
            <img id="image" src="#">
        </div>
    </div>
</div>
<?php include'includes/footer.php' ?>


