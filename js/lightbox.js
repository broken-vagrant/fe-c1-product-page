var lightBoxStageEl = document.querySelector(".jsLbStage");
var lightBoxThumbNails = document.querySelectorAll(".jsLbItem");
var lightBoxPrevBtn = document.querySelector('.jsLbStagePrev');
var lightBoxNextBtn = document.querySelector('.jsLbStageNext');

function openLightBox(dialogId, that) {
  if (!dialogId) {
    throw Error("dialogId is required");
  }
  if (!that) {
    throw Error("context(`this`) is required");
  }

  // pass gallery active img info to lightbox
  currLightboxIdx = that.dataset.activeidx;

  let currImg = that.dataset.curr_img;
  lightBoxStageEl.src = "../images/" + currImg;
  setActiveThumbnail(lightBoxThumbNails, lightBoxThumbNails[0]);

  openDialog(dialogId, that);
}

function initLightBox() {

  // disable nextPrevBtn if slide count = 1
  if (lightBoxThumbNails.length < 2) {
    lightBoxNextBtn.style.display = "none";
    lightBoxPrevBtn.style.display = "none";
  } else {
    lightBoxNextBtn.setAttribute('onclick', "showLBNextItem(this)");
    lightBoxPrevBtn.setAttribute('onclick', "showLBPrevItem(this)");
  }
  // add listeners
  lightBoxThumbNails.forEach((thumb) => {
    thumb.setAttribute("onclick", "previewLightBoxItem(this)");
  })

  // set inital data for stage
  lightBoxStageEl.setAttribute("data-activeidx", "0");
}

function previewLightBoxItem(that) {
  if (that.dataset.fullimageurl === lightBoxStageEl.dataset.fullimageurl) {
    return;
  }
  lightBoxStageEl.setAttribute("data-curr_img", that.dataset.fullimageurl);
  lightBoxStageEl.setAttribute("data-activeidx", that.dataset.idx);

  lightBoxStageEl.src = "../images/" + that.dataset.fullimageurl;

  setActiveThumbnail(lightBoxThumbNails, that);
}
function showLBNextItem() {
  let currIdx = Number(lightBoxStageEl.dataset.activeidx);
  let nextIdx = (currIdx + 1) % lightBoxThumbNails.length;
  previewLightBoxItem(lightBoxThumbNails[nextIdx])
}
function showLBPrevItem() {
  let currIdx = Number(lightBoxStageEl.dataset.activeidx);
  let prevIdx;
  if (currIdx === 0) {
    prevIdx = lightBoxThumbNails.length - 1;
  } else {
    prevIdx = (currIdx - 1) % lightBoxThumbNails.length;
  }
  previewLightBoxItem(lightBoxThumbNails[prevIdx])
}
initLightBox();