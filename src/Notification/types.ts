import type { ReactNode } from "react";

export type NotificationType = "info" | "success" | "error" | "warning";
export interface NotificationAction {
  label: string;
  onClick: () => void;
}
export interface Notification {
  content?: ReactNode;
  title: string;
  action?: NotificationAction;
  type: NotificationType;
}

export interface NotificationProps extends Notification {
  onClose: () => void;
}