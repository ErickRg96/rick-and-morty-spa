const Header = () => {


    const view = `
        <header class="header-main">
            <div class="header-logo">
                <a href="/"><img src="../public/assets/logo.png" alt="Rick and Morty"></a>
            </div>
            <nav class="header-nav">
                <a href="#/about/" class="nav-element">About</a>
                <button class="switch" id="switch">
                    <span><i class="fas fa-sun"></i></span>
                    <span><i class="fas fa-moon"></i></span>
                </button>
            </nav>
        </header>
    `;
    return view
}

export default Header;