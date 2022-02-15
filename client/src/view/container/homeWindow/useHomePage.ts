import { useEffect, useState } from "react";
import { CreateSessionController } from "../../../controller/implementation/CreateSessionController";
import { ViewSession } from "../../../controller/model/ViewSession";

export function useHomePage(controller: CreateSessionController) {
  const [session, setSession] = useState<ViewSession>(
    new ViewSession("", 0, [], [], [])
  );

  useEffect(() => {
    const subs = controller.create().subscribe(s => setSession(s));

    return () => subs.unsubscribe();
  }, []);

  return session;
}
