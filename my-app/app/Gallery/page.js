import Link from "next/link";

export default function BlogPage() {
  return (
    <div>
      <p>Welcome to the Gallery page!</p>
      <button>
      <Link href="/Gallery/create">Create Gallery</Link>
      </button>
    </div>
  );
}