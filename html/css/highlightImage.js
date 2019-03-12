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
    alert("Highlight Called");
    var hoverImageLoc = callerObject.getAttribute("data-hover-image");
    if(hoverImageLoc!=null){
      alert("imageLoc= " + hoverImageLoc);
      createModal();
      document.getElementById('highlighted-image').src = hoverImageLoc;
      openModal();
    }
  }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////
function createModal(){
  document.body.innerHTML = '<div id="myModal" class="modal"><span class="close cursor" onclick="closeModal()">&times;</span><center><div class="modal-content"><img id="highlighted-image" src="" style="width:90%"></div></center></div>'+document.body.innerHTML;
}
//////////////////////////////////////////////////////////////////////////////////////////////////////
function deleteModal(){
  var element = document.getElementById(myModal);
  element.parentNode.removeChild(element);
}
