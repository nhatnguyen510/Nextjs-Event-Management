import { create } from "zustand";

interface CreateDialogStoreProps {
  isDialogOpen: boolean;
  setIsDialogOpen: (isDialogOpen: boolean) => void;
}

interface EditDialogStoreProps {
  isEditDialogOpen: boolean;
  setIsEditDialogOpen: (isEditDialogOpen: boolean) => void;
}

export const createDialogStore = create<CreateDialogStoreProps>((set) => ({
  isDialogOpen: false,
  setIsDialogOpen: (isDialogOpen: boolean) => set({ isDialogOpen }),
}));

export const editDialogStore = create<EditDialogStoreProps>((set) => ({
  isEditDialogOpen: false,
  setIsEditDialogOpen: (isEditDialogOpen: boolean) => set({ isEditDialogOpen }),
}));
