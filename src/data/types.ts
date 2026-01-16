export type CharacterId = 'protagonist' | 'partner' | 'unknown' | 'system';

export interface Character {
  id: CharacterId;
  name: string;
  color: string; // Hex code for silhouette or text color
}

export interface ScenarioNode {
  id: string;
  text: string;
  backgroundId: string; // ID of the background image
  bgmId?: string; // ID of the background music (optional change)
  seId?: string; // ID of sound effect to play on entry
  characterId?: CharacterId; // Who is speaking (if undefined, narration)
  
  // Visual effects
  effect?: 'shake' | 'flash' | 'glitch' | 'fade-to-black';
  
  // Navigation
  next?: string; // ID of the next node (linear flow)
  choices?: Choice[];
}

export interface Choice {
  id: string;
  text: string;
  nextNodeId: string;
  condition?: (state: GameState) => boolean; // Only show if condition met (logic handled elsewhere)
  onSelect?: (state: GameState) => Partial<GameState>; // State updates
}

export interface GameState {
  currentNodeId: string;
  history: string[]; // List of visited node IDs
  flags: Record<string, boolean>;
  stats: {
    sanity: number; // 0-100
    survival: number; // 0-100
  };
}
