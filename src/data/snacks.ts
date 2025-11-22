import { Snack } from "@/components/SnackCard";
import cookiesImg from "@/assets/snack-cookies.jpg";
import chipsImg from "@/assets/snack-chips.jpg";
import gummyImg from "@/assets/snack-gummy.jpg";
import chocolateImg from "@/assets/snack-chocolate.jpg";
import popcornImg from "@/assets/snack-popcorn.jpg";
import pretzelsImg from "@/assets/snack-pretzels.jpg";

export const snackDatabase: Record<string, Snack[]> = {
  bored: [
    {
      id: "popcorn",
      name: "Classic Popcorn",
      description: "Pop, pop, pop your boredom away! Each kernel is a tiny explosion of fun.",
      image: popcornImg,
    },
    {
      id: "gummy-bears",
      name: "Gummy Bears",
      description: "Colorful little buddies that bounce around in your mouth. Entertainment included!",
      image: gummyImg,
    },
    {
      id: "pretzels",
      name: "Twisted Pretzels",
      description: "Life's too short for boring snacks. These twists will keep you guessing!",
      image: pretzelsImg,
    },
  ],
  hungry: [
    {
      id: "chips",
      name: "Crispy Chips",
      description: "The crunch heard 'round the world. Your hunger doesn't stand a chance.",
      image: chipsImg,
    },
    {
      id: "cookies-hungry",
      name: "Chocolate Chip Cookies",
      description: "Sweet satisfaction in every bite. Because hangry is a real emotion.",
      image: cookiesImg,
    },
    {
      id: "pretzels-hungry",
      name: "Salted Pretzels",
      description: "Salty, satisfying, and substantial. Your stomach will thank you.",
      image: pretzelsImg,
    },
  ],
  sad: [
    {
      id: "cookies-sad",
      name: "Chocolate Chip Cookies",
      description: "Warm hugs in cookie form. Everything will be okay, one bite at a time.",
      image: cookiesImg,
    },
    {
      id: "chocolate",
      name: "Dark Chocolate",
      description: "Rich, smooth, and deeply comforting. Your favorite therapist, but cheaper.",
      image: chocolateImg,
    },
    {
      id: "popcorn-sad",
      name: "Buttered Popcorn",
      description: "Cozy movie night vibes. Let the butter soothe your soul.",
      image: popcornImg,
    },
  ],
  stressed: [
    {
      id: "chips-stressed",
      name: "Extra Crunchy Chips",
      description: "Crunch your stress away! Each bite is like bubble wrap for your brain.",
      image: chipsImg,
    },
    {
      id: "pretzels-stressed",
      name: "Hard Pretzels",
      description: "Channel that tension into satisfying chomps. Stress relief, one crunch at a time.",
      image: pretzelsImg,
    },
    {
      id: "chocolate-stressed",
      name: "Dark Chocolate",
      description: "Science says chocolate helps. Who are we to argue with science?",
      image: chocolateImg,
    },
  ],
};

export const getRandomSnack = (mood: string): Snack => {
  const snacks = snackDatabase[mood] || snackDatabase.bored;
  return snacks[Math.floor(Math.random() * snacks.length)];
};
