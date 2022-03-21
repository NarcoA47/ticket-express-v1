import Link from "next/link";
import Image from "next/image";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <div className="p-5 text-center">
        <div className="image h-12">
          <Image src="/tx_smooth_b.svg" alt="Logo" layout="fill" priority />
        </div>
        <h1 className="text-3xl text-orange-600 p-5">Ticket Express</h1>
        <Link passHref href="/home">
          <button className="btn">Go to Home Page</button>
        </Link>
      </div>
    </Layout>
  );
}
