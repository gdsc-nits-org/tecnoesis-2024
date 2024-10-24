import Link from "next/link";
import { Suspense } from "react";
import Loader from "~/components/Loader";

export default function Page() {
  return (
    <Suspense fallback={<Loader />}>
      <div className="bg-dotted flex h-screen w-full items-center justify-center text-white">
        <div className="flex w-4/5 flex-col items-center justify-center gap-6 font-rp1">
          <div className="items-center justify-center text-3xl lg:text-4xl 2xl:text-6xl 3xl:text-9xl">
            Credits
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <Link
              href={
                "https://sketchfab.com/3d-models/24-dizzying-space-travel-inktober2019-08ee5e4cabee421ebf0b2cc927d4d6fc"
              }
            >
              <div className="text-gradient-blue items-center justify-center text-center align-middle text-lg underline lg:text-xl 2xl:text-3xl 3xl:text-6xl">
                Dizzying space travel by Canary Games 🔗
              </div>
            </Link>
          </div>
        </div>
      </div>
    </Suspense>
  );
}
