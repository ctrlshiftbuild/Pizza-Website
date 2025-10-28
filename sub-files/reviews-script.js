const reviewsContainer = document.getElementById("reviews");
const dialog = document.getElementById("dialog");
const stars = document.querySelectorAll(".star");
const publishButton = document.getElementById("publish-button");
const cancelButton = document.getElementById("cancel-button");
const writeReviewButton = document.getElementById("write-review-button");
const averageRatingContainer = document.getElementById("average-rating-container");
const topHR = document.getElementById("top-hr");

displayReviews();

let clickedStar = null;
let averageRating = 0;
let averageRatingRounded = 0;

function checkForReviews() {
  let stored = localStorage.getItem("reviews");
  if (!stored) {
    localStorage.setItem("reviews", JSON.stringify([]));
    stored = "[]";
  }

  const reviews = JSON.parse(stored);

  if (reviews.length === 0) {
    if (!document.getElementById("no-reviews-to-show-h2")) {
      topHR.insertAdjacentHTML(
        "afterend",
        `<h2 id="no-reviews-to-show-h2">No Reviews</h2>`
      );
    }
  } else {
    const noReviewsText = document.getElementById("no-reviews-to-show-h2");
    if (noReviewsText) noReviewsText.remove();
  }
}

checkForReviews();
displayAverageStars();

writeReviewButton.addEventListener("click", () => {
    
  dialog.showModal();
  stars.forEach((star) => {
    star.addEventListener("mouseenter", displayCurrentSelectedStars);
    star.addEventListener("mouseleave", resetStars);
    star.addEventListener("click", handleStarClick);
  });
});

cancelButton.addEventListener("click", (e) => {
  e.preventDefault();
  dialog.close();
});

publishButton.addEventListener("click", publishReview);

function displayAverageStars() {
    averageRatingContainer.innerHTML = ""
    const arrayOfRatings = [];
    const reviewss = JSON.parse(localStorage.getItem("reviews"));
    reviewss.forEach(r => {
        arrayOfRatings.push(Number(r.rating));
    })
    if (arrayOfRatings.length === 1) {
        averageRating = arrayOfRatings[0]
        averageRatingRounded = arrayOfRatings[0]
    }
    if (arrayOfRatings.length > 1) {
        let total = arrayOfRatings.reduce((a, b) => {
            return a + b;
        }, 0)
        averageRating = total / arrayOfRatings.length;
        averageRatingRounded = Math.round(averageRating);
    }

    const s1 = "fa-solid fa-star large-star";
    const s2 =
      averageRatingRounded >= 2 ? "fa-solid fa-star rating-star large-star" : "fa-regular fa-star large-star";
    const s3 =
      averageRatingRounded >= 3 ? "fa-solid fa-star rating-star large-star" : "fa-regular fa-star large-star";
    const s4 =
      averageRatingRounded >= 4 ? "fa-solid fa-star rating-star large-star" : "fa-regular fa-star large-star";
    const s5 =
      averageRatingRounded >= 5 ? "fa-solid fa-star rating-star large-star" : "fa-regular fa-star large-star";

    averageRatingContainer.innerHTML += `
        <i class="${s1}"></i>
        <i class="${s2}"></i>
        <i class="${s3}"></i>
        <i class="${s4}"></i>
        <i class="${s5}"></i>`;

    const stars = averageRatingContainer.querySelectorAll(".fa-star");

    stars.forEach((st, index) => {
      if (index < averageRatingRounded) {
        st.classList.add("fa-solid", "rating-star");
        const colors = ["maroon", "orange", "yellow", "yellowgreen", "green"];
        st.style.color = colors[averageRatingRounded - 1];
      } else {
        st.classList.add("fa-regular");
      }
    });
}

function displayCurrentSelectedStars(e) {
  const classes = e.target.classList;
  let starClass = [...classes].filter((s) => /^star[1-5]$/.test(s));
  starClass = starClass[0];
  const number = Number(starClass[starClass.length - 1]);

  for (let i = 0; i < number; i++) {
    const star = document.querySelector(`.star${i + 1}`);
    star.classList.remove("fa-regular");
    star.classList.add("fa-solid");
  }
}

function resetStars() {
   stars.forEach((star) => {
    star.classList.remove("fa-solid");
    star.classList.add("fa-regular");
  });

  if (clickedStar) {
    const starClass = [...clickedStar.classList].find((c) =>
      /^star[1-5]$/.test(c)
    );
    const starNumber = Number(starClass.replace("star", ""));
    for (let i = 0; i < starNumber; i++) {
      const star = document.querySelector(`.star${i + 1}`);
      star.classList.remove("fa-regular");
      star.classList.add("fa-solid");
    }
  }
}

function handleStarClick(e) {
  const star = e.target;

  if (clickedStar === star) {
    star.classList.remove("clicked");
    clickedStar = null;
  } else {
    stars.forEach((s) => s.classList.remove("clicked"));
    star.classList.add("clicked");
    clickedStar = star;
  }
}

function publishReview(e) {
  e.preventDefault();
  const author = document.getElementById("author");
  const title = document.getElementById("title");
  const review = document.getElementById("review");

  const reviewObj = {};

  if (author.value.length < 41 && author.value.length >= 5)
    reviewObj.author = author.value;
  else {
    alert("Author Character Count: 5-40");
    return;
  }

  if (title.value.length < 81 && title.value.length >= 5)
    reviewObj.title = title.value;
  else {
    alert("Title Character Count: 5-80");
    return;
  }

  if (review.value.length < 201 && review.value.length >= 5)
    reviewObj.review = review.value;
  else {
    alert("Review Charcter Count: 5-200");
    return;
  }

  if (clickedStar === null) {
    alert("Please select a Rating");
    return;
  }

  const starClass = [...clickedStar.classList].find((c) =>
    /^star[1-5]$/.test(c)
  );
  reviewObj.rating = Number(starClass[4]);
  reviewObj.time = new Date();

  const reviewsArr = JSON.parse(localStorage.getItem("reviews"));
  reviewsArr.push(reviewObj);
  localStorage.setItem("reviews", JSON.stringify(reviewsArr));

  clickedStar = null;

  dialog.close();

  checkForReviews();
  displayReviews();
  displayAverageStars();

  author.value = "";
  title.value = "";
  review.value = "";

  const formStars = document.querySelectorAll(".form-star");

  formStars.forEach(str => {
    str.classList.remove("fa-solid")
    str.classList.add("fa-regular")
  })
}

function displayReviews() {
  const reviews = JSON.parse(localStorage.getItem("reviews"));

  reviewsContainer.innerHTML = "";

  reviews.forEach((rev) => {
    const month = new Date(rev.time);
    const date = new Date(rev.time).getDate();
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const monthShort = months[month.getMonth()];

    const s1 = "fa-solid fa-star";
    const s2 =
      rev.rating >= 2 ? "fa-solid fa-star rating-star" : "fa-regular fa-star";
    const s3 =
      rev.rating >= 3 ? "fa-solid fa-star rating-star" : "fa-regular fa-star";
    const s4 =
      rev.rating >= 4 ? "fa-solid fa-star rating-star" : "fa-regular fa-star";
    const s5 =
      rev.rating >= 5 ? "fa-solid fa-star rating-star" : "fa-regular fa-star";

    reviewsContainer.innerHTML += `
        <div class="review-container">
          <div class="title-and-date">
              <h3 class="review-title">${rev.title}</h3>
              <p>${date} ${monthShort}</p>
           </div>
          <p class="review-review">${rev.review}</p>
          <h4 class="review-author">${rev.author}</h4>
          <div class="review-rating-container">
            Rating: 
            <i class="${s1}"></i>
            <i class="${s2}"></i>
            <i class="${s3}"></i>
            <i class="${s4}"></i>
            <i class="${s5}"></i>
          </div>
        </div>
        `;
    const currentReview = reviewsContainer.lastElementChild;
    const stars = currentReview.querySelectorAll(".fa-star");

    stars.forEach((st, index) => {
      if (index < rev.rating) {
        st.classList.add("fa-solid", "rating-star");
        const colors = ["maroon", "orange", "yellow", "yellowgreen", "green"];
        st.style.color = colors[rev.rating - 1];
      } else {
        st.classList.add("fa-regular");
      }
    });
  });
}
