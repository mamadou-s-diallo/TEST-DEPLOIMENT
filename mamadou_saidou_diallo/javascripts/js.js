function soumettre(event) {
        event.preventDefault();
        let nomprenom=document.getElementById("nom_prenom").value.trim();
        let partiesNom = nomprenom.split(/\s+/);
        let civilite=document.getElementById("civilite").value.trim();
        let mail=document.getElementById("email").value.trim();
        let commentaire=document.getElementById("commentaire").value.trim();
        let caractcom = commentaire.length;

        let val=0
        document.getElementById("er_nm").innerHTML = "";
        document.getElementById("er_cv").innerHTML = "";
        document.getElementById("er_ml").innerHTML = "";
        document.getElementById("er_com").innerHTML = "";

        if(!nomprenom || partiesNom.length < 2){
           document.getElementById("er_nm").innerHTML = "Le champs est obligatoire (Renseigner au moins deux mots: Nom et prenom";
        }else{val=val+1} 
        if(!civilite){
            document.getElementById("er_cv").innerHTML = "Le champs est obligatoire";
        }else{val=val+1}
        if(!mail){
            document.getElementById("er_ml").innerHTML = "Le champs est obligatoire";
        }else{val=val+1} 
        if(!commentaire || caractcom<20 || caractcom>500){
            document.getElementById("er_com").innerHTML = "Le champs est obligatoire et doit contenir entre 20 et 500 caracteres";
        } else{val=val+1}      
        if(val==4){
            information="Nom et Prenom: "+nomprenom+"\n"+"Civilite: "+civilite+"\n"+"Adresse mail: "+mail+"\n"+"Commentaire:\n"+commentaire
            let confirrmation=confirm("Etes vous sur de vouloir soumettre les informations suivantes:\n"+information)
            if(confirrmation){
                const formulaire=document.getElementById("formulaire_contact");
                document.getElementById("formulaire").submit();
                alert("Formulaire soumi avec succes")
            }           
        }
     }

