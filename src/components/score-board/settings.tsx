import { Settings, X } from "lucide-react";
import { useState } from "react";

export default function SettingsComponent() {
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
        className="fixed bottom-5 right-5 bg-black grid place-items-center p-4 border border-white/10 text-white z-100 cursor-pointer rounded-full"
        onClick={() => setIsHovered(true)}
      >
        <Settings />
      </div>
      <div
        style={{
          position: "fixed",
          top: "50%",
          transform: "translateY(-50%)",
          // right: 0,
          right: isHovered ? 0 : -400, // slide out except for a 10px tab
          width: 400,
          height: "98%",
          borderRadius: "25px 0 0 25px",
          zIndex: 10000,
          boxShadow: "0 2px 8px rgba(0,0,0,0.4)",
          transition: "right 0.3s ",
          userSelect: "none",
        }}
        className="flex flex-col bg-black/20 backdrop-blur-3xl overflow-hidden px-5 text-left"
        // onMouseEnter={() => setIsHovered(true)}
        // onMouseLeave={() => setIsHovered(false)}
        onClick={() => setOpenModal(!openModal)}
      >
        <section className="relative w-full h-full my-20 ">
          <X
            className="fixed top-5 right-5 z-100 text-white"
            onClick={() => setIsHovered(false)}
          />
        </section>
      </div>
    </>
  );
}
