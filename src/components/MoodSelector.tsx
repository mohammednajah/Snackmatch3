import { Smile, UtensilsCrossed, Frown, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export type Mood = "bored" | "hungry" | "sad" | "stressed";

interface MoodSelectorProps {
  selectedMood: Mood | null;
  onMoodSelect: (mood: Mood) => void;
}

const moodData = [
  {
    mood: "bored" as Mood,
    icon: Smile,
    label: "Bored",
    description: "Need something fun",
    color: "bg-accent",
  },
  {
    mood: "hungry" as Mood,
    icon: UtensilsCrossed,
    label: "Hungry",
    description: "Feed me now!",
    color: "bg-primary",
  },
  {
    mood: "sad" as Mood,
    icon: Frown,
    label: "Sad",
    description: "Comfort food time",
    color: "bg-secondary",
  },
  {
    mood: "stressed" as Mood,
    icon: Zap,
    label: "Stressed",
    description: "Crunchy therapy",
    color: "bg-destructive",
  },
];

export const MoodSelector = ({ selectedMood, onMoodSelect }: MoodSelectorProps) => {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {moodData.map(({ mood, icon: Icon, label, description, color }) => (
        <Button
          key={mood}
          onClick={() => onMoodSelect(mood)}
          variant="outline"
          className={`
            h-auto flex-col gap-2 py-6 px-4 transition-all duration-300
            hover:scale-105 hover:shadow-warm
            ${selectedMood === mood ? `${color} text-white border-transparent scale-105 shadow-warm` : "bg-card"}
          `}
        >
          <Icon className="h-8 w-8" />
          <div className="text-center">
            <div className="font-semibold text-lg">{label}</div>
            <div className="text-xs opacity-80">{description}</div>
          </div>
        </Button>
      ))}
    </div>
  );
};
