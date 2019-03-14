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
