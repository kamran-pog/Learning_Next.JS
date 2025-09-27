import Link from "next/link";

export default function settingsPage() {
  return (
    <div>
      <br />
      <h1>Edit Page</h1>
      <p>Welcome to the edit page!</p>
      <button>
      <Link href="/settings/profile">Back to Profile</Link>
      </button>
    </div>
  );
}