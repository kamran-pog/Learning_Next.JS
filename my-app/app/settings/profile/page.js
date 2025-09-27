import Link from "next/link";

export default function profilePage() {
  return (
    <div>
      <br />
      <h1>Profile Page</h1>
      <button>
        <Link href="/settings/profile/edit">Edit</Link>
      </button>
        <br />
    </div>
  );
}