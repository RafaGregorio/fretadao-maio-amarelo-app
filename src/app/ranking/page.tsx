import { Suspense } from "react";
import RankingPage from "./RankingPage";

export default function Page() {
  return (
    <Suspense
      fallback={
        <div style={{ color: "white", padding: "40px" }}>Carregando...</div>
      }
    >
      <RankingPage />
    </Suspense>
  );
}
