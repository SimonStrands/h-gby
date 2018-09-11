/*
startsida               Halv
Tävlingar(sist)         X
Träning                 X
Resultat                X
Statestik               X
Arrangemang             X
Aktiva                  X
Arkiv                   X
Länkar                  X
Sponsorer               X
Gästbook                X
Kontakt                 X
*/



//Iframe saker
function getDocHeight(doc) {
    doc = doc || document;
    // stackoverflow.com/questions/1145850/
    var body = doc.body, html = doc.documentElement;
    var height = Math.max( body.scrollHeight, body.offsetHeight, 
        html.clientHeight, html.scrollHeight, html.offsetHeight );
    return height;
}

function setIframeHeight(id) {
    var ifrm = document.getElementById(id);
    var doc = ifrm.contentDocument? ifrm.contentDocument: 
        ifrm.contentWindow.document;
    ifrm.style.visibility = 'hidden';
    ifrm.style.height = "10px"; // reset to minimal height ...
    // IE opt. for bing/msn needs a bit added or scrollbar appears
    ifrm.style.height = getDocHeight( doc ) + 4 + "px";
    ifrm.style.visibility = 'visible';
}

//Byta Iframes
document.getElementById("startsidatable").addEventListener("click", startSida);
document.getElementById("tavlingtable").addEventListener("click", tavlingSida);
document.getElementById("traningtable").addEventListener("click", traningSida);
document.getElementById("resultattable").addEventListener("click", resultatSida);
document.getElementById("statestiktable").addEventListener("click", statestikSida);
document.getElementById("arrangemangtable").addEventListener("click", arrangemangSida);
document.getElementById("aktivatable").addEventListener("click", aktivaSida);
document.getElementById("arkivtable").addEventListener("click", arkivSida);
document.getElementById("lankartable").addEventListener("click", lankarSida);
document.getElementById("sponsorertable").addEventListener("click", sponsorerSida);
document.getElementById("gastbooktable").addEventListener("click", gastbookSida);
document.getElementById("kontakttable").addEventListener("click", kontaktSida);

//Startsida
function startSida()
{
    
    document.getElementById("iframe").src = "startsida.html";
    
}

//Tävlingar
function tavlingSida()
{

    document.getElementById("iframe").src = "tavling.html";
    
}

//Träning
function traningSida()
{

    document.getElementById("iframe").src = "traning.html";
    
}

//resultat
function resultatSida()
{

    document.getElementById("iframe").src = "resultat.html";
    
}

//statestik
function statestikSida()
{

    document.getElementById("iframe").src = "statestik.html";
    
}

//arragemang
function arrangemangSida()
{

    document.getElementById("iframe").src = "arrangemang.html";
    
}

//aktiv
function aktivaSida()
{

    document.getElementById("iframe").src = "aktiva.html";
    
}

//arkiv
function arkivSida()
{

    document.getElementById("iframe").src = "arkiv.html";
    
}


function lankarSida()
{

    document.getElementById("iframe").src = "lankar.html";
    
}

function sponsorerSida()
{

    document.getElementById("iframe").src = "sponsorer.html";
    
}

function gastbookSida()
{

    document.getElementById("iframe").src = "gastbook.html";
    
}

function kontaktSida()
{

    document.getElementById("iframe").src = "kontakt.html";
    
}
