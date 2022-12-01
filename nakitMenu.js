
var brojac=1;
var lastPage;

var kristali_masaza_veliki= ["silma/Kristali za masazu i veliki obluci/dzambo kristali (Medium).jpg",
"silma/Kristali za masazu i veliki obluci/dzambo kristali1 (Medium).jpg",
"silma/Kristali za masazu i veliki obluci/joni jaja zad zeleni aventurin (Medium).jpg",
"silma/Kristali za masazu i veliki obluci/roleri za masazu (Medium).jpg",
"silma/Kristali za masazu i veliki obluci/roze kvarc joni jaja (Medium).jpg",
"silma/Kristali za masazu i veliki obluci/roze kvarc pecurke (Medium).jpg"];

var kristali_miv_text = ["dzambo kristali",
"dzambo kristali1",
"joni jaja zad zeleni aventurin",
"roleri za masazu",
"roze kvarc joni jaja",
"roze kvarc pecurke"];

var figure = ["silma/figure/angelit kugla (Medium).jpg",
"silma/figure/angelit piramide (Medium).jpg",
"silma/figure/dzambo kristali (Medium).jpg",
"silma/figure/dzambo kristali1 (Medium).jpg",
"silma/figure/gorski kristal piramide (Medium).jpg",
"silma/figure/joni jaja zad zeleni aventurin (Medium).jpg",
"silma/figure/lapis lazuli kugla (Medium).jpg",
"silma/figure/nebula kugla (Medium).jpg",
"silma/figure/ortoceras fosil (Medium).jpg",
"silma/figure/plocice kristali (Medium).jpg", 
"silma/figure/pustinjska ruza tunis (Medium).jpg",
"silma/figure/roleri za masazu (Medium).jpg",
"silma/figure/roze kvarc jaje (Medium).jpg",
"silma/figure/roze kvarc joni jaja (Medium).jpg",
"silma/figure/roze kvarc kugla (Medium).jpg",
"silma/figure/roze kvarc pecurke (Medium).jpg",
"silma/figure/roze kvarc srce (Medium).jpg",
"silma/figure/selenit kupa (Medium).jpg",
"silma/figure/selenit piramida (Medium).jpg",
"silma/figure/selenit toranj (Medium).jpg",
"silma/figure/selenit toranj spirala (Medium).jpg",
"silma/figure/septari geoda jaje (Medium).jpg",
"silma/figure/sungit kocke (Medium).jpg",
"silma/figure/turmalin kvarc kugla (Medium).jpg",
"silma/figure/turmalin kvarc stena (Medium).jpg"];

var figure_text = ["angelit kugla","angelit piramide","dzambo kristali",
"dzambo kristali","gorski kristal piramide","joni jaja zad zeleni aventurin",
"lapis lazuli kugla","nebula kugla","ortoceras fosil","plocice kristali", 
"pustinjska ruza tunis","roleri za masazu","roze kvarc jaje","roze kvarc joni jaja",
"roze kvarc kugla","roze kvarc pecurke","roze kvarc srce","selenit kupa",
"selenit piramida","selenit toranj","selenit toranj spirala","septari geoda jaje",
"sungit kocke","turmalin kvarc kugla","turmalin kvarc stena"];

var sirovi_kristali = ["silma/sirovi kristali/ahat ploce (Medium).jpg",
"silma/sirovi kristali/ahat sivi geode (Medium).jpg",
"silma/sirovi kristali/amazonit (Medium).jpg",
"silma/sirovi kristali/amazonit 1 (Medium).jpg",
"silma/sirovi kristali/ametist (Medium).jpg",
"silma/sirovi kristali/ametist druze (Medium).jpg",
"silma/sirovi kristali/ametist druze 1 (Medium).jpg",
"silma/sirovi kristali/ametist druze 2 (Medium).jpg",
"silma/sirovi kristali/ametist geode (Medium).jpg",
"silma/sirovi kristali/avalon skoljke  sedefaste skolke sa novog zelanda (Medium).jpg",
"silma/sirovi kristali/aventurin zeleni (Medium).jpg",
"silma/sirovi kristali/aventurin zeleni 1 (Medium).jpg",
"silma/sirovi kristali/cadjavi kvarc (Medium).jpg",
"silma/sirovi kristali/citrin (Medium).jpg",
"silma/sirovi kristali/citrin druze (Medium).jpg",
"silma/sirovi kristali/fluorit (Medium).jpg",
"silma/sirovi kristali/fuksit (Medium).jpg",
"silma/sirovi kristali/fuksit 1 (Medium).jpg",
"silma/sirovi kristali/gorski kristal (Medium).jpg",
"silma/sirovi kristali/gorski kristal druza (Medium).jpg",
"silma/sirovi kristali/gorski kristal geoda (Medium).jpg",
"silma/sirovi kristali/gorski kristal geoda 1 (Medium).jpg",
"silma/sirovi kristali/hematit (Medium).jpg",
"silma/sirovi kristali/hematit 1 (Medium).jpg",
"silma/sirovi kristali/hrizopras (Medium).jpg",
"silma/sirovi kristali/jaspis crveni (Medium).jpg",
"silma/sirovi kristali/jaspis crveni 1 (Medium).jpg",
"silma/sirovi kristali/jaspis okean (Medium).jpg",
"silma/sirovi kristali/jaspis okean 1 (Medium).jpg",
"silma/sirovi kristali/kalcit crveno narandzasti (Medium).jpg",
"silma/sirovi kristali/kalcit crveno narandzasti 1 (Medium).jpg",
"silma/sirovi kristali/kalcit narandzasti (Medium).jpg",
"silma/sirovi kristali/kalcit narandzasti 1 (Medium).jpg",
"silma/sirovi kristali/karneol (Medium).jpg",
"silma/sirovi kristali/karneol 1 (Medium).jpg",
"silma/sirovi kristali/labradorit (Medium).jpg",
"silma/sirovi kristali/mesecev kamen crni (Medium).jpg",
"silma/sirovi kristali/mookait (Medium).jpg",
"silma/sirovi kristali/okamenjeno drvo (Medium).jpg",
"silma/sirovi kristali/opal dendridski (Medium).jpg",
"silma/sirovi kristali/opal dendridski 1 (Medium).jpg",
"silma/sirovi kristali/opal roze (Medium).jpg",
"silma/sirovi kristali/opal roze 1 (Medium).jpg",
"silma/sirovi kristali/pirit (Medium).jpg",
"silma/sirovi kristali/pustinjska ruza mexiko (Medium).jpg",
"silma/sirovi kristali/pustinjska ruza mexiko 1 (Medium).jpg",
"silma/sirovi kristali/roze kvarc (Medium).jpg",
"silma/sirovi kristali/rubin (Medium).jpg",
"silma/sirovi kristali/rubin1 (Medium).jpg",
"silma/sirovi kristali/sodalit (Medium).jpg",
"silma/sirovi kristali/sodalit 1 (Medium).jpg",
"silma/sirovi kristali/turmalin lubenica (Medium).jpg",
"silma/sirovi kristali/turmalin plavi indigolit (Medium).jpg",
"silma/sirovi kristali/turmalin roze (Medium).jpg",
"silma/sirovi kristali/turmalin roze rubelit (Medium).jpg",
"silma/sirovi kristali/turmalin zeleni verdelit (Medium).jpg",
"silma/sirovi kristali/zeolit (Medium).jpg",
"silma/sirovi kristali/zeolit apofilit (Medium).jpg"];

var sirovi_kristali_text =  ["ahat ploce","ahat sivi geode","amazonit","amazonit",
"ametist","ametist druze","ametist druze","ametist druze","ametist geode",
"avalon skoljke, sedefaste skolke sa novog zelanda","aventurin zeleni",
"aventurin zeleni","cadjavi kvarc","citrin","citrin druze","fluorit","fuksit","fuksit",
"gorski kristal","gorski kristal druza","gorski kristal geoda","gorski kristal geoda",
"hematit","hematit","hrizopras","jaspis crveni","jaspis crveni","jaspis okean",
"jaspis okean","kalcit crveno narandzasti","kalcit crveno narandzasti",
"kalcit narandzasti","kalcit narandzasti","karneol","karneol","labradorit",
"mesecev kamen crni","mookait","okamenjeno drvo","opal dendridski","opal dendridski",
"opal roze","opal roze","pirit","pustinjska ruza mexiko","pustinjska ruza mexiko",
"roze kvarc","rubin","rubin","sodalit","sodalit","turmalin lubenica",
"turmalin plavi indigolit","turmalin roze","turmalin roze rubelit",
"turmalin zeleni verdelit","zeolit","zeolit apofilit"];

var vrsteKrist = ["silma/Kristali za text Silmarilion/ahat beli (Medium).jpg",
"silma/Kristali za text Silmarilion/ahat dendritski (Medium).jpg", 
"silma/Kristali za text Silmarilion/ahat mahovina 2 (Medium).jpg",
"silma/Kristali za text Silmarilion/ahat roze (Medium).jpg",
"silma/Kristali za text Silmarilion/ahat sivi (Medium).jpg",
"silma/Kristali za text Silmarilion/akvamarin (Medium).jpg",
"silma/Kristali za text Silmarilion/alabaster (Medium).jpg",
"silma/Kristali za text Silmarilion/amazonit (Medium).jpg",
"silma/Kristali za text Silmarilion/ametist (Medium).jpg",
"silma/Kristali za text Silmarilion/apatit (Medium).jpg",
"silma/Kristali za text Silmarilion/apofilit (Medium).jpg", 
"silma/Kristali za text Silmarilion/aragonit (Medium).jpg",
"silma/Kristali za text Silmarilion/aventurin zeleni (Medium).jpg",
"silma/Kristali za text Silmarilion/azurit (Medium).jpg", 
"silma/Kristali za text Silmarilion/azurit-malahit (Medium).jpg",
"silma/Kristali za text Silmarilion/bronzit (Medium).jpg",
"silma/Kristali za text Silmarilion/celestin (Medium).jpg",
"silma/Kristali za text Silmarilion/citrin (Medium).jpg", 
"silma/Kristali za text Silmarilion/danburit (Medium).jpg",
"silma/Kristali za text Silmarilion/dolomit (Medium).jpg", 
"silma/Kristali za text Silmarilion/dumortijerit (Medium).jpg",
"silma/Kristali za text Silmarilion/epidot(unakit) (Medium).jpg",
"silma/Kristali za text Silmarilion/fluorit (Medium).jpg",
"silma/Kristali za text Silmarilion/fuksit (Medium).jpg",
"silma/Kristali za text Silmarilion/galenit (Medium).jpg",
"silma/Kristali za text Silmarilion/gorski kristal (Medium).jpg",
"silma/Kristali za text Silmarilion/granat (Medium).jpg",
"silma/Kristali za text Silmarilion/halkopirit (Medium).jpg",
"silma/Kristali za text Silmarilion/heliotrop(krvavi kamen) (Medium).jpg", 
"silma/Kristali za text Silmarilion/hematit (Medium).jpg", 
"silma/Kristali za text Silmarilion/hijastolit (Medium).jpg", 
"silma/Kristali za text Silmarilion/houlit (Medium).jpg", 
"silma/Kristali za text Silmarilion/hrisopras (Medium).jpg",
"silma/Kristali za text Silmarilion/hrizokola (Medium).jpg",
"silma/Kristali za text Silmarilion/jaspis bresa (Medium).jpg",
"silma/Kristali za text Silmarilion/jaspis crveni (Medium).jpg",
"silma/Kristali za text Silmarilion/jaspis dalmatinac (Medium).jpg",
"silma/Kristali za text Silmarilion/jaspis duga (Medium).jpg",
"silma/Kristali za text Silmarilion/jaspis leopard (Medium).jpg",
"silma/Kristali za text Silmarilion/jaspis okean (Medium).jpg",
"silma/Kristali za text Silmarilion/jaspis zuti (Medium).jpg",
"silma/Kristali za text Silmarilion/kalcedon (Medium).jpg", 
"silma/Kristali za text Silmarilion/kalcedon roze (Medium).jpg", 
"silma/Kristali za text Silmarilion/kalcit narandzasti (Medium).jpg",
"silma/Kristali za text Silmarilion/kalcit plavi (Medium).jpg", 
"silma/Kristali za text Silmarilion/karneol (Medium).jpg",
"silma/Kristali za text Silmarilion/kijanit(disten) (Medium).jpg",
"silma/Kristali za text Silmarilion/kunzit (Medium).jpg",
"silma/Kristali za text Silmarilion/labradorit (Medium).jpg",
"silma/Kristali za text Silmarilion/lapis lazuli (Medium).jpg",
"silma/Kristali za text Silmarilion/larimar (Medium).jpg",
"silma/Kristali za text Silmarilion/lepidolit (Medium).jpg",
"silma/Kristali za text Silmarilion/magnetit (Medium).jpg",
"silma/Kristali za text Silmarilion/magnezit (Medium).jpg",
"silma/Kristali za text Silmarilion/malahit (Medium).jpg",
"silma/Kristali za text Silmarilion/mesecev kamen (Medium).jpg",
"silma/Kristali za text Silmarilion/mlecni kvarc (Medium).jpg",
"silma/Kristali za text Silmarilion/mookait (Medium).jpg",
"silma/Kristali za text Silmarilion/morganit (Medium).jpg",
"silma/Kristali za text Silmarilion/nebula (Medium).jpg",
"silma/Kristali za text Silmarilion/okamenjeno drvo (Medium).jpg",
"silma/Kristali za text Silmarilion/oniks (Medium).jpg",
"silma/Kristali za text Silmarilion/opal plavi (Medium).jpg",
"silma/Kristali za text Silmarilion/opalit (Medium).jpg",
"silma/Kristali za text Silmarilion/opsidijan dimni (apacka suza) (Medium).jpg",
"silma/Kristali za text Silmarilion/opsidijan mahagoni (Medium).jpg",
"silma/Kristali za text Silmarilion/opsidijan pahuljasti (Medium).jpg",
"silma/Kristali za text Silmarilion/peridot (Medium).jpg",
"silma/Kristali za text Silmarilion/petalit (Medium).jpg",
"silma/Kristali za text Silmarilion/pikaso mermer (Medium).jpg",
"silma/Kristali za text Silmarilion/pirit (Medium).jpg",
"silma/Kristali za text Silmarilion/pitersit (Medium).jpg",
"silma/Kristali za text Silmarilion/prazem (Medium).jpg",
"silma/Kristali za text Silmarilion/prehnit (Medium).jpg",
"silma/Kristali za text Silmarilion/riolit (Medium).jpg",
"silma/Kristali za text Silmarilion/rodohrozit (Medium).jpg",
"silma/Kristali za text Silmarilion/rodonit (Medium).jpg",
"silma/Kristali za text Silmarilion/roze kvarc (Medium).jpg",
"silma/Kristali za text Silmarilion/rubin (Medium).jpg",
"silma/Kristali za text Silmarilion/rutil kvarc (Medium).jpg",
"silma/Kristali za text Silmarilion/safir (Medium).jpg",
"silma/Kristali za text Silmarilion/sardoniks (Medium).jpg",
"silma/Kristali za text Silmarilion/selenit (Medium).jpg",
"silma/Kristali za text Silmarilion/septari (Medium).jpg",
"silma/Kristali za text Silmarilion/smaragd (Medium).jpg",
"silma/Kristali za text Silmarilion/sodalit (Medium).jpg",
"silma/Kristali za text Silmarilion/sokolovo oko (Medium).jpg",
"silma/Kristali za text Silmarilion/sugilit (Medium).jpg",
"silma/Kristali za text Silmarilion/suncev kamen (Medium).jpg",
"silma/Kristali za text Silmarilion/tektit (Medium).jpg",
"silma/Kristali za text Silmarilion/tigrovo gvozdje (Medium).jpg",
"silma/Kristali za text Silmarilion/tigrovo oko (Medium).jpg",
"silma/Kristali za text Silmarilion/tigrovo oko crveno (Medium).jpg",
"silma/Kristali za text Silmarilion/tirkiz (Medium).jpg",
"silma/Kristali za text Silmarilion/topaz plavi (Medium).jpg",
"silma/Kristali za text Silmarilion/turmalin (Medium).jpg",
"silma/Kristali za text Silmarilion/turmalin (crni) (Medium).jpg",
"silma/Kristali za text Silmarilion/turmalin u svim bojama (Medium).jpg",
"silma/Kristali za text Silmarilion/uleksit (Medium).jpg", 
"silma/Kristali za text Silmarilion/vezuvian (Medium).jpg",
"silma/Kristali za text Silmarilion/zad (serpentin) (Medium).jpg"];

var vrsteKrist_text = ["ahat beli","ahat dendritski", "ahat mahovina","ahat roze",
"ahat sivi","akvamarin","alabaster","amazonit","ametist","apatit","apofilit", "aragonit",
"aventurin zeleni","azurit", "azurit-malahit","bronzit","celestin","citrin", "danburit",
"dolomit", "dumortijerit","epidot(unakit)","fluorit","fuksit","galenit","gorski kristal",
"granat","halkopirit","heliotrop(krvavi kamen)", "hematit", "hijastolit", "houlit", 
"hrisopras","hrizokola","jaspis bresa","jaspis crveni","jaspis dalmatinac","jaspis duga",
"jaspis leopard","jaspis okean","jaspis zuti","kalcedon", "kalcedon roze", 
"kalcit narandzasti","kalcit plavi", "karneol","kijanit(disten)","kunzit","labradorit",
"lapis lazuli","larimar","lepidolit","magnetit","magnezit","malahit","mesecev kamen",
"mlecni kvarc","mookait","morganit","nebula","okamenjeno drvo","oniks","opal plavi",
"opalit","opsidijan dimni (apacka suza)","opsidijan mahagoni","opsidijan pahuljasti",
"peridot","petalit","pikaso mermer","pirit","pitersit","prazem","prehnit","riolit",
"rodohrozit","rodonit","roze kvarc","rubin","rutil kvarc","safir","sardoniks","selenit",
"septari","smaragd","sodalit","sokolovo oko","sugilit","suncev kamen","tektit",
"tigrovo gvozdje","tigrovo oko","tigrovo oko crveno","tirkiz","topaz plavi","turmalin",
"turmalin (crni)","turmalin u svim bojama","uleksit", "vezuvian","zad (serpentin)"];


var niz;
var text_niz;
let kategorija = location.search.substring(1);
var slides = document.getElementsByClassName("prod_image");
var texts = document.getElementsByClassName("text_slike");
var ime = document.getElementById("ime_proiz");

window.onload = function setNiz(){
	if(kategorija=="sir_kristali"){
		niz=sirovi_kristali;
		ime.innerHTML = "Sirovi Kristali";
		text_niz=sirovi_kristali_text;
		lastPage=8;
	}
	if(kategorija=="obr_kristali"){
		niz=kristali_masaza_veliki;
		ime.innerHTML = "Obradjeni Kristali";
		text_niz=kristali_miv_text;
		lastPage=1;
	}
	if(kategorija=="figure"){
		niz=figure;
		ime.innerHTML = "Figure";
		text_niz=figure_text;
		lastPage=4;
	}
	if(kategorija=="vrste_kristala"){
		niz=vrsteKrist;
		ime.innerHTML = "Vrste kristala";
		text_niz=vrsteKrist_text;
		lastPage=13;
	}
	if(lastPage==1){
		calcLastPage();
	}else{
		for (i = 0; i < slides.length; i++) {
			slides[i].src= niz[i];
			texts[i].innerHTML = text_niz[i];
		}
	}
	document.getElementById("demo").innerHTML = "Stranica "+brojac+ " od "+lastPage;
}

function newPicture(event){

	var divs = document.getElementsByClassName("image");
    
   // console.log("prosliIndexi : "+prosliIndexi);
    //iz currentSlide:    ph.src=niz[prosliIndexi + index];
    //    ph_txt.innerHTML=text_niz[prosliIndexi + index];

        //  bilo bi:  slides[i].src= niz[prosliIndexi+i];
        //        texts[i].innerHTML = text_niz[prosliIndexi+i];


        if(event.id=="prev"){

          if(brojac == 1){
             return;
         }
        else{
          for (i = 0; i < divs.length; i++) {
             if((divs[i].style.display) == "none"){
                divs[i].style.display = "block";
            }
        }
        brojac--;
        var prosliInd = (brojac - 1) * 8;
        for (i = 0; i < slides.length; i++) {
        slides[i].src= niz[prosliInd+i];
        texts[i].innerHTML = text_niz[prosliInd+i];
    }
            document.getElementById("demo").innerHTML = "Stranica "+brojac+ " od "+lastPage;
        }
    }

        if(event.id=="next" && (brojac+1) <= lastPage){

          if((brojac+1) == lastPage){

             calcLastPage();
             document.getElementById("demo").innerHTML = "Stranica "+lastPage+ " od "+lastPage;
             brojac++;
             return;
         }
         else{
            for (i = 0; i < slides.length; i++) {
                slides[i].src= niz[(brojac*8)+i];
                texts[i].innerHTML = text_niz[(brojac*8)+i];
            }

            brojac++;
            document.getElementById("demo").innerHTML =  "Stranica "+brojac+ " od "+lastPage;
            return;
        }
}
}
//
 var stateObj = 'nakitMenu.html?'+ kategorija +'#';
//history.replaceState(stateObj, '', 'nakitMenu.html');

function openModal() {
	console.log("link je: " +stateObj);
	//history.replaceState(stateObj, '', 'nakitMenu.html?'+kategorija);
	//history.replaceState(null,null, window.location.pathname + "your thing here");
	//history.replaceState(stateObj,null, window.location.pathname + "?"+
		//kategorija);
		
	document.getElementById("myLightbox").style.display = "block";
}

function calcLastPage(){
	var divs = document.getElementsByClassName("image");

	var prosliIndexi = (lastPage - 1) * 8;
	var ostatak = niz.length - prosliIndexi;
	for(var i = 0;i < ostatak;i++){
		slides[i].src= niz[prosliIndexi+i];
		texts[i].innerHTML = text_niz[prosliIndexi+i];
	}
	for(var i = ostatak;i < slides.length;i++){
		divs[i].style.display = "none";
	}
	document.getElementById("demo").innerHTML = "Stranica "+brojac+ " od "+lastPage;
}

/*za lightbox*/
var slideIndex = 1;
var ph = document.getElementById("imgSlide");
var ph_txt= document.getElementById("slide_text");

function currentSlide(index) {

	slideIndex=index;
	var lastItem;
	var prosliIndexi = (brojac - 1) * 8;
	var lastItem = prosliIndexi + index + 1;

	if (lastItem > (niz.length)) {
		index=index -1;
		slideIndex=index;
		return;
	}

    if(brojac == 1){
        if(index <0){
            index=0;
            slideIndex=0;
        }
        ph.src=niz[index];
        ph_txt.innerHTML=text_niz[index];
    }else{
        ph.src=niz[prosliIndexi + index];
        ph_txt.innerHTML=text_niz[prosliIndexi + index];
    }

}

//const stateObj = 'nakitMenu.html?'+kategorija;
	
function closeModal() {

//history.pushState(stateObj, '', 'nakitMenu.html?'+kategorija);

	document.getElementById("myLightbox").style.display = "none";
	//window.location.replace(window.location.pathname + "?"+ kategorija);
	//history.replaceState(stateObj, '', 'nakitMenu.html?'+kategorija);
	history.back();
}

/* next i prev button*/
function prevNextSlide(n){
	currentSlide(slideIndex+=n);
}

function expand(){
	var z=document.getElementById("imgSlide");
	var y=document.getElementById("exsp");
	if(z.style.width==="100%"){
		z.style.width="70%";
	}else{
		z.style.width="100%";
	}
	y.classList.toggle("fa-compress");
}

function openSearch(){
	location.href = "search.html";
}