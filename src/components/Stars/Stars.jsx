import { useEffect } from 'react';
import './Stars.css'

function Stars() {
  useEffect(() => {
    const starsContainer = document.getElementById('stars');
    if (!starsContainer) return;

    starsContainer.innerHTML = '';

    const starCount = 200; // عدد النجوم

    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.className = 'star';

      // حجم النجمة بين 1px و 3px
      const size = Math.random() * 2 + 1;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;

      // موقع النجمة أفقيًا عشوائي (داخل عرض الشاشة)
      star.style.left = `${Math.random() * 100}vw`;

      // مدة السقوط بين 5 و 15 ثانية عشوائية
      star.style.animationDuration = `${Math.random() * 10 + 5}s`;

      // تأخير بداية السقوط عشوائي (delay) عشان النجوم تكون موزعة في الزمن
      star.style.animationDelay = `${Math.random() * 15}s`;

      starsContainer.appendChild(star);
    }
  }, []);

  return <div id="stars"></div>;
}

export default Stars;
