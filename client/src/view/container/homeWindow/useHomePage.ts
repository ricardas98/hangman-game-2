import { useEffect, useState } from "react";
import { CreateSessionController } from "../../../controller/implementation/CreateSessionController";
import { ViewSession } from "../../../controller/model/ViewSession";

export function useHomePage(controller: CreateSessionController) {
  const [session, setSession] = useState<ViewSession>();

  useEffect(() => {
    const subs = controller.create().subscribe(setSession);

    return () => subs.unsubscribe();
  }, []);

  return session;
}
