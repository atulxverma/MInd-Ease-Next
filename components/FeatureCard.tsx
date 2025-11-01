import { LucideIcon } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  iconColor?: string;
  className?: string;
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  iconColor = 'text-teal-600',
  className = ''
}: FeatureCardProps) {
  return (
    <Card className={`border-2 hover:border-teal-200 hover:shadow-lg transition-all duration-300 ${className}`}>
      <CardHeader>
        <div className={`w-12 h-12 rounded-lg bg-teal-50 flex items-center justify-center mb-4`}>
          <Icon className={`h-6 w-6 ${iconColor}`} aria-hidden="true" />
        </div>
        <CardTitle className="text-xl font-semibold text-gray-900">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-600 leading-relaxed">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
