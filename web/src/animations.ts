export const pageVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

export const pageTransition = {
  type: 'tween',
  ease: 'anticipate' as const,
  duration: 0.5,
};
