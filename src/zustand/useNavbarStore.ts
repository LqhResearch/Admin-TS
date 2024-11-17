import { create } from 'zustand';

interface NavbarState {
    isOpen: boolean;
    toggleNavbar: () => void;
}

const useNavbarStore = create<NavbarState>((set) => ({
    isOpen: true,
    toggleNavbar: () => set((state) => ({ isOpen: !state.isOpen })),
}));

export default useNavbarStore;
