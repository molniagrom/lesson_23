function showMore(params) {
  const showMoreBlocks = document.querySelectorAll("[data-showmore]");
  let origbnalHeight;

  if (showMoreBlocks.length) {
    showMoreInit(showMoreBlocks);
    document.addEventListener("click", showMoreActions);
  }

  function showMoreInit(showMoreBlocks) {
    showMoreBlocks.forEach((showMoreBlock) => {
      showMoreInitItem(showMoreBlock);
    });
  }

  function showMoreInitItem(showMoreBlock) {
    const showMoreContent = showMoreBlock.querySelector(
      "[ data-showmore-content]"
    );
    let showMoreType = showMoreBlock.dataset.showmore;
    let showMoreSize = showMoreBlock.dataset.showmoreContent;
    if (!showMoreType) {
      showMoreType = `text`;
    }
    if (!showMoreSize) {
      if (!showMoreType) {
        showMoreSize = `150`;
      } else {
        showMoreSize = `3`;
      }
    }
    console.log(showMoreType);
    console.log(showMoreSize);

    if (showMoreType === "text") {
      origbnalHeight = showMoreContent.offsetHeight;

      showMoreContent.style.height = `${showMoreSize}px`;
    }
  }

  function showMoreActions(e) {
    const targetElement = e.target;
    if (targetElement.closest("[data-showmore-button]")) {
      const showMoreBlock = targetElement
        .closest("[data-showmore-button]")
        .closest("[data-showmore]");
      const showMoreContent = showMoreBlock.querySelector(
        "[data-showmore-content]"
      );

      showMoreContent.style.height = `${origbnalHeight}px`;
    }
  }
}

window.addEventListener("load", (e) => {
  showMore();
});


//    const lineHeight = parseInt(window.getComputedStyle(showMoreContent).getPropertyPriority("line-height"));
// const linesQuality = Math.floor(showMoreSize / lineHeight);
// console.log(linesQuality);
