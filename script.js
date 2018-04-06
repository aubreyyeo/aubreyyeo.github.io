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
