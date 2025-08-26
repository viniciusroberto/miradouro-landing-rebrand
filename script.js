document.addEventListener('DOMContentLoaded', function () {
  // FAQ accordion behavior
  const items = document.querySelectorAll('.faq-item');
  items.forEach((item) => {
    const button = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    if (!button || !answer) return;

    button.addEventListener('click', () => {
      const isOpen = item.hasAttribute('open');
      // Close all others
      document.querySelectorAll('.faq-item[open]').forEach((openItem) => {
        if (openItem !== item) {
          openItem.removeAttribute('open');
          const openBtn = openItem.querySelector('.faq-question');
          const openAns = openItem.querySelector('.faq-answer');
          if (openBtn) openBtn.setAttribute('aria-expanded', 'false');
          if (openAns) openAns.hidden = true;
        }
      });

      if (isOpen) {
        item.removeAttribute('open');
        button.setAttribute('aria-expanded', 'false');
        answer.hidden = true;
      } else {
        item.setAttribute('open', '');
        button.setAttribute('aria-expanded', 'true');
        answer.hidden = false;
      }
    });
  });
});

