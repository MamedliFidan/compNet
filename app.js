const topicCards = document.querySelectorAll("[data-topic]");

const topicLinks = {
  1: "1/topic1.html",
  2: "2/topic2.html",
  3: "3/topic3.html",
  4: "4/topic4.html",
  5: "5/topic5.html",
  6: "6/topic6.html",
  7: "7/topic7.html",
  8: "8/topic8.html",
  9: "9/topic9.html",
  10: "10/topic10.html"
};

topicCards.forEach((card) => {
  card.addEventListener("click", () => {
    const topicNumber = Number(card.dataset.topic);
    const page = topicLinks[topicNumber];

    if (page) {
      window.location.href = page;
    }
  });
});