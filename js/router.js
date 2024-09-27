export class Router {
  routes = {};
  add(routeName, page) {
    this.routes[routeName] = page;
  }

  route(e) {
    e = e || window.e;
    e.preventDefault();

    window.history.pushState({}, '', e.target.href);

    this.handle();
  }

  handle() {
    const { pathname } = window.location;
    const route = this.routes[pathname] || this.routes[404];
    fetch(route)
      .then((response) => response.text())
      .then((html) => {
        document.querySelector('#app').innerHTML = html;
      });
  }
}
