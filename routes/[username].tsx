/** @jsx h */
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";

export default function Greet({ data }: PageProps<User | null>) {
  return <div>Hello {JSON.stringify(data)}</div>;
}

interface User {
  name: string;
}
export const handler: Handlers<User | null> = {
  async GET(_, ctx) {
    const { username } = ctx.params;
    const resp = await fetch(`https://api.github.com/users/${username}`);
    if (resp.status === 404) {
      return ctx.render(null);
    }

    const user = await resp.json();
    console.log("user", user);

    return ctx.render(user);
  },
};
