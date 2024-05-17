function showMore(params) {
  const showMoreBlocks = document.querySelectorAll("[data-showmore]");
  let origbnalHeight;
  // первый абзац
  // let openContent = document.querySelector('#open-content').scrollHeight
  // console.log(openContent);

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
    setHiddenHeight(showMoreBlock, getHiddenHeight(showMoreBlock));
  }

  function showMoreActions(e) {
    const targetElement = e.target;
    if (targetElement.closest("[data-showmore-button]")) {
      const showMoreButton = targetElement.closest("[data-showmore-button]");
      const showMoreBlock = showMoreButton.closest("[data-showmore]");
      const showMoreContent = showMoreBlock.querySelector(
        "[data-showmore-content]"
      );
      const showMoreOriginalHeight = getOgiginalHeight(showMoreBlock);
      const showMoreHiddenHeight = getHiddenHeight(showMoreBlock);
      // console.log(showMoreOriginalHeight);
      if (showMoreBlock.classList.contains("_show-more")) {
        showMoreContent.style.height = `${showMoreHiddenHeight}px`;
      } else {
        showMoreContent.style.height = `${showMoreOriginalHeight}px`;
      }
      showMoreBlock.classList.toggle("_show-more");
    }
  }

  function setHiddenHeight(showMoreBlock, hiddenHeight) {
    const showMoreContent = showMoreBlock.querySelector(
      "[ data-showmore-content]"
    );
    showMoreContent.style.height = `${hiddenHeight}px`;
  }

  function getHiddenHeight(showMoreBlock) {
    const showMoreContent = showMoreBlock.querySelector(
      "[ data-showmore-content]"
    );

        // Изменение: Определение высоты строки и расчет скрытой высоты
        const lineHeight = parseInt(
          window.getComputedStyle(showMoreContent).lineHeight
        );
        const hiddenHeight = lineHeight * 2; // Высота первых трех строк

    // let showMoreType = showMoreBlock.dataset.showmore;
    // let showMoreSize = showMoreBlock.dataset.showmoreContent;
    // let hiddenHeight = 0;
    // if (!showMoreType) {
    //   showMoreType = `text`;
    // }
    // if (!showMoreSize) {
    //   if (!showMoreType) {
    //     showMoreSize = `150`;
    //   } else {
    //     showMoreSize = `3`;
    //     // первый абзац
    //     // showMoreSize = `${openContent}`;
    //   }
    // }
    // console.log(showMoreType);
    // console.log(showMoreSize);

    // if (showMoreType === "text") {
    //   hiddenHeight = showMoreSize;
    //   // showMoreContent.style.height = `${showMoreSize}px`;
    // } else {
    //   //
    // }

    return hiddenHeight;
  }

  function getOgiginalHeight(showMoreBlock) {
     // Изменение: Упрощение получения полной высоты контента
     const showMoreContent = showMoreBlock.querySelector(
      "[data-showmore-content]"
    );
    return showMoreContent.scrollHeight;
    // const showMoreContent = Array.from(
    //   showMoreBlock.querySelector("[data-showmore-content]").children
    // );
    // let showMoreOriginalHeight = 0;
    // if (showMoreContent.length) {
    //   showMoreContent.forEach((showMoreContentItem) => {
    //     showMoreOriginalHeight += showMoreContentItem.offsetHeight;
    //   });
    // }
    // return showMoreOriginalHeight;
  }
}

window.addEventListener("load", (e) => {
  showMore();
});

//    const lineHeight = parseInt(window.getComputedStyle(showMoreContent).getPropertyPriority("line-height"));
// const linesQuality = Math.floor(showMoreSize / lineHeight);
// console.log(linesQuality);
