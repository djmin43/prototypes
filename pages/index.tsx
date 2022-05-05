import type { NextPage } from "next";
import { ROUTES } from "../constants/routes";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <section>
      <h1>these are my prototypes</h1>
      <section>
        <p>list</p>
        {ROUTES.map((route) => (
          <Link key={route.route} href={route.route}>
            <a>{route.label}</a>
          </Link>
        ))}
      </section>
    </section>
  );
};

export default Home;
