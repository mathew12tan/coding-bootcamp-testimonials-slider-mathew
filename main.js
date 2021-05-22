const avatars = document.querySelectorAll(".avatar");
const testimonialWordings = document.querySelectorAll(".testimonial-wording");

const preBtn = document.querySelector(".preBtn");
const nextBtn = document.querySelector(".nextBtn");

for (let index = 0; index < avatars.length; index++) {
  avatars[0].classList.add("avatar-toggle-pre");
  testimonialWordings[0].classList.add("testimonial-wording-toggle-pre");

  if (avatars[index].classList.contains("avatar-toggle-pre")) {
    let activeAvatar = avatars[index];
    let activeWording = testimonialWordings[index];

    nextBtn.addEventListener("click", function () {
      activeAvatar.className = "avatar";
      activeWording.className = "testimonial-wording";

      if (activeAvatar.nextElementSibling === null) {
        avatars[0].className = "avatar avatar-toggle-next";
        activeAvatar = avatars[0];
        
        activeWording.className = 'testimonial-wording';
        testimonialWordings[0].className = "testimonial-wording testimonial-wording-toggle-next";
        activeWording = testimonialWordings[0];
      } else {
        activeAvatar.nextElementSibling.className = "avatar avatar-toggle-next";
        activeAvatar = activeAvatar.nextElementSibling;

        activeWording.className = 'testimonial-wording';
        activeWording.nextElementSibling.className = "testimonial-wording testimonial-wording-toggle-next";
        activeWording = activeWording.nextElementSibling;
      }
    });

    preBtn.addEventListener("click", function () {
      activeAvatar.className = "avatar";
      activeWording.className = "testimonial-wording";

      if (activeAvatar.previousElementSibling === null) {
        avatars[avatars.length - 1].className = "avatar avatar-toggle-pre";
        activeAvatar = avatars[avatars.length - 1];

        activeWording.className = 'testimonial-wording';
        testimonialWordings[testimonialWordings.length - 1].className = "testimonial-wording testimonial-wording-toggle-pre";
        activeWording = testimonialWordings[testimonialWordings.length - 1];
      } else {
        activeAvatar.previousElementSibling.className = "avatar avatar-toggle-pre";
        activeAvatar = activeAvatar.previousElementSibling;

        activeWording.className = 'testimonial-wording';
        activeWording.previousElementSibling.className = "testimonial-wording testimonial-wording-toggle-pre";
        activeWording = activeWording.previousElementSibling;
      }
    });
  }
}
