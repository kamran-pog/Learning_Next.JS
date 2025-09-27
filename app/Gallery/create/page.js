import Link from "next/link";

export default function BlogPage() {
  return (
    <div>
      <h1>Create Page</h1>
      <button>
      <Link href="/create">Create</Link>
      </button>
    </div>
  );
}