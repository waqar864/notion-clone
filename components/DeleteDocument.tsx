'use client'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose
  } from "@/components/ui/dialog"
  import { useState } from "react"
import { Button } from "./ui/button";
import { useTransition } from "react";
import { usePathname, useRouter } from "next/navigation";
import { toast } from "sonner";
import { deleteDocument } from "@/actions/actions";
  

function DeleteDocument() {
    const [isOpen, setIsOpen] = useState(false);
    const [isPending, startTransition] = useTransition();
    const pathname = usePathname();
    const router = useRouter();
    const handleDelete = async () => {
        const roomId = pathname?.split("/").pop();
        if (!roomId) return;

        startTransition(async () => {
            const { success } = await deleteDocument(roomId);

            if (success) {
                setIsOpen(false);
                router.replace("/");
                toast.success("Room deleted successfully");
            } else {
                toast.error("Failed to delete room");
            }
            }
    );
    }
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
    <Button asChild variant="destructive">
    <DialogTrigger>Delete</DialogTrigger>
    </Button>
  
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Are you absolutely sure?</DialogTitle>
      <DialogDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </DialogDescription>
    </DialogHeader>
    <DialogFooter className="sm:justify-end gap-2">
        <Button
          type="button"
          variant="destructive"
          onClick={handleDelete}
          disabled={isPending}
          >
            {isPending ? "Deleting..." : "Delete"}
          </Button>
          <DialogClose asChild>
            <Button type="button" variant="secondary">Cancel</Button>
          </DialogClose>

    </DialogFooter>
  </DialogContent>
</Dialog>

  )
}

export default DeleteDocument