import Link from "next/link";

export default function BlogPage() {
  return (
    <div>
      <br />
      <p>Welcome to the home page!</p>
      <button><Link href="/signIn">Sign in</Link></button>
      <p>Not registered?</p>
      <button><Link href="/signUp">Sign Up!</Link></button>
    </div>
  );
}
