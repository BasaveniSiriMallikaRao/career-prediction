import React from 'react';
import { DetailCardProps } from '../../types';

export function DetailCard({ icon, title, content }: DetailCardProps) {
  return (
    <div className="flex items-start space-x-3">
      <div className="flex-shrink-0">
        {icon}
      </div>
      <div>
        <h4 className="text-sm font-medium text-gray-900">{title}</h4>
        <p className="text-sm text-gray-600">{content}</p>
      </div>
    </div>
  );
}