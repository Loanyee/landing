import Header from "layout/header";
import style from "../styles/Home.module.css";
import Hero from "views/home/hero";
import Benefits from "views/home/benefits";
import Explore from "views/home/explore";
import Footer from "layout/footer";
export default function Home() {
  return (
    <div>
      <section className={style.hero_section_wrapper}>
        <Header />
        <Hero />
      </section>
      <section className="bg-slate-50 pt-20">
        <Benefits />
        <Explore />
      </section>
      <Footer />
    </div>
  );
}
