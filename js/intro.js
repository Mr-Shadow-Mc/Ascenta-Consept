window.addEventListener('DOMContentLoaded', function()
{
    const intro = document.getElementById('intro');
    const introLogo = document.getElementById('intro-logo');

    intro.style.opacity = "0";
    introLogo.style.opacity = "0";
    intro.addEventListener('transitionend', () => intro.remove());
})