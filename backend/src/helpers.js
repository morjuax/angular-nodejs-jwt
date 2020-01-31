import Cryptr from "cryptr";

export const encrypt = string => {
  const cryptr = new Cryptr("myTotalySecretKey");

  return cryptr.encrypt(string);
};

export const decrypt = string => {
  const cryptr = new Cryptr("myTotalySecretKey");

  return cryptr.decrypt(string);
};

