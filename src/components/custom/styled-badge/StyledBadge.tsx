import Badge, { BadgeOwnProps } from "@mui/material/Badge";
import classes from './_styled-badge.module.scss'
const StyledBadge = (props: BadgeOwnProps) => {
  return (
    <Badge
      className={classes['styled-badge']}
      {...props}
    >
      {props.children}
    </Badge>
  );
};
export default StyledBadge;
