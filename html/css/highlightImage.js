//////////////////////////////////////////////////////////////////////////////////////////////////////
function openModal() {
  document.getElementById('myModal').style.display = "block";
}
//////////////////////////////////////////////////////////////////////////////////////////////////////
function closeModal() {
  document.getElementById('myModal').style.display = "none";
  deleteModal();
}
//////////////////////////////////////////////////////////////////////////////////////////////////////
function highlight(callerObject) {
  if(callerObject!=null){
    //alert("Highlight Called");
    var hoverImageLoc = (callerObject.getAttribute("data-hover-image")!=null)?callerObject.getAttribute("data-hover-image"): callerObject.getAttribute("src");
    if(hoverImageLoc!=null){
      //alert("imageLoc= " + hoverImageLoc);
      createModal();
      var viewport=document.getElementById('highlighted-image');
      viewport.src = hoverImageLoc;
      //var scale=(callerObject.getAttribute("data-zoom-scale")!=null)?callerObject.getAttribute("data-zoom-scale"):1;
      //alert(parseInt(viewport.clientWidth));
      //viewport.style.width=viewport.parentNode.style.width;
      //alert(viewport.style.width);
      openModal();
    }
  }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////
function createModal(){
  document.body.innerHTML = '<div id="myModal" class="modal"><span class="close cursor" onclick="closeModal()">&times;</span><center><div class="modal-content"><img id="highlighted-image" src="" ></div></center></div>'+document.body.innerHTML;
}
//////////////////////////////////////////////////////////////////////////////////////////////////////
function deleteModal(){
  var element = document.getElementById('myModal');
  element.parentNode.removeChild(element);
}
//////////////////////////////////////////////////////////////////////////////////////////////////////
function changeTitle(callerObject){
  var fileName =location.href.split("/").slice(-1).toString(); 
  //fileName=fileName.split(".");
  //fileName= fileName.split(".");
  var pages= {"index.html":"Home","about.html":"About","design.html":"Design","results.html":"Results","contact.html":"Contact"};
  //alert(fileName[0]);
  var navBar='<nav><ul>';
  var active="";
  for(var key in pages){
    if(fileName.length > 0 ){
    	active=(key==fileName)?' class="current"':'';
    }else{
    	active=(key=="index.html")?' class="current"':'';
    }
  navBar=navBar+'<li><a href="'+key+'"'+active+'>'+pages[key]+'</a></li>';
  }
  navBar=navBar+'</ul></nav>';
  document.getElementById('container').innerHTML= '<header><!--start logo--><a href="index.html" id="logo"><img src="css/logo.png" height="80"> </a><!--end logo--><!--start menu-->'+navBar+'<!--end menu--></header>' + document.getElementById('container').innerHTML;
  var titleString="Aloe - "+(fileName.length >0 ?pages[fileName]:"Home");
  //alert(document.title);
  document.title=titleString;
}