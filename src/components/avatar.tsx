import {
  AvatarFallback,
  AvatarImage,
  Avatar as AvatarPrimitive,
} from "@/components/ui/avatar";

import { useSession } from "next-auth/react";

export function Avatar() {
  const session = useSession();

  return (
    <AvatarPrimitive>
      <AvatarImage
        src={session.data?.user.image ?? "https://github.com/shadcn.png"}
        alt="@shadcn"
      />
      <AvatarFallback>CN</AvatarFallback>
    </AvatarPrimitive>
  );
}
