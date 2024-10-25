import { SuperscriptIcon } from "lucide-react";
import { Suspense } from "react";
import Modules from "~/components/Modules";
import Loader from "~/components/Loader";

export default function Page() {
  return (
      <Suspense fallback={<Loader/>}>
        <Modules/>
      </Suspense>
  );
}
