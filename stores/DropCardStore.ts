import { create } from "zustand";

interface Card {
  id: number;
  content: React.ReactNode;
}

interface State {
  card: Card[];
  setCard: (cards: Card[]) => void;
  addCard: (card: Card) => void;
  deleteCard: (card: Card) => void;
  moveCard: (fromIndex: number, toIndex: number) => void;
}
interface Content {
  newContent: React.ReactNode | null;
  addContent: (content: React.ReactNode) => void;
  cleanContent: () => void;
}

export const useDropCardStore = create<State>((set) => ({
  card: [],
  setCard: (cards: Card[]) => set((state) => ({ card: cards })),
  addCard: (card: Card) =>
    set((state) => ({
      card: [...state.card, { id: card.id, content: card.content }],
    })),
  deleteCard: (card: Card) =>
    set((state) => ({ card: state.card.filter(({ id }) => card.id === id) })),
  moveCard: (fromIndex: number, toIndex: number) =>
    set((state) => {
      const updatedCards = [...state.card];
      const [movedCard] = updatedCards.splice(fromIndex, 1);
      updatedCards.splice(toIndex, 0, movedCard);
      return { card: updatedCards };
    }),
}));

export const useCardContentStore = create<Content>((set) => ({
  newContent: null,
  addContent: (content) => set(() => ({ newContent: content })),
  cleanContent: () => set(() => ({ newContent: null })),
}));
