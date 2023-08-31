export default function SuccessNotification() {
  return api.success({
    message: `Success`,
    description: "Todo successfully changed position",
    placement: "topRight",
  });
}
