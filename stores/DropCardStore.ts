import { create } from "zustand";

interface Card {
  id: number;
  content: React.ReactNode;
}

interface State {
  card: Card[];
  addCard: (card: Card) => void;
  removeCard: (card: Card) => void;
}

export const useDropCardStore = create<State>((set) => ({
  card: [{ id: 0, content: "" }],
  addCard: (card: Card) =>
    set((state) => ({
      card: [
        ...state.card,
        { id: state.card.length + 1, content: card.content },
      ],
    })),
  removeCard: (card: Card) =>
    set((state) => ({ card: state.card.filter(({ id }) => card.id === id) })),
}));
