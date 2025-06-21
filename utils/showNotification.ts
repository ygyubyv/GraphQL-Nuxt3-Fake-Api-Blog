import type { IziToastSettings } from "izitoast";

type NotificationType = "success" | "error" | "info" | "warning";

const notificationPresets: Record<
  NotificationType,
  Partial<IziToastSettings>
> = {
  success: { backgroundColor: "#00DC82", icon: "fa-solid fa-check" },
  error: { color: "red", icon: "fa-solid fa-xmark" },
  info: { color: "blue", icon: "fa-solid fa-circle-info" },
  warning: { color: "yellow", icon: "fa-solid fa-triangle-exclamation" },
};

export const showNotification = (type: NotificationType, message: string) => {
  const toast = useToast();

  toast.show({
    message,
    position: "topRight",
    timeout: 3000,
    ...notificationPresets[type],
  });
};
