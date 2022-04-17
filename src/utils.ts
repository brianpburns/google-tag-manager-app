export const validateContainerId = (id: string) => {
  const regex = /GTM-[A-Z0-9]*$/;
  return regex.test(id);
};
