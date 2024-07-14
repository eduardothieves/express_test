import passport from "passport";
import { Strategy } from "passport-local";
import { mockUsers } from "../utils/constants";

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id: number, done) => {
  const findUser = mockUsers.find((u) => u.id === id);

  if (!findUser) return done(new Error("Invalid Credentials"), null);

  done(null, {
    id: findUser.id,
    username: findUser.username,
    email: findUser.email,
  });
});

export default passport.use(
  new Strategy((username, password, done) => {
    const findUser = mockUsers.find(
      (u) => u.username === username && u.password === password
    );

    if (!findUser) {
      return done(new Error("Invalid Credentials1"), false);
    }

    done(null, {
      id: findUser.id,
      username: findUser.username,
      email: findUser.email,
    });
  })
);
