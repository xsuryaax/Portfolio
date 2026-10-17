// Lightbox untuk gambar di halaman studi kasus.
lucide.createIcons();

const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const closeLightbox = document.getElementById('closeLightbox');

document.querySelectorAll('main img').forEach(img => {
    img.classList.add('cursor-zoom-in');
    img.addEventListener('click', () => {
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        lightbox.classList.remove('hidden');
        lightbox.classList.add('flex');
        void lightbox.offsetWidth;
        lightbox.classList.remove('opacity-0');
        lightboxImg.classList.remove('scale-95');
        lightboxImg.classList.add('scale-100');
    });
});

const close = () => {
    lightbox.classList.add('opacity-0');
    lightboxImg.classList.remove('scale-100');
    lightboxImg.classList.add('scale-95');
    setTimeout(() => {
        lightbox.classList.add('hidden');
        lightbox.classList.remove('flex');
    }, 300);
};

closeLightbox.addEventListener('click', close);
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) close();
});
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !lightbox.classList.contains('hidden')) close();
});
