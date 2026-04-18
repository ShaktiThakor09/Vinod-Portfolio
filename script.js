const video = document.querySelector(".Showreel");

// Safe check
if (video) {
  const isMobile = window.innerWidth <= 480;

  if (isMobile) {
    video.removeAttribute("loop");
  } else {
    video.setAttribute("loop", true);
  }
}

// TYPEWRITER EFFECT
const texts = ["Vinod Sharma (MV VASS)", "Video Editor", "Content Creator"];
const typewriterElement = document.getElementById("typewriter-text");

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeWriter() {
  if (!typewriterElement) return;

  const currentText = texts[textIndex];

  if (isDeleting) {
    typewriterElement.innerHTML = currentText.substring(0, charIndex--);
  } else {
    typewriterElement.innerHTML = currentText.substring(0, charIndex++);
  }

  if (!isDeleting && charIndex === currentText.length) {
    isDeleting = true;
    setTimeout(typeWriter, 1000);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % texts.length;
    setTimeout(typeWriter, 200);
  } else {
    setTimeout(typeWriter, isDeleting ? 50 : 100);
  }
}

window.addEventListener("DOMContentLoaded", () => {
  if (typewriterElement) {
    typewriterElement.style.borderRight = "3px solid #00e0ff";
    setTimeout(typeWriter, 1000);
  }
});

// EMAIL FUNCTION
function handleEmailClick(e) {
  e.preventDefault();

  const email = "uniquesedit0@gmail.com";
  const subject = "Video Editing Inquiry";

  const body = `Hello,

I would like to discuss a video editing project.

Project Details:
- Type of video:
- Duration:
- Deadline:

Budget:

Looking forward to your response!`;

  const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = mailtoUrl;
}

// FOOTER YEAR FIX
document.querySelector("footer p").innerHTML =
  `&copy; ${new Date().getFullYear()} Vinod Sharma (MV VASS).`;

// VIDEO HOVER EFFECT
const allVideos = document.querySelectorAll("video");
const showreelVideo = document.querySelector(".Showreel");

allVideos.forEach(v => {
  v.muted = true;

  v.addEventListener("mouseenter", () => {
    v.play();
    if (showreelVideo && v !== showreelVideo) showreelVideo.pause();
  });

  v.addEventListener("mouseleave", () => {
    v.pause();
    v.currentTime = 0;
    if (showreelVideo && v !== showreelVideo) showreelVideo.play();
  });
});

if (showreelVideo) showreelVideo.play();

// COPY EMAIL CLICK
document.addEventListener("DOMContentLoaded", () => {
  const copyTags = document.querySelectorAll(".copy-text");

  copyTags.forEach(tag => {
    tag.style.cursor = "pointer";
    tag.title = "Click to copy";

    tag.addEventListener("click", () => {
      const textToCopy = tag.textContent.trim();

      navigator.clipboard.writeText(textToCopy)
        .then(() => alert(`Copied: ${textToCopy}`))
        .catch(() => prompt("Copy this manually:", textToCopy));
    });
  });
});

// ✅ VIEW MORE BUTTON FIXED
window.toggleVideos = function () {
  const more = document.getElementById("moreVideos");
  const btn = document.getElementById("viewBtn");

  if (!more || !btn) return;

  if (more.style.display === "none" || more.style.display === "") {
    more.style.display = "block";
    btn.innerText = "Show Less";
  } else {
    more.style.display = "none";
    btn.innerText = "View More";
  }
};
