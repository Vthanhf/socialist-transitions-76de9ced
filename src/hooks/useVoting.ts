import { useState, useCallback, useEffect, useRef } from "react";

interface VoteState {
  votes: number[];
  total: number;
  hasVoted: boolean;
  selectedOption: number | null;
  isLoading: boolean;
}

const INITIAL_MOCK_VOTES = [12, 31, 22];

export function useVoting(optionCount: number) {
  const [state, setState] = useState<VoteState>({
    votes: INITIAL_MOCK_VOTES.slice(0, optionCount),
    total: INITIAL_MOCK_VOTES.slice(0, optionCount).reduce((a, b) => a + b, 0),
    hasVoted: false,
    selectedOption: null,
    isLoading: false,
  });

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const castVote = useCallback((optionIndex: number) => {
    setState((prev) => ({ ...prev, isLoading: true, selectedOption: optionIndex }));

    // Simulate network delay
    setTimeout(() => {
      setState((prev) => {
        const newVotes = [...prev.votes];
        newVotes[optionIndex] += 1;
        const newTotal = newVotes.reduce((a, b) => a + b, 0);
        return { ...prev, votes: newVotes, total: newTotal, hasVoted: true, isLoading: false };
      });
    }, 1200);
  }, []);

  // Simulate real-time updates from other users
  useEffect(() => {
    if (!state.hasVoted) return;

    intervalRef.current = setInterval(() => {
      setState((prev) => {
        const randomOption = Math.floor(Math.random() * optionCount);
        const newVotes = [...prev.votes];
        newVotes[randomOption] += 1;
        return { ...prev, votes: newVotes, total: newVotes.reduce((a, b) => a + b, 0) };
      });
    }, 3000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [state.hasVoted, optionCount]);

  const getPercentage = useCallback(
    (index: number) => (state.total > 0 ? Math.round((state.votes[index] / state.total) * 100) : 0),
    [state.votes, state.total]
  );

  return { ...state, castVote, getPercentage };
}
