const srcIMG = document.querySelectorAll(".card_img img");
const btnDownload = document.querySelectorAll(".hoverDownload");
const png1 = document.querySelectorAll(".downloadOption .png_group1");
const svg1 = document.querySelectorAll(".downloadOption .svg_group1");
const png2 = document.querySelectorAll(".downloadOption .png_group2");
const svg2 = document.querySelectorAll(".downloadOption .svg_group2");

const downloadURI = (uri, name) => {
  const link = document.createElement("a");
  link.download = name;
  link.href = uri;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  delete link;
};

const addEventClickDownload = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i].addEventListener("click", () => {
      let typeIMG = arr[i].innerText.toLowerCase();
      let src = srcIMG[i].getAttribute("src");
      if (typeIMG === "svg") {
        const newSrc = src.replace("png", "svg");
        let newArrSRC = newSrc.split("/");
        let newNameIMG = newArrSRC.pop();
        console.log(newSrc, newNameIMG);
        downloadURI(newSrc, newNameIMG);
        return;
      }
      let arrSRC = src.split("/");
      let nameIMG = arrSRC.pop();
      downloadURI(src, nameIMG);
      return;
    });
  }
};

for (let i = 0; i < btnDownload.length; i++) {
  if (btnDownload[i]) {
    btnDownload[i].addEventListener("click", () => {
      let src = srcIMG[i].getAttribute("src");
      let arrSRC = src.split("/");
      let nameIMG = arrSRC.pop();
      downloadURI(src, nameIMG);
    });
  }
}

addEventClickDownload(png1);
addEventClickDownload(svg1);
addEventClickDownload(png2);
addEventClickDownload(svg2);
