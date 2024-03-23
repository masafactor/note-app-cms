
import Link from "next/link";

export default function Home() {
  return ( 
    <main className="flex items-center justify-center mt-40">
      <div className="text-center">
        <h3 className="font-medium text-5xl">
          Hello 
        </h3>
        <div className="mt-10 flex justify-center gap-6">
          <Link  href={"/notes"} legacyBehavior>
            <a className="bg-purple-500 font-medium px-6 py-4 rounded-lg text-white hover:bg-purple-700 duration-200">get started</a>
          </Link>
          <Link  href={"/noteList"} legacyBehavior>
           <a className="bg-blue-500 font-medium px-6 py-4 rounded-lg text-white hover:bg-blue-700 duration-200">get started</a> 
          </Link>
        </div>
      </div>
    </main>
  );
}
