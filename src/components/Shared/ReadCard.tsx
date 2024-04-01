import React from "react";
import Card from "../common/Card/Card";
import CardImage from "../common/CardImage/CardImage";
import CardContent from "../common/CardContent/CardContent";
import Link from "next/link";

interface ReadCardProps {
  url: string;
  imageSource: string;
  alt: string;
  elapsedTime: string;
  description: string;
  createdAt: string;
}
function ReadCard({
  url,
  imageSource,
  alt,
  elapsedTime,
  description,
  createdAt,
}: ReadCardProps) {
  return (
    <Link href={url} target="_blank" rel="noopener noreferrer">
      <Card>
        <CardImage imageSource={imageSource} alt={alt} />
        <CardContent
          elapsedTime={elapsedTime}
          description={description}
          createdAt={createdAt}
        />
      </Card>
    </Link>
  );
}
export default ReadCard;
