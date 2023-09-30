const observer = lozad();
observer.observe();

window.addEventListener('load', function () {
  document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll('pre code').forEach((block) => {
      hljs.highlightBlock(block);
    });
  });
  mediumZoom('.zoom', {
    margin: 50,
  });
  mediumZoom('.zoom-dark', {
    margin: 50,
    background: '#0f172a',
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const backToTopButton = document.getElementById('backToTopButton');
  window.onscroll = function () {
    if (
      document.body.scrollTop > 300 ||
      document.documentElement.scrollTop > 300
    ) {
      backToTopButton.style.display = 'block';
    } else {
      backToTopButton.style.display = 'none';
    }
  };
  function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  backToTopButton.addEventListener('click', scrollToTop);
});

//cookie-banner
document.addEventListener('DOMContentLoaded', function () {
  const cookieConsent = document.getElementById('cookieConsent');
  const acceptButton = document.querySelector('.cookieConsent-accept');

  const isConsentAccepted = localStorage.getItem('cookieConsentAccepted');
  if (!isConsentAccepted) {
    cookieConsent.style.display = 'block';
  }
  acceptButton.addEventListener('click', function () {
    localStorage.setItem('cookieConsentAccepted', 'true');
    cookieConsent.style.display = 'none';
  });
});
