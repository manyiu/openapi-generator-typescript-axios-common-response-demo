import { PetApi } from "../output/api";

const api = new PetApi();

const callApi = async () => {
  const response = await api.getPetById(1);
  console.log(response);

  const {
    data: {
      success,
      code,
      error,
      payload: { id, category, name, photoUrls, tags, status },
    },
  } = response;
};
