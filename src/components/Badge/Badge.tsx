import React from 'react';
import './Badge.css';

const Badge = (props: BadgeProps) => (
  <div className="label label-primary Badge">
    {props.text}
  </div>
);

interface BadgeProps {
  text: string;
  color?: string;
}

export default Badge;
