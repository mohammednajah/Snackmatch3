import { useState } from "react";
import { Heart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export interface Snack {
  id: string;
  name: string;
  description: string;
  image: string;
  rating?: number;
}

interface SnackCardProps {
  snack: Snack;
  onRate: (snackId: string, rating: number) => void;
  onFavorite: (snackId: string) => void;
  isFavorite: boolean;
}

export const SnackCard = ({ snack, onRate, onFavorite, isFavorite }: SnackCardProps) => {
  const [selectedRating, setSelectedRating] = useState(snack.rating || 0);
  const [isHovered, setIsHovered] = useState(false);

  const handleRate = (rating: number) => {
    setSelectedRating(rating);
    onRate(snack.id, rating);
  };

  return (
    <Card
      className="overflow-hidden shadow-card hover:shadow-warm transition-all duration-300 animate-bounce-in"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-square overflow-hidden bg-gradient-soft">
        <img
          src={snack.image}
          alt={snack.name}
          className={cn(
            "w-full h-full object-cover transition-transform duration-500",
            isHovered && "scale-110"
          )}
        />
        <Button
          variant="ghost"
          size="icon"
          onClick={() => onFavorite(snack.id)}
          className={cn(
            "absolute top-2 right-2 backdrop-blur-sm bg-card/50 hover:bg-card/80",
            isFavorite && "text-destructive"
          )}
        >
          <Heart className={cn("h-5 w-5", isFavorite && "fill-current")} />
        </Button>
      </div>

      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-2">{snack.name}</h3>
          <p className="text-muted-foreground italic">{snack.description}</p>
        </div>

        <div className="flex items-center justify-center gap-1 pt-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              onClick={() => handleRate(star)}
              className="transition-transform hover:scale-125 focus:outline-none"
            >
              <Star
                className={cn(
                  "h-7 w-7 transition-colors",
                  star <= selectedRating
                    ? "fill-accent text-accent"
                    : "text-muted-foreground/30"
                )}
              />
            </button>
          ))}
        </div>
      </div>
    </Card>
  );
};
