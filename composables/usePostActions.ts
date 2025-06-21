import { DELETE_POST } from "~/graphQL/mutations/deletePost";
import { UPDATE_POST } from "~/graphQL/mutations/updatePost";

const isLoading = ref(false);

export const usePostActions = () => {
  const { mutate: updateMutate } = useMutation(UPDATE_POST);
  const { mutate: deleteMutate } = useMutation(DELETE_POST);

  const updatePost = async (
    id: string,
    input: { title: string; body: string }
  ) => {
    isLoading.value = true;
    try {
      const result = await updateMutate({ id, input });
      return result;
    } catch (error) {
      console.error(error);
    } finally {
      isLoading.value = false;
    }
  };

  const deletePost = async (id: string) => {
    isLoading.value = true;
    try {
      const result = await deleteMutate({ id });
      return result;
    } catch (error) {
      console.error(error);
    } finally {
      isLoading.value = false;
    }
  };

  return { updatePost, deletePost, isLoading };
};
