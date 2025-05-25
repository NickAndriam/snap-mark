"use client";
import { Copy, Link } from "lucide-react";
import React, { useEffect } from "react";

interface IconProps {
  name: string;
  src: string;
}

const BookmarkCard: React.FC<IconProps> = ({ src, name }) => {
  const [hovered, setHovered] = React.useState<boolean>(false);
  const [image, setImage] = React.useState<string | null>(null);
  useEffect(() => {
    fetch("https://api.microlink.io/?url=" + encodeURIComponent(src))
      .then((res) => res.json())
      .then(({ status, data, ...props }) => {
        if (status === "success") {
          setImage(data.image.url);
        }
      });
  }, []);
  return (
    <>
      <div
        style={{
          width: hovered ? "65%" : "30%",
          transition: "all 0.3s ease",
        }}
        className="flex flex-col bg-white h-max w-30 rounded-lg shadow-md overflow-hidden"
        onClick={() => setHovered(!hovered)}
        onDoubleClick={() => window.open(src, "_blank")}
      >
        {}
        {image ? (
          <div
            className="relative w-full"
            style={{
              height: hovered ? 200 : 50,
              transition: "height 0.3s ease",
            }}
          >
            <img
              src={image}
              alt="preview"
              className="h-full w-full object-cover"
            />
          </div>
        ) : null}
        <div className="p-2 space-y-2">
          <div className="flex items-center justify-start gap-2">
            <img
              width={30}
              height={30}
              src={`https://www.google.com/s2/favicons?sz=64&domain=${src}`}
              alt="test"
              className="rounded-full"
            />
            <div className="w-full flex items-center justify-between">
              <p className="text-sm text-left">{name}</p>
              {hovered && (
                <div className="bg-white flex items-center justify-center gap-2">
                  <Copy size={20} />
                  <Link size={20} />
                </div>
              )}
            </div>
          </div>
          {hovered && (
            <p className="text-xs text-gray-500 text-left overflow-scroll">
              {src}
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default BookmarkCard;
