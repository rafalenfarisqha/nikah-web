const openBtn = document.getElementById('open-invitation-btn');
const welcomeScreen = document.getElementById('welcome-screen');
const mainInvitation = document.getElementById('main-invitation');
const bgMusic = document.getElementById('bg-music');

openBtn.addEventListener('click', () => {
    // Sembunyikan halaman pertama, tampilkan undangan utama
    welcomeScreen.classList.add('hidden');
    mainInvitation.classList.remove('hidden');

    // Putar musik latar belakang
    bgMusic.play().catch(error => {
        console.log("Autoplay dicegah oleh browser.");
    });
});