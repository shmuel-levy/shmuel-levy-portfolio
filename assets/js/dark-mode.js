function toggleDarkMode() {
    const darkModeIcon = document.getElementById('dark-mode-icon');
    const isDarkMode = document.documentElement.getAttribute('data-theme') === 'dark';

    if (isDarkMode) {
        document.documentElement.removeAttribute('data-theme');
        darkModeIcon.classList.remove('ri-sun-line');
        darkModeIcon.classList.add('ri-moon-line');
        localStorage.setItem('theme', 'light');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        darkModeIcon.classList.remove('ri-moon-line');
        darkModeIcon.classList.add('ri-sun-line');
        localStorage.setItem('theme', 'dark');
    }
}

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    const darkModeIcon = document.getElementById('dark-mode-icon');
    darkModeIcon.classList.remove('ri-moon-line');
    darkModeIcon.classList.add('ri-sun-line');
}