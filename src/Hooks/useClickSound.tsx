import { useCallback } from "react";
import useSound from "use-sound";
import clickSoundFile from "../assets/sounds/click.mp3";

export const useClickSound = (volume = 0.5) => {
  const [play] = useSound(clickSoundFile, { volume });

  const playClick = useCallback(() => {
    play();
  }, [play]);

  return playClick;
};
