let audioCtx: AudioContext | null = null;
let isAudioEnabled = false;

export function toggleAudio(enabled?: boolean): boolean {
  if (typeof enabled !== "undefined") {
    isAudioEnabled = enabled;
  } else {
    isAudioEnabled = !isAudioEnabled;
  }

  if (isAudioEnabled && !audioCtx && typeof window !== "undefined") {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }

  return isAudioEnabled;
}

export function getAudioState(): boolean {
  return isAudioEnabled;
}

export function playHaptic(freq = 520, duration = 0.035, type: OscillatorType = "sine") {
  if (!isAudioEnabled || !audioCtx) return;
  try {
    if (audioCtx.state === "suspended") {
      audioCtx.resume();
    }
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    gain.gain.setValueAtTime(0.04, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + duration);
  } catch {
    // Audio context failed or blocked
  }
}
