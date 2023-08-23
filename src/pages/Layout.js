import Nav from "./Nav";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      {" "}
      <main className=" bg-[url('/campus.png')] bg-cover bg-fixed font-roboto font-medium">
        <div className="backdrop-blur-sm">
          <Nav />
          <main>{children}</main>
          <Footer />
        </div>
      </main>
    </>
  );
}
