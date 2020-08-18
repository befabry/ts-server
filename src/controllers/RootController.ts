import { Request, Response, NextFunction } from "express";
import { get, controller, use } from "./decorators";

//next is the next middleware we want to call
function requireAuth(req: Request, res: Response, next: NextFunction): void {
  if (req.session?.loggedIn) {
    next();
    return;
  }

  res.status(403);
  res.send("Not permitted");
}

@controller("")
class RootController {
  @get("/")
  getRoot(req: Request, res: Response) {
    if (req.session?.loggedIn) {
      res.send(`
            <div>
              <p>You are logged in</p>
              <a href="/auth/logout">Logout</a>
            </div>
          `);
    } else {
      res.send(`
          <div>
            <p>You are not logged in</p>
            <a href="/auth/login">Login</a>
          </div>
        `);
    }
  }

  @get("/protected")
  @use(requireAuth)
  getProtected(req: Request, res: Response) {
    res.send("Welcome to protected route, logged in user");
  }
}
