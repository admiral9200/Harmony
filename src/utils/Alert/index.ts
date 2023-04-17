import { ToastOptions, toast } from "react-toastify";

type GAlertProps = {
  status: "info" | "success" | "warning" | "error" | "default";
  message: string;
  options?: ToastOptions;
};

const insertAlert = ({ status, message, options }: GAlertProps) => {
  toast(message, {
    type: status,
    ...(options ?? {}),
  });
};
export default insertAlert;
