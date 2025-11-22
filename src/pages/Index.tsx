import { useState, useEffect } from "react";
import { Sparkles, Shuffle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MoodSelector, Mood } from "@/components/MoodSelector";
import { SnackCard, Snack } from "@/components/SnackCard";
import { TrendingSnacks } from "@/components/TrendingSnacks";
import { getRandomSnack } from "@/data/snacks";
import { useToast } from "@/hooks/use-toast";
import heroImg from "@/assets/hero-snacks.jpg";

const Index = () => {
  const [selectedMood, setSelectedMood] = useState<Mood | null>(null);
  const [currentSnack, setCurrentSnack] = useState<Snack | null>(null);
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [ratings, setRatings] = useState<Record<string, number>>({});
  const { toast } = useToast();

  const trendingSnacks = [
    { name: "Chocolate Chip Cookies", votes: 324, image: "/placeholder.svg" },
    { name: "Crispy Chips", votes: 298, image: "/placeholder.svg" },
    { name: "Gummy Bears", votes: 276, image: "/placeholder.svg" },
    { name: "Classic Popcorn", votes: 251, image: "/placeholder.svg" },
    { name: "Dark Chocolate", votes: 242, image: "/placeholder.svg" },
  ];

  const handleMoodSelect = (mood: Mood) => {
    setSelectedMood(mood);
    const snack = getRandomSnack(mood);
    setCurrentSnack({ ...snack, rating: ratings[snack.id] });
  };

  const handleNewSnack = () => {
    if (selectedMood) {
      const snack = getRandomSnack(selectedMood);
      setCurrentSnack({ ...snack, rating: ratings[snack.id] });
    }
  };

  const handleRate = (snackId: string, rating: number) => {
    setRatings((prev) => ({ ...prev, [snackId]: rating }));
    toast({
      title: "Rated! ⭐",
      description: `You gave this snack ${rating} stars!`,
    });
  };

  const handleFavorite = (snackId: string) => {
    setFavorites((prev) => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(snackId)) {
        newFavorites.delete(snackId);
        toast({
          title: "Removed from favorites 💔",
          description: "Maybe you'll find a better match!",
        });
      } else {
        newFavorites.add(snackId);
        toast({
          title: "Added to favorites! 💖",
          description: "It's a match made in snack heaven!",
        });
      }
      return newFavorites;
    });
  };

  return (
    <div className="min-h-screen bg-gradient-soft">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-warm text-white">
        <div className="absolute inset-0 opacity-20">
          <img src={heroImg} alt="Snacks" className="w-full h-full object-cover" />
        </div>
        <div className="relative container mx-auto px-4 py-16 md:py-24 text-center">
          <div className="inline-flex items-center gap-2 mb-4 animate-bounce-in">
            <Sparkles className="h-8 w-8" />
            <span className="text-lg font-semibold">SnackMatch</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-slide-up">
            Find Your Perfect Snack Match
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Tell us your mood, we'll find your munch. It's like Tinder, but tastier! 🍿
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* Mood Selector */}
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">
            What's Your Vibe Right Now?
          </h2>
          <MoodSelector selectedMood={selectedMood} onMoodSelect={handleMoodSelect} />
        </div>

        {/* Snack Card & Trending Section */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Snack Card */}
          <div className="lg:col-span-2">
            {currentSnack ? (
              <div className="space-y-6">
                <SnackCard
                  snack={currentSnack}
                  onRate={handleRate}
                  onFavorite={handleFavorite}
                  isFavorite={favorites.has(currentSnack.id)}
                />
                <div className="flex justify-center">
                  <Button
                    size="lg"
                    onClick={handleNewSnack}
                    className="gap-2 bg-primary hover:bg-primary/90 text-white shadow-warm hover:shadow-xl transition-all hover:scale-105"
                  >
                    <Shuffle className="h-5 w-5" />
                    Find Another Match
                  </Button>
                </div>
              </div>
            ) : (
              <div className="bg-card rounded-2xl border-2 border-dashed border-border p-16 text-center">
                <p className="text-2xl text-muted-foreground">
                  Pick a mood above to get started! 👆
                </p>
              </div>
            )}
          </div>

          {/* Trending Snacks Sidebar */}
          <div className="lg:col-span-1">
            <TrendingSnacks snacks={trendingSnacks} />
          </div>
        </div>

        {/* Favorites Section */}
        {favorites.size > 0 && (
          <div className="max-w-4xl mx-auto mt-16">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Your Favorite Matches 💕
            </h2>
            <div className="flex flex-wrap gap-3 justify-center">
              {Array.from(favorites).map((id) => (
                <div
                  key={id}
                  className="bg-card px-6 py-3 rounded-full border border-border shadow-card font-medium hover:shadow-warm transition-shadow"
                >
                  {id.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
