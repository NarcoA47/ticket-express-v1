import Link from "next/link";
import UploadModal from "../components/UploadModal";

export default function Home() {
  return (
    <div className="hero">
      <h1 className="text-3xl text-purple-600 p-5">Home Page</h1>
      <Link passHref href="/home">
        <button>Go to Home Page</button>
      </Link>
    </div>
  );
}
