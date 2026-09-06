const openBtn = document.getElementById('open-invitation-btn');
const welcomeScreen = document.getElementById('welcome-screen');
const mainInvitation = document.getElementById('main-invitation');
const bgMusic = document.getElementById('bg-music');

openBtn.addEventListener('click', () => {
    // Menyembunyikan halaman sambutan dan menampilkan isi undangan utama
    welcomeScreen.classList.add('hidden');
    mainInvitation.classList.remove('hidden');

    // Memutar musik latar secara otomatis saat tombol diklik
    bgMusic.play().catch(error => {
        console.log("Autoplay dicegah oleh browser:", error);
    });
});