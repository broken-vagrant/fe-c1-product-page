var sidebar, stagePreview;
window.onload = () => {
  sidebar = document.getElementById('sidebar');
  stagePreview = document.querySelector('.product__gallery .stage__img--active');
  initGallery();
}
function openSidebar() {
  if (!sidebar.classList.contains('active')) {
    sidebar.classList.add('active')
  }
}

function closeSidebar() {
  if (sidebar.classList.contains('active')) {
    sidebar.classList.remove('active')
  }
}

var thumbs;
function initGallery() {
  thumbs = document.querySelectorAll(".product__gallery .item");

  // disable nextPrevBtn if slide count = 1
  if (thumbs.length < 2) {
    document.querySelector('.product__gallery .stage__img--prev').style.display = "none";
    document.querySelector('.product__gallery .stage__img--next').style.display = "none";
  }
  // add listeners
  thumbs.forEach((thumb) => {
    thumb.setAttribute("onclick", "showFull(this)");
  })

}

function showFull(that) {
  stagePreview.setAttribute("data-curr_img", that.dataset.fullimageurl);
  stagePreview.firstElementChild.src = "../images/" + that.dataset.fullimageurl;
}