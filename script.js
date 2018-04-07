const reignsElement = document.getElementById("uniPropF51");
    reignsElement.addEventListener("click",reignsKickOut);
	function reignsKickOut()
    {
    	alert("You know it's going to be more than that.");
    }

    const dbShaneElement = document.getElementById("DBShaneWin");
    dbShaneElement.addEventListener("click", yesChant);
    function yesChant()
    {
    	alert("YES! YES! YES!");
    }

    const koZaynElement = document.getElementById("KOZaynWin");
    koZaynElement.addEventListener("click", noChant);
    function noChant()
    {
    	alert("NO! NO! NO!");
    }

    var modal = document.getElementById("myModal");

    var span = document.getElementsByClassName("close")[0];
    span.onclick = function()
    {
        modal.style.display = "none";
    }

    function make_json(form)
    {
        var today = new Date();
        var dateTime = today.getMonth() + "/" + today.getDate() + " " + today.getHours() + ":" + today.getMinutes();
        const json=
        {
            "Entry Name":form.usernameInput.value,
            "Time Submitted":dateTime,
            "Andre Battle Royal winner":form.andreBRWinner.value,
            "Andre BR Surprise Entrant":form.andreBRProp.value,
            "Women's Battle Royal winner":form.wmnBRWinner.value,
            "Women's BR Surprise Entrant":form.wmnBRProp.value,
            "CW Winner":form.cwWinner.value,
            "CW Heel turn":form.cwProp.value,
            "Universal winner":form.uniWinner.value,
            "No. of F5s kicked out of":form.uniProp1.value,
            "No. of Spears kicked out of":form.uniProp2.value,
            "WWE Title Winner":form.wweTitleWinner.value,
            "WWE Title first chant":form.wweTitleProp.value,
            "IC Title Winner":form.icTitleWinner.value,
            "Most sling blades in IC match":form.icTitleProp.value,
            "US Title Winner":form.usTitleWinner.value,
            "No. of RKOs in US match":form.usTitleProp.value,
            "RAW Women's Title winner":form.rawWmnTitleWinner.value,
            "Rock social media plug":form.rawWmnTitleProp.value,
            "SD Women's Title winner":form.sdWmnTitleWinner.value,
            "Will Carmella cash in":form.sdWmnProp.value,
            "RAW Tag Team winner":form.rawTagTitleWinner.value,
            "Braun's partner":form.rawTagProp.value,
            "SD Tag Team winner":form.sdTagTitleWinner.value,
            "New Day Combination":form.sdTagProp.value,
            "John Cena vs Undertaker winner":form.cenaTakerWinner.value,
            "Which Undertaker shows up":form.cenaTakerProp.value,
            "Angle/Rousey vs HHH/Steph":form.avoWinner.value,  
            "Ronda cheered or booed":form.avoProp.value,
            "No. of Ronda botches":form.avoBotch.value,
            "DB/Shane vs KO/Zayn":form.dbShaneKOZaynWinner.value,
            "Miscommunication happens for":form.dskzProp.value,
            "Main card opener":form.opener.value,
            "Closing match":form.closer.value,
        }
        var wmJSON = JSON.stringify(json);
        wmJSON = wmJSON.replace(/\"/g, "");
        wmJSON = wmJSON.replace(/{/g, "");
        wmJSON = wmJSON.replace(/}/g,"");
        wmJSON = wmJSON.replace(/:/g,": ");
        wmJSON = wmJSON.replace(/,/g,"<br>");
        document.getElementById("output").innerHTML = wmJSON;
        console.log(wmJSON);
        modal.style.display = "block";

        return false;
    }
