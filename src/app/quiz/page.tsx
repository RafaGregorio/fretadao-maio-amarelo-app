// quiz/page.tsx
import { Suspense } from "react";
import QuizPage from "./QuizPage";

export default function Page() {
  return (
    <Suspense
      fallback={
        <div style={{ color: "white", padding: "40px" }}>Carregando...</div>
      }
    >
      <QuizPage />
    </Suspense>
  );
}
