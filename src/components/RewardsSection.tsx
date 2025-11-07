import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { mockRewards } from "@/data/mockData";
import { useToast } from "@/hooks/use-toast";
import { Sparkles } from "lucide-react";

interface RewardsSectionProps {
  userPoints: number;
}

const RewardsSection = ({ userPoints }: RewardsSectionProps) => {
  const { toast } = useToast();

  const handleRedeem = (rewardName: string, pointsCost: number) => {
    if (userPoints >= pointsCost) {
      toast({
        title: "🎉 Reward Redeemed!",
        description: `You've successfully redeemed ${rewardName}!`,
      });
      // In a real app, this would deduct points and apply the reward
    } else {
      toast({
        title: "Insufficient Points",
        description: `You need ${pointsCost - userPoints} more points to redeem this reward.`,
        variant: "destructive",
      });
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-2xl font-bold flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-primary" />
            Available Rewards
          </h3>
          <p className="text-muted-foreground">
            You have <span className="font-bold text-primary">{userPoints}</span> Carbon Points
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {mockRewards.map((reward) => (
          <Card
            key={reward.id}
            className={`p-6 ${!reward.available ? "opacity-60" : ""}`}
          >
            <div className="flex items-start gap-4">
              <div className="text-5xl">{reward.icon}</div>
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-bold text-lg">{reward.name}</h4>
                  {!reward.available && (
                    <Badge variant="secondary">Coming Soon</Badge>
                  )}
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  {reward.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="font-bold">
                      {reward.pointsCost} pts
                    </Badge>
                    {reward.discount > 0 && (
                      <Badge className="bg-accent text-accent-foreground">
                        {reward.discount}% OFF
                      </Badge>
                    )}
                  </div>
                  <Button
                    size="sm"
                    disabled={!reward.available || userPoints < reward.pointsCost}
                    onClick={() => handleRedeem(reward.name, reward.pointsCost)}
                  >
                    Redeem
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RewardsSection;
