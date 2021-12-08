import { Badge as BadgeType } from 'client';

interface AwardProps {
  award: BadgeType;
}

export default function Award({ award }: AwardProps) {
  return (
    <div>
      <p>{award.name}</p>
    </div>
  );
}