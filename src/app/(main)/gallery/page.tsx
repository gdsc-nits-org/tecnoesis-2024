import { Suspense } from "react";
import Gallery from "~/components/Gallery";
import Loader from "~/components/Loader";

export default function Page() {
  return (
    <Suspense fallback={<Loader />}>
      <Gallery />
    </Suspense>
  );
}

