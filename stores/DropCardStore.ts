import { create } from "zustand";

interface Card {
  id: number;
  content: React.ReactNode;
}

interface State {
  card: Card[];
  setCard: (cards: Card[]) => void;
  addCard: (card: Card) => void;
  removeCard: (card: Card) => void;
}

export const useDropCardStore = create<State>((set) => ({
  card: [],
  setCard: (cards: Card[]) => set((state) => ({ card: cards })),
  addCard: (card: Card) =>
    set((state) => ({
      card: [...state.card, { id: card.id, content: card.content }],
    })),
  removeCard: (card: Card) =>
    set((state) => ({ card: state.card.filter(({ id }) => card.id === id) })),
}));
