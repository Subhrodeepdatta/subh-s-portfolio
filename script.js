document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Check if the user has a preferred theme
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Set the initial theme based on user preference or default to light
    if (localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && prefersDarkScheme)) {
        body.classList.add('dark-theme');
    } else {
        body.classList.add('light-theme');
    }

    themeToggle.addEventListener('click', () => {
        if (body.classList.contains('dark-theme')) {
            body.classList.replace('dark-theme', 'light-theme');
            localStorage.setItem('theme', 'light');
        } else {
            body.classList.replace('light-theme', 'dark-theme');
            localStorage.setItem('theme', 'dark');
        }
    });
});