class PageHeader {
  constructor(headerElement) {
    this.headerElement = headerElement;
  }
  updateAverage(newAverage){
    var averageDisplay = document.querySelector("span.badge");
    averageDisplay.textContent = newAverage;
    console.log(pageHeader);
  }
}
