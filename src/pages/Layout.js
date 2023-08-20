import Nav from "./Nav";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      {" "}
      <main className=" font-roboto bg-[url('/campus.png')] bg-cover bg-fixed font-black">
        <div className="backdrop-blur-sm">
          <Nav />
          <main>{children}</main>
          <Footer />
        </div>
      </main>
    </>
  );
}
