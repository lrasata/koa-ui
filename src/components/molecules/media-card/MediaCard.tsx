/** @jsxImportSource @emotion/react */
import type { ReactNode } from "react";
import { Card } from "../../atoms/card/Card.tsx";
import { Typography } from "../../atoms/typography/Typography.tsx";
import styled from "@emotion/styled";
import { theme } from "../../../theme/theme.ts";

export interface MediaCardProps {
  imgSrc: string;
  height?: number;
  imgAlt: string;
  title: string;
  body?: string;
  actions?: ReactNode;
  /**
   * Optional click handler. If provided, the card will show a pointer cursor on hover.
   */
  onClick?: () => void;
}

const CardContentWrapper = styled.div(({}) => ({
  display: "flex",
  flexDirection: "column",

  "& > *:last-child": {
    marginBottom: 0,
  },
}));

const TitleWrapper = styled.div(({}) => ({
  marginTop: theme.spacing.md,
  marginBottom: theme.spacing.sm,
}));

const ActionWrapper = styled.div(({}) => ({
  marginTop: theme.spacing.md,
  width: "100%",
}));

const OverflowImage = styled.img<{ height: number }>(({ theme, height }) => ({
  display: "block",
  width: `calc(100% + ${theme.spacing.lg} * 2)`, // go beyond padding
  margin: `-${theme.spacing.lg} -${theme.spacing.lg} 0 -${theme.spacing.lg}`,
  height: `${height}px`,
  objectFit: "cover",
}));

export const MediaCard = ({
  imgSrc,
  imgAlt,
  height = 160,
  title,
  body,
  actions,
  onClick,
}: MediaCardProps) => {
  return (
    <Card onClick={onClick}>
      <CardContentWrapper>
        <OverflowImage src={imgSrc} alt={imgAlt} height={height} />
        <TitleWrapper>
          <Typography variant="h2">{title}</Typography>
        </TitleWrapper>
        {body && <Typography variant="body1">{body}</Typography>}
        {actions && <ActionWrapper>{actions}</ActionWrapper>}
      </CardContentWrapper>
    </Card>
  );
};
