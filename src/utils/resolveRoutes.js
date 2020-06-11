const resolveRoutes = (route) => {
    if(route.length <= 3) {
        let valideRoute = route === '/' ? route : '/:id'
        return valideRoute
    }

    return `/${route}`
}

export default resolveRoutes