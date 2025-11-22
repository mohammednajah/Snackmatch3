import { TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

interface TrendingSnack {
  name: string;
  votes: number;
  image: string;
}

interface TrendingSnacksProps {
  snacks: TrendingSnack[];
}

export const TrendingSnacks = ({ snacks }: TrendingSnacksProps) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <TrendingUp className="h-6 w-6 text-primary animate-pulse-glow" />
        <h2 className="text-2xl font-bold">Top Snacks Today</h2>
      </div>

      <div className="grid gap-3">
        {snacks.map((snack, index) => (
          <Card
            key={snack.name}
            className="p-4 flex items-center gap-4 hover:shadow-card transition-shadow animate-slide-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-warm text-white flex items-center justify-center text-xl font-bold">
              {index + 1}
            </div>
            <img
              src={snack.image}
              alt={snack.name}
              className="w-16 h-16 object-cover rounded-lg"
            />
            <div className="flex-1">
              <h3 className="font-semibold text-foreground">{snack.name}</h3>
              <p className="text-sm text-muted-foreground">{snack.votes} votes today</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
