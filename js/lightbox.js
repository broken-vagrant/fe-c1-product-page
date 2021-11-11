var lightBoxPrev = document.querySelector(".js-lightbox-preview");

function openLightBox(dialogId, that) {
  if (!dialogId) {
    throw Error("dialogId is required");
  }
  if (!that) {
    throw Error("context(`this`) is required");
  }
  let currImg = that.dataset.curr_img;
  lightBoxPrev.src = "../images/" + currImg;
  openDialog(dialogId, that);
}