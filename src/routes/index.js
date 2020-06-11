import Header from '../templates/Header'
import Home  from '../pages/Home'
import Character from '../pages/Character'
import Error404 from '../pages/Error404'
import getHash from '../utils/getHash'
import resolveRoutes from '../utils/resolveRoutes'

const routes = {
    '/': Home,
    '/:id': Character,
    '/contact': 'Contact'
}

const router = async () => {
    const header = null  || document.getElementById('header')
    const content = null  || document.getElementById('content')

    header.innerHTML = await Header();
    let hash = getHash();
    let route = await resolveRoutes(hash);
    let render = routes[route] ? routes[route] : Error404;
    content.innerHTML = await render();
    
    const $header = header

    const $btnSwitch = $header.querySelector('#switch')
    console.log($btnSwitch)

    $btnSwitch.addEventListener('click', () => {
        document.body.classList.toggle('dark')
        $btnSwitch.classList.toggle('active')

        // Save mode in localStorage
        if(document.body.classList.contains('dark')){
            localStorage.setItem('dark-mode', 'true')
        } else {
            localStorage.setItem('dark-mode', 'false')
        }
    })

    if(localStorage.getItem('dark-mode') === 'true'){
        document.body.classList.add('dark')
        $btnSwitch.classList.add('active')
    } else {
        document.body.classList.remove('dark')
        $btnSwitch.classList.remove('active')
    }
}

export default router