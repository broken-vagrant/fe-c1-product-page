var sidebar = document.getElementById('sidebar');
var galleryStageEl = document.querySelector('.jsPgStage');
var galleryThumbnails = document.querySelectorAll(".jsPgItem");
var galleryStagePrevBtn = document.querySelector('.jsPgStagePrev');
var galleryStageNextBtn = document.querySelector('.jsPgStageNext');

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

// GALLERY
var galleryThumbnails;
function initGallery() {

  // disable nextPrevBtn if slide count = 1
  if (galleryThumbnails.length < 2) {
    galleryStagePrevBtn.style.display = "none";
    galleryStageNextBtn.style.display = "none";
  } else {
    galleryStagePrevBtn.setAttribute("onclick", "showGalleryPrevItem(this)")
    galleryStageNextBtn.setAttribute("onclick", "showGalleryNextItem(this)")
    galleryStagePrevBtn.style.visibility = "hidden";
  }
  // add listeners
  galleryThumbnails.forEach((thumb) => {
    thumb.setAttribute("onclick", "previewGalleryItem(this)");
  })

  // set inital data for stage
  galleryStageEl.setAttribute("data-activeidx", "0");
}

function previewGalleryItem(that) {
  if (that.dataset.fullimageurl === galleryStageEl.dataset.fullimageurl) {
    return;
  }
  galleryStageEl.setAttribute("data-curr_img", that.dataset.fullimageurl);
  galleryStageEl.setAttribute("data-activeidx", that.dataset.idx);

  galleryStageEl.firstElementChild.src = "../images/" + that.dataset.fullimageurl;

  setActiveThumbnail(galleryThumbnails, that)
}

function showGalleryNextItem() {
  let currIdx = Number(galleryStageEl.dataset.activeidx);
  let nextIdx = currIdx + 1;

  // handle edge cases
  if (currIdx === 0) {
    galleryStagePrevBtn.style.visibility = "visible";
  }
  if (nextIdx === galleryThumbnails.length - 1) {
    galleryStageNextBtn.style.visibility = "hidden";
  }

  previewGalleryItem(galleryThumbnails[nextIdx]);
}
function showGalleryPrevItem() {
  let currIdx = Number(galleryStageEl.dataset.activeidx);
  let prevIdx = currIdx - 1;

  // handle edge cases
  if (currIdx === galleryThumbnails.length - 1) {
    galleryStageNextBtn.style.visibility = "visible";
  }
  if (currIdx === 1) {
    galleryStagePrevBtn.style.visibility = "hidden";
  }

  previewGalleryItem(galleryThumbnails[prevIdx])
}

initGallery();

// CART functionalities
function deleteCartItem(that) {
  var container = that.parentNode.parentNode;
  var cartItemCount = container.childElementCount - 2;

  that.parentNode.classList.add('hidden');

  if (cartItemCount == 1) {
    document.getElementById('checkoutBtn').classList.add('hidden');
    document.querySelector(".jsCartEmpty").classList.remove("hidden");
    container.classList.add('empty');
    document.querySelector(".jsCartCount").classList.add('hidden');
  }
}