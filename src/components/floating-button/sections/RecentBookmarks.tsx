import Bookmark from "../ui/bookmark-card";

const bookmarks = [
  {
    id: 1,
    title: "Nick's",
    url: "https://github.com/github-copilot/pro",
    tags: ["code", "repository", "development"],
  },
  {
    id: 2,
    title: "Mozilla",
    url: "https://developer.mozilla.org/",
    tags: ["documentation", "web", "reference"],
  },
  {
    id: 3,
    title: "Pizza ",
    url: "https://www.instagram.com/pizzahut/?hl=en",
    tags: ["questions", "programming", "community"],
  },
  {
    id: 3,
    title: "Websim",
    url: "https://websim.ai/",
    tags: ["questions", "programming", "community"],
  },
  {
    id: 3,
    title: "Stack Overflow",
    url: "https://stackoverflow.com/",
    tags: ["questions", "programming", "community"],
  },
  {
    id: 3,
    title: "Youtube",
    url: "https://youtu.be/jwDErziR1nE",
    tags: ["questions", "programming", "community"],
  },
  {
    id: 3,
    title: "Google",
    url: "https://www.google.com",
    tags: ["questions", "programming", "community"],
  },
];

export default function RecentBookmarks() {
  return (
    <div className="space-y-5">
      <h2 className="text-xl font-bold">Recent Bookmarks</h2>
      <div
        className="flex flex-wrap gap-4"
        style={{ transition: "all 0.3s ease" }}
      >
        {bookmarks.map((props, index) => (
          <Bookmark key={index} name={props.title} src={props.url} />
        ))}
      </div>
    </div>
  );
}
