import Link from "next/link";

export default function settingsPage() {
  return (
    <div>
      <br />
      <button>
      <Link href="/settings/profile">Profile</Link>
      </button>
      <br />
      <p>Welcome to the settings page!</p>
    </div>
  );
}
