function setActiveThumbnail(thumbnails, targetThumbnail, activeClassName = "active") {
  thumbnails.forEach((item) => {
    if (item.classList.contains(activeClassName)) {
      item.classList.remove(activeClassName);
    }
    if (item === targetThumbnail) {
      item.classList.add(activeClassName)
    }
  })
}