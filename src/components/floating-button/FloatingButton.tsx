import { useState } from "react";
import Nav from "./Nav";
import SearchBar from "./SearchBar";
import RecentBookmarks from "./sections/RecentBookmarks";

export default function FloatingButton() {
  const [isHovered, setIsHovered] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  // const [number, setNumber] = useState(0);

  // const saveLink = () => {
  //   const links = JSON.parse(localStorage.getItem("floatlink-links") || "[]");
  //   links.push({ title: document.title, url: window.location.href });
  //   localStorage.setItem("floatlink-links", JSON.stringify(links));
  //   alert("Link saved!");
  // };

  console.log(isHovered);

  return (
    <>
      <div
        style={{
          position: "fixed",
          top: "50%",
          transform: "translateY(-50%)",
          right: 0,
          // right: isHovered ? "0%" : "-30%", // slide out except for a 10px tab
          width: "30%",
          height: "98%",
          borderRadius: "25px 0 0 25px",
          zIndex: 10000,
          boxShadow: "0 2px 8px rgba(0,0,0,0.4)",
          transition: "right 0.3s ",
          userSelect: "none",
        }}
        className="flex flex-col bg-gradient-to-b via-[#CFEFEF]/40 from-[#DBEDF6] to-[#E8E9FD] overflow-hidden px-5"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setOpenModal(!openModal)}
      >
        <section className="relative w-full h-full my-20 ">
          <SearchBar />
          <section className="h-full overflow-scroll pb-40 space-y-5">
            <RecentBookmarks />
            <RecentBookmarks />
            <RecentBookmarks />
          </section>
          <Nav />
        </section>
      </div>
    </>
  );
}
