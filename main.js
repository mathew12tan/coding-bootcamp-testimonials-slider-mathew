const testimonials = [
  {
    imgSrc: './images/image-tanya.jpg',
    imgAlt: 'image-tanya',
    intro: '" I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m nowin the job of my dreams and so excited about the future. "',
    person: 'Tanya Sinclair',
    title: 'UX Engineer'
  },
  {
    imgSrc: './images/image-john.jpg',
    imgAlt: 'image-john',
    intro: '" If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into isincredible. I now feel so confident about starting up as a professional developer. "',
    person: 'John Tarkpor',
    title: 'Junior Front-end Developer'
  }
 ]

const avatarGroup = document.querySelector('.avatar-group');
const testimonialWordingGroup = document.querySelector('.testimonial-wording-group');

testimonials.forEach(testimonial => {
  const avatarImg = document.createElement('img');
  avatarImg.className = 'avatar';
  avatarImg.setAttribute('src', `${testimonial.imgSrc}`);
  avatarImg.setAttribute('alt', `${testimonial.imgAlt}`);
  avatarGroup.appendChild(avatarImg);

  const wordingDiv = document.createElement('div');
  wordingDiv.className = 'testimonial-wording';

  const introH1 = document.createElement('h1');
  introH1.className = 'intro';
  introH1.textContent = testimonial.intro;

  const personPara = document.createElement('p');
  personPara.className = 'person';
  personPara.textContent = testimonial.person;

  const titlePara = document.createElement('p');
  titlePara.className = 'title';
  titlePara.textContent = testimonial.title;

  wordingDiv.appendChild(introH1);
  wordingDiv.appendChild(personPara);
  wordingDiv.appendChild(titlePara);
  testimonialWordingGroup.appendChild(wordingDiv);
});


const preBtn = document.querySelector('.preBtn');
const nextBtn = document.querySelector('.nextBtn');

const avatars = document.querySelectorAll('.avatar');
const testimonialWordings = document.querySelectorAll('.testimonial-wording');

let activeIndex = 0;
avatars[activeIndex].classList.add('avatar-pre');
testimonialWordings[activeIndex].classList.add('testimonial-wording-pre');

function hideTestimonial() {
  avatars[activeIndex].className = 'avatar';
  testimonialWordings[activeIndex].className = 'testimonial-wording';
}

function showTestimonial(e) {
  e.target.classList.contains('preBtn') ? (
    avatars[activeIndex].className = 'avatar avatar-pre',
    testimonialWordings[activeIndex].className = 'testimonial-wording testimonial-wording-pre'
  ) : (
    avatars[activeIndex].className = 'avatar avatar-next',
    testimonialWordings[activeIndex].className = 'testimonial-wording testimonial-wording-next'
  )
}

preBtn.addEventListener('click', function (e) {
  hideTestimonial();
  activeIndex === 0 ? activeIndex = (testimonials.length) - 1 : activeIndex--;
  showTestimonial(e);
})

nextBtn.addEventListener('click', function (e) {
  hideTestimonial()
  activeIndex === testimonials.length - 1 ? activeIndex = 0 : activeIndex++;
  showTestimonial(e);
})

