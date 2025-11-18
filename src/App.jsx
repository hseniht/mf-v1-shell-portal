import React, { Suspense, useState } from "react";

const CardsApp = React.lazy(() => import("cards/CardsApp"));
const HpApp = React.lazy(() => import("hp/HpApp"));
const CardsMain = React.lazy(() => import("cards/CardsMain"));

function App() {
  const [current, setCurrent] = useState(null);
  return (
    <div>
      <h1>Shell Portal</h1>

      <button onClick={() => setCurrent("cards")}>Cards</button>
      <button onClick={() => setCurrent("cards1")}>Cards 1</button>
      <button onClick={() => setCurrent("hp")}>Hire Purchase</button>

      <Suspense fallback={<div>Loading...</div>}>
        {current === "cards" && <CardsApp />}
        {current === "cards1" && <CardsMain />}
        {current === "hp" && <HpApp />}
        <CardsMain />
      </Suspense>
    </div>
  );
}

export default App;

