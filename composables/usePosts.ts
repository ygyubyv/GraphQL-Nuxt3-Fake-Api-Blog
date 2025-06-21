import { GET_POSTS } from "~/graphQL/queries/getPosts";
import type { Post, ResponseData } from "~/types/posts/Types";

export type Operation = "PrevPage" | "NextPage";

export const usePosts = (searchQuery?: Ref<string>) => {
  const currentPage = ref(1);
  const limit = ref(5);

  const variables = computed(() => ({
    page: currentPage.value,
    limit: limit.value,
  }));

  const {
    result,
    loading: isLoading,
    error,
  } = useQuery<ResponseData>(GET_POSTS, variables);

  const isError = computed(() => {
    return !!error.value;
  });

  const filteredPosts = computed((): Post[] => {
    const posts = result.value?.posts.data;

    if (!posts) {
      return [];
    }

    if (searchQuery?.value) {
      return posts.filter((post) =>
        post.title.toLowerCase().includes(searchQuery.value.toLowerCase())
      );
    }

    return posts;
  });

  const changePage = async (operation: Operation) => {
    operation === "PrevPage" ? currentPage.value-- : currentPage.value++;
  };

  return { filteredPosts, currentPage, isLoading, isError, changePage };
};
