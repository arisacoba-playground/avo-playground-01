const PINNED_PANEL_KEY = "pinnedSidePanel";

export const getPinnedPanel = (): string | null => {
  return localStorage.getItem(PINNED_PANEL_KEY);
};
export const savePinnedPanel = (panelId: string | null) => {
  if (id) {
    localStorage.setItem(PINNED_PANEL_KEY, panelId);
  } else {
    localStorage.removeItem(PINNED_PANEL_KEY);
  }
};
