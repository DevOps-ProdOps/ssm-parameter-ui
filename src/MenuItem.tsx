import React from "react";
import { Menu } from "semantic-ui-react";
import { RouteComponentProps, withRouter, matchPath } from "react-router";

interface UnwrappedMenuItemProps {
  name: string;
  path: string;
  exactMatch?: boolean;
}

interface MenuItemProps extends UnwrappedMenuItemProps, RouteComponentProps {}

const UnwrappedMenuItem: React.FunctionComponent<MenuItemProps> = ({
  history,
  name,
  path,
  exactMatch,
  location
}) => {
  const match = matchPath(location.pathname, {
    exact: exactMatch,
    path
  });

  return (
    <Menu.Item name={name} active={!!match} onClick={() => history.push(path)}>
      {name}
    </Menu.Item>
  );
};

export const MenuItem = withRouter(UnwrappedMenuItem) as React.ComponentClass<
  UnwrappedMenuItemProps
>;
