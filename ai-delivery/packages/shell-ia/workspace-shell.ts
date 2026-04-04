import React, { PropsWithChildren, ReactNode } from "react";

type WorkspaceShellProps = PropsWithChildren<{
  projectId?: string;
  title?: string;
  statusBadge?: ReactNode;
}>;

export default function WorkspaceShell({ children }: WorkspaceShellProps) {
  return React.createElement(React.Fragment, null, children);
}
