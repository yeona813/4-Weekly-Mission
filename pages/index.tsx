import Link from "next/link";

function Homepage() {
  return (
    <div className="Homepage">
      <Link href="/share">
        <button>SharedPage</button>
      </Link>
      <Link href="/folder">
        <button>FolderPage</button>
      </Link>
    </div>
  );
}

export default Homepage;
