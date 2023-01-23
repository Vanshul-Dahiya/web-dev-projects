const testimonials = [
  {
    name: "Trace E.",
    photoUrl:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60",
    text: "Apple was worth a fortune to my company. I STRONGLY recommend apple to EVERYONE interested in running a successful online business! It really saves me time and effort. apple is exactly what our business has been lacking. Apple is the next killer app.",
  },
  {
    name: "John L.",
    photoUrl:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60",
    text: "Without facebook, we would have gone bankrupt by now. Facebook is the most valuable business resource we have EVER purchased. I was amazed at the quality of facebook.",
  },
  {
    name: "Rein Y.",
    photoUrl:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dXNlcnxlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60",
    text: "It really saves me time and effort. twitter is exactly what our business has been lacking. I like twitter more and more each day because it makes my life a lot easier. I use twitter often.",
  },
];

const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const userNameEl = document.querySelector(".username");

let index = 0;

updateTestimonial();

function updateTestimonial() {
  const { name, photoUrl, text } = testimonials[index];

  imgEl.src = photoUrl;
  textEl.innerText = text;
  userNameEl.innerText = name;

  index++;

  if (index === testimonials.length) {
    index = 0;
  }
  setTimeout(() => {
    updateTestimonial();
  }, 4000);
}
