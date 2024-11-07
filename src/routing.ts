type RouteHandler = () => void;

export class Router {
  private routes: Map<string, RouteHandler>;

  constructor() {
    this.routes = new Map();
    window.addEventListener("popstate", () => this.handleLocationChange());
  }

  public addRoute(path: string, handler: RouteHandler) {
    this.routes.set(path, handler);
  }

  public navigate(path: string) {
    history.pushState({}, "", path);
    this.handleLocationChange();
  }

  private handleLocationChange() {
    const path = window.location.pathname;
    const handler = this.routes.get(path);

    if (handler) {
      handler();
    } else {
      console.error("Route not found:", path);
    }
  }
}