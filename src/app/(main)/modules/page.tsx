import Modules from "~/components/Modules";
import Loader from "~/components/Loader";
import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense fallback={<Loader />}>
      <Modules />
    </Suspense>
  );
}