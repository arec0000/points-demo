import { TopNavBar } from "@/features/TopNavBar";
import { DoatsLoader } from "@/shared/uikit/atoms/Loader";
import { SignIn } from "@/widgets/SignIn";
import { Suspense } from "react";

export default function LoginPage() {
  return (
    <>
      <TopNavBar title="Вход" />
      <Suspense fallback={<DoatsLoader />}>
        <SignIn />
      </Suspense>
    </>
  );
}
