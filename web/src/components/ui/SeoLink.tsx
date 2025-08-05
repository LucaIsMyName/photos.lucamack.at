import React from "react";
import { Link } from "react-router-dom";
import type { LinkProps } from "react-router-dom";

interface SeoLinkProps extends LinkProps {
  noIndex?: boolean;
  noFollow?: boolean;
}

/**
 * SeoLink component that extends React Router's Link component
 * with the ability to add rel="noindex" and/or rel="nofollow" attributes
 */
const SeoLink: React.FC<SeoLinkProps> = ({ noIndex = false, noFollow = false, to, children, ...rest }) => {
  // Only add rel attributes if either noIndex or noFollow is true
  const relAttributes = [];
  if (noIndex) relAttributes.push("noindex");
  if (noFollow) relAttributes.push("nofollow");

  // Convert the rel array to a string if it has items
  const relString = relAttributes.length > 0 ? relAttributes.join(",") : undefined;

  return (
    <Link
      to={to}
      {...rest}
      // @ts-ignore - React Router's Link doesn't have rel in its type definition
      // but it will pass it to the underlying anchor element
      rel={relString}>
      {children}
    </Link>
  );
};

export default SeoLink;
