const openBtn = document.getElementById('open-invitation-btn');
const welcomeScreen = document.getElementById('welcome-screen');
const mainInvitation = document.getElementById('main-invitation');
const bgMusic = document.getElementById('bg-music');

openBtn.addEventListener('click', () => {
    welcomeScreen.classList.add('hidden');
    mainInvitation.classList.remove('hidden');

    bgMusic.play().catch(error => {
        console.log("Autoplay dicegah oleh browser:", error);
    });
});